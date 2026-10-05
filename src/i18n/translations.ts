import type { Locale } from '../types';

export const translations = {
  en: {
    meta: {
      title: 'Víctor Lasheras Tejedor — Software Engineering Student & Developer',
      description: 'Portfolio of Víctor Lasheras Tejedor, Software Engineering student at Universidad de Oviedo. Building software, web products and AI-powered tools.',
      keywords: 'Víctor Lasheras Tejedor, victorlt, software engineer, developer, Oviedo, Astro, TypeScript, Next.js, Python'
    },
    nav: {
      work: 'Work',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      downloadCv: 'CV'
    },
    hero: {
      badge: 'Software Engineering Student & Developer',
      name: 'Víctor Lasheras Tejedor',
      thesis: 'I build software, web products and AI-powered tools.',
      location: 'Oviedo, Spain · University of Oviedo',
      downloadCv: 'Download CV'
    },
    work: {
      title: 'Selected Work',
      privateRepo: 'Private'
    },
    experience: {
      title: 'Experience'
    },
    about: {
      title: 'About',
      p1: 'I am a third-year Software Engineering student at the University of Oviedo. I focus on software engineering, web development, applied AI and automation—building real products that work reliably in production.',
      tennisP: 'Outside of engineering, I compete in tennis at the national level, which brings discipline, focus and consistency to my day-to-day work.'
    },
    technologies: {
      title: 'Technologies'
    },
    education: {
      title: 'Education'
    },
    certifications: {
      title: 'Certifications'
    },
    contact: {
      title: 'Contact',
      description: "Feel free to reach out for opportunities, questions, or just to say hello."
    },
    footer: {
      rights: 'Víctor Lasheras Tejedor'
    }
  },
  es: {
    meta: {
      title: 'Víctor Lasheras Tejedor — Estudiante de Ingeniería de Software y Desarrollador',
      description: 'Portfolio de Víctor Lasheras Tejedor, estudiante de Ingeniería de Software en la Universidad de Oviedo. Desarrollo de software, productos web y herramientas basadas en IA.',
      keywords: 'Víctor Lasheras Tejedor, victorlt, desarrollador, software engineer, Oviedo, Astro, TypeScript, Next.js, Python'
    },
    nav: {
      work: 'Proyectos',
      experience: 'Experiencia',
      about: 'Sobre mí',
      contact: 'Contacto',
      downloadCv: 'CV'
    },
    hero: {
      badge: 'Estudiante de Ingeniería de Software y Desarrollador',
      name: 'Víctor Lasheras Tejedor',
      thesis: 'Construyo software, productos web y herramientas basadas en IA.',
      location: 'Oviedo, España · Universidad de Oviedo',
      downloadCv: 'Descargar CV'
    },
    work: {
      title: 'Proyectos',
      privateRepo: 'Privado'
    },
    experience: {
      title: 'Experiencia'
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy estudiante de tercer curso de Ingeniería de Software en la Universidad de Oviedo. Me centro en ingeniería de software, desarrollo web, IA aplicada y automatización, construyendo productos reales que funcionan en producción.',
      tennisP: 'Fuera de la programación, compito en tenis a nivel nacional, lo que me aporta disciplina, concentración y constancia en el trabajo diario.'
    },
    technologies: {
      title: 'Tecnologías'
    },
    education: {
      title: 'Educación'
    },
    certifications: {
      title: 'Certificaciones'
    },
    contact: {
      title: 'Contacto',
      description: 'Puedes escribirme directamente para cualquier consulta, oportunidad o propuesta.'
    },
    footer: {
      rights: 'Víctor Lasheras Tejedor'
    }
  }
} as const;

export function useTranslations(locale: Locale) {
  return translations[locale];
}
