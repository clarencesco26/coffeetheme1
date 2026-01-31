import React, { useState } from 'react';
import { Container } from './Container';
import { Menu, HoveredLink } from './ui/navbar-menu';

export const CafeNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed lg:sticky top-0 left-0 right-0 z-50 bg-white-50/80 backdrop-blur border-b border-coffee-100">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="rounded-full border border-coffee-100 bg-white shadow-input px-4 py-3 sm:px-6 sm:py-4 text-coffee-900 font-display font-semibold text-base sm:text-lg text-center">
            Your Coffee Shop
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-coffee-200 bg-white/80 px-4 py-2 text-sm font-semibold text-coffee-800 shadow-sm"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>

          <div className="hidden lg:block">
            <Menu setActive={() => null}>
              <HoveredLink href="#">Home</HoveredLink>
              <HoveredLink href="#">Menu</HoveredLink>
              <HoveredLink href="#">About Us</HoveredLink>
              <HoveredLink href="#">FAQ</HoveredLink>
              <HoveredLink href="#">Contact Us</HoveredLink>
            </Menu>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="rounded-2xl border  border-coffee-100 bg-white/95 shadow-lg p-4">
              <div className="grid gap-3 text-sm">
                <a className="block text-coffee-900 font-semibold" href="#">Home</a>
                <a className="block text-coffee-900 font-semibold" href="#">Menu</a>
                <a className="block text-coffee-900 font-semibold" href="#">About Us</a>
                <a className="block text-coffee-900 font-semibold" href="#">FAQ</a>
                <a className="block text-coffee-900 font-semibold" href="#">Contact Us</a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
