import React from 'react';
import { Container, Button } from '../components';

export const Contact: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-coffee-50 to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-coffee-800 mb-6">
              Visit Us Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Come experience the perfect blend of atmosphere, flavor, and hospitality. 
              We can't wait to serve you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-1">Location</h3>
                  <p className="text-gray-600">123 Coffee Street<br />Seattle, WA 98101</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-lg flex items-center justify-center text-white text-xl">
                  ⏰
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Mon-Fri: 7:00 AM - 8:00 PM<br />
                    Sat-Sun: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coffee-600 rounded-lg flex items-center justify-center text-white text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-800 mb-1">Contact</h3>
                  <p className="text-gray-600">
                    Phone: (555) 123-4567<br />
                    Email: hello@coffeeshop.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button variant="primary" size="lg">
                Get Directions
              </Button>
              <Button variant="secondary" size="lg">
                Call Us
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-coffee-300 to-coffee-400 rounded-2xl h-96 lg:h-full flex items-center justify-center text-white shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl font-semibold">Interactive Map</p>
              <p className="text-coffee-100 mt-2">
                Google Maps integration would go here
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
