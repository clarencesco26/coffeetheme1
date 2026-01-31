import React, { useEffect, useMemo, useState } from 'react';
import { Container } from '../components';

export const Hero: React.FC = () => {
  const images = useMemo(
    () => [
      'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
    ],
    []
  );
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-24 lg:py-28 bg-cream-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=2000&q=80)'
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/40" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-white/80 text-coffee-700 border border-coffee-100 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase shadow-sm">
              Freshly Brewed
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-display font-bold text-coffee-900 leading-tight">
              Brew your perfect moment.
            </h1>
            <p className="mt-4 text-lg text-coffee-700 leading-relaxed max-w-xl">
              Artisanal coffee crafted with calm precision—small-batch roasts, clean flavors, and a
              space designed for slow mornings and focused afternoons.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-coffee-100 text-coffee-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 1 15 0v4.5a2.25 2.25 0 0 1-2.25 2.25h-10.5A2.25 2.25 0 0 1 4.5 16.5V12Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-coffee-900">Signature Roasts</p>
                  <p className="text-sm text-coffee-600">Balanced, bright, and smooth.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-coffee-100 text-coffee-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75Zm-6.5 9.5c0-2.485 3.134-4.5 6.5-4.5s6.5 2.015 6.5 4.5v.75H5.5v-.75Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-coffee-900">Barista Led</p>
                  <p className="text-sm text-coffee-600">Thoughtful service, every cup.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-coffee-800 text-white px-6 py-3 text-sm font-semibold shadow-md shadow-coffee-900/20 hover:bg-coffee-900 transition-colors"
              >
                View menu
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-coffee-200 bg-white text-coffee-800 px-6 py-3 text-sm font-semibold shadow-sm hover:border-coffee-300 hover:text-coffee-900 transition-colors"
              >
                Visit us today
              </button>
            </div>
          </div>

          <div className="hidden lg:flex w-full max-w-md">
            <div className="relative h-[420px] w-full rounded-[32px] overflow-hidden shadow-2xl border border-white/60 bg-white/60">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Coffee highlight"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
                  style={{ opacity: index === activeImage ? 1 : 0 }}
                  loading={index === activeImage ? 'eager' : 'lazy'}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
