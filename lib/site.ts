import strict from "node:assert/strict";

/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no component changes needed.
 */
export const site = {
  name: "Nikhil Tiwari",
  handle: "nikhil-tiwari1419",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-wheat-mu-79.vercel.app").replace(/\/$/, ""),
  role: "Full-Stack Developer building AI-integrated web apps",
  title: "Nikhil Tiwari | Full-Stack Developer building AI-integrated web apps",
  description:
    "Nikhil Tiwari is a full-stack developer who builds fast, accessible web apps end to end, from database schema to pixel-perfect UI, with React, Next.js, Node.js and MongoDB, and is exploring Gen AI integration.",
  keywords: [
    "Nikhil Tiwari",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "TypeScript",
    "Gen AI",
    "Open Source Contributor",
    "Software Developer India",
  ],
  avatar: "https://avatars.githubusercontent.com/u/190438051?v=4",
  email: "developernikhil14@gmail.com",
  socials: {
    github: "https://github.com/nikhil-tiwari1419",
    linkedin: "https://www.linkedin.com/in/nikhil-tiwari-53743b339/",
  },
  intro:
    "I build web appliactions from frontend to backend & Database, focusing on clean UI , reliable backend system and functionality's",
  about: [
    "I'm a software developer and student passionate about building useful web applications and learning how things work under the hood.",
    "I work primarily with React, Next.js, Node.js, and MongoDB, building projects that bring together frontend experiences, backend logic, and database design.",
    "Beyond web development, I'm exploring Generative AI, automation, and data science to understand how emerging technologies can solve practical problems.",
    "I enjoy learning by building, experimenting with new technologies, and sharing what I learn with fellow developers.",
  ],

} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags?: string[];
};

export const experience: Experience[] = [
  // {
  //   company: "EduPiSchool",
  //   role: "Development Team Lead",
  //   period: "Aug 2026 – Present",
  //   summary: "Built and maintained internal tooling for the support team.",
  // },
  {
    company: "Nexus Spring of Code",
    role: "Open Source Contributor (Kernel)",
    period: "Apr 2026 – Jun 2026",
    summary:
      "Led a project, managed and reviewed contributions, and helped other contributors work through their issues.",
  },
  {
    company: "GDG Nagpur",
    role: "Hackathon Participant",
    period: "Jan 31 – Feb 1",
    summary: "Shipped Service Leave Agreement, a civic issue-reporting app, within the hackathon window.",
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  status: String;
  tags: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "CampusVoice",
    tagline: "Student grievance portal",
    status: "Complet",
    description:
      "An end-to-end grievance platform with separate Student, Admin and SuperAdmin roles, so complaints get raised, tracked and resolved in one place.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite"],
    live: "https://campus-voice-liart.vercel.app/",
  },
  {
    name: "MusicMenia",
    tagline: "Music streaming platform",
    status: "Complet",
    description:
      "A full-stack MERN app connecting listeners with artists who upload music, with role-based access for users, artists and admins.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite"],
    live: "https://music-menia-app.vercel.app/",
    // repo: "https://github.com/nikhil-tiwari1419/MusicMeniaApp",
  },
  {
    name: "University Student App",
    tagline: "College discovery for students",
    status: "OnGoing",
    description:
      "Helps students navigate universities and search for colleges that fit them, with live updates over WebSockets.",
    tags: ["React", "Node.js", "Express", "WebSockets", "Tailwind CSS"],
    live: "https://university-student-app.vercel.app/",
    // repo: "https://github.com/nikhil-tiwari1419/University-StudentApp",
  },
  {
    name: "Service Leave Agreement",
    tagline: "Civic issue reporting",
    status: "OnGoing",
    description:
      "Lets residents raise their voice about local problems like water pollution, litter, garbage collection and electricity. Built during a hackathon.",
    tags: ["React", "Vite", "Express", "MongoDB", "Groq API", "Tailwind CSS", "FastAPI"],
    live: "https://service-leave-agreement.vercel.app/",
    // repo: "https://github.com/nikhil-tiwari1419/Service-leave-agreement",
  },
  {
    name: "RagAITutor",
    tagline: "AI tutor for classes 8, 9 and 10",
    status: "Paused",
    description:
      "An education platform where students get their doubts answered by an AI tutor, without waiting on a teacher.",
    tags: ["React", "FastAPI", "Node.js", "Redis", "Docker", "Gemini API"],
  },
];

export type StackGroup = { label: string; icon: "frontend" | "backend" | "tooling" | "ai"; items: string[] };

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    icon: "frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "CSS", "Redux"]
  },
  {
    label: "Backend",
    icon: "backend",
    items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "JWT", "Zod", "Better Auth"],
  },
  {
    label: "Tooling",
    icon: "tooling",
    items: ["Git", "GitHub", "GitHub Actions", "Docker", "n8n", "Vercel", "Render", "Postman", "CodeRabbit", "npm", "pnpm"]
  },
  {
    label: "AI & data",
    icon: "ai",
    items: ["Python", "Gemini API", "Groq API", "Pandas", "NumPy", "scikit-learn", "PyTorch", "TensorFlow"],
  },
];

export type Education = {
  institute: string;
  icon: "school" | "college";
  degree: string;
  description: string;
};

export const education: Education[] = [
  {
    institute: "Shri Shivaji Science College, Nagpur",
    icon: "college",
    degree: "Bachelor of Computer Application (BCA) with Honours in Data Science",
    description: "Maharashtra, India",
  },
  {
    institute: "East Point School & Vishwas Junior College",
    icon: "school",
    degree: "Higher Secondary Education (10 + 2)",
    description: "Maharashtra, India",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
