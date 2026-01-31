import React from 'react';

export const HeroHeading: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-balance">
        Brew Your Perfect Moment
      </h1>

      <p className="text-xl md:text-2xl mb-10 text-coffee-100 max-w-2xl mx-auto text-balance">
        Artisanal coffee crafted with passion, served with love.
        Experience the finest beans from around the world.
      </p>
    </>
  );
};
