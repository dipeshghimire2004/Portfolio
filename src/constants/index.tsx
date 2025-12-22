import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiPostgresql, SiNextdotjs, SiDocker } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

// Placeholder images - using existing ones temporarily or generic placeholders if available
// In a real scenario, we would ask for new project images. 
// For now, mapping to existing imports where possible or leaving generic.
import taskmanagement from "../assets/images/taskman2.webp";
import doctorappointment from "../assets/images/doctotappointment.webp";
import todo from "../assets/images/todo.jpg";
import weather from "../assets/images/weather.webp";
import blogapp from '../assets/images/blogapp.webp';
import portfolio from '../assets/images/portfolio.webp';
import ecommerce from '../assets/images/ecommercewebsiste.png';
import tweet from '../assets/images/tweet.webp';


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "DIPESH GHIMIRE",
  greet: "Backend Developer & Full-Stack Engineer",
  description:
    "Focused on clean architecture, performance, and production-ready systems.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Workshop Tracking System",
    description:
      "Built an academic assignment tracking functionality for the college portal using Next.js & TypeScript. Implemented global state management, integrated APIs, and optimized frontend performance.",
    image: todo,
    githubLink: "",
  },
  {
    id: 2,
    name: "Easy Trip",
    description:
      "Developed a travel management system with Spring Boot and containerized it using Docker. Integrated AWS services with LocalStack for local development.",
    image: taskmanagement,
    githubLink: "",
  },
  {
    id: 3,
    name: "HATES Global",
    description:
      "Ongoing Team Project. Contributing to a production-grade system focused on performance and scalability. Implementing virtual threads, indexing, and advanced JPA optimizations for concurrency handling.",
    image: doctorappointment,
    githubLink: "",
  },
  {
    id: 4,
    name: "Task Management System",
    description:
      "This project is a full-stack project, Django + ReactJS with typescript and Tailwind CSS to manage the task and ensure its completion within given time.",
    image: taskmanagement,
    githubLink: "",
  },
  {
    id: 5,
    name: "Doctor Appointent System",
    description:
      "Doctor Appointent Boooking System web application developed using react.js, allows patients to easily schedule, reschedule, or cancel appointments with doctors",
    image: doctorappointment,
    githubLink: "https://github.com/dipeshghimire2004/Doctor-Appointment-System",
  },
  {
    id: 6,
    name: "Hamro Sewa",
    description:
      "E-Commerce application built with React with typescript where it comprise of authentication system, also Redux for efficient task tracking and team collaboration.",
    image: ecommerce,
    githubLink: "https://github.com/dipeshghimire2004/Hamro-Sewa",
  },
  {
    id: 7,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with Javascript and CSS.",
    image: weather,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 8,
    name: "My-Blog-App",
    description:
      "A blog app using React and Appwrite leverages React for the front end and Appwrite for backend services, and Tailwind CSS for resposive design, allows you to post your blog with Rich-Text-Editor. ",
    image: blogapp,
    githubLink: "https://github.com/dipeshghimire2004/My-Blog-App",
  },
  {
    id: 9,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: portfolio,
    githubLink: "",
  },
  {
    id: 10,
    name: "To Do List",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards,and task assignment.",
    image: todo,
    githubLink: "https://github.com/dipeshghimire2004/To-Do-List",
  },
  {
    id: 11,
    name: "Hamro Tweet",
    description:
      "It is a full-stack project built using Django and HTML CSS. Allow user to create post, and perform crud operation.",
    image: tweet,
    githubLink: "https://github.com/dipeshghimire2004/HamroTweet",
  },
];

export const BIO = [
  "I am a backend-focused developer with a strong interest in designing scalable, secure, and maintainable systems.",
  "My primary expertise lies in Java with Spring Boot and PostgreSQL, where I focus on clean architecture, API design, and production-grade backend systems.",
  "Alongside backend development, I have solid experience building modern frontends using React and Next.js, allowing me to collaborate effectively as a full-stack engineer when needed.",
  "Beyond development, I have led DevOps communities, mentored peers, and actively worked with containerization, CI/CD pipelines, and deployment workflows, helping teams ship reliable software faster.",
  "I enjoy solving complex engineering problems and continuously improving system performance, reliability, and developer experience."
];

export const SKILLS = [
  {
    icon: <BiLogoJava className="text-4xl text-golden lg:text-5xl" />,
    name: "Java (Spring Boot)",
    experience: "Advanced",
  },
  {
    icon: <SiPostgresql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "Intermediate",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "TypeScript",
    experience: "Intermediate",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1+ years",
  },
  {
    icon: <SiNextdotjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
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
    duration: "Apr 2025 - Present",
    description:
      "Developed and maintained core backend services using Spring Boot for performance and scalability. Designed and implemented secure REST APIs with JWT-based authentication. Managed containerization and automated CI/CD pipelines using Docker and GitHub Actions.",
  },
  {
    title: "Frontend Developer",
    company: "Tech Trishana, Kathmandu",
    duration: "Jan 2025 - Apr 2025",
    description:
      "Promoted from intern to junior developer within weeks due to fast skill growth and contribution. Built responsive interfaces using Next.js (TypeScript) and Tailwind CSS.",
  },
  {
    title: "Junior Frontend Developer",
    company: "Herald College Kathmandu",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Gained hands-on experience in React.js, Tailwind CSS, Shadcn, and Next.js to create user-friendly interfaces. Contributed to aligning features with system requirements through active team collaboration.",
  },
  {
    title: "Assistant Service Provider",
    company: "High-Speed / On-TheJobTraining",
    duration: "Jun 2022 - Aug 2022",
    description:
      "Maintained hardware devices and networking systems to support operational efficiency.",
  },
];

export const EDUCATION = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "University of Wolverhampton / Herald College Kathmandu",
    duration: "Sep 2024 - Present",
    description:
      "Focused on web and backend development using Java, Python, Django, React, Next.js, TypeScript and AWS.",
  },
  {
    degree: "DevOps Pioneer Community Leader",
    institution: "Herald College Kathmandu",
    duration: "Recently Completed",
    description:
      "Conducted DevOps sessions covering containerization, CI/CD, and automation best practices. Organized technical showcases.",
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