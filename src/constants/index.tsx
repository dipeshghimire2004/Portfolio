import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiPostgresql, SiNextdotjs, SiDocker, SiRedis, SiSpring } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

import taskmanagement from "../assets/images/taskman2.webp";
import doctorappointment from "../assets/images/doctotappointment.webp";
import todo from "../assets/images/todo.jpg";
import weather from "../assets/images/weather.webp";
import blogapp from '../assets/images/blogapp.webp';
import portfolio from '../assets/images/portfolio.webp';
import ecommerce from '../assets/images/ecommercewebsiste.png';
import tweet from '../assets/images/tweet.webp';


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects", key: "projects" },
  { label: "Bio", href: "#bio", key: "bio" },
  { label: "Skills", href: "#skills", key: "skills" },
  { label: "Work Experience", href: "#work", key: "work" },
  { label: "Education", href: "#education", key: "education" },
  { label: "Contact", href: "#contact", key: "contact" },
];

export const HERO = {
  name: "DIPESH GHIMIRE",
  greet: "Backend Engineer & Full-Stack Developer",
  description:
    "Building scalable REST APIs, secure authentication systems, and high-concurrency backend architectures.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Dental Clinic Management System",
    description:
      "Full-stack clinic management system built with Spring Boot & Next.js. Handles appointment scheduling, patient treatment records, and time-based revenue tracking. Features normalized PostgreSQL schema with optimized indexing and role-based secure REST APIs for clinic admins, dentists, and reception staff.",
    image: doctorappointment,
    githubLink: "",
  },
  {
    id: 2,
    name: "Khet Bari",
    description:
      "Production-grade full-stack marketplace targeting Nepal's agricultural market. Implements Passkey/WebAuthn authentication, Redis caching, Minio media storage, virtual threads, and advanced JPA optimizations for high-concurrency handling under heavy traffic.",
    image: ecommerce,
    githubLink: "",
  },
  {
    id: 3,
    name: "HATES Global",
    description:
      "Team Project. Contributing to a production-grade backend system focused on high-performance scalable architecture. Implemented virtual threads, indexing strategies, and advanced JPA optimizations to handle concurrent requests efficiently.",
    image: taskmanagement,
    githubLink: "",
  },
  {
    id: 4,
    name: "Workshop Tracking System",
    description:
      "Built an academic workshop tracking system for Herald College using Next.js & TypeScript. Implemented global state management, integrated APIs, and optimized frontend performance — received a formal Letter of Recommendation for contributions.",
    image: todo,
    githubLink: "",
  },
  {
    id: 5,
    name: "Easy Trip",
    description:
      "Developed a travel management system with Spring Boot and containerized it using Docker. Integrated AWS services with LocalStack for local development.",
    image: taskmanagement,
    githubLink: "https://github.com/dipeshghimire2004/EasyTrip",
  },
  {
    id: 6,
    name: "Task Management System",
    description:
      "Full-stack project using Django + React.js with TypeScript and Tailwind CSS to manage tasks and ensure completion within deadlines.",
    image: taskmanagement,
    githubLink: "https://github.com/dipeshghimire2004/Task-Management",
  },
  {
    id: 7,
    name: "Doctor Appointment System",
    description:
      "Doctor Appointment Booking System developed with React.js, allowing patients to easily schedule, reschedule, or cancel appointments with doctors.",
    image: doctorappointment,
    githubLink: "https://github.com/dipeshghimire2004/Doctor-Appointment-System",
  },
  {
    id: 8,
    name: "Hamro Sewa",
    description:
      "E-Commerce application built with React & TypeScript, featuring an authentication system and Redux for efficient state management and team collaboration.",
    image: ecommerce,
    githubLink: "https://github.com/dipeshghimire2004/Hamro-Sewa",
  },
  {
    id: 9,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with JavaScript and CSS.",
    image: weather,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 10,
    name: "My Blog App",
    description:
      "A blog app using React and Appwrite for backend services, with Tailwind CSS for responsive design. Allows posting blogs with a Rich Text Editor.",
    image: blogapp,
    githubLink: "https://github.com/dipeshghimire2004/My-Blog-App",
  },
  {
    id: 11,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: portfolio,
    githubLink: "https://github.com/dipeshghimire2004/Portfolio",
  },
  {
    id: 12,
    name: "Hamro Tweet",
    description:
      "Full-stack project built using Django and HTML/CSS. Allows users to create posts and perform CRUD operations.",
    image: tweet,
    githubLink: "https://github.com/dipeshghimire2004/HamroTweet",
  },
];

