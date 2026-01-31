import React, { useRef, useState } from "react";
import { Container } from "../components";
import CircularGallery from "../components/CircularGallery";
import menuImage from "../assets/coffee menu.jpg";

export const MenuSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!isMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  const bestSellers = [
    {
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      text: "Caramel Latte",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=900&q=80",
      text: "Vanilla Cold Brew",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
      text: "Mocha Dream",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=900&q=80",
      text: "Espresso Shot",
    },
    {
      image:
        "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80",
      text: "Hazelnut Cappuccino",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-coffee-800">
            Menu
          </h2>
          <p className="text-coffee-600 mt-3 text-lg">Best sellers</p>
        </div>
      </Container>

      <div className="h-[320px] sm:h-[380px] md:h-[480px] lg:h-[520px]">
        {!isMenuOpen && (
          <CircularGallery
            items={bestSellers}
            bend={2.8}
            textColor="#3a2e1e"
            borderRadius={0.12}
            font="600 22px 'Playfair Display', serif"
          />
        )}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="text-coffee-700 font-semibold underline underline-offset-4 hover:text-coffee-800"
        >
          Click here to view the full menu
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-6">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <button
                type="button"
                onClick={() => setScale((prev) => Math.max(0.6, prev - 0.1))}
                className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-coffee-700"
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setScale((prev) => Math.min(2.5, prev + 0.1))}
                className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-coffee-700"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setScale(1);
                  setPosition({ x: 0, y: 0 });
                }}
                className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-coffee-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div
              className="w-full h-[70vh] max-h-[720px] bg-white flex items-center justify-center cursor-grab active:cursor-grabbing"
              onMouseDown={(event) => {
                setIsDragging(true);
                dragStart.current = { x: event.clientX, y: event.clientY };
                initialPos.current = { ...position };
              }}
              onMouseMove={(event) => {
                if (!isDragging) return;
                const dx = event.clientX - dragStart.current.x;
                const dy = event.clientY - dragStart.current.y;
                setPosition({
                  x: initialPos.current.x + dx,
                  y: initialPos.current.y + dy,
                });
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onWheel={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const delta = event.deltaY > 0 ? -0.08 : 0.08;
                setScale((prev) => Math.min(2.5, Math.max(0.6, prev + delta)));
              }}
            >
              <img
                src={menuImage}
                alt="Full menu"
                className="select-none"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transition: isDragging ? "none" : "transform 0.15s ease",
                  maxHeight: "90%",
                  maxWidth: "90%",
                }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
