import HeroAbout from '@/components/About/HeroAbout';
import React from 'react';
import Talent from '@/components/About/Talent';
import LocationDetails from '@/components/shared/LocationDetails';
import WhatWeDo from '@/components/About/WhatWeDo';

function About() {
  return (
    <div>
      <HeroAbout />
      <Talent />
      <LocationDetails />
      <WhatWeDo />
    </div>
  );
}

export default About;
