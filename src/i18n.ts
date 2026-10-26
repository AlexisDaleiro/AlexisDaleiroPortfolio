export type Lang = "es" | "en";

const EMAIL = "alexisdaleiro@gmail.com";
const GITHUB = "https://github.com/AlexisDaleiro";
const LINKEDIN = "https://www.linkedin.com/in/alexisdaleiro";
// The PDF itself is supplied by Alexis; drop it at public/cv/.
const CV = "/cv/alexis-daleiro-cv.pdf";

export const links = { email: EMAIL, github: GITHUB, linkedin: LINKEDIN, cv: CV };

type Look = {
  id: string;
  name: string;
  kind: string;
  body: string;
  stack: string[];
  year: string;
  site?: string;
  repo: string;
  // Looks without a public deploy are set as type; looks with one show the site.
  shot?: { desktop: string; mobile: string; alt: string; altMobile: string };
  facts?: [string, string][];
};

type Copy = {
  lang: Lang;
  htmlLang: string;
  title: string;
  description: string;
  other: { href: string; label: string; name: string };
  nav: { work: string; index: string; contact: string; cv: string };
  hero: { role: string; line: string; cv: string; write: string };
  look: { site: string; code: string; desktop: string; mobile: string; of: string };
  looks: Look[];
  index: { title: string; intro: string; rows: { name: string; what: string; tech: string; year: string; href: string }[] };
  about: { title: string; body: string[] };
  contact: { title: string; line: string; email: string };
};

const looksEs: Look[] = [
  {
    id: "districo",
    name: "Districo",
    kind: "Plataforma B2B",
    body: "Sitio, catálogo, pedidos y administración para un distribuidor mayorista de productos para mascotas. Monorepo con dos aplicaciones: el frontend Next.js es mío; la API NestJS con Prisma y PostgreSQL la desarrolla un socio.",
    stack: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    year: "2026",
    site: "https://frontend-districo.vercel.app",
    repo: "https://github.com/AlexisDaleiro/Frontend-Districo",
    shot: {
      desktop: "/looks/districo-desktop.webp",
      mobile: "/looks/districo-mobile.webp",
      alt: "Portada de Districo en escritorio: titular «Marcas para mascotas, al por mayor para tu comercio» sobre la foto de un perro.",
      altMobile: "Portada de Districo en un teléfono.",
    },
  },
  {
    id: "cfmoto",
    name: "CFMOTO",
    kind: "Demo comercial",
    body: "Demo comercial para CFMOTO Uruguay: 27 modelos y 32 páginas públicas generadas de forma estática. La cotización y WhatsApp están simulados. Se verifica con scripts propios de navegadores, interacciones, controles de producto y presupuesto de peso.",
    stack: ["Next.js 16", "React", "TypeScript", "Tailwind CSS 4"],
    year: "2026",
    site: "https://cfmoto-2.vercel.app",
    repo: "https://github.com/AlexisDaleiro/CFMoto-2",
    shot: {
      desktop: "/looks/cfmoto-desktop.webp",
      mobile: "/looks/cfmoto-mobile.webp",
      alt: "Portada de la demo CFMOTO Uruguay en escritorio: una moto de turismo en la costa y el titular CFMOTO Uruguay.",
      altMobile: "Portada de la demo CFMOTO Uruguay en un teléfono.",
    },
  },
  {
    id: "threeball",
    name: "ThreeBall 2D",
    kind: "Juego para kiosco",
    body: "Juego de básquet para tablets en eventos, instalable como PWA y jugable sin conexión después de la primera carga. HTML, CSS y JavaScript sin bundler ni dependencias: rondas de 45 segundos, puntajes, formulario y un panel de staff protegido con PIN.",
    stack: ["JavaScript", "PWA", "HTML", "CSS"],
    year: "2026",
    site: "https://basketflick2d.vercel.app",
    repo: "https://github.com/AlexisDaleiro/basketflick2d",
    shot: {
      desktop: "/looks/threeball-desktop.webp",
      mobile: "/looks/threeball-mobile.webp",
      alt: "Pantalla de inicio de ThreeBall 2D: aro de básquet, pelota amarilla y el botón «¡Toca aquí para jugar!».",
      altMobile: "Pantalla de inicio de ThreeBall 2D en un teléfono.",
    },
  },
  {
    id: "slider",
    name: "DistricoSlider",
    kind: "Puzzle white-label",
    body: "Puzzle deslizable de 3×3 y 4×4 para tablets en eventos. Un solo APK lleva dos marcas que se cambian desde un panel admin. El motor no depende de React ni del DOM, los registros quedan en IndexedDB y se sincronizan con una central en Google Sheets y Apps Script.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS 4", "Vitest", "IndexedDB"],
    year: "2026",
    repo: "https://github.com/AlexisDaleiro/DistricoSlider",
    facts: [
      ["Mezclas probadas", "20.000 en tests de propiedades"],
      ["Marcas por APK", "2"],
      ["Entregado en", "8 fases con criterios de aceptación"],
    ],
  },
  {
    id: "granoferta",
    name: "La Gran Oferta",
    kind: "E-commerce",
    body: "Supermercado online con stock por sucursal, carrito, checkout en tres pasos, pedidos con máquina de estados por rol y panel administrativo. Proyecto de portfolio: no procesa cobros reales.",
    stack: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Zod", "Vitest"],
    year: "2026",
    repo: "https://github.com/AlexisDaleiro/LaGranoferta",
    facts: [
      ["Catálogo", "60 productos en 27 categorías"],
      ["Comparador", "hasta 4 productos, precio por kilo o litro"],
      ["Dependencias", "9, cada una justificada"],
    ],
  },
];

