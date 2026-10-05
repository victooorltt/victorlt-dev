import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'prediction-market-system',
    title: 'Prediction Market Engine',
    subtitle: {
      en: 'Real-time market data streaming and local order book synchronization engine for Polymarket.',
      es: 'Motor de streaming de datos de mercado en tiempo real y sincronización de order books para Polymarket.'
    },
    period: '2025',
    featured: true,
    description: {
      en: 'Low-latency system for consuming live prediction market order books via WebSockets, processing sequence deltas and evaluating price spreads.',
      es: 'Sistema de baja latencia para consumir libros de órdenes en tiempo real vía WebSockets, procesar deltas de secuencia y analizar spreads.'
    },
    technicalPoints: {
      en: [
        'Local order book synchronization with sequence validation over WebSockets.',
        'Asynchronous event loop with FastAPI and Python asyncio.',
        'Docker containerization and latency benchmarking.'
      ],
      es: [
        'Sincronización de order books locales con validación de secuencias vía WebSockets.',
        'Bucle de eventos asíncrono con FastAPI y asyncio en Python.',
        'Despliegue con Docker y benchmarking de latencia.'
      ]
    },
    technologies: ['Python', 'FastAPI', 'WebSockets', 'Docker', 'asyncio'],
    isPrivate: false
  },
  {
    id: 'ai-whatsapp-syntralabs',
    title: 'AI WhatsApp Agent',
    subtitle: {
      en: 'Conversational WhatsApp assistant integrated with Meta Cloud API and Notion CRM.',
      es: 'Asistente conversacional en WhatsApp con Meta Cloud API y sincronización con Notion CRM.'
    },
    period: '2025',
    featured: true,
    description: {
      en: 'Production chatbot for Syntra Labs using OpenAI models to converse with prospects, maintain session context in SQLite and sync leads directly into Notion.',
      es: 'Chatbot en producción para Syntra Labs usando modelos de OpenAI para cualificar clientes, mantener contexto en SQLite y registrar leads en Notion.'
    },
    technicalPoints: {
      en: [
        'Official Meta WhatsApp Business Cloud API webhook integration.',
        'Multi-turn conversation history stored in SQLite.',
        'Automated lead qualification and instant email alerts via Resend.'
      ],
      es: [
        'Integración con la API oficial de Meta WhatsApp Cloud mediante webhooks.',
        'Historial de conversaciones multiturno persistido en SQLite.',
        'Cualificación automática de contactos y alertas comerciales por Resend.'
      ]
    },
    technologies: ['Node.js', 'Express', 'OpenAI API', 'WhatsApp API', 'Notion', 'SQLite', 'Resend'],
    githubUrl: 'https://github.com/victooorltt/bot-whatsapp-syntralabs'
  },
  {
    id: 'ltevo-platform',
    title: 'LTEvo',
    subtitle: {
      en: 'Web development and digital solutions studio for businesses and clients.',
      es: 'Desarrollo web y soluciones digitales para negocios y clientes reales.'
    },
    period: '2024 — Present',
    featured: true,
    description: {
      en: 'Designing, building and deploying custom web solutions, corporate sites and automation tools. Focused on clean architecture, technical SEO and fast load times.',
      es: 'Diseño, desarrollo y despliegue de soluciones web a medida, webs corporativas y automatizaciones. Enfoque en arquitectura limpia, SEO técnico y velocidad.'
    },
    technicalPoints: {
      en: [
        'Full-stack development using Next.js App Router, TypeScript and Tailwind CSS.',
        'Automated CI/CD SEO auditing workflows with GitHub Actions.',
        'Custom domain setup, serverless forms and Vercel infrastructure.'
      ],
      es: [
        'Desarrollo full-stack con Next.js App Router, TypeScript y Tailwind CSS.',
        'Workflows automatizados de auditoría SEO en GitHub Actions.',
        'Gestión de dominios, formularios serverless y despliegue en Vercel.'
      ]
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO'],
    githubUrl: 'https://github.com/victooorltt/ltevo-web',
    liveUrl: 'https://ltevo.com'
  },
  {
    id: 'google-maps-pipeline',
    title: 'Google Maps Lead Pipeline',
    subtitle: {
      en: 'Private automation tool for extracting and structuring local business data.',
      es: 'Herramienta privada para extraer y estructurar datos de negocios en Google Maps.'
    },
    period: '2025',
    featured: false,
    description: {
      en: 'Custom pipeline that extracts, cleans and normalizes business contact data from Google Maps to streamline B2B prospecting workflows.',
      es: 'Pipeline propio que recopila, limpia y estructura datos de contacto de negocios a partir de Google Maps para prospección comercial.'
    },
    technicalPoints: {
      en: [
        'Automated request orchestration and rate-limit handling.',
        'Data normalization and regex validation for contacts, phones and domains.',
        'Clean export into structured datasets ready for CRM ingestion.'
      ],
      es: [
        'Orquestación automatizada de peticiones y control de límites.',
        'Normalización de datos y validación de teléfonos y dominios con regex.',
        'Exportación estructurada lista para ingesta directa en CRM.'
      ]
    },
    technologies: ['Python', 'Automation', 'Data Processing'],
    isPrivate: true
  }
];
