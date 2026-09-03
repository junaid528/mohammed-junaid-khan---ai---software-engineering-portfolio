export interface Profile {
  name: string;
  role: string;
  supportingRole: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  summary: string;
  heroHeadline: string;
  heroEyebrow: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  isCurrent?: boolean;
  responsibilities: string[];
  skills: string[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  category: string;
  description: string;
  tech?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  overview: string;
  problem: string; // Engineering focus
  solution: string;
  architectureNodes: ArchitectureNode[];
  engineeringHighlights: string[];
  keyTakeaways: string[];
  githubUrl?: string;
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  gradeHighlight?: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialType: string;
}

export interface AchievementItem {
  title: string;
  grade: string;
  field: string;
  description: string;
}
