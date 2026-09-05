import { useState, useEffect } from 'react';
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
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  ArrowUp 
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

const technicalPillars = [
  {
    icon: Code2,
    title: "Frontend & Arquitectura de Interfaz",
    description: "Desarrollo de aplicaciones modernas y reactivas con estricta adherencia al Diseño Centrado en el Usuario (DCU), accesibilidad y rendimiento.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5 / CSS3 Semántico", "Diseño Centrado en el Usuario (DCU)"]
  },
  {
    icon: Cpu,
    title: "Backend, Datos & Inteligencia Artificial",
    description: "Construcción de servicios backend y fundamentos de IA para la optimización y transformación digital en entornos empresariales.",
    skills: ["Python", "Node.js", "Express", "PostgreSQL", "APIs RESTful", "Machine Learning", "Deep Learning"]
  },
  {
    icon: Terminal,
    title: "Sistemas Operativos & Infraestructura",
    description: "Manejo integral de entornos operativos para desarrollo, despliegue continuo y control de versiones distribuido.",
    skills: ["Linux / Ubuntu Server", "Windows", "macOS", "Git", "GitHub", "Vercel", "Vite"]
  },
  {
    icon: Layers,
    title: "Metodologías & Suite Multimedia",
    description: "Gestión ágil de proyectos colaborativos y dominio completo de herramientas visuales para diseño de interfaz y activos digitales.",
    skills: ["Metodologías Ágiles (Scrum / Kanban)", "Figma", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"]
  }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
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

  const webProject = cvData.projects[0];
  const designProject = cvData.projects[1];

  return (
    <div className="relative min-h-screen bg-[#040711] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 antialiased overflow-x-hidden">
      
      {loading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#02050b] transition-opacity duration-500">
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.3em] text-sky-400/80 uppercase">
              SOFTWARE & SOLUTIONS
            </span>
            <h1 className="text-xl font-black tracking-widest text-white uppercase">
              {cvData.personal.name}
            </h1>
            <div className="h-0.5 w-10 bg-sky-400 animate-pulse mt-1" />
          </div>
        </div>
      )}

      {/* Trama blueprint azulina y gradientes atmosféricos */}
      <div className="fixed inset-0 bg-blueprint-pattern mask-radial opacity-70 pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1050px] h-[520px] bg-gradient-to-b from-sky-600/15 via-indigo-950/20 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-sky-950/15 blur-[160px] pointer-events-none -z-10 rounded-full" />

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-36 pb-28 flex flex-col gap-36">
        
        {/* SECCIÓN HERO CON FOTO INTEGRADA */}
