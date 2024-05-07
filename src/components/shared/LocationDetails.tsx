import { Button } from '../ui/button';
import imageCanada from '@/assets/shared/desktop/illustration-canada.svg';
import imageAustralia from '@/assets/shared/desktop/illustration-australia.svg';
import imageUnitedKingdom from '@/assets/shared/desktop/illustration-united-kingdom.svg';
import { Link } from 'react-router-dom';

function LocationDetails() {
  return (
    <section className="mt-[7.5rem] lg:mt-40 ">
      <div className="container flex flex-col items-center text-center gap-12 lg:flex-row lg:justify-around">
        <div>
          <div className="relative">
            <div className="absolute max-w-[202px] bg-rotate  bg-rotate-45 left-0"></div>
            <img src={imageCanada} alt="" />
          </div>
          <h3 className="heading-sm font-medium uppercase mt-12 mb-8 text-dark-grey">
            Canada
          </h3>
          <Button asChild variant="secondary">
            <Link to="/locations">See Location</Link>
          </Button>
        </div>
        <div id="location-2">
          <div className="relative">
            <div className="absolute max-w-[202px] bg-rotate  bg-rotate-0 left-0"></div>
            <img src={imageAustralia} alt="" />
          </div>
          <h3 className="heading-sm uppercase font-medium  mt-12 mb-8 text-dark-grey">
            Australia
          </h3>
          <Button asChild variant="secondary">
            <Link to="/locations">See Location</Link>
          </Button>
        </div>
        <div id="location-3">
          <div className="relative  ">
            <div className="absolute max-w-[202px] bg-rotate  bg-rotate-270 left-0"></div>

            <img src={imageUnitedKingdom} alt="" className="mx-auto" />
          </div>
          <h3 className="heading-sm uppercase font-medium  mt-12 mb-8 text-dark-grey">
            United Kingdom
          </h3>
          <Button asChild variant="secondary">
            <Link to="/locations">See Location</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LocationDetails;
