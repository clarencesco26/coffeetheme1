import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false 
}) => {
  const hoverStyles = hover 
    ? 'hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer' 
    : '';

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
