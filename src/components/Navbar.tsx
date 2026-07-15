import React, { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";
import DGlogo from "../assets/images/logodg.png";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import useDarkMode from "./hooks/useDarkMode";
import Resume from "../assets/Dipesh_Ghimire_CV.pdf";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation();

  // Shrink/elevate navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const sections = NAVIGATION_LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ne" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ): void => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement | null;
    if (target) {
      const offset = -80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY + offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* ── Main Bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins
          ${
            scrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200/60 dark:border-gray-700/60"
              : "bg-white dark:bg-gray-900 shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* ── Logo (left) ── */}
            <a href="#" onClick={(e) => handleClick(e, "#hero")} className="flex-shrink-0">
              <img src={DGlogo} className="w-20 h-auto" alt="Dipesh Ghimire Logo" />
            </a>

            {/* ── Nav Links (centre, desktop only) ── */}
            <nav className="hidden md:flex items-center gap-1">
              {NAVIGATION_LINKS.map((item, index) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
                      ${
                        isActive
                          ? "text-brand-green"
                          : "text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-brand-green"
                      }`}
                  >
                    {t(`nav.${item.key}`)}
                    {/* Active underline indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-green rounded-full transition-all duration-300
                        ${isActive ? "w-5" : "w-0"}`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-base"
              >
                {isDarkMode ? "🌙" : "🔆"}
              </button>

              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className="hidden sm:inline-flex items-center justify-center h-9 px-3 rounded-lg text-xs font-semibold tracking-wide border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-green hover:text-brand-green dark:hover:text-brand-green transition-all duration-200"
              >
                {i18n.language === "en" ? "NP" : "EN"}
              </button>

              {/* Resume CTA */}
              <a
                href={Resume}
                download
                className="hidden sm:inline-flex items-center gap-2 h-9 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-brand-red transition-all duration-200 hover:-translate-y-0.5"
              >
                {t("nav.resume")}
                <BsDownload size={13} />
              </a>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile menu"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isOpen ? <IoCloseOutline size={22} /> : <TiThMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* ── Mobile Drawer Panel ── */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 md:hidden bg-white dark:bg-gray-900 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-gray-800">
          <img src={DGlogo} className="w-16 h-auto" alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <IoCloseOutline size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-4 py-6 gap-1">
          {NAVIGATION_LINKS.map((item, index) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-brand-green/10 text-brand-green"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-brand-green"
                  }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                )}
                {t(`nav.${item.key}`)}
              </a>
            );
          })}
        </nav>

        {/* Drawer footer actions */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-6 border-t border-gray-100 dark:border-gray-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Appearance</span>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="h-8 px-3 rounded-md text-xs font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-green hover:text-brand-green transition-all"
              >
                {i18n.language === "en" ? "NP" : "EN"}
              </button>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-green transition-all"
              >
                {isDarkMode ? "🌙" : "🔆"}
              </button>
            </div>
          </div>
          <a
            href={Resume}
            download
            className="flex items-center justify-center gap-2 w-full h-10 bg-brand-green text-white text-sm font-semibold rounded-lg shadow hover:bg-brand-red transition-all duration-200"
          >
            {t("nav.resume")}
            <BsDownload size={13} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
