import type { EducationItem } from '../types';

export const education: EducationItem[] = [
  {
    degree: {
      en: 'B.S. in Software Engineering',
      es: 'Grado en Ingeniería de Software'
    },
    institution: 'Universidad de Oviedo',
    period: '2024 — Present',
    status: {
      en: 'Third Year',
      es: 'Tercer Curso'
    },
    location: 'Oviedo, Asturias, Spain',
    details: {
      en: [
        'Rigorous curriculum focusing on software architecture, algorithms, data structures, concurrent programming, databases, and software design patterns.',
        'Practical emphasis on building maintainable systems, testing methodologies, and collaborative engineering practices.'
      ],
      es: [
        'Formación rigurosa en arquitectura de software, algoritmos, estructuras de datos, programación concurrente, bases de datos y patrones de diseño.',
        'Énfasis práctico en la construcción de sistemas mantenibles, metodologías de testing y buenas prácticas de ingeniería.'
      ]
    }
  }
];
