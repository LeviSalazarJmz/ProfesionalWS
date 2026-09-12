import { useState, useEffect, startTransition } from 'react';
import { Navbar } from './components/navbar';
import { Carousel } from './components/Carousel';
import { cvData } from './data/cvData';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  ArrowUpRight, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Users, 
  ArrowUp, 
  Clock, 
  LayoutGrid, 
  Monitor, 
  Palette,
  FileDown 
} from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const carouselHorizontal = [
  { src: '/portfolio/d1w.png', label: 'Pieza 1', tag: 'ADOBE PHOTOSHOP' },
  { src: '/portfolio/d2w.png', label: 'Pieza 2', tag: 'ADOBE ILLUSTRATOR' },
  { src: '/portfolio/d3w.png', label: 'Pieza 3', tag: 'BRANDING / VECTOR' },
  { src: '/portfolio/d4w.png', label: 'Pieza 4', tag: 'COMPOSICIÓN DIGITAL' },
];

const carouselVertical = [
  { src: '/portfolio/d5w.png', label: 'Pieza 5', tag: 'POSTER / EDITORIAL' },
  { src: '/portfolio/d6w.png', label: 'Pieza 6', tag: 'DIRECCIÓN DE ARTE' },
  { src: '/portfolio/d7w.png', label: 'Pieza 7', tag: 'RETOQUE FOTOGRÁFICO' },
  { src: '/portfolio/d8w.png', label: 'Pieza 8', tag: 'AFTER EFFECTS / MOTION' },
];
const layersData = [
  {
    id: 4,
    code: "CAPA 04",
    title: "Frontend & UI",
    level: "Capa de Presentación e Interacción",
    description: "Diseño y desarrollo de interfaces reactivas con estricto apego al Diseño Centrado en el Usuario (DCU), accesibilidad y tiempos de carga instantáneos.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5 / CSS3 Semántico", "Diseño Centrado en el Usuario (DCU)"],
    color: "from-sky-400/20 to-sky-500/5",
    border: "border-sky-400/60",
    glow: "shadow-sky-500/20",
    textColor: "text-sky-400"
  },
  {
    id: 3,
    code: "CAPA 03",
    title: "Arquitectura & Backend",
    level: "Capa de Lógica, Datos e Inteligencia Artificial",
    description: "Construcción de servicios distribuidos, APIs RESTful, diseño de esquemas de bases de datos relacionales e integración de modelos de Machine y Deep Learning.",
    skills: ["Python", "Node.js", "Express", "PostgreSQL", "APIs RESTful", "Machine Learning", "Deep Learning"],
    color: "from-indigo-400/20 to-indigo-500/5",
    border: "border-indigo-400/60",
    glow: "shadow-indigo-500/20",
    textColor: "text-indigo-400"
  },
  {
    id: 2,
    code: "CAPA 02",
    title: "Metodologías & Media",
    level: "Capa de Coordinación Ágil y Producción Creativa",
    description: "Marcos ágiles de trabajo colaborativo, prototipado interactivo de alta fidelidad y suite creativa para desarrollo de marca y comunicación visual.",
    skills: ["Scrum", "Kanban", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Premiere Pro", "After Effects"],
    color: "from-violet-400/20 to-violet-500/5",
    border: "border-violet-400/60",
    glow: "shadow-violet-500/20",
    textColor: "text-violet-400"
  },
  {
    id: 1,
    code: "CAPA 01",
    title: "Host Systems",
    level: "Capa de Infraestructura, Kernel y Despliegue",
    description: "Entornos operativos de desarrollo multiplataforma, automatización de compilación, control de versiones distribuido y tuberías de integración continua.",
    skills: ["Linux (Ubuntu Server)", "Windows", "macOS", "Git", "GitHub", "Vercel", "Vite"],
    color: "from-emerald-400/20 to-emerald-500/5",
    border: "border-emerald-400/60",
    glow: "shadow-emerald-500/20",
    textColor: "text-emerald-400"
  }
];

