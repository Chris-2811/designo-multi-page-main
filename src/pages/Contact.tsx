import HeroContact from '@/components/Contact/HeroContact';
import LocationDetails from '@/components/shared/LocationDetails';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="text-white">
      <HeroContact />
      <LocationDetails />
    </div>
  );
}

export default Contact;
