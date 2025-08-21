import React from 'react';
import { Hero, Features, Testimonials, Stats, CTA } from './components/Home';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Stats />
      <CTA />
    </div>
  );
}
