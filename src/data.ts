/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SkillItem, ProjectItem, ExperienceItem, CertificationItem } from "./types";

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    id: "s1",
    name: "Java",
    level: 84,
    soundEffect: "CODE!",
    color: "bg-[#eef2ff] text-[#3730a3] border-[#4f46e5]",
    category: "frontend"
  },
  {
    id: "s2",
    name: "Python",
    level: 92,
    soundEffect: "FLOW!",
    color: "bg-[#eff6ff] text-[#1d4ed8] border-[#2563eb]",
    category: "frontend"
  },
  {
    id: "s3",
    name: "C",
    level: 80,
    soundEffect: "CORE!",
    color: "bg-[#fef2f2] text-[#b91c1c] border-[#dc2626]",
    category: "frontend"
  },

  // Web Technologies
  {
    id: "s4",
    name: "HTML5",
    level: 90,
    soundEffect: "MARKUP!",
    color: "bg-[#fff1f2] text-[#be123c] border-[#e11d48]",
    category: "backend"
  },
  {
    id: "s5",
    name: "CSS3",
    level: 86,
    soundEffect: "STYLE!",
    color: "bg-[#ecfeff] text-[#155e75] border-[#0891b2]",
    category: "backend"
  },
  {
    id: "s6",
    name: "JavaScript",
    level: 84,
    soundEffect: "SCRIPT!",
    color: "bg-[#fffbeb] text-[#a16207] border-[#d97706]",
    category: "backend"
  },
  {
    id: "s7",
    name: "Flask / FastAPI",
    level: 88,
    soundEffect: "API!",
    color: "bg-[#f0fdf4] text-[#166534] border-[#16a34a]",
    category: "backend"
  },

  // Tools & Technologies
  {
    id: "s8",
    name: "Git & GitHub",
    level: 86,
    soundEffect: "SYNC!",
    color: "bg-[#f8fafc] text-[#334155] border-[#475569]",
    category: "devops"
  },
  {
    id: "s9",
    name: "OpenCV & MediaPipe",
    level: 84,
    soundEffect: "VISION!",
    color: "bg-[#f0fdfa] text-[#0f766e] border-[#0d9488]",
    category: "devops"
  },
  {
    id: "s10",
    name: "NumPy / Pandas / Scikit-learn",
    level: 88,
    soundEffect: "ML!",
    color: "bg-[#ecfeff] text-[#155e75] border-[#0e7490]",
    category: "devops"
  },

  // Core Concepts
  {
    id: "s11",
    name: "Data Structures & Algorithms",
    level: 87,
    soundEffect: "DSA!",
    color: "bg-[#ede9fe] text-[#5b21b6] border-[#7c3aed]",
    category: "design"
  },
  {
    id: "s12",
    name: "System Design",
    level: 80,
    soundEffect: "DESIGN!",
    color: "bg-[#fff7ed] text-[#9a3412] border-[#ea580c]",
    category: "design"
  },
  {
    id: "s13",
    name: "Problem Solving & Debugging",
    level: 89,
    soundEffect: "FIX!",
    color: "bg-[#fdf2f8] text-[#9d174d] border-[#db2777]",
    category: "design"
  },
  {
    id: "s14",
    name: "Computer Vision & AI Projects",
    level: 85,
    soundEffect: "AI!",
    color: "bg-[#eef2ff] text-[#312e81] border-[#4338ca]",
    category: "design"
  },
  {
    id: "s15",
    name: "REST API & JSON",
    level: 86,
    soundEffect: "LINK!",
    color: "bg-[#f0fdf4] text-[#166534] border-[#15803d]",
    category: "backend"
  },
  {
    id: "s16",
    name: "Flask, SQLite & MySQL",
    level: 84,
    soundEffect: "STACK!",
    color: "bg-[#fffbeb] text-[#854d0e] border-[#ca8a04]",
    category: "design"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "p1",
    title: "DIAGNOSE ME",
    volumeNumber: 1,
    description: "AI-powered health diagnosis system using symptom analysis and Gemini suggestions.",
    detailedDescription: "Diagnose Me analyzes user symptoms and suggests possible medical conditions with intelligent guidance. It combines a clean web interface with AI-backed reasoning and practical workflows for early-stage health awareness.",
    techStack: ["Next.js", "API", "Gemini", "Fine Tuning"],
    imageUrl: "https://picsum.photos/seed/diagnose-me/400/500",
    accentColor: "crimson",
    links: {
      github: "https://github.com"
    },
    keyOutcome: "Built a practical AI workflow for symptom-based analysis and smart recommendations."
  },
  {
    id: "p2",
    title: "AI LEGAL ASSISTANT",
    volumeNumber: 2,
    description: "Multilingual legal assistant with RAG, issue classification, and complaint draft generation.",
    detailedDescription: "A real-world AI legal assistant that answers legal queries in Tamil and English using Retrieval Augmented Generation. It classifies legal issue types, produces complaint drafts, and supports PDF export for practical legal support.",
    techStack: ["FastAPI", "Python", "RAG", "Google Gemini", "FAISS"],
    imageUrl: "https://picsum.photos/seed/legal-assistant/400/500",
    accentColor: "azure",
    links: {
      github: "https://github.com"
    },
    keyOutcome: "Enabled multilingual legal guidance with automated drafting and retrieval-based reasoning."
  },
  {
    id: "p3",
    title: "DIABETES PREDICTOR",
    volumeNumber: 3,
    description: "Machine learning system that predicts diabetes from patient health metrics.",
    detailedDescription: "This project uses patient metrics such as BMI, glucose level, and related medical history to predict diabetes risk. The model pipeline focuses on reliable preprocessing and practical outputs for easy interpretation.",
    techStack: ["Python", "Random Forest", "Pandas", "NumPy"],
    imageUrl: "https://picsum.photos/seed/diabetes-predictor/400/500",
    accentColor: "emerald",
    links: {
      github: "https://github.com"
    },
    keyOutcome: "Delivered accurate and interpretable risk prediction from real health data features."
  },
  {
    id: "p4",
    title: "INTRUX",
    volumeNumber: 4,
    description: "Real-time intrusion detection system using computer vision and automated alerts.",
    detailedDescription: "Intrux monitors restricted zones using camera feeds and computer vision. When unauthorized movement is detected, the system triggers alerts and message notifications in real time.",
    techStack: ["OpenCV", "MediaPipe", "Computer Vision", "Python"],
    imageUrl: "/intrux.png",
    accentColor: "beer",
    links: {
      github: "https://github.com"
    },
    keyOutcome: "Implemented practical surveillance intelligence with immediate unauthorized motion alerts."
  },
  {
  id: "p5",
  title: "VILLAGE NEWS APP",
  volumeNumber: 5,
  description: "Firebase-powered village news platform for sharing local updates, events, and announcements.",
  detailedDescription:
    "A community-driven news application designed for villages and local communities. Users can share announcements, events, emergency alerts, and important updates in real time. The platform supports multilingual content, Firebase authentication, cloud storage, and instant synchronization to keep residents informed and connected.",
  techStack: ["Flutter", "Dart", "Firebase"],
  imageUrl: "https://picsum.photos/seed/village-news-app/400/500",
  accentColor: "emerald",
  links: {
    github: "https://github.com"
  },
  keyOutcome:
    "Enabled real-time community communication with instant news sharing, multilingual support, and cloud-based synchronization."
}
];

