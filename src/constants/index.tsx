import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import projectImage1 from "../assets/images/project1.jpeg";
  import projectImage2 from "../assets/images/project2.jpeg";
  import projectImage3 from "../assets/images/project3.jpeg";
  import projectImage4 from "../assets/images/project4.jpeg";
  import projectImage5 from '../assets/images/project5.jpeg';
  
  import { RiReactjsLine } from "react-icons/ri";
  import { SiPhp } from "react-icons/si";
  import { BiLogoFigma } from "react-icons/bi";
  import { TbBrandJavascript } from "react-icons/tb";
  import { FaPython } from "react-icons/fa6";
  import { RiJavaFill } from "react-icons/ri";
  
  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
    // {label:"Resume" , href:'#resume'}
  ];
  
  export const HERO = {
    name: "DIPESH GHIMIRE",
    greet: "Hello there!",
    description:
      "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a year.",
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
      githubLink: "",
    },
    {
      id: 2,
      name: "Doctor Appointent System",
      description:
        "Doctor Appointent Boooking System web application developed using react.js, allows patients to easily schedule, reschedule, or cancel appointments with doctors",
      image: projectImage2,
      githubLink: "https://github.com/dipeshghimire2004/Doctor-Appointment-System",
    },
    {
      id: 3,
      name: "To Do List",
      description:
        "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards,and task assignment.",
      image: projectImage3,
      githubLink: "https://github.com/dipeshghimire2004/To-Do-List",
    },
    {
      id: 4,
      name: "Weather App",
      description:
        "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with Javascript and CSS.",
      image: projectImage4,
      githubLink: "https://github.com/user/weather-app",
    },
    {
      id: 5,
      name: "My-Blog-App",
      description:
        "A blog app using React and Appwrite leverages React for the front end and Appwrite for backend services, and Tailwind CSS for resposive design, allows you to post your blog with Rich-Text-Editor. ",
      image: projectImage5,
      githubLink: "https://github.com/dipeshghimire2004/My-Blog-App",
    },
  ];
  
  export const BIO = [
    "Hi, I’m Dipesh Ghimire, a Computer Engineering graduate from Shree Siddhababa Secondary School. After my studies, I focused on growing my skills in frontend development to bring creative and innovative ideas to life.",

    "In 2023, I worked with Suresh Khanal on maintaining computer hardware, software, and networking issues. My passion for creating great user experiences has kept me involved in various development platforms."
    
    ,"As a frontend developer, I have a strong background in HTML, CSS, and JavaScript, along with experience in library like React . I aim to deliver visually appealing and user-friendly web experiences for everyone I work with."
  ];
  
  export const SKILLS = [
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "1+ years",
    },
    {
      icon: <SiPhp className="text-4xl text-green-600 lg:text-5xl" />,
      name: "PHP",
      experience: "3+ months",
    },
    {
      icon: <BiLogoFigma className="text-4xl text-red-600 lg:text-5xl" />,
      name: "Figma",
      experience: "1+ year",
    },
    {
      icon: <TbBrandJavascript className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Javascript",
      experience: "1+ years",
    },
    {
      icon: <FaPython className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Python",
      experience: "6+ months",
    },
    {
      icon: <RiJavaFill className="text-4xl text-sky-700 lg:text-5xl" />,
      name: "Java",
      experience: "1+ year",
    },
  ];
  
  export const EXPERIENCES = [
    {
      title: "Junior Web Developer",
      company: "Dev-Corp Herald College Kathmandu",
      duration: "July 2024 - Present",
      description:
        "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing reactJS, Taiwind, NextJS, Shadcn to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
    },
    {
      title: "On-The Job Traning",
      company: "High-Speed",
      duration: "August 2022 - December 2022",
      description:
        "As the assistant service provider, I spearheaded the maintenance of Hardware devices and Networking maintenance, I have had the opportunity to expand my networking certification and gain knowledge of the inner workings of the entire computer system.",
    },
  ];
  
  export const EDUCATION = [
    {
      degree: "+12 'Computer Engineering",
      institution: "Shree SIddhababa Sec. School",
      duration: "2019-2023",
      description:
        "Overview of contemporary technology along with development process. Completed a SRS on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development,Research, and data structures upto certain extents. Graduated with honors.",
    },
    {
      degree: "BS'c (Hons)  Computer Science ",
      institution: "Herald College Kathmandu",
      duration: "September 2008 - June 2012",
      description:
        "Focused on web development, programming languages, and database management. Actively involved in coding clubs and Devlopment Community, where I developed web applications using HTML, CSS, JavaScript,react, Tailwind, NextJS,AppWrite and PHP. Completed a senior project on developing an Workshop Tracking of Herald College.",
    },
  ];
  
  export const GITHUB=[
    
  ]
  
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://www.facebook.com/profile.php?id=100058924517386",
      icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
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
  