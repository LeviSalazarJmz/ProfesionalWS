import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: { src: string; label: string; tag: string }[];
  aspectRatioClass: string;
}

export const Carousel = ({ images, aspectRatioClass }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm group">
      
      <div className={`relative w-full ${aspectRatioClass} overflow-hidden flex items-center justify-center bg-zinc-950`}>
        <img
          src={images[current].src}
          alt={images[current].label}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/600x600/18181b/71717a?text=Cargando+Imagen';
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300 pointer-events-none">
          <span className="px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md">
            {images[current].tag}
          </span>
          <span className="text-zinc-400">
            {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black hover:scale-105"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={next}
        aria-label="Siguiente imagen"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black hover:scale-105"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir a diapositiva ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              current === idx ? 'w-5 bg-sky-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};