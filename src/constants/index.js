import {
  backend,
  coronaViz,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  hughes,
  illumina,
  javascript,
  mobile,
  mongodb,
  mysatsang,
  nodejs,
  reactjs,
  redux,
  scrollyTelling,
  tailwind,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Problem-Solving",
    icon: mobile,
  },
  {
    title: "Fast Learner",
    icon: backend,
  },
  {
    title: "Collaboration",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Hughes Network Systems",
    icon: hughes,
    iconBg: "#383E56",
    date: "August 2019 - July 2021",
    points: [
      "Collaborated with 8 engineers and cross-functional teams in an Agile setting to enhance the Network Management System (NMS) servicing global enterprise customers.",
      "Designed and developed Oracle PL/SQL data migration scripts to allow for backward compatibility among releases.",
      "Applied the MVC architecture with design patterns, Java, Groovy, etc. to refactor and add crucial features to the NMS.",
      "Developed intricate Angular screens enhancing usability and navigation by implementing seamless user interfaces.",
      "Optimized RESTful API calls for substantial request bodies, yielding efficient data transmission to the database. ",
      "Swiftly advanced to global on-call support within months, demonstrating adaptability and value to the team.",
      "Assisted more than 10 enterprise clients during significant version upgrades, resulting in minimal system downtime.",
      "Received Engineering Excellence Award (2021), over fellow new hires (30+ people) for my efforts.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Illumina",
    icon: illumina,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2022",
    points: [
      "Created RESTful APIs to send data to RabbitMQ, a message broker that manages message exchange across microservices versioned by Git.",
      "Leveraged Java and Spring Boot’s capabilities to streamline code, creating modular and adaptable solutions.",
      "Engineered a user-friendly ReactJS interface, resulting in a 30% decrease in user input errors in test.",
      "Automated testing procedures by implementing unit and end-to-end tests ensuring a stable system across versions.",
      "Developed an intuitive Splunk dashboard to monitor API metrics, employing advanced logging formats for accuracy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MySatsang Application",
    description:
      "Volunteered at BAPS North America Headquaters to create design documents, add features, and communicate with stakeholders.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "CMS",
        color: "orange-text-gradient",
      },
    ],
    image: mysatsang,
    source_code_link: "https://play.google.com/store/apps/details?id=org.baps.mysatsang&hl=en_IE&pli=1",
  },
  {
    name: "CoronaViz",
    description:
      "Collaborated on a Web-based application that allows the user to view the multiple COVID-19 Data values on Geographical Interface.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },
      {
        name: "User Study",
        color: "pink-text-gradient",
      },
    ],
    image: coronaViz,
    source_code_link: "https://coronaviz.umiacs.io/",
  },
  {
    name: "ScrollyTelling",
    description:
      "Web application that brings life to time-series data uploaded by the user to create an narrative interactive article.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "D3.js",
        color: "pink-text-gradient",
      },
    ],
    image: scrollyTelling,
    source_code_link: "https://github.com/sagars729/cmsc734-final-project",
  },
];

export { experiences, projects, services, technologies, testimonials };

