import React from 'react';
import { Container } from './Container';

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'Menu', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact Us', href: '#' },
];

export const CafeNavbar: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        aria-label="Primary"
        className={`fixed left-0 top-0 z-50 w-full px-3 md:px-4 transition-colors duration-300  ${
          isScrolled ? 'border-transparent' : 'border-b border-coffee-100'
        }`}
      >
        <Container>
          <div
            className={`mx-auto transition-all duration-300 ${
              isScrolled
                ? 'bg-white/80 max-w-5xl rounded-2xl border border-coffee-100/60 backdrop-blur-xl px-3 shadow-lg shadow-coffee-900/10'
                : ''
            }`}
          >
            <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
              <div className="flex w-full justify-between lg:w-auto">
                <a
                  href="#"
                  aria-label="Home"
                  className="flex items-center gap-2  px-4 py-2 text-md font-semibold text-coffee-900 shadow-input"
                >
                  The Daily Coffee
                </a>
                <div className="flex gap-2 lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMenuState(!menuState)}
                    aria-label={menuState ? 'Close menu' : 'Open menu'}
                    className="relative z-20 rounded-full border border-coffee-200 bg-white/90 p-2.5 text-coffee-800 shadow-sm"
                  >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                      className={`h-5 w-5 transition-all duration-200 ${
                        menuState ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                    <svg
                      className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-200 ${
                        menuState ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="ml-auto hidden lg:flex">
                <div className="flex items-center justify-end gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-coffee-800">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="transition-colors hover:text-coffee-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div
                className={`${
                  menuState ? 'block' : 'hidden'
                } w-full flex-wrap items-center justify-end rounded-2xl border border-coffee-100 bg-white/95 p-3 shadow-lg lg:flex lg:w-fit lg:gap-6 lg:rounded-none lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none`}
              >
                <div className="block p-3 lg:hidden">
                  <ul className="space-y-4 text-sm">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="block text-coffee-900 font-semibold transition-colors hover:text-coffee-700"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">

                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
