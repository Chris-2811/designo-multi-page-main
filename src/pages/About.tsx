import HeroAbout from '@/components/About/HeroAbout';
import Talent from '@/components/About/Talent';
import LocationDetails from '@/components/shared/LocationDetails';
import WhatWeDo from '@/components/About/WhatWeDo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
