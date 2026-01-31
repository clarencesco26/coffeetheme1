import React from 'react';
import { Container } from '../components';

const iconBaseClass = "h-4 w-4 text-coffee-700";

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className ?? iconBaseClass}
    fill="currentColor"
  >
    <path d="M13.5 9H16V6h-2.5C11.6 6 10 7.5 10 10v2H8v3h2v6h3v-6h2.5l.5-3H13v-2c0-.6.4-1 1-1z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className ?? iconBaseClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className ?? iconBaseClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16.5v2a2 2 0 0 1-2.2 2A19 19 0 0 1 3 5.2 2 2 0 0 1 5 3h2a2 2 0 0 1 2 1.6l.7 3a2 2 0 0 1-.6 1.9l-1.4 1.4a16 16 0 0 0 6.7 6.7l1.4-1.4a2 2 0 0 1 1.9-.6l3 .7a2 2 0 0 1 1.6 2z" />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className ?? iconBaseClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <path d="M22 8l-10 6L2 8" />
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className ?? iconBaseClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s7-7.4 7-12a7 7 0 1 0-14 0c0 4.6 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-50 border-t border-coffee-100">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center lg:text-left col-span-1 md:col-span-2 lg:col-span-1">
              <p className="text-sm uppercase tracking-[0.3em] text-coffee-500">Coffee Shop</p>
              <h3 className="mt-4 text-2xl font-display font-bold text-coffee-900">
                A calm, modern café for intentional pauses.
              </h3>
              <p className="mt-4 text-coffee-700 leading-relaxed">
                Small-lot beans, gentle roasts, and a space designed for quiet focus or warm
                connection.
              </p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-coffee-500">Location</p>
              <div className="mt-4 flex items-start justify-center md:justify-start gap-2 text-coffee-800 font-semibold">
                <MapPinIcon className="h-4 w-4 text-coffee-700 mt-1" />
                <span className="text-balance">123 Brew Lane, Seattle, WA</span>
              </div>
              <p className="mt-2 text-coffee-700">Open daily · 7am–7pm</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-coffee-800 hover:text-coffee-900"
              >
                <MapPinIcon className="h-4 w-4 text-coffee-700" />
                View on map
              </a>
            </div>

            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-coffee-500">Connect</p>
              <div className="mt-4 space-y-3">
                <a href="#" className="flex items-center justify-center md:justify-start gap-2 text-coffee-800 hover:text-coffee-900">
                  <FacebookIcon />
                  Facebook
                </a>
                <a href="#" className="flex items-center justify-center md:justify-start gap-2 text-coffee-800 hover:text-coffee-900">
                  <InstagramIcon />
                  Instagram
                </a>
                <a
                  href="tel:+12065551234"
                  className="flex items-center justify-center md:justify-start gap-2 text-coffee-800 hover:text-coffee-900"
                >
                  <PhoneIcon />
                  (206) 555-1234
                </a>
                <a
                  href="mailto:hello@coffeeshop.com"
                  className="flex items-center justify-center md:justify-start gap-2 text-coffee-800 hover:text-coffee-900 break-all"
                >
                  <MailIcon />
                  <span className="break-all">hello@coffeeshop.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-coffee-100 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-coffee-600 text-center md:text-left">
              <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
                <a href="#" className="hover:text-coffee-800">Home</a>
                <a href="#" className="hover:text-coffee-800">Menu</a>
                <a href="#" className="hover:text-coffee-800">About Us</a>
                <a href="#" className="hover:text-coffee-800">FAQ</a>
                <a href="#" className="hover:text-coffee-800">Contact Us</a>
              </nav>
              <p>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