<section id="inicio" className="min-h-[75vh] flex flex-col justify-center scroll-mt-36">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* Columna de texto */}
    <div className="lg:col-span-8 flex flex-col justify-center">
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#080d1a]/90 border border-sky-900/40 text-sky-400 text-xs font-semibold w-fit mb-8 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {cvData.personal.status}
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.08]">
        Hola, soy{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-indigo-400">
          {cvData.personal.name}
        </span>
      </h1>

      <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-4">
        <span>{cvData.personal.role}</span>
      </div>

      <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 font-mono">
        <MapPin className="w-4 h-4 text-sky-400" />
        <span>{cvData.personal.location}</span>
      </div>

      <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-10">
        {cvData.personal.bio}
      </p>

      {/* Botones de acción y redes */}
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#proyectos"
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 font-bold transition-all hover:scale-[1.02] shadow-lg shadow-sky-500/20 active:scale-[0.98]"
        >
          Explorar Proyectos
        </a>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#0a0f1d]/90 hover:bg-[#11192e] border border-sky-950/80 text-slate-200 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-sky-400" />}
          <span>{copied ? '¡Correo copiado!' : 'Copiar email'}</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={cvData.personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-3.5 rounded-xl bg-[#0a0f1d]/80 hover:bg-[#11192e] border border-sky-950/70 text-slate-400 hover:text-white transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-3.5 rounded-xl bg-[#0a0f1d]/80 hover:bg-[#11192e] border border-sky-950/70 text-slate-400 hover:text-sky-400 transition-all"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    {/* Columna de fotografía enmarcada */}
    <div className="lg:col-span-4 flex justify-center">
      <div className="relative group w-64 h-80 sm:w-72 sm:h-96">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 to-indigo-500/10 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-sky-900/60 bg-[#080d1a]">
          <img
            src="/perfil.jpg"
            alt={cvData.personal.name}
            className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/400x500/080d1a/38bdf8?text=Levi+Salazar';
            }}
          />
        </div>
      </div>
    </div>

  </div>
</section>

        {/* PERFIL & MÉTRICAS INTEGRADAS EN VERTICAL */}
        <section className="scroll-mt-32 pt-6 border-t border-sky-950/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
                PERFIL & ENFOQUE PROFESIONAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                Ingeniería en Sistemas orientada al usuario y a la resolución práctica de problemas.
              </h2>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  Mi formación académica en el <span className="text-white font-medium">Instituto Tecnológico de Durango</span> me ha brindado bases firmes en desarrollo de software, lógica algorítmica y la aplicación estratégica de Inteligencia Artificial para la transformación digital empresarial.
                </p>
                <p>
                  Combino el rigor de los sistemas computacionales con metodologías de <span className="text-white font-medium">Diseño Centrado en el Usuario (DCU)</span> y producción multimedia, garantizando que cada solución web no solo sea sólida a nivel de código, sino accesible, veloz e intuitiva en producción.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8 bg-[#080d1a]/80 border border-sky-950/70 p-8 rounded-3xl backdrop-blur-sm shadow-xl shadow-black/40">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                  2020 – 2026
                </div>
                <div className="h-0.5 w-10 bg-sky-400 mb-2" />
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Ingeniería en Sistemas Computacionales · ITD
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                  +15 Personas
                </div>
                <div className="h-0.5 w-10 bg-sky-400 mb-2" />
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Personal coordinado bajo liderazgo técnico · INE
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                  100% DCU
                </div>
                <div className="h-0.5 w-10 bg-sky-400 mb-2" />
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Diseño Centrado en el Usuario & Accesibilidad
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="scroll-mt-32">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>PORTAFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Proyectos y Casos Prácticos
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl text-sm leading-relaxed">
            Desarrollo de software en producción y producción visual orientada a la experiencia de usuario.
          </p>

          <div className="flex flex-col gap-10">
            {webProject && (
              <div className="p-8 rounded-3xl bg-[#080d1a]/85 border border-sky-950/80 hover:border-sky-500/50 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.2)] transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block mb-1">
                      SOFTWARE EN PRODUCCIÓN
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {webProject.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                    ● Live en Vercel
                  </span>
                </div>

                <p className="text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
                  {webProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {webProject.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0d1527] text-slate-300 border border-sky-950/60">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-5 border-t border-sky-950/70">
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
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repositorio</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {designProject && (
              <div className="p-8 rounded-3xl bg-[#080d1a]/85 border border-sky-950/80 hover:border-indigo-500/40 transition-all duration-300">
                <div className="mb-6">
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block mb-1">
                    DIRECCIÓN DE ARTE & ADOBE SUITE
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {designProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-2xl leading-relaxed mb-4">
                    {designProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {designProject.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0d1527] text-slate-300 border border-sky-950/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-sky-950/70">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Colección A · Formato Cuadrado (1:1)
                    </span>
                    <Carousel images={carouselHorizontal} aspectRatioClass="aspect-square" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Colección B · Formato Vertical (4:3)
                    </span>
                    <Carousel images={carouselVertical} aspectRatioClass="aspect-[3/4]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* STACK TECNOLÓGICO VERTICAL */}
        <section id="habilidades" className="scroll-mt-32">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Code2 className="w-4 h-4" />
            <span>COMPETENCIAS TÉCNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Stack Tecnológico & Disciplinas
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl text-sm leading-relaxed">
            Conjunto integral de tecnologías, sistemas operativos y metodologías aplicadas en ingeniería de software y desarrollo de productos digitales.
          </p>

          <div className="flex flex-col gap-6">
            {technicalPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.title} 
                  className="p-8 rounded-3xl bg-[#080d1a]/85 border border-sky-950/70 hover:border-sky-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="max-w-md">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed pl-1">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="flex-1 flex flex-wrap gap-2 md:justify-end">
                      {pillar.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3.5 py-2 rounded-xl bg-[#0d1527] text-slate-300 border border-sky-950/60 hover:border-sky-500/40 hover:text-white transition-all font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section id="experiencia" className="scroll-mt-32">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Briefcase className="w-4 h-4" />
            <span>HISTORIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Trayectoria y Formación
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl text-sm leading-relaxed">
            Hitos profesionales de liderazgo y base formativa en ingeniería en sistemas.
          </p>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-950 space-y-12">
            {cvData.experience.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#040711] border-2 border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.8)] transition-all" />

                <div className="p-7 rounded-3xl bg-[#080d1a]/85 border border-sky-950/70">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {idx === 0 ? <Briefcase className="w-4 h-4 text-sky-400" /> : <GraduationCap className="w-4 h-4 text-indigo-400" />}
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0d1527] text-slate-300 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-sky-400 mb-4">{exp.company}</div>

                  <ul className="space-y-2.5 text-slate-300 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-sky-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-32 pb-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#080d1a]/95 border border-sky-950/80 text-center flex flex-col items-center shadow-2xl shadow-black/60">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              ¿Iniciamos una conversación?
            </h2>
            <p className="text-slate-400 max-w-lg mb-10 text-sm sm:text-base leading-relaxed">
              Disponible para puestos de desarrollo Frontend, ingeniería de software y creación de interfaces modernas.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${cvData.personal.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar correo directo</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#0d1527] hover:bg-[#131d36] text-slate-200 text-sm font-semibold border border-sky-950/70 transition-all hover:scale-[1.02]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-sky-400" />}
                <span>{copied ? '¡Copiado!' : cvData.personal.email}</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-sky-950/80 bg-[#02040a] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 text-sm">
          <div>
            <span className="block font-mono text-[11px] text-sky-400/80 uppercase tracking-widest mb-3">
              DISPONIBILIDAD & SLA
            </span>
            <p className="text-slate-300 font-medium leading-relaxed">
              Respuesta en menos de 24 horas para procesos de selección o desarrollo de proyectos.
            </p>
          </div>

          <div>
            <span className="block font-mono text-[11px] text-sky-400/80 uppercase tracking-widest mb-3">
              LOCALIZACIÓN
            </span>
            <p className="text-slate-300 font-medium leading-relaxed">
              {cvData.personal.location}
              <br />
              <span className="text-slate-500">Disponible en modalidad Remota o Híbrida</span>
            </p>
          </div>

          <div>
            <span className="block font-mono text-[11px] text-sky-400/80 uppercase tracking-widest mb-3">
              CANALES
            </span>
            <div className="flex flex-col gap-2 text-slate-300 font-medium">
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

        <div className="max-w-5xl mx-auto pt-8 border-t border-sky-950/50 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <span>{cvData.personal.name} · SOFTWARE & SOLUTIONS</span>
          <span>DURANGO, MX · © 2026</span>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0a0f1d]/90 border border-sky-900/60 text-white shadow-xl hover:bg-sky-400 hover:text-slate-950 transition-all hover:scale-105"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}