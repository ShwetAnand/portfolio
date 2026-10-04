// ALL editable content lives here.

export const profile = {
  name: 'Shwet Anand',
  headline: 'Full Stack Developer | Java & Spring Boot | React',
  intro:
    'I build scalable and user-focused web applications using Java, Spring Boot, React, SQL, and modern development practices.',
  // Put your resume PDF in the /public folder and keep this path (public/resume.pdf -> /resume.pdf).
  resumePath: '/resume.pdf',
}

// Leave a value as '' until you fill it in; the UI disables that link instead of breaking.
export const socials = {
  github: 'https://github.com/ShwetAnand',
  linkedin: '',
  email: 'shwetanand1574@gmail.com',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I am a Computer Science & Engineering student at IIIT Sonepat with a strong interest in full-stack development, backend engineering, and problem solving.',
    'I enjoy designing clean REST APIs, modelling data well, and building interfaces that are simple to use. I am currently preparing for software development roles.',
  ],
  focus: [
    'Java', 'Spring Boot', 'React', 'REST APIs', 'SQL', 'Database Design',
    'DSA', 'Object-Oriented Programming', 'Backend Development',
  ],
}

export const skills = [
  { title: 'Languages', items: ['Java', 'C', 'SQL', 'JavaScript (ES6+)', 'HTML', 'CSS'] },
  { title: 'Frameworks / Libraries', items: ['Spring Boot', 'React.js', 'Hibernate / JPA'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL'] },
  {
    title: 'Core Concepts',
    items: [
      'Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems',
      'Computer Networks', 'REST APIs', 'Database Design', 'System Design',
    ],
  },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'InAmigos Foundation',
    period: 'August - September 2026',
    points: [
      'Worked on web development tasks using Java and React as part of the engineering team.',
      'Implemented UI components and features and fixed issues in existing code.',
      'Completed assigned project tasks and collaborated with the team using Git.',
    ],
  },
]

// github / demo: leave '' if not available. Edit descriptions and features to match your real work.
export const projects = [
  {
    name: 'AI-Powered Job Tracker & Resume Intelligence Platform',
    description:
      'A full-stack platform for tracking job applications and getting AI-powered resume and career insights.',
    tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'RAG', 'LLM'],
    features: [
      'Track job applications in one place',
      'AI-powered resume and career insights using RAG with an LLM',
      'Spring Boot REST API with a React frontend',
    ],
    github: 'https://github.com/ShwetAnand/Job-Tracker-Pro',
    demo: '',
  },
  {
    name: 'AI-Powered E-Commerce & Inventory Management System',
    description:
      'An e-commerce and inventory management system with AI-powered capabilities.',
    tech: ['Spring Boot', 'React.js', 'PostgreSQL / MySQL', 'RAG', 'LLM'],
    features: [
      'E-commerce storefront and order flow',
      'Inventory management for products and stock',
      'AI-powered assistance using RAG with an LLM',
    ],
    github: '',
    demo: '',
  },
  {
    name: 'Job Portal Web Application',
    description:
      'A server-rendered job portal built with Spring Boot, backed by a MySQL database.',
    tech: ['Spring Boot 3', 'Hibernate/JPA', 'MySQL', 'Thymeleaf'],
    features: [
      'Job listings',
      'Application management',
      // Add 'Authentication and authorization' here only if you implemented it.
      'Database-backed persistence with Hibernate/JPA',
    ],
    github: '',
    demo: '',
  },
]

export const education = {
  school: 'Indian Institute of Information Technology, Sonepat',
  degree: 'B.Tech in Computer Science & Engineering',
  period: '2023 – 2027',
  cgpa: '7.41/10',
}

export const certifications = [
  { title: 'Dynamic Programming & Graph Algorithms', issuer: 'AlgoUniversity' },
  { title: '6 Skill Badges', issuer: 'Google Cloud Skills Boost' },
]

// Contact form: 'mailto' opens the visitor's email app. To use Formspree/EmailJS later,
// replace the handleSubmit body in Contact.jsx.