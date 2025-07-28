import { useState } from 'react';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section
      className="overflow-hidden relative w-full max-w-[1920px] mx-auto"
      role="region"
      aria-label="Carrossel de banners"
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4 text-white text-3xl">
        <button onClick={previousSlide} aria-label="Slide anterior">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} aria-label="Próximo slide">
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`rounded-full w-3 h-3 ${
              i === current ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
