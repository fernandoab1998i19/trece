import { useState, useRef, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/hooks/use-reveal";
import { Logo } from "@/components/Logo";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import serviceImg from "@/assets/service-detail.png";
import manifestoImg from "@/assets/manifesto-detail.png";
import familyImg from "@/assets/family-warmth.png";
import remodelBeforeImg from "@/assets/remodel-before.png";
import remodelAfterImg from "@/assets/remodel-after.png";
import real1 from "@/assets/real-1.jpg";
import real2 from "@/assets/real-2.jpg";
import real3 from "@/assets/real-3.jpg";
import real4 from "@/assets/real-4.jpg";
import real5 from "@/assets/real-5.jpg";

const WHATSAPP_URL =
  "https://wa.me/59177019154?text=Hola%20TRECE%20Arquitectura%20e%20Ingenier%C3%ADa%2C%20quiero%20hablar%20sobre%20un%20proyecto.";
const INSTAGRAM_URL = "https://www.instagram.com/trece.arq.ing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRECE — Arquitectura e Ingeniería" },
      {
        name: "description",
        content:
          "Firma de arquitectura e ingeniería de autor. Diseñamos residencias de hormigón, madera y luz: espacios minimalistas que se habitan con los sentidos.",
      },
      { property: "og:title", content: "TRECE — Arquitectura e Ingeniería" },
      {
        property: "og:description",
        content:
          "Residencias de autor e ingeniería de alta precisión. Hormigón visto, madera y luz natural.",
      },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const projectsList = [
  {
    img: real1,
    name: "Residencia Nogal & Bouclé",
    location: "Obra Real TRECE, 2024",
    area: "Interiorismo & Iluminación LED",
    tag: "Panelería en Nogal & Mármol Gris",
    alt: "Sala principal con panelería de nogal, tira LED perimetral y sillones en bouclé crema por TRECE",
  },
  {
    img: real4,
    name: "Gran Comedor de Autor",
    location: "Obra Real TRECE, 2024",
    area: "12 Puestos de Confort",
    tag: "Mesa de Cristal & Madera Noble",
    alt: "Comedor de autor para 12 personas con mesa de cristal y sillas de madera por TRECE",
  },
  {
    img: real3,
    name: "Casa Terrena Unifamiliar",
    location: "Obra Real TRECE, 2024",
    area: "340 m² Construidos",
    tag: "Fachada Terracota & Iluminación Rasante",
    alt: "Residencia moderna unifamiliar de un nivel en terracota con iluminación rasante por TRECE",
  },
  {
    img: real2,
    name: "Open Plan & Cocina de Autor",
    location: "Obra Real TRECE, 2024",
    area: "Integración Total de Espacios",
    tag: "Comedor, Arte & Cocina Minimalista",
    alt: "Concepto abierto con comedor, arte geométrico y cocina minimalista gris por TRECE",
  },
] as const;

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-6 px-6 md:px-12 transition-all duration-500 bg-gradient-to-b from-black/60 via-black/25 to-transparent">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between">
        <a href="#" className="flex items-center transition-opacity hover:opacity-90">
          <Logo variant="horizontal" />
        </a>
        <div className="flex items-center gap-10">
          <div className="hidden items-center gap-10 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/80 lg:flex">
            <a href="#proyectos" className="transition-colors hover:text-white">
              Proyectos
            </a>
            <a href="#servicios" className="transition-colors hover:text-white">
              Servicios
            </a>
            <a href="#remodelacion" className="transition-colors hover:text-white">
              Remodelación
            </a>
            <a href="#familia" className="transition-colors hover:text-white">
              Familia TRECE
            </a>
            <a href="#manifiesto" className="transition-colors hover:text-white">
              Manifiesto
            </a>
            <a href="#contacto" className="transition-colors hover:text-white">
              Contacto
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-all hover:bg-white hover:text-black rounded-full backdrop-blur-md"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* 100% Viewport Single Spectacular Photography */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroImg}
          alt="Residencia moderna de hormigón y madera al atardecer por TRECE Arquitectura e Ingeniería"
          className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
          fetchPriority="high"
        />
        {/* Soft Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10" />
      </div>

      {/* Hero Content with Clean Typography */}
      <div className="relative z-20 mx-auto w-full max-w-[1500px] h-full px-6 md:px-12 flex flex-col justify-end pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          <div className="space-y-6 max-w-4xl">
            <Reveal delay={100}>
              <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[7.8rem] font-extralight tracking-tight text-white leading-[0.92] drop-shadow-2xl">
                Arquitectura <br />
                que se vive<span className="text-primary font-normal">.</span>
              </h1>
            </Reveal>
          </div>

          <Reveal delay={200} className="shrink-0 self-start md:self-end">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.28em] uppercase text-white transition-all border-b border-white/50 pb-2 hover:border-primary hover:text-primary"
            >
              <span>Ver Proyectos</span>
              <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


