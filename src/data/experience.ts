import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'ltevo',
    role: {
      en: 'Web Developer & Digital Solutions Builder',
      es: 'Desarrollador Web y Soluciones Digitales'
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
      en: 'Designing, building, and deploying custom web solutions, corporate websites, and automation tools for businesses and independent professionals.',
      es: 'Diseño, desarrollo y despliegue de soluciones web personalizadas, sitios corporativos y herramientas de automatización para negocios y profesionales independientes.'
    },
    highlights: {
      en: [
        'Direct collaboration with clients to translate business objectives into performant, production-ready web platforms.',
        'Full development lifecycle: UX architecture, frontend implementation with Next.js & Tailwind CSS, API integrations, and serverless forms.',
        'Technical SEO setup, structured metadata, domain configuration, and continuous deployment workflows on Vercel.',
        'Delivering sub-second load times and high Core Web Vitals across diverse commercial client deliverables.'
      ],
      es: [
        'Colaboración directa con clientes para traducir objetivos de negocio en plataformas web rápidas y en producción.',
        'Ciclo completo de desarrollo: arquitectura UX, maquetación con Next.js y Tailwind CSS, integración de APIs y formularios serverless.',
        'Configuración de SEO técnico, metadatos estructurados, gestión de DNS/dominios y despliegue continuo en Vercel.',
        'Garantía de tiempos de carga inferiores a un segundo y cumplimiento de Core Web Vitals en cada entrega comercial.'
      ]
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Resend', 'Technical SEO', 'DNS']
  }
];
