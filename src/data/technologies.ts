import type { TechGroup } from '../types';

export const techGroups: TechGroup[] = [
  {
    category: {
      en: 'Languages',
      es: 'Lenguajes'
    },
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL']
  },
  {
    category: {
      en: 'Frontend',
      es: 'Frontend'
    },
    skills: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'HTML5 / CSS3']
  },
  {
    category: {
      en: 'Backend & Systems',
      es: 'Backend y Sistemas'
    },
    skills: ['FastAPI', 'Node.js', 'Express', 'WebSockets', 'REST APIs', 'SQLite', 'asyncio']
  },
  {
    category: {
      en: 'Tools & Infrastructure',
      es: 'Herramientas e Infraestructura'
    },
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'CI/CD Actions', 'Linux / Bash']
  },
  {
    category: {
      en: 'AI & Integrations',
      es: 'IA e Integraciones'
    },
    skills: ['OpenAI API', 'Claude (Anthropic)', 'Meta WhatsApp API', 'Notion API', 'Resend']
  }
];
