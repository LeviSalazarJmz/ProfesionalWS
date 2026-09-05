import { useState, useEffect } from 'react';
import { cvData } from '../data/cvData';
import { FileDown, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Trayectoria', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-lg shadow-black/40'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Identidad / Estado */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-white tracking-tight group-hover:text-sky-400 transition-colors">
            {cvData.personal.name}
          </span>
        </a>

        {/* Enlaces de escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón de acción (Descargar CV) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileDown className="w-4 h-4 text-sky-400" />
            <span>CV PDF</span>
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-1"
          aria-label="Alternar menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Desplegable móvil */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors"
          >
            <FileDown className="w-4 h-4" />
            Descargar CV en PDF
          </a>
        </div>
      )}
    </header>
  );
};