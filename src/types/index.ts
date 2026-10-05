export type Locale = 'en' | 'es';

export interface ProjectTechnicalDetails {
  architecture?: string[];
  challenges?: string[];
  benchmarks?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: {
    en: string;
    es: string;
  };
  period: string;
  featured: boolean;
  description: {
    en: string;
    es: string;
  };
  technicalPoints: {
    en: string[];
    es: string[];
  };
  details?: {
    en: ProjectTechnicalDetails;
    es: ProjectTechnicalDetails;
  };
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: {
    en: string;
    es: string;
  };
  company: string;
  companyUrl?: string;
  period: {
    en: string;
    es: string;
  };
  location: {
    en: string;
    es: string;
  };
  summary: {
    en: string;
    es: string;
  };
  highlights: {
    en: string[];
    es: string[];
  };
  technologies: string[];
}

export interface EducationItem {
  degree: {
    en: string;
    es: string;
  };
  institution: string;
  period: string;
  status: {
    en: string;
    es: string;
  };
  location: string;
  details?: {
    en: string[];
    es: string[];
  };
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  hours?: string;
  credentialUrl?: string;
  category?: 'ai' | 'cloud' | 'programming';
}

export interface TechGroup {
  category: {
    en: string;
    es: string;
  };
  skills: string[];
}
