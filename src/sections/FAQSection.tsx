import React from 'react';
import { Accordion, AccordionItem } from '@heroui/react';
import { Container } from '../components';

const faqs = [
  {
    question: 'What are your opening hours?',
    answer: 'We are open ежедневно 7am–7pm, with extended hours on weekends.'
  },
  {
    question: 'Do you offer dairy-free options?',
    answer: 'Yes! We have oat, almond, and soy milk available for any drink.'
  },
  {
    question: 'Where are your beans sourced from?',
    answer: 'We source from small farms in Latin America and Africa, focusing on sustainable practices.'
  },
  {
    question: 'Do you take custom orders?',
    answer: 'Absolutely. Let our baristas know your preferences and we’ll tailor your drink.'
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-white/80 text-coffee-700 border border-coffee-100 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase shadow-sm">
              Common Questions
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-display font-bold text-coffee-900">
              Frequently Asked
            </h2>
            <p className="mt-3 text-coffee-700 text-lg">
              Everything you need to know about our coffee, space, and service.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-[#c7a785] shadow-xl border border-coffee-100 p-4 md:p-6">
            <Accordion variant="splitted" selectionMode="multiple">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  aria-label={faq.question}
                  title={faq.question}
                  className="rounded-full border border-coffee-700"
                >
                  <p className="text-coffee-700 text-center">
                    {faq.answer}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};