const looksEn: Look[] = [
  {
    ...looksEs[0],
    kind: "B2B platform",
    body: "Website, catalog, ordering and admin for a pet-products wholesaler. A monorepo with two apps: I build the Next.js frontend; a partner builds the NestJS API with Prisma and PostgreSQL.",
    shot: {
      ...looksEs[0].shot!,
      alt: "Districo home on desktop: the headline “Marcas para mascotas, al por mayor para tu comercio” over a photo of a dog.",
      altMobile: "Districo home on a phone.",
    },
  },
  {
    ...looksEs[1],
    kind: "Sales demo",
    body: "Sales demo for CFMOTO Uruguay: 27 models and 32 statically generated public pages. Quotes and WhatsApp are simulated. Verified with my own scripts for browsers, interactions, product controls and page-weight budget.",
    shot: {
      ...looksEs[1].shot!,
      alt: "CFMOTO Uruguay demo home on desktop: a touring motorcycle on the coast under the headline CFMOTO Uruguay.",
      altMobile: "CFMOTO Uruguay demo home on a phone.",
    },
  },
  {
    ...looksEs[2],
    kind: "Kiosk game",
    body: "A basketball game for event tablets, installable as a PWA and playable offline after the first load. HTML, CSS and JavaScript with no bundler and no dependencies: 45-second rounds, scores, a sign-up form and a PIN-protected staff panel.",
    shot: {
      ...looksEs[2].shot!,
      alt: "ThreeBall 2D start screen: a hoop, a yellow ball and the button “¡Toca aquí para jugar!”.",
      altMobile: "ThreeBall 2D start screen on a phone.",
    },
  },
  {
    ...looksEs[3],
    kind: "White-label puzzle",
    body: "A 3×3 and 4×4 sliding puzzle for event tablets. One APK carries two brands, switched from an admin panel. The engine has no React or DOM dependency; entries live in IndexedDB and sync to a Google Sheets and Apps Script hub.",
    facts: [
      ["Shuffles tested", "20,000 in property-based tests"],
      ["Brands per APK", "2"],
      ["Delivered in", "8 phases with acceptance criteria"],
    ],
  },
  {
    ...looksEs[4],
    kind: "E-commerce",
    body: "An online supermarket with per-branch stock, cart, three-step checkout, role-based order state machine and admin panel. A portfolio project: it takes no real payments.",
    facts: [
      ["Catalog", "60 products in 27 categories"],
      ["Comparison", "up to 4 products, price per kilo or litre"],
      ["Dependencies", "9, each one justified"],
    ],
  },
];

