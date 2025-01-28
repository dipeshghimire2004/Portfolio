import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import taskmanagement from "../assets/images/taskman2.webp";
  import doctorappointment from "../assets/images/doctotappointment.webp";
  import todo from "../assets/images/todo.jpg";
  import weather from "../assets/images/weather.webp";
  import blogapp from '../assets/images/blogapp.webp';
  import portfolio from '../assets/images/portfolio.webp';
  import ecommerce from '../assets/images/ecommercewebsiste.png';
  import tweet from '../assets/images/tweet.webp';



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
      name: "Task Management System",
      description:
        "This project is a full-stack project, Django + ReactJS with typescript and Tailwind CSS to manage the task and ensure its completion within given time.",
      image: taskmanagement,
      githubLink: "",
    },
    {
      id: 2,
      name: "Doctor Appointent System",
      description:
        "Doctor Appointent Boooking System web application developed using react.js, allows patients to easily schedule, reschedule, or cancel appointments with doctors",
      image: doctorappointment,
      githubLink: "https://github.com/dipeshghimire2004/Doctor-Appointment-System",
    },
    {
      id: 3,
      name: "Hamro Sewa",
      description:
        "E-Commerce application built with React with typescript where it comprise of authentication system, also Redux for efficient task tracking and team collaboration.",
      image: ecommerce,
      githubLink: "https://github.com/dipeshghimire2004/Hamro-Sewa",
    },
    {
      id: 4,
      name: "Weather App",
      description:
        "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with Javascript and CSS.",
      image:weather,
      githubLink: "https://github.com/user/weather-app",
    },
    {
      id: 5,
      name: "My-Blog-App",
      description:
        "A blog app using React and Appwrite leverages React for the front end and Appwrite for backend services, and Tailwind CSS for resposive design, allows you to post your blog with Rich-Text-Editor. ",
      image:blogapp,
      githubLink: "https://github.com/dipeshghimire2004/My-Blog-App",
    },
    {
      id: 6,
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: portfolio,
      githubLink: "",
    },
    {
      id: 7,
      name: "To Do List",
      description:
        "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards,and task assignment.",
      image: todo,
      githubLink: "https://github.com/dipeshghimire2004/To-Do-List",
    },
    {
      id: 8,
      name: "Hamro Tweet",
      description:
        "It is a full-stack project built using Django and HTML CSS. Allow user to create post, and perform crud operation.",
      image: tweet,
      githubLink: "https://github.com/dipeshghimire2004/HamroTweet",
    },
  ];
  
  export const BIO = [
    "Hi, I’m Dipesh Ghimire, a Computer Engineering graduate from Shree Siddhababa Secondary School with a passion for frontend development. In 2023, I worked with Suresh Khanal on computer hardware, software, and networking, enhancing my technical skills."

,"With expertise in HTML, CSS, JavaScript, and React, I focus on delivering creative, user-friendly, and visually appealing web experiences."
  ];
  
  export const SKILLS = [
    {
      icon: <TbBrandJavascript className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Javascript",
      experience: "1.5+ years",
    },
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
      icon: <FaPython className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Python",
      experience: "6+ months",
    },
    {
      icon: <RiJavaFill className="text-4xl text-sky-700 lg:text-5xl" />,
      name: "Java",
      experience: "6+ Months",
    },
  ];
  
  export const EXPERIENCES = [
    {
      title: "Junior Web Developer",
      company: "Dev-Corp Herald College Kathmandu",
      duration: "July 2024 - September 2024",
      description:
        "As a junior developer, I have assisted  in the development and maintenance of various web pages. I gained hands-on experience in React Js, Tailwind CSS, Shadcn and NextJS to create user friendly interfaces.I take active participation in team meetings, where ideas are pitched to make the system as per the system requirement specification.",
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
      degree: "BC's (Hons)  Computer Science ",
      institution: "Herald College Kathmandu",
      duration: "September 2024 - Present",
      description:
        "Focused on programming, especially on web development, where I have indulged myself into different programming languages i.e. Java, Javascript, Typescript, python, Django, React, PHP. Participate  in the contribution to the web development community. ",
    },
    {
      degree: "+12 'Computer Engineering",
      institution: "Shree Siddhababa Sec. School",
      duration: "2019-2023",
      description:
        "Privileged to explore the IT world in the early age, Overview of contemporary technology along with the development of systems, web application, Mobile app with proper planning for sustainable system.",
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
  