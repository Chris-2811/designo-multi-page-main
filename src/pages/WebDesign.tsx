import HeroDesign from '@/components/shared/HeroDesign';
import Projects from '@/components/shared/Projects';
import Services from '@/components/shared/Services';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function WebDesign() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <HeroDesign />
      <Projects />
      <Services />
    </div>
  );
}

export default WebDesign;
