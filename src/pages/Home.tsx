import React from 'react';
import HeroHome from '@/components/Home/HeroHome';
import Services from '@/components/shared/Services';
import Values from '@/components/Home/Values';
import CTA from '@/components/shared/CTA';
import Footer from '@/components/shared/Footer';

function Home() {
  return (
    <>
      <HeroHome />
      <Services />
      <Values />
    </>
  );
}

export default Home;
