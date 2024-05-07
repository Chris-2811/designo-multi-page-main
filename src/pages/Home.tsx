import HeroHome from '@/components/Home/HeroHome';
import Services from '@/components/shared/Services';
import Values from '@/components/Home/Values';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <HeroHome />
      <Services />
      <Values />
    </>
  );
}

export default Home;
