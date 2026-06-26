
export interface SkillItem {
  id: string;
  name: string;
  level: number; // 0 to 100
  soundEffect: string; // Comic sound effect representation, e.g. "POW!", "BOOM!", "ZAP!"
  color: string; // Tailwind color class for vintage tint
  category: "frontend" | "backend" | "devops" | "other" | "design";
}

export interface ProjectItem {
  id: string;
  title: string;
  volumeNumber: number; // For comic volume numbering, e.g. "Vol. #42"
  description: string;
  detailedDescription: string;
  techStack: string[];
  imageUrl: string;
  accentColor: string; // e.g. "red", "blue", "yellow", "green" for comic frames
  links: {
    github?: string;
    demo?: string;
  };
  keyOutcome: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  heroQuote: string; // A fun superhero-themed catchphrase describing their contribution there
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  badgeType: "gold" | "silver" | "bronze" | "red";
}