function IsometricStackViewer() {
  const [selectedLayer, setSelectedLayer] = useState(4);
  const [exploded, setExploded] = useState(true);

  const activeData = layersData.find((l) => l.id === selectedLayer) || layersData[0];

  const getTransform = (id: number) => {
    if (!exploded) {
      if (id === 4) return "translateZ(45px)";
      if (id === 3) return "translateZ(30px)";
      if (id === 2) return "translateZ(15px)";
      return "translateZ(0px)";
    }
    if (id === 4) return "translateZ(135px)";
    if (id === 3) return "translateZ(80px)";
    if (id === 2) return "translateZ(25px)";
    return "translateZ(-30px)";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050811] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
      
      {/* COLUMNA IZQUIERDA: ESCENARIO 3D ISOMÉTRICO */}
      <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[400px] sm:min-h-[460px]">
        
        {/* Rótulo Perfil ISC */}
        <div className="absolute top-2 left-2 z-20 flex items-center gap-2 font-mono text-xs text-zinc-400">
          <span className="px-3 py-1 rounded-xl bg-black/70 border border-white/15 text-white font-bold tracking-wide">
            Perfil ISC
          </span>
          <span className="text-[11px] text-zinc-500 hidden sm:inline">
            TOCA UNA PLACA PARA AUDITAR
          </span>
        </div>

        {/* Botón Ensamblar / Explosionar */}
        <div className="absolute top-2 right-2 z-20">
          <button
            onClick={() => setExploded(!exploded)}
            className="px-3.5 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            {exploded ? "Ensamblar Stack" : "Explosionar Stack"}
          </button>
        </div>

        {/* Contenedor 3D */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center [perspective:1000px] mt-6">
          <div
            className="relative w-48 h-48 sm:w-56 sm:h-56 transition-transform duration-700 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(60deg) rotateZ(-40deg)",
            }}
          >
            {layersData.map((layer) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  style={{
                    transform: getTransform(layer.id),
                    transformStyle: "preserve-3d",
                  }}
                  className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 cursor-pointer backdrop-blur-md flex flex-col justify-end p-4 pb-3 select-none ${
                    isSelected
                      ? `${layer.border} bg-gradient-to-br ${layer.color} shadow-2xl ${layer.glow} scale-105 ring-2 ring-white/20`
                      : "border-white/10 bg-[#090e1a]/85 hover:border-white/30 opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Nombre al pie del rectángulo */}
                  <div className="pointer-events-none text-center">
                    <span className="font-bold text-sm sm:text-base text-white tracking-wide block drop-shadow-md">
                      {layer.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estado al pie */}
        <div className="text-center font-mono text-[11px] text-zinc-500 mt-4">
          ESTADO: {exploded ? "VISTA EXPLOSIONADA (DESPIECE DE CAPAS)" : "STACK ENSAMBLADO (PERFIL ISC)"}
        </div>
      </div>

      {/* COLUMNA DERECHA: PANEL INSPECTOR */}
      <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#090e1a]/95 border border-white/10 flex flex-col justify-between min-h-[380px] shadow-inner">
        <div>
          <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded bg-black/60 border border-white/10 ${activeData.textColor}`}>
                {activeData.code}
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase">
                {activeData.level}
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              0{activeData.id} / 04
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            {activeData.title}
          </h3>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            {activeData.description}
          </p>

          <div className="mb-6">
            <span className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Tecnologías y Estándares Asociados:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeData.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-lg bg-black/60 text-zinc-200 border border-white/10 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>PERFIL PROFESIONAL: ISC ITD</span>
          <span className="text-emerald-400">DISCIPLINA SELECCIONADA</span>
        </div>
      </div>

    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const [projectTab, setProjectTab] = useState<'all' | 'web' | 'design'>('all');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    const handleScroll = () => setShowScrollTop(window.scrollY > 350);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (tab: 'all' | 'web' | 'design') => {
    if (projectTab === tab) return;
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        setProjectTab(tab);
      });
    } else {
      startTransition(() => {
        setProjectTab(tab);
      });
    }
  };

  const webProject = cvData.projects[0];
  const designProject = cvData.projects[1];

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-sky-500/30 selection:text-sky-200 antialiased overflow-x-hidden">
      
      {loading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#02050b] transition-opacity duration-500">
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.25em] text-zinc-400 uppercase">
              SOFTWARE & SOLUTIONS
            </span>
            <h1 className="text-xl font-bold tracking-wider text-white uppercase">
              {cvData.personal.name}
            </h1>
            <div className="h-0.5 w-8 bg-sky-400 animate-pulse mt-1" />
          </div>
        </div>
      )}

      {/* Rejilla y resplandor ambiental */}
      <div className="fixed inset-0 bg-blueprint-pattern mask-radial opacity-40 pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-sky-500/15 via-indigo-500/5 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-36 pb-28 flex flex-col gap-32">
        
        {/* ========================================================================= */}
        {/* HERO SECTION BENTO                                                        */}
        {/* ========================================================================= */}
        <section id="inicio" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Tarjeta Principal de Identidad (8 columnas) */}
            <div className="relative lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/50 before:to-transparent">
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/10 text-sky-400 text-xs font-mono w-fit mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {cvData.personal.status}
                </div>

                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 leading-[1.08]">
                  Hola, soy{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-indigo-300">
                    {cvData.personal.name}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-zinc-300 font-medium mb-3">
                  {cvData.personal.role}
                </p>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                  {cvData.personal.bio}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href="#proyectos"
                  className="px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Ver Proyectos
                </a>

                <a
                  href="/resume.pdf"
                  download="CV_Levi_Salazar_Jimenez.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 hover:bg-zinc-900 border border-white/10 text-zinc-200 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Descargar CV</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 hover:bg-zinc-900 border border-white/10 text-zinc-200 text-sm font-medium transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar correo'}</span>
                </button>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={cvData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="p-3 rounded-xl bg-black/60 hover:bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={cvData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 rounded-xl bg-black/60 hover:bg-zinc-900 border border-white/10 text-zinc-400 hover:text-sky-400 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta de Fotografía Editorial (4 columnas) */}
            <div className="relative lg:col-span-4 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-white/10 shadow-2xl p-4 flex flex-col justify-between overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/40 before:to-transparent">
              <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-black">
                <img
                  src="/perfil.jpg"
                  alt={cvData.personal.name}
                  className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/400x500/0b0f19/38bdf8?text=Levi+Salazar';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span className="px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md">
                    ING. EN SISTEMAS
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVO
                  </span>
                </div>
              </div>

              <div className="pt-4 px-2 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>Durango, México</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Respuesta &lt;24h</span>
                </div>
              </div>
            </div>

          </div>

          {/* Fila Bento Secundaria: Métricas Clave de Carrera y Liderazgo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="p-6 rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-sky-500/30 transition-all">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                Formación Profesional
              </div>
              <div className="text-3xl font-black text-white tracking-tight mb-2">
                2020 – 2026
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Durango (ITD).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-sky-500/30 transition-all">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                Liderazgo de Equipos
              </div>
              <div className="text-3xl font-black text-white tracking-tight mb-2">
                +15 Personas
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Coordinación técnica en campo electoral (INE) bajo plazos estrictos y metas de alta exigencia.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-sky-500/30 transition-all">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                Gestión Pública (2022)
              </div>
              <div className="text-3xl font-black text-white tracking-tight mb-2">
                Director Municipal
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Titular del Instituto de la Juventud en Canatlán, articulando liderazgos y proyectos sociales.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PROYECTOS CON FILTRO INTERACTIVO                                          */}
        {/* ========================================================================= */}
        <section id="proyectos" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>PORTAFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Proyectos y Casos Prácticos
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
                Software funcional en producción y piezas de dirección visual.
              </p>
            </div>

            {/* Pestañas / Filtro Interactivo */}
            <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-white/10 text-xs font-medium">
              <button
                onClick={() => handleTabChange('all')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  projectTab === 'all'
                    ? 'bg-sky-400 text-slate-950 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Todos</span>
              </button>
              <button
                onClick={() => handleTabChange('web')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  projectTab === 'web'
                    ? 'bg-sky-400 text-slate-950 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Software Web</span>
              </button>
              <button
                onClick={() => handleTabChange('design')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  projectTab === 'design'
                    ? 'bg-sky-400 text-slate-950 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Diseño Multimedia</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            
            {/* Proyecto 1: Web en Producción */}
            {(projectTab === 'all' || projectTab === 'web') && webProject && (
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-white/10 hover:border-sky-400/40 transition-all duration-300 shadow-2xl">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                      Software en Producción
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {webProject.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    ● En línea en Vercel
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed">
                  {webProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {webProject.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/60 text-zinc-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  {webProject.liveUrl && (
                    <a
                      href={webProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Abrir aplicación web</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {webProject.githubUrl && (
                    <a
                      href={webProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repositorio</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Proyecto 2: Diseño y Multimedia */}
            {(projectTab === 'all' || projectTab === 'design') && designProject && (
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-white/10 hover:border-sky-400/40 transition-all duration-300 shadow-2xl">
                <div className="mb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    Dirección de Arte & Adobe Suite
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {designProject.title}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-4">
                    {designProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {designProject.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/60 text-zinc-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <span className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      Formato Cuadrado (1:1)
                    </span>
                    <Carousel images={carouselHorizontal} aspectRatioClass="aspect-square" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      Formato Vertical (4:3)
                    </span>
                    <Carousel images={carouselVertical} aspectRatioClass="aspect-[3/4]" />
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* VISTA EXPLOSIONADA ISOMÉTRICA (ISC STACK ARCHITECTURE)                    */}
        {/* ========================================================================= */}
        <section id="habilidades" className="scroll-mt-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Terminal className="w-4 h-4" />
                <span>ARQUITECTURA DE SISTEMAS // EXPLODED VIEW</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Ecosistema ISC en Capas
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
                Desglose isométrico: cada estrato representa una disciplina técnica que conforma mi perfil en Ingeniería en Sistemas Computacionales.
              </p>
            </div>
          </div>

          <IsometricStackViewer />
        </section>

        {/* ========================================================================= */}
        {/* TRAYECTORIA Y LIDERAZGO                                                   */}
        {/* ========================================================================= */}
        <section id="experiencia" className="scroll-mt-32">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4" />
            <span>EXPERIENCIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Trayectoria y Liderazgo
          </h2>
          <p className="text-zinc-400 mb-12 max-w-xl text-sm leading-relaxed">
            Experiencia en coordinación de equipos, gestión pública y formación en sistemas.
          </p>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-800 space-y-10">
            {cvData.experience.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-sky-400 transition-all" />

                <div className="p-7 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {idx === 0 ? <Briefcase className="w-4 h-4 text-sky-400" /> : 
                       idx === 1 ? <Users className="w-4 h-4 text-sky-400" /> : 
                       <GraduationCap className="w-4 h-4 text-sky-400" />}
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/60 text-zinc-300 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-sky-400 mb-4">{exp.company}</div>

                  <ul className="space-y-2 text-zinc-300 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-sky-400 mt-0.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CONTACTO                                                                  */}
        {/* ========================================================================= */}
        <section id="contacto" className="scroll-mt-32 pb-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-white/10 text-center flex flex-col items-center shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hablemos sobre una oportunidad
            </h2>
            <p className="text-zinc-400 max-w-lg mb-10 text-sm sm:text-base leading-relaxed">
              Estoy disponible para proyectos de desarrollo Frontend, ingeniería de software o vacantes en equipos colaborativos.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${cvData.personal.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar correo</span>
              </a>

              <a
                href="/resume.pdf"
                download="CV_Levi_Salazar_Jimenez.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black/60 hover:bg-zinc-900 text-zinc-200 text-sm font-medium border border-white/10 transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Descargar CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black/60 hover:bg-zinc-900 text-zinc-200 text-sm font-medium border border-white/10 transition-all hover:scale-[1.02]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                <span>{copied ? '¡Copiado!' : cvData.personal.email}</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/10 bg-black py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 text-sm">
          <div>
            <span className="block font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Disponibilidad
            </span>
            <p className="text-zinc-300 leading-relaxed">
              Respuesta en menos de 24 horas para procesos de selección o desarrollo de proyectos.
            </p>
          </div>

          <div>
            <span className="block font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Ubicación
            </span>
            <p className="text-zinc-300 leading-relaxed">
              {cvData.personal.location}
              <br />
              <span className="text-zinc-500">Disponible para modalidad Remota o Híbrida</span>
            </p>
          </div>

          <div>
            <span className="block font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
              Enlaces Directos
            </span>
            <div className="flex flex-col gap-2 text-zinc-300">
              <a href={cvData.personal.github} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                GitHub ↗
              </a>
              <a href={cvData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                LinkedIn ↗
              </a>
              <a href={`mailto:${cvData.personal.email}`} className="hover:text-sky-400 transition-colors">
                {cvData.personal.email} ↗
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <span>{cvData.personal.name} · SOFTWARE & SOLUTIONS</span>
          <span>DURANGO, MX · © 2026</span>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-zinc-900 border border-white/20 text-white shadow-xl hover:bg-sky-400 hover:text-slate-950 transition-all hover:scale-105"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}