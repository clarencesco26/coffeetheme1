import React from 'react';
import { Container } from '../components';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-cream-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center text-coffee-700 text-xs font-semibold tracking-[0.2em] uppercase underline underline-offset-4 decoration-coffee-700">
              Our Story
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-display font-bold text-coffee-900 leading-tight">
              Crafted with intention, brewed for comfort.
            </h2>
            <p className="mt-4 text-coffee-700 text-lg leading-relaxed max-w-xl">
              We source small-lot beans, roast in gentle batches, and design every cup to feel like a
              pause in your day. Our space is calm, our flavors are clean, and our rituals are
              thoughtfully modern.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-coffee-100 text-coffee-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75Zm-6.5 9.5c0-2.485 3.134-4.5 6.5-4.5s6.5 2.015 6.5 4.5v.75H5.5v-.75Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-coffee-900">Curated Origins</p>
                  <p className="text-sm text-coffee-600">Seasonal beans from ethical farms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-coffee-100 text-coffee-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M7.5 8.25l-3.75 3.75 3.75 3.75" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-coffee-900">Slow Crafted</p>
                  <p className="text-sm text-coffee-600">Hand-poured, never rushed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-coffee-100 text-coffee-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 1 15 0v4.5a2.25 2.25 0 0 1-2.25 2.25h-10.5A2.25 2.25 0 0 1 4.5 16.5V12Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-coffee-900">Café Calm</p>
                  <p className="text-sm text-coffee-600">Soft light, warm textures.</p>
                </div>
              </div>
            </div>

            <div className="mt-10" />
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white shadow-xl border border-coffee-100 overflow-hidden">
              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
                  alt="Barista preparing a pour-over"
                  className="h-[360px] w-full object-cover rounded-2xl"
                />
              </div>
              <div className="px-6 pb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-coffee-500">Since 2012</p>
                <p className="mt-2 text-coffee-800 text-lg font-semibold">
                  A neighborhood café for slow mornings and focused afternoons.
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 hidden lg:block">
              <div className="rounded-2xl bg-white/90 border border-coffee-100 shadow-lg px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-coffee-500">Small Batch</p>
                <p className="mt-1 text-sm font-semibold text-coffee-800">Roasted weekly</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