export const experienceData: ExperienceItem[] = [
  {
    id: "e1",
    role: "B.E Computer Science Engineering",
    company: "Vel Tech Rangarajan Dr. Sakunthala Engineering College",
    period: "2023 - 2027",
    description: [
      "CGPA: 8.0",
      "Focused on AI, Data Structures, Algorithms, and System Design.",
      "Built multiple real-world software and AI projects."
    ],
    heroQuote: "Built strong foundations in software engineering and intelligent systems."
  },
  {
    id: "e2",
    role: "Python Development Intern",
    company: "Internship Experience",
    period: "Jul 2025 - Aug 2025",
    description: [
      "Developed web scraping programs using Python.",
      "Built Flask-based web applications.",
      "Improved backend development and debugging skills."
    ],
    heroQuote: "Hands-on development in Python accelerated practical engineering skills."
  },
  {
    id: "e3",
    role: "AI Project Developer",
    company: "Personal Projects",
    period: "2025 - Present",
    description: [
      "Developed an AI-powered health diagnosis system.",
      "Built a RAG-based legal assistant using FAISS and Gemini.",
      "Created machine learning prediction systems for practical use cases."
    ],
    heroQuote: "Focused on practical AI products with real user value and scalability."
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "c1",
    title: "Java Programming Course",
    issuer: "Educative",
    date: "2025",
    credentialId: "EDU-JAVA-2025",
    badgeType: "gold"
  },
  {
    id: "c2",
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "2026",
    credentialId: "ANTH-MCP-2026",
    badgeType: "red"
  },
  {
    id: "c3",
    title: "Software Engineering Job Simulation",
    issuer: "Accenture",
    date: "2025",
    credentialId: "ACC-SE-2025",
    badgeType: "silver"
  },
  {
    id: "c4",
    title: "Generative AI",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialId: "LI-GENAI-2023",
    badgeType: "bronze"
  },
  {
    id: "c5",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "2025",
    credentialId: "DEL-DA-2025",
    badgeType: "bronze"
  }
];

export const characterStats = {
  characterName: "YUVARAJ G",
  class: "Software Engineer | AI & Web Developer",
  level: 8,
  alignment: "Practical AI / Scalable Engineering",
  exp: "8,000 / 10,000 EXP",
  stats: [
    { name: "PYTHON & AI DEVELOPMENT", rating: "A-Tier", score: 92, color: "bg-[#f04a23]" },
    { name: "WEB DEVELOPMENT", rating: "A-Tier", score: 88, color: "bg-blue-600" },
    { name: "DATA STRUCTURES & ALGORITHMS", rating: "A-Tier", score: 87, color: "bg-purple-600" },
    { name: "SYSTEM DESIGN", rating: "B-Tier", score: 80, color: "bg-emerald-600" },
    { name: "DEBUGGING & PROBLEM SOLVING", rating: "A-Tier", score: 89, color: "bg-pink-600" },
  ]
};