function Projects() {
  return (
    <section id="proyectos" className="bg-[#F4F4F0] px-6 py-28 md:px-12 md:py-40 border-t border-border/40">
      <div className="mx-auto max-w-[1500px]">
        
        {/* Header Galería */}
        <Reveal>
          <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/50 pb-10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-primary mb-3 block">
                Galería de Obras
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground">
                Proyectos Selectos
              </h2>
            </div>
            <p className="max-w-md text-xs md:text-sm leading-relaxed text-muted-foreground font-sans">
              Obras donde la materia, la ingeniería sismorresistente y la luz natural construyen refugios atemporales.
            </p>
          </div>
        </Reveal>

        {/* Layout Asimétrico Masivo (Fotografía > 80% del espacio) */}
        <div className="space-y-32 md:space-y-48">
          
          {/* Par 1: Fotografía Masiva Izquierda + Foto Secundaria Desfasada Derecha */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <Reveal className="md:col-span-7">
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm relative">
                  <img
                    src={projectsList[0].img}
                    alt={projectsList[0].alt}
                    loading="lazy"
                    className="w-full h-[75vh] md:h-[88vh] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-black/75 text-white px-4 py-1.5 backdrop-blur-md rounded-full">
                      {projectsList[0].tag}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-border/60 pb-4">
                  <div>
                    <h3 className="font-serif text-3xl md:text-5xl font-extralight tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {projectsList[0].name}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {projectsList[0].location} · {projectsList[0].area}
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors shrink-0"
                  >
                    Ver Proyecto →
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-5 md:mt-32" delay={150}>
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm relative">
                  <img
                    src={projectsList[1].img}
                    alt={projectsList[1].alt}
                    loading="lazy"
                    className="w-full h-[55vh] md:h-[68vh] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-black/75 text-white px-4 py-1.5 backdrop-blur-md rounded-full">
                      {projectsList[1].tag}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-border/60 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-4xl font-extralight tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {projectsList[1].name}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {projectsList[1].location} · {projectsList[1].area}
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors shrink-0"
                  >
                    Ver Proyecto →
                  </a>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Par 2: Foto Secundaria Izquierda + Fotografía Masiva Derecha */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <Reveal className="md:col-span-5">
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm relative">
                  <img
                    src={projectsList[2].img}
                    alt={projectsList[2].alt}
                    loading="lazy"
                    className="w-full h-[55vh] md:h-[68vh] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-black/75 text-white px-4 py-1.5 backdrop-blur-md rounded-full">
                      {projectsList[2].tag}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-border/60 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-4xl font-extralight tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {projectsList[2].name}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {projectsList[2].location} · {projectsList[2].area}
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors shrink-0"
                  >
                    Ver Proyecto →
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal className="md:col-span-7 md:mt-24" delay={150}>
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm relative">
                  <img
                    src={projectsList[3].img}
                    alt={projectsList[3].alt}
                    loading="lazy"
                    className="w-full h-[75vh] md:h-[88vh] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-black/75 text-white px-4 py-1.5 backdrop-blur-md rounded-full">
                      {projectsList[3].tag}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-border/60 pb-4">
                  <div>
                    <h3 className="font-serif text-3xl md:text-5xl font-extralight tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {projectsList[3].name}
                    </h3>
                    <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {projectsList[3].location} · {projectsList[3].area}
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors shrink-0"
                  >
                    Ver Proyecto →
                  </a>
                </div>
              </article>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}

function ServicesAndProcess() {
  const disciplines = [
    {
      num: "01",
      title: "Arquitectura Residencial Exclusiva",
      desc: "Concebimos residencias de autor orientadas al bienestar, la luz y la armonía volumétrica. Espacios atemporales en hormigón visto y maderas nobles.",
    },
    {
      num: "02",
      title: "Ingeniería Estructural & Cálculo Avanzado",
      desc: "Cálculo sismorresistente desarrollado con máxima rigurosidad técnica. Proyectamos volados de gran envergadura y estructuras de alta complejidad.",
    },
    {
      num: "03",
      title: "Construcción Integral Llave en Mano",
      desc: "Ejecución de obra supervisada en sitio por nuestros ingenieros. Garantía de plazos cerrados, presupuesto transparente y máxima calidad.",
    },
    {
      num: "04",
      title: "Interiorismo & Materia Noble",
      desc: "Diseño de ambientes interiores a medida, selección táctil de acabados finos, iluminación arquitectónica de acento y paisajismo integrado.",
    },
  ];

  return (
    <section id="servicios" className="bg-[#F4F4F0] px-6 py-28 md:px-12 md:py-44 border-t border-border/40">
      <div className="mx-auto max-w-[1500px]">
        
        {/* Split Screen Masterclass: Fotografía Masiva Nítida Izquierda + Servicios a la Derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Lado Izquierdo: Fotografía Masiva Nítida, Cálida y Resaltante (>80% espacio visual) */}
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm relative shadow-2xl group cursor-pointer">
              <img
                src={serviceImg}
                alt="Textura de hormigón visto y madera teca bañados en luz natural"
                className="w-full h-[70vh] lg:h-[88vh] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute top-6 left-6 bg-black/80 text-white px-5 py-2 backdrop-blur-md rounded-full">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase">
                  Materia & Detalle Constructivo
                </span>
              </div>
            </div>
          </Reveal>

          {/* Lado Derecho: Lista de Servicios de Alto Contraste en Fondo Crema */}
          <Reveal className="lg:col-span-5 space-y-12" delay={150}>
            <div className="border-b border-border/60 pb-8">
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-primary mb-3 block">
                Especialidades de Alta Precisión
              </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.05] uppercase">
                Servicios <span className="text-primary font-light">/</span> Ingeniería
              </h2>
            </div>

            <div className="space-y-10">
              {disciplines.map((item) => (
                <div key={item.num} className="border-b border-border/50 pb-8 space-y-2.5 group">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-sans text-xl font-bold text-primary shrink-0 ml-4">
                      {item.num}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}

function BeforeAfterRemodel() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: "salas",
      label: "Salas & Áreas Sociales",
      desc: "Rediseño completo de salas principales con panelería en nogal oscuro, iluminación LED continua y mobiliario de autor.",
      beforeImg: remodelBeforeImg,
      afterImg: real1, // Real Instagram photo 1: Dark walnut living room with bouclé chairs
      afterTag: "DESPUÉS · OBRA REAL SALA DE NOGAL TRECE",
    },
    {
      id: "cocinas",
      label: "Cocinas & Comedores",
      desc: "Integración total de espacios open-plan, isla central, cuadros geométricos y cocina minimalista gris.",
      beforeImg: remodelBeforeImg,
      afterImg: real2, // Real Instagram photo 2: Open concept dining & kitchen
      afterTag: "DESPUÉS · OBRA REAL COCINA OPEN PLAN TRECE",
    },
    {
      id: "dormitorios",
      label: "Dormitorio Principal & Baños",
      desc: "Restructuración de suites ejecutivas con comedores de autor, cristal templado e iluminación de confort.",
      beforeImg: remodelBeforeImg,
      afterImg: real4, // Real Instagram photo 4: Executive 12-person dining room
      afterTag: "DESPUÉS · OBRA REAL COMEDOR DE AUTOR TRECE",
    },
    {
      id: "fachadas",
      label: "Fachadas & Exteriores",
      desc: "Renovación integral de exteriores unifamiliares en volumen terracota con iluminación rasante vertical.",
      beforeImg: remodelBeforeImg,
      afterImg: real3, // Real Instagram photo 3: Terracotta single-story home exterior
      afterTag: "DESPUÉS · OBRA REAL FACHADA TERRACOTA TRECE",
    },
  ];

  const currentSpace = categories[activeTab] || categories[0];
  if (!currentSpace) return null;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !e.touches || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <section id="remodelacion" className="bg-[#F4F4F0] px-4 py-16 sm:px-6 md:px-12 sm:py-28 md:py-44 border-t border-border/40">
      <div className="mx-auto max-w-[1500px] space-y-8 sm:space-y-14">
        
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 border-b border-border/60 pb-6 sm:pb-10">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-primary mb-2 sm:mb-3 block">
                REMODELACIÓN INTEGRAL & RESTRUCTURACIÓN
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground">
                Antes & Después
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
              {currentSpace.desc}
            </p>
          </div>
        </Reveal>

        {/* Navigable Interactive Category Tabs (Horizontally Scrollable on Mobile) */}
        <Reveal delay={100}>
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar sm:flex-wrap sm:pb-0" role="tablist" aria-label="Categorías de Remodelación">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(idx);
                  setSliderPos(50);
                }}
                className={`text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${
                  activeTab === idx
                    ? "bg-black text-white shadow-xl scale-[1.02]"
                    : "bg-black/5 text-foreground hover:bg-black/15 border border-black/10"
                }`}
                role="tab"
                aria-selected={activeTab === idx}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Interactive Before/After Master Slider (>80% visual height) */}
        <Reveal delay={150}>
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[55vh] sm:h-[68vh] md:h-[82vh] overflow-hidden rounded-sm select-none cursor-ew-resize shadow-2xl group transition-all"
          >
            {/* AFTER Image (Full background) */}
            <img
              src={currentSpace.afterImg}
              alt={`Espacio remodelado por TRECE Arquitectura e Ingeniería - ${currentSpace.label}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Desktop Full Tag */}
            <div className="hidden md:block absolute top-6 right-6 bg-black/85 text-white px-5 py-2 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.25em] uppercase z-10 pointer-events-none shadow-lg">
              {currentSpace.afterTag}
            </div>
            {/* Mobile Compact Tag */}
            <div className="md:hidden absolute top-4 right-4 bg-black/85 text-white px-3 py-1.5 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.2em] uppercase z-10 pointer-events-none shadow-lg">
              DESPUÉS
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentSpace.beforeImg}
                alt="Espacio antes de la remodelación"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? containerRef.current.clientWidth : "100%" }}
              />
              {/* Desktop Full Tag */}
              <div className="hidden md:block absolute top-6 left-6 bg-black/85 text-white px-5 py-2 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.25em] uppercase z-10 pointer-events-none shadow-lg">
                ANTES · ESTADO ORIGINAL
              </div>
              {/* Mobile Compact Tag */}
              <div className="md:hidden absolute top-4 left-4 bg-black/85 text-white px-3 py-1.5 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.2em] uppercase z-10 pointer-events-none shadow-lg">
                ANTES
              </div>
            </div>

            {/* Slider Handle Divider Line & Knob */}
            <div
              className="absolute inset-y-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-1 h-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.8)]" />
              <div className="absolute h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center font-bold text-xs sm:text-base tracking-wider border-2 border-black/10 transition-transform group-hover:scale-110">
                ↔
              </div>
            </div>
          </div>
        </Reveal>

        {/* Action Banner */}
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 border-t border-border/60 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
              ¿Tienes una residencia o espacio que deseas transformar? Analizamos la estructura original y ejecutamos la renovación integral con las obras reales de nuestro portafolio.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-foreground/20 bg-foreground/5 px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background rounded-full shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Cotizar Remodelación →</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function FamilyWarmth() {
  return (
    <section id="familia" className="bg-[#F4F4F0] px-6 py-28 md:px-12 md:py-44 border-t border-border/40">
      <div className="mx-auto max-w-[1500px]">
        {/* Split Screen Masterclass: Texto Cálido e Humano Izquierda + Fotografía Masiva Cálida Derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Lado Izquierdo: Copywriting Emocional & Calidez Humana */}
          <Reveal className="lg:col-span-5 space-y-10">
            <div className="space-y-4 border-b border-border/60 pb-8">
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-primary block">
                TRECE / ARQ & ING · CERCANÍA & FAMILIA
              </span>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-foreground leading-[1.02]">
                Te hacemos parte de nuestra familia desde el primer trazo.
              </h2>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
              Para nosotros en <strong className="font-semibold text-foreground">TRECE</strong>, construir tu proyecto no es una transacción comercial; es abrirte las puertas de nuestra casa. Tratamos cada espacio con el mismo afecto, rigor y cuidado con el que diseñaríamos la residencia de nuestra propia familia.
            </p>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="font-sans text-base font-bold text-foreground uppercase tracking-wider">
                    Acompañamiento Directo & Personal
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Sin intermediarios ni secretarios. Te reúnes directamente con nuestros arquitectos e ingenieros fundadores en cada etapa del proyecto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="font-sans text-base font-bold text-foreground uppercase tracking-wider">
                    Transparencia & Puertas Abiertas
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Recibirás visitas guiadas a obra, reportes semanales honestos y asesoría sincera sobre materiales, tiempos y presupuestos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="font-sans text-base font-bold text-foreground uppercase tracking-wider">
                    Un Hogar Hecho para Perdurar
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Diseñamos pensando en tus mañanas, tus reuniones familiares y la paz de tus años futuros. Tu tranquilidad es nuestro verdadero compromiso.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-foreground/20 bg-foreground/5 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background rounded-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Conversar con la Familia TRECE →</span>
              </a>
            </div>
          </Reveal>

          {/* Lado Derecho: Fotografía Masiva Cálida (>80% Espacio Visual) */}
          <Reveal className="lg:col-span-7" delay={150}>
            <div className="overflow-hidden rounded-sm relative shadow-2xl group cursor-pointer">
              <img
                src={familyImg}
                alt="Ambiente acogedor de arquitectura en madera teca y luz de atardecer en Casa TRECE"
                className="w-full h-[70vh] lg:h-[85vh] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 text-white px-5 py-2.5 backdrop-blur-md rounded-full">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase">
                  Casa TRECE · Calidez & Confort Atemporal
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifiesto" className="bg-[#F4F4F0] px-6 py-28 md:px-12 md:py-44 border-t border-border/40">
      <div className="mx-auto max-w-[1500px]">
        {/* Split Screen (50/50 o 60/40) Fotografía Masiva Izquierda + Texto Gigante Derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Lado Izquierdo: Fotografía Masiva (> 80% Espacio Visual) */}
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm relative shadow-2xl">
              <img
                src={manifestoImg}
                alt="Detalle de escalera flotante de hormigón y luz cenital"
                className="w-full h-[70vh] lg:h-[85vh] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black/75 px-5 py-2.5 backdrop-blur-md rounded-full">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white">
                  Manifiesto de Materia & Silencio
                </span>
              </div>
            </div>
          </Reveal>

          {/* Lado Derecho: Título Enorme + Párrafo Profundo + Métricas Sutiles */}
          <Reveal className="lg:col-span-5 space-y-10" delay={150}>
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-primary block">
                Filosofía de Obra
              </span>
              <h2 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight text-foreground leading-[1.02]">
                Diseñamos desde la materia, no desde la moda.
              </h2>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
              Creemos en el hormigón que muestra su textura pura, en la madera que cambia de tono con los años y en los ventanales que convierten el paisaje en parte esencial de la residencia. Trabajamos con un cupo limitado de clientes por año, porque la arquitectura que perdura exige tiempo, oficio y silencio.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-extralight text-foreground">15+</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mt-1">Años de obra</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-extralight text-foreground">42</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mt-1">Proyectos</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-extralight text-foreground">8</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mt-1">Premios</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative min-h-[80vh] bg-black text-white overflow-hidden flex flex-col justify-center items-center text-center px-6 py-32">
      {/* Fotografía de Fondo Inmersiva */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40">
        <img
          src={heroImg}
          alt="Vista nocturna de residencia diseñada por TRECE"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/90" />
      </div>

      {/* CTA Inmenso & Minimalista */}
      <div className="relative z-20 mx-auto max-w-5xl space-y-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-primary border-b border-primary/50 pb-1 inline-block">
            Contacto Directo
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl font-extralight tracking-tight text-white leading-none drop-shadow-2xl">
            Empecemos a diseñar tu espacio<span className="text-primary font-normal">.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-lg mx-auto text-sm md:text-base text-white/80 font-light leading-relaxed">
            Sin formularios corporativos ni esperas. Conversa directamente con nuestros arquitectos e ingenieros.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/50 bg-white/10 px-10 py-5 text-xs font-bold tracking-[0.25em] uppercase text-white transition-all hover:bg-white hover:text-black rounded-full backdrop-blur-md shadow-2xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InstagramShowcase() {
  const posts = [
    {
      img: real1,
      title: "Residencia Nogal · Sala Principal",
      tag: "Obra Entregada 2024",
    },
    {
      img: real4,
      title: "Gran Comedor de Autor para 12 Puestos",
      tag: "Interiorismo & Iluminación",
    },
    {
      img: real3,
      title: "Casa Terrena Unifamiliar · Fachada",
      tag: "Iluminación Arquitectónica Rasante",
    },
    {
      img: real2,
      title: "Open Plan · Comedor & Cocina Minimalista",
      tag: "Integración de Espacios",
    },
    {
      img: real5,
      title: "Área Social Integrada & Muro de Mármol",
      tag: "Materia & Confort Atemporal",
    },
  ];

  return (
    <section className="bg-[#F4F4F0] px-6 py-24 md:px-12 md:py-36 border-t border-border/40">
      <div className="mx-auto max-w-[1500px] space-y-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/60 pb-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-primary mb-2 block">
                INSTAGRAM OFICIAL · @TRECE.ARQ.ING
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-extralight tracking-tight text-foreground">
                Obras Reales en Vivo
              </h2>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-foreground/20 bg-foreground/5 px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background rounded-full shrink-0"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>Ver Feed en @trece.arq.ing →</span>
            </a>
          </div>
        </Reveal>

        {/* Real Instagram Posts Grid */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {posts.map((post, idx) => (
              <a
                key={idx}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-sm bg-black/5 aspect-[4/5] shadow-lg cursor-pointer"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white">
                  <InstagramIcon className="h-3.5 w-3.5" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 block">
                    {post.tag}
                  </span>
                  <h4 className="font-serif text-sm font-light leading-snug">
                    {post.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-16 md:px-12 bg-[#F4F4F0]">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-8 md:flex-row">
        <a href="#" className="flex items-center gap-3">
          <Logo variant="mark" size={44} />
          <div className="flex flex-col text-left">
            <span className="font-sans text-sm font-black tracking-[0.2em] text-foreground uppercase">
              TRECE
            </span>
            <span className="text-[9px] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
              Arquitectura e Ingeniería
            </span>
          </div>
        </a>

        <div className="flex flex-wrap justify-center gap-10 text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
          <a href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</a>
          <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
          <a href="#remodelacion" className="hover:text-foreground transition-colors">Remodelación</a>
          <a href="#familia" className="hover:text-foreground transition-colors">Familia TRECE</a>
          <a href="#manifiesto" className="hover:text-foreground transition-colors">Manifiesto</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} TRECE Arquitectura e Ingeniería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] font-sans text-foreground antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ServicesAndProcess />
        <BeforeAfterRemodel />
        <FamilyWarmth />
        <Manifesto />
        <Contact />
        <InstagramShowcase />
      </main>
      <Footer />
    </div>
  );
}
