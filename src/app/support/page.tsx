import React from 'react';
import SupportHero from './components/SupportHero';
import SupportFAQ from './components/SupportFAQ';
import Resources from './components/Resources';
import SupportStats from './components/SupportStats';

const Support = () => {
  return (
    <div>
      <SupportHero />
      <SupportFAQ />
      <Resources />
      <SupportStats />
    </div>
  );
};

export default Support;