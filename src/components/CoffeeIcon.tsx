import React from 'react';

export const CoffeeIcon: React.FC = () => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="animate-float">
        <svg
          className="w-20 h-20 md:w-24 md:h-24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2 21h18v-2H2v2zm16-9h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-2zm2-2v2h-2V8h2zM16 12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4h12v8z" />
        </svg>
      </div>
    </div>
  );
};
