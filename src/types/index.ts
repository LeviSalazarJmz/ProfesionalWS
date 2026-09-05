export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CVData {
  personal: {
    name: string;
    role: string;
    status: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
}