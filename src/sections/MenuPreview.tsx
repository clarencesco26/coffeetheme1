import React from 'react';
import { Container, Card } from '../components';

export const MenuPreview: React.FC = () => {
  const menuItems = [
    {
      name: 'Classic Espresso',
      description: 'Rich and bold, the perfect start to your day',
      price: '$3.50',
      image: '☕',
    },
    {
      name: 'Cappuccino',
      description: 'Smooth espresso with velvety steamed milk',
      price: '$4.50',
      image: '🥛',
    },
    {
      name: 'Caramel Macchiato',
      description: 'Sweet and creamy with a hint of caramel',
      price: '$5.00',
      image: '🍮',
    },
    {
      name: 'Cold Brew',
      description: 'Smooth, refreshing, and perfectly chilled',
      price: '$4.00',
      image: '🧊',
    },
    {
      name: 'Flat White',
      description: 'Micro-foam milk with double ristretto',
      price: '$4.75',
      image: '☕',
    },
    {
      name: 'Mocha Latte',
      description: 'Rich chocolate meets premium espresso',
      price: '$5.25',
      image: '🍫',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-coffee-900 text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Menu
          </h2>
          <p className="text-lg md:text-xl text-coffee-200 max-w-3xl mx-auto">
            Explore our carefully curated selection of coffee drinks, 
            each crafted to perfection by our expert baristas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              hover 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl">{item.image}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-semibold">
                      {item.name}
                    </h3>
                    <span className="text-coffee-200 font-semibold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-coffee-200 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-coffee-800">
            View Full Menu
          </button>
        </div>
      </Container>
    </section>
  );
};
