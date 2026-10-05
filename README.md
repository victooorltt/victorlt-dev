# victorlt.dev — Personal Professional Portfolio

Portfolio personal y profesional de **Víctor Lasheras Tejedor**, estudiante de 3º curso de Ingeniería de Software en la Universidad de Oviedo y desarrollador de software.

Diseñado con un enfoque estático, minimalista, tecnológico y de alto rendimiento para recruiters y empresas tecnológicas (como Accenture, consultoras y scale-ups de producto).

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (v5) — Generación estática (SSG), cero JavaScript innecesario en cliente, velocidad máxima.
- **Tipado:** [TypeScript](https://www.typescriptlang.org/) (Strict mode).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4) con `@tailwindcss/vite`.
- **Tipografía:** [Geist](https://vercel.com/font) (Geist Sans y Geist Mono) optimizada con preconnect para evitar Cumulative Layout Shift (CLS).
- **Internacionalización (i18n):**
  - Inglés por defecto en `/` (`https://victorlt.dev/`)
  - Español en `/es` (`https://victorlt.dev/es`)
  - Etiquetas canónicas y `hreflang` automáticas.
- **SEO & Accesibilidad:**
  - Metadatos OpenGraph y Twitter Cards completos.
  - Datos estructurados Schema.org (`Person` y `WebSite`) en JSON-LD.
  - Sitemap XML (`/sitemap-index.xml`) y `robots.txt` generados en build.
  - Enlace accesible "Skip to main content", etiquetas semánticas y contrastes verificados.
- **Despliegue:** Optimizado para [Vercel](https://vercel.com/).

---

## 📁 Estructura del Proyecto

```
victorlt/
├── public/
│   ├── favicon.svg                  # Icono de pestaña (monograma VL geométrico)
│   ├── robots.txt                   # Instrucciones para crawlers y sitemap
│   ├── Victor_Lasheras_CV.pdf       # Archivo PDF del CV servido públicamente
│   └── images/
│       └── victor.jpg               # Fotografía profesional de Víctor
├── src/
│   ├── components/
│   │   ├── About.astro              # Sobre mí (ingeniería + tenis de competición nacional)
│   │   ├── Certifications.astro     # Certificaciones basadas en datos
│   │   ├── Contact.astro            # Sección de contacto (mailto + copiar email + redes)
│   │   ├── Education.astro          # Formación académica (Universidad de Oviedo)
│   │   ├── Experience.astro         # Trayectoria profesional (LTEvo con clientes reales)
│   │   ├── Footer.astro             # Pie de página minimalista
│   │   ├── Header.astro             # Barra de navegación fija con selector EN / ES y CTA
│   │   ├── Hero.astro               # Cabecera principal con foto, titular y botones
│   │   ├── ProjectCard.astro        # Tarjeta de proyecto con detalles técnicos expandibles
│   │   ├── SelectedWork.astro       # Contenedor de proyectos seleccionados
│   │   ├── SEO.astro                # Encabezado SEO, OpenGraph y Schema.org
│   │   └── Technologies.astro       # Stack de tecnologías agrupadas por áreas (sin barras ficticias)
│   ├── data/
│   │   ├── certifications.ts        # Datos de certificaciones (fácilmente editable)
│   │   ├── education.ts             # Datos de formación universitaria
│   │   ├── experience.ts            # Datos de experiencia profesional
│   │   ├── projects.ts              # Proyectos técnicos seleccionados con arquitectura y retos
│   │   └── technologies.ts          # Categorías y badges de tecnologías
│   ├── i18n/
│   │   └── translations.ts          # Diccionario de textos en inglés y español
│   ├── layouts/
│   │   └── Layout.astro             # Estructura HTML base con fuentes y metadatos
│   ├── pages/
│   │   ├── index.astro              # Landing page principal en Inglés (/)
│   │   └── es/
│   │       └── index.astro          # Landing page en Español (/es)
│   ├── styles/
│   │   └── global.css               # Configuración de Tailwind v4 y estilos globales
│   └── types/
│       └── index.ts                 # Tipos e interfaces de TypeScript
├── astro.config.mjs                 # Configuración de Astro, Tailwind y Sitemap
├── package.json                     # Scripts y dependencias del proyecto
├── tsconfig.json                    # Configuración estricta de TypeScript
└── README.md
```

---

## 💻 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en local (http://localhost:4321)
npm run dev

# Validar tipos de TypeScript
npm run check

# Compilar para producción (genera la carpeta dist/)
npm run build

# Previsualizar el resultado de producción localmente
npm run preview
```

---

## 📝 Guía para Modificar Contenido

### 1. ¿Cómo añadir un nuevo proyecto?
Abre [`src/data/projects.ts`](file:///mnt/c/Users/anate/Desktop/work/victorlt/src/data/projects.ts) y añade un nuevo objeto al array `projects`:

```typescript
{
  id: 'mi-nuevo-proyecto',
  title: 'Nombre del Proyecto',
  subtitle: {
    en: 'One-line summary in English',
    es: 'Resumen en una línea en español'
  },
  period: '2026',
  featured: true,
  description: {
    en: 'Detailed technical description...',
    es: 'Descripción técnica detallada...'
  },
  technicalPoints: {
    en: ['Bullet point 1', 'Bullet point 2'],
    es: ['Punto técnico 1', 'Punto técnico 2']
  },
  details: {
    en: {
      architecture: ['Worker architecture...'],
      challenges: ['Latency optimization...']
    },
    es: {
      architecture: ['Arquitectura del worker...'],
      challenges: ['Optimización de latencia...']
    }
  },
  technologies: ['Python', 'Docker', 'FastAPI'],
  githubUrl: 'https://github.com/victooorltt/tu-repo', // opcional
  liveUrl: 'https://demo.com',                         // opcional
  isPrivate: false                                    // si es true, muestra badge "Private Repository"
}
```

### 2. ¿Cómo añadir o actualizar un certificado?
Abre [`src/data/certifications.ts`](file:///mnt/c/Users/anate/Desktop/work/victorlt/src/data/certifications.ts) y añade un elemento al array `certifications`:

```typescript
{
  id: 'nuevo-certificado',
  title: 'Nombre del Certificado',
  organization: 'Entidad emisora',
  date: '2026',
  hours: '40h', // opcional
  credentialUrl: 'https://enlace-a-credencial.com', // opcional
  category: 'ai' // 'ai' | 'cloud' | 'programming'
}
```

### 3. ¿Dónde colocar tu fotografía?
El componente de imagen está configurado para cargar la foto desde:
```
/public/images/victor.jpg
```
Actualmente ya se ha copiado automáticamente tu fotografía profesional a dicha ruta. Si en el futuro quieres actualizarla por otra foto más reciente, solo tienes que sustituir ese archivo manteniendo el mismo nombre o la misma ruta.

### 4. ¿Dónde colocar el PDF de tu CV?
El botón de descarga "Download CV" apunta a:
```
/public/Victor_Lasheras_CV.pdf
```
Ya está colocado tu CV oficial en esa ruta. Para actualizarlo en cualquier momento, sustituye dicho archivo por la versión más reciente con el mismo nombre exacto.

---

## 🚀 Despliegue en Vercel y Dominio victorlt.dev

### Opción A — Despliegue mediante GitHub (Recomendada)
1. Sube este repositorio a tu cuenta de GitHub (`victooorltt`):
   ```bash
   git add .
   git commit -m "feat: portfolio victorlt.dev v1.0"
   git remote add origin https://github.com/victooorltt/victorlt-dev.git
   git push -u origin main
   ```
2. Entra en tu panel de [Vercel](https://vercel.com) y pulsa en **Add New... > Project**.
3. Importa el repositorio `victorlt-dev`. Vercel detectará automáticamente que es un proyecto **Astro** y configurará los comandos `npm run build` y la carpeta de salida `dist`.
4. Pulsa en **Deploy**. El sitio se construirá en pocos segundos.

### Opción B — Conectar el dominio personalizado `victorlt.dev`
1. En el proyecto de Vercel, ve a **Settings > Domains**.
2. Escribe `victorlt.dev` y pulsa **Add**.
3. Configura los registros DNS en tu proveedor de dominio (donde compraste `victorlt.dev`):
   - **Registro A:** Host `@` con valor `76.76.21.21`
   - **Registro CNAME (opcional para www):** Host `www` con valor `cname.vercel-dns.com`
4. Vercel emitirá automáticamente el certificado SSL/HTTPS gratuito de Let's Encrypt en cuestión de minutos.
