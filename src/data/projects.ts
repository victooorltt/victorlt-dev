import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'prediction-market-system',
    title: 'Prediction Market & Order Book Engine',
    subtitle: {
      en: 'Low-latency real-time market data streaming and local order book synchronization engine for Polymarket.',
      es: 'Motor de streaming de datos de mercado en tiempo real y sincronización de order books locales para Polymarket.'
    },
    period: '2025',
    featured: true,
    description: {
      en: 'Engineered an asynchronous market data ingestion and processing system tailored for real-time prediction markets. The system maintains high-fidelity local order books, streams continuous tick data via WebSockets, and evaluates pricing spreads with low latency.',
      es: 'Desarrollo de un sistema asíncrono de ingesta y procesamiento de datos de mercado para plataformas de predicción en tiempo real. Mantiene order books locales de alta fidelidad, procesa flujos continuos vía WebSockets y evalúa spreads con baja latencia.'
    },
    technicalPoints: {
      en: [
        'Local order book synchronization with sequence validation and automated delta-reconciliation over WebSockets.',
        'Asynchronous event loop utilizing FastAPI and Python asyncio for non-blocking market stream consumption.',
        'Structured real-time pricing analysis and spread opportunity evaluation pipeline.',
        'Containerized multi-service deployment with Docker and automated latency benchmarking.'
      ],
      es: [
        'Sincronización de order books locales con validación de secuencias y reconciliación de deltas sobre WebSockets.',
        'Bucle de eventos asíncrono con FastAPI y asyncio en Python para consumo no bloqueante de flujos de mercado.',
        'Pipeline estructurado de análisis de precios en tiempo real y detección de spreads/oportunidades.',
        'Despliegue multiservicio en contenedores Docker y benchmarking sistemático de latencia.'
      ]
    },
    details: {
      en: {
        architecture: [
          'WebSocket client worker continuously consuming market feeds and order book snapshots.',
          'In-memory state engine tracking bid/ask depth and emitting updates only on valid state changes.',
          'FastAPI REST endpoints for querying order book states, system health, and benchmark metrics.'
        ],
        challenges: [
          'Mitigating network jitter and out-of-order sequence arrivals through local sequence buffering.',
          'Minimizing JSON deserialization overhead during high-frequency volatility spikes.'
        ]
      },
      es: {
        architecture: [
          'Worker cliente WebSocket que consume flujos continuos de mercado y snapshots de profundidad de libro.',
          'Motor de estado en memoria que computa bid/ask depth y emite actualizaciones tras validar el orden.',
          'Endpoints REST con FastAPI para consultar estados del libro, salud del sistema y métricas de latencia.'
        ],
        challenges: [
          'Mitigación de desincronizaciones por fluctuaciones de red mediante buffers de secuencia local.',
          'Optimización de la deserialización de paquetes JSON durante picos de volatilidad.'
        ]
      }
    },
    technologies: ['Python', 'FastAPI', 'WebSockets', 'asyncio', 'Docker', 'REST APIs'],
    isPrivate: false
  },
  {
    id: 'ai-whatsapp-syntralabs',
    title: 'AI WhatsApp Agent & CRM Automation',
    subtitle: {
      en: 'Autonomous conversational assistant integrated with Meta WhatsApp Cloud API and Notion CRM.',
      es: 'Asistente conversacional autónomo integrado con Meta WhatsApp Cloud API y CRM en Notion.'
    },
    period: '2025',
    featured: true,
    description: {
      en: 'Production-ready conversational agent powered by OpenAI models and Meta Cloud API. Features context-aware session management in SQLite, automated B2B lead qualification, seamless sync into Notion CRM, and real-time email notifications via Resend.',
      es: 'Agente conversacional en producción basado en modelos de OpenAI y la Meta Cloud API. Cuenta con gestión de sesiones en SQLite, cualificación automática de prospectos B2B, sincronización directa con Notion CRM y alertas comerciales por correo mediante Resend.'
    },
    technicalPoints: {
      en: [
        'Direct integration with Meta WhatsApp Business Cloud API utilizing signed webhook verification.',
        'Session-based conversation persistence in SQLite to maintain multi-turn dialogue context across interactions.',
        'Structured lead qualification extracting prospect intent, budget, and contact info directly into Notion CRM.',
        'Resend email notification dispatch with responsive HTML alerts and local JSON fallback resilience.'
      ],
      es: [
        'Integración oficial con Meta WhatsApp Business Cloud API mediante verificación de firmas en webhooks.',
        'Persistencia de sesiones en SQLite para retener el contexto conversacional multiturno entre mensajes.',
        'Cualificación estructurada de leads extrayendo objetivos, empresa y contacto directamente a Notion CRM.',
        'Despacho de notificaciones comerciales vía Resend con plantillas HTML y mecanismo de fallback local.'
      ]
    },
    details: {
      en: {
        architecture: [
          'Express.js webhook receiver parsing inbound messages and dispatching async replies.',
          'OpenAI GPT-4o-mini integration with prompt engineering for guided qualification and intent extraction.',
          'Notion API SDK adapter creating database entries and triggering internal follow-ups.'
        ],
        challenges: [
          'Preventing duplicate webhook delivery from Meta through idempotent message ID deduplication.',
          'Graceful degradation to local fallback storage if external CRM endpoints become unreachable.'
        ]
      },
      es: {
        architecture: [
          'Receptor de webhooks en Express.js que procesa mensajes entrantes y despacha respuestas asíncronas.',
          'Integración con OpenAI GPT-4o-mini optimizada para extracción precisa de entidades y requerimientos.',
          'Adaptador de Notion API que crea registros estructurados en el CRM y activa flujos de seguimiento.'
        ],
        challenges: [
          'Prevención de procesamiento duplicado de eventos de Meta mediante deduplicación de IDs de mensaje.',
          'Mecanismo de fallback local para almacenar prospectos en JSON si los servicios externos no responden.'
        ]
      }
    },
    technologies: ['Node.js', 'Express', 'OpenAI API', 'WhatsApp Cloud API', 'Notion API', 'SQLite', 'Resend'],
    githubUrl: 'https://github.com/victooorltt/bot-whatsapp-syntralabs'
  },
  {
    id: 'ltevo-platform',
    title: 'LTEvo — Digital Solutions & Web Platform',
    subtitle: {
      en: 'Modern high-performance web platform, technical SEO architecture, and client engineering agency.',
      es: 'Plataforma web de alto rendimiento, arquitectura SEO técnica y desarrollo de soluciones digitales para clientes.'
    },
    period: '2024 — Present',
    featured: true,
    description: {
      en: 'Real-world digital product studio and agency codebase. Built with Next.js, React, TypeScript, and Tailwind CSS. Features dynamic MDX publishing pipelines, automated SEO audit workflows in CI/CD, serverless form processing via Resend, and production Vercel infrastructure.',
      es: 'Iniciativa y estudio de soluciones web reales para empresas y profesionales. Construido con Next.js, React, TypeScript y Tailwind CSS. Integra pipelines de contenido con MDX, auditorías automatizadas de SEO en CI/CD, formularios serverless con Resend y despliegue en Vercel.'
    },
    technicalPoints: {
      en: [
        'Modern architecture leveraging Next.js App Router, React Server Components, and Tailwind CSS v4.',
        'Automated CI/CD SEO audit workflows via GitHub Actions enforcing Core Web Vitals and metadata rigor.',
        'Type-safe server actions with Zod validation and transactional email delivery via Resend API.',
        'Production DNS management, custom domains, high Lighthouse scores, and sub-second load times on Vercel.'
      ],
      es: [
        'Arquitectura moderna con Next.js App Router, React Server Components y Tailwind CSS v4.',
        'Workflows de auditoría SEO automatizados en GitHub Actions para asegurar Core Web Vitals y metadatos.',
        'Server actions con tipado estricto mediante validación Zod y entrega transaccional vía Resend API.',
        'Gestión de DNS, dominios personalizados, puntuaciones Lighthouse elevadas y despliegues en Vercel.'
      ]
    },
    details: {
      en: {
        architecture: [
          'Full-stack Next.js application with modular UI components and utility-first styling.',
          'MDX remote integration with gray-matter frontmatter validation for technical content publishing.',
          'Custom edge caching rules and image optimization pipeline.'
        ],
        challenges: [
          'Balancing dynamic editorial capabilities with static build performance and high Lighthouse scores.',
          'Structuring resilient lead capture with client and server-side schema verification.'
        ]
      },
      es: {
        architecture: [
          'Aplicación full-stack Next.js con componentes modulares y diseño basado en utilidades.',
          'Integración de MDX con validación de frontmatter para publicación de artículos y recursos técnicos.',
          'Reglas de caché en edge y pipeline de optimización de imágenes para máxima velocidad.'
        ],
        challenges: [
          'Equilibrar capacidades editoriales dinámicas con rendimiento estático y altas puntuaciones Lighthouse.',
          'Estructurar captación de contactos resiliente con validación de esquemas en cliente y servidor.'
        ]
      }
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Resend', 'Zod', 'Vercel', 'SEO'],
    githubUrl: 'https://github.com/victooorltt/ltevo-web',
    liveUrl: 'https://ltevo.com'
  },
  {
    id: 'google-maps-pipeline',
    title: 'Google Maps Lead Data Pipeline',
    subtitle: {
      en: 'Private automation pipeline for geospatial data extraction, enrichment, and B2B prospecting workflows.',
      es: 'Pipeline privado de automatización para extracción de datos geoespaciales, enriquecimiento y prospección B2B.'
    },
    period: '2025',
    featured: false,
    description: {
      en: 'Automated data extraction and structuring engine designed to query and process localized business data from Google Maps. Built to feed sales prospecting workflows with structured contact details, website URLs, and category attributes.',
      es: 'Motor de extracción y estructuración de datos diseñado para recopilar y normalizar información de negocios locales a partir de Google Maps. Construido para nutrir pipelines de prospección comercial con datos de contacto, webs y categorías.'
    },
    technicalPoints: {
      en: [
        'Automated web interaction and request orchestration pipeline with anti-rate-limit backoff.',
        'Data normalization and deduplication routines transforming unstructured outputs into structured datasets.',
        'Export formats ready for direct ingestion into CRM systems and automated outreach tools.',
        'Modular architecture facilitating extensible scraping rules and targeted geospatial grids.'
      ],
      es: [
        'Pipeline automatizado de orquestación de peticiones con estrategias de backoff y control de límites.',
        'Rutinas de normalización y deduplicación que convierten datos no estructurados en esquemas limpios.',
        'Formatos de exportación optimizados para ingesta directa en CRMs y herramientas de prospección.',
        'Arquitectura modular que permite extender reglas de extracción sobre cuadrículas geoespaciales.'
      ]
    },
    details: {
      en: {
        architecture: [
          'Python data worker orchestrating headless scraping sessions and network payload parsing.',
          'Data cleaning and regex-based phone/email/domain validation pipeline.',
          'Structured CSV/JSON export layer with schema validation.'
        ],
        challenges: [
          'Handling dynamic DOM rendering and asynchronous infinite-scroll viewport triggers reliably.',
          'Preventing IP throttling through jittered intervals and session rotation.'
        ]
      },
      es: {
        architecture: [
          'Worker en Python que orquesta sesiones de extracción headless y análisis de respuestas de red.',
          'Pipeline de limpieza y validación por expresiones regulares de teléfonos, dominios y correos.',
          'Capa de exportación a CSV/JSON estructurado con validación de esquemas.'
        ],
        challenges: [
          'Gestión robusta de renderizado dinámico en el DOM y disparadores de scroll infinito asíncrono.',
          'Prevención de bloqueos temporales mediante intervalos con jitter y rotación de sesión.'
        ]
      }
    },
    technologies: ['Python', 'Automation', 'Data Processing', 'Regex', 'Data Pipelines'],
    isPrivate: true
  }
];