export const BIO = [
  "Backend engineer with production experience in Java (Spring Boot), building scalable REST APIs, JWT-based auth with RBAC, and high-concurrency systems using virtual threads, Redis, and Docker.",
  "Full-stack capable with Next.js and React. Promoted from intern to junior developer within weeks at Tech Trishana for rapid delivery and consistent quality.",
  "Community leader of DevOps Pioneer at Herald College, running a 2.5-month DevFest covering containerization, CI/CD, and automation best practices."
];

export const SKILLS = [
  {
    icon: <BiLogoJava className="text-4xl text-golden lg:text-5xl" />,
    name: "Java (Spring Boot)",
    experience: "Advanced",
  },
  {
    icon: <SiSpring className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Spring Security",
    experience: "Intermediate",
  },
  {
    icon: <SiPostgresql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "Intermediate",
  },
  {
    icon: <SiRedis className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Redis",
    experience: "Intermediate",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "TypeScript",
    experience: "Intermediate",
  },
  {
    icon: <SiNextdotjs className="text-4xl text-black dark:text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "Intermediate",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "Intermediate",
  },
  {
    icon: <FaAws className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "AWS / DevOps",
    experience: "Intermediate",
  },
  {
    icon: <SiDocker className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Docker",
    experience: "Intermediate",
  },
];

export const EXPERIENCES = [
  {
    title: "Junior Java Developer",
    company: "Tech Trishana, Kathmandu",
    duration: "Apr 2025 – Mar 2026",
    description:
      "Developed and maintained core backend services using Spring Boot, prioritizing high performance, scalability, and clean architecture. Designed and implemented secure REST APIs with JWT-based authentication and role-based access control (RBAC). Containerized applications using Docker and engineered automated CI/CD pipelines via GitHub Actions. Collaborated closely with the frontend team to define clear API contracts and ensure seamless integration.",
  },
  {
    title: "Frontend Developer (Intern → Junior)",
    company: "Tech Trishana, Kathmandu",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Promoted from Intern to Junior Developer within weeks due to rapid learning pace and consistent delivery. Built production-ready user interfaces using Next.js, TypeScript, and Tailwind CSS, gaining deep full-stack context on frontend-backend integration.",
  },
  {
    title: "Junior Frontend Developer",
    company: "Herald College Kathmandu",
    duration: "Jun 2024 – Aug 2024",
    description:
      "Contributed to the Workshop Tracking System project and received a formal Letter of Recommendation for high-quality contributions. Built mobile-first, responsive interfaces with Next.js, Tailwind CSS, and ShadCN UI within a collaborative team environment.",
  },
];

export const EDUCATION = [
  {
    degree: "BSc (Hons.) Computer Science",
    institution: "University of Wolverhampton / Herald College Kathmandu",
    duration: "Sep 2024 – Jun 2026",
    description:
      "Relevant Coursework: Advanced Java & Python, Database Systems (PostgreSQL), Cloud Computing (AWS), Web Development Architecture.",
  },
  {
    degree: "DevOps Pioneer Community Leader",
    institution: "Herald College Kathmandu",
    duration: "May 2025 – Present",
    description:
      "Led a 2.5-month DevFest program, conducting live sessions on containerization, CI/CD pipelines, and automation best practices. Organized technical showcases and mentored peers in DevOps workflows.",
  },
];

export const GITHUB = [

]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/dipeshg2004/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/dipeshghimire2004",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/dipesh-ghimire-a72553272/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];