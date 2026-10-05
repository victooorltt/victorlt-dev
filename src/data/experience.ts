import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'ltevo',
    role: {
      en: 'Web Developer & Founder',
      es: 'Desarrollador Web y Fundador'
    },
    company: 'LTEvo',
    companyUrl: 'https://ltevo.com',
    period: {
      en: '2024 — Present',
      es: '2024 — Actualidad'
    },
    location: {
      en: 'Oviedo, Spain',
      es: 'Oviedo, España'
    },
    summary: {
      en: 'Developing custom websites, web applications, and automation tools for businesses. Managing client requirements, Next.js codebases, domain infrastructure, and Vercel deployments.',
      es: 'Desarrollo de sitios web a medida, aplicaciones y automatizaciones para empresas y clientes reales. Gestión de requisitos, desarrollo con Next.js, infraestructura de dominios y despliegues en Vercel.'
    },
    highlights: {
      en: [
        'Building responsive, fast web platforms using Next.js and Tailwind CSS.',
        'Technical SEO setup, structured metadata and domain configuration.',
        'Integrating serverless forms, APIs and custom workflows.'
      ],
      es: [
        'Desarrollo de webs rápidas y optimizadas con Next.js y Tailwind CSS.',
        'Configuración de SEO técnico, metadatos y dominios.',
        'Integración de formularios serverless, APIs y flujos a medida.'
      ]
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel']
  }
];
