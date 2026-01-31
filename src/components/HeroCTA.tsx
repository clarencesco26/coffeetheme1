import React from 'react';
import { Button } from './Button';

export const HeroCTA: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button variant="outline" size="lg" className="w-full sm:w-auto">
        View Menu
      </Button>
      <Button variant="secondary" size="lg" className="w-full sm:w-auto">
        Visit Us Today
      </Button>
    </div>
  );
};
