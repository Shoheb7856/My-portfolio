export const profile = {
  name: "MD Shoheb",
  title: "Java Full Stack Developer",
  subtitle: "Backend & Microservices",
  phone: "+91 9036557856",
  email: "mdshohebsiddiqui00786@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  objective:
    "Java Full Stack Developer with 2+ years of experience building scalable backend systems, RESTful APIs, and Microservices, along with React- and Angular-based frontend development, strong database skills, and Agile/Scrum exposure. Skilled in secure authentication flows, third-party integrations, CI/CD-driven deployments, and end-to-end performance tuning.",
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "3", label: "Major Projects" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

export const skills = [
  {
    category: "Java & Backend",
    icon: "FaJava",
    items: ["Java 8", "Spring Boot", "Hibernate", "Node.js", "Express.js", "JSP", "JEE"],
  },
  {
    category: "Frontend",
    icon: "FaReact",
    items: ["React.js", "Angular", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Architecture & APIs",
    icon: "FaNetworkWired",
    items: ["Microservices", "REST APIs", "API Integration", "OAuth 2.0", "JWT"],
  },
  {
    category: "Databases",
    icon: "FaDatabase",
    items: ["SQL", "MySQL", "Sequelize ORM", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps & Practices",
    icon: "FaDocker",
    items: ["CI/CD", "Jenkins", "GitHub Actions", "Agile/Scrum", "Git", "Postman"],
  },
  {
    category: "Languages",
    icon: "FaCode",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Atmez AI",
    period: "Feb 2025 – Present",
    current: true,
    points: [
      "Built and maintained backend REST APIs for production systems using Java, Spring Boot, and Node.js following Agile/Scrum sprint cycles.",
      "Designed and implemented a secure Google OAuth 2.0 authentication system for user login and access management.",
      "Built robust JWT-based session management to strengthen access control across services.",
      "Developed RESTful APIs enabling seamless communication between React frontend and backend with a focus on debugging and performance tuning.",
      "Set up and maintained CI/CD pipelines to automate build, test, and deployment workflows, improving release reliability.",
      "Managed MySQL database operations using Sequelize ORM, optimizing queries for backend performance.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Five Seven IT Solutions",
    period: "Aug 2023 – Jan 2025",
    current: false,
    points: [
      "Built and maintained backend APIs using Node.js and Express.js for multiple business applications in an Agile/Scrum team.",
      "Developed RESTful APIs to enable seamless communication between frontend and backend services.",
      "Managed MySQL database operations and optimized query performance for production systems.",
      "Collaborated with the team to design and implement scalable backend architectures.",
    ],
  },
];

export const projects = [
  {
    name: "Buy Sell Mart Application",
    link: "",
    stack: ["Spring Boot", "React", "MySQL", "JWT", "OAuth2", "Microservices", "CI/CD"],
    points: [
      "Developed a Spring Boot backend for mobile apps with social SSO support (Google, Facebook, GitHub).",
      "Implemented JWT-based authentication with access and refresh token flow.",
      "Built RESTful APIs with role-based access control (RBAC), request validation, and global exception handling.",
      "Implemented database migrations with Flyway and entity auditing for reliable schema management.",
      "Configured API documentation with OpenAPI/Swagger UI and built a React admin dashboard with a CI/CD pipeline.",
    ],
  },
  {
    name: "Employee Management System",
    link: "https://stafwise.com",
    stack: ["Node.js", "Express.js", "React", "JavaScript", "MySQL", "Knex.js"],
    points: [
      "Built a platform with role-based access control (Super-Admin, Admin, Employee) and secure authentication.",
      "Built a responsive React frontend with role-based dashboards, interactive shift calendars, and leave approval screens.",
      "Built a dynamic shift management system with templates, assignment workflows, and availability planning.",
      "Integrated Firebase Cloud Messaging for real-time notifications on shift updates and attendance reminders.",
      "Created a leave management system supporting 15+ leave types with approval workflows and automated balance calculations.",
    ],
  },
  {
    name: "Virtual Stock Portfolio Platform",
    link: "https://atruhafinance.com",
    stack: ["Node.js", "MySQL", "Twelve Data API"],
    points: [
      "Built a dynamic portfolio system enabling users to simulate and track stock investments via REST APIs.",
      "Used real-time and historical data from the Twelve Data API for accurate market simulation.",
      "Integrated performance tracking and portfolio chart generation over various timeframes.",
      "Optimized batch data fetching and credit-aware scheduling logic for efficiency.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Engineering in Computer Science & Engineering",
    place: "KBN University, Kalaburagi",
    period: "2019 – 2023",
    type: "education",
  },
  {
    title: "Full Stack Web Development",
    place: "TAP Academy",
    period: "Aug 2023 – Feb 2024",
    type: "certification",
  },
];

export const softSkills = [
  { title: "Problem-solving", desc: "Strong analytical and debugging skills" },
  { title: "Communication", desc: "Effective collaboration and stakeholder communication" },
  { title: "Adaptability", desc: "Quick learner of new technologies" },
  { title: "Teamwork", desc: "Works efficiently independently and in teams" },
];