const indexRows = (lang: Lang) => [
  { name: "Grupo-MAT", what: lang === "es" ? "Sitio de agencia de software B2B, ES/EN" : "B2B software agency site, ES/EN", tech: "Astro · TypeScript · Tailwind", year: "2026", href: `${GITHUB}/Grupo-MAT` },
  { name: "CFMoto", what: lang === "es" ? "Prototipo de showroom y catálogo" : "Showroom and catalog prototype", tech: "Astro · TypeScript", year: "2026", href: `${GITHUB}/CFMoto` },
  { name: "Proyecto final ANIMA", what: lang === "es" ? "Proyecto de cierre del bachillerato en desarrollo web" : "Final project of the web development program", tech: "JavaScript", year: "2025", href: `${GITHUB}/Proyecto-Fin-de-curso-ANIMA-Finest` },
  { name: "Eron IT Challenge", what: lang === "es" ? "API REST que agrupa directores por cantidad de películas" : "REST API ranking directors by film count", tech: "Java · Spring Boot", year: "2025", href: `${GITHUB}/Eron-It-Challenge` },
  { name: "PalaUP", what: lang === "es" ? "Buscador local de empleos" : "Local job search site", tech: "JavaScript", year: "2025", href: `${GITHUB}/PalaUP` },
  { name: "Hackflix", what: lang === "es" ? "Catálogo de películas, primer semestre ANIMA" : "Film catalog, first semester at ANIMA", tech: "JavaScript", year: "2025", href: `${GITHUB}/Hackflix` },
];

export const copy: Record<Lang, Copy> = {
  es: {
    lang: "es",
    htmlLang: "es-UY",
    title: "Alexis Daleiro · Desarrollador full-stack",
    description: "Portfolio de Alexis Daleiro, desarrollador full-stack junior en Uruguay. Proyectos desplegados y código público.",
    other: { href: "/en/", label: "EN", name: "English" },
    nav: { work: "Trabajos", index: "Índice", contact: "Contacto", cv: "CV" },
    hero: {
      role: "Desarrollador full-stack junior",
      line: "Uruguay. Disponible para equipos locales y remotos. Cada proyecto de esta página tiene su sitio o su código abierto.",
      cv: "Descargar CV",
      write: "Escribirme",
    },
    look: { site: "Ver sitio", code: "Ver código", desktop: "Escritorio", mobile: "Móvil", of: "de" },
    looks: looksEs,
    index: { title: "Índice", intro: "Más repositorios públicos, del más reciente al más antiguo.", rows: indexRows("es") },
    about: {
      title: "Cómo trabajo",
      body: [
        "Me formé en el bachillerato de desarrollo web de ANIMA Finest. Trabajo en TypeScript de punta a punta: Next.js y Astro en el frontend, NestJS, Supabase y PostgreSQL detrás, y Java con Spring Boot cuando el proyecto lo pide.",
        "Divido cada proyecto en fases con criterios de aceptación y dejo escrito cómo verificarlos. Los READMEs de los repositorios lo muestran.",
      ],
    },
    contact: { title: "Escribime.", line: "Respondo en español o en inglés.", email: EMAIL },
  },
  en: {
    lang: "en",
    htmlLang: "en",
    title: "Alexis Daleiro · Full-stack developer",
    description: "Portfolio of Alexis Daleiro, junior full-stack developer in Uruguay. Deployed projects and public code.",
    other: { href: "/", label: "ES", name: "Español" },
    nav: { work: "Work", index: "Index", contact: "Contact", cv: "CV" },
    hero: {
      role: "Junior full-stack developer",
      line: "Based in Uruguay, open to local and remote teams. Every project on this page has a live site or open code.",
      cv: "Download CV",
      write: "Write to me",
    },
    look: { site: "Visit site", code: "View code", desktop: "Desktop", mobile: "Mobile", of: "of" },
    looks: looksEn,
    index: { title: "Index", intro: "More public repositories, newest first.", rows: indexRows("en") },
    about: {
      title: "How I work",
      body: [
        "I trained in the web development program at ANIMA Finest. I work in TypeScript end to end: Next.js and Astro on the front, NestJS, Supabase and PostgreSQL behind them, and Java with Spring Boot when a project calls for it.",
        "I split every project into phases with acceptance criteria and write down how to verify them. The repository READMEs show it.",
      ],
    },
    contact: { title: "Write to me.", line: "I reply in Spanish or English.", email: EMAIL },
  },
};
