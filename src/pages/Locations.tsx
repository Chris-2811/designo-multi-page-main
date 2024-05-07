import LocationsMap from '@/components/Locations/LocationsMap';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import GradientCircle from '@/components/ui/GradientCircle';

function Locations() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="md:container md:rounded-[15px] grid gap-6 overflow-hidden lg:gap-8 relative -z-20">
      <div className="flex flex-col md:gap-8 lg:flex-row-reverse lg:h-[326px] lg:gap-[1.875rem]">
        <div className=" h-[320px] w-full md:rounded-[15px] overflow-hidden lg:max-w-[350px]">
          <LocationsMap location="canada" />
        </div>
        <div
          id="location-1"
          className="md:rounded-[15px] overflow-hidden lg:w-[730px]"
        >
          <div className="bg-soft-pink relative text-center md:text-left py-20 md:px-[4.75rem] lg:px-[6rem] h-full">
            <div className="absolute top-0 left-0 md:hidden">
              <GradientCircle />
            </div>
            <div className="absolute left-0 flex top-[292px] md:top-auto md:bottom-0">
              <div className="md:rotate-180">
                <GradientCircle />
              </div>
              <div className="md:-rotate-90">
                <GradientCircle />
              </div>
            </div>
            <h1 className="heading-lg text-peach ">Canada</h1>
            <div className="mt-6 md:flex items-center gap-[1.875rem]">
              <div className="md:w-[255px]">
                <p className="font-bold">Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="mt-6 md:mt-0 md:w-[255px]">
                <p className="font-bold">Contact</p>
                <p>P: +1 253-863-8967</p>
                <p>M: contact@designo.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="location-2"
        className="flex flex-col md:gap-8 lg:flex-row lg:h-[326px] lg:gap-[1.875rem]"
      >
        <div className=" h-[320px] w-full md:rounded-[15px] overflow-hidden lg:max-w-[350px]">
          <LocationsMap location="australia" />
        </div>
        <div className="md:rounded-[15px] overflow-hidden lg:w-[730px]">
          <div className="bg-soft-pink relative text-center md:text-left md:px-[4.75rem] lg:px-[6rem] py-20 h-full">
            <div className="absolute top-0 left-0 md:hidden">
              <GradientCircle />
            </div>
            <div className="absolute left-0 flex top-[292px] md:top-auto md:bottom-0">
              <div className="md:rotate-180">
                <GradientCircle />
              </div>
              <div className="md:-rotate-90">
                <GradientCircle />
              </div>
            </div>
            <h1 className="heading-lg text-peach">Australia</h1>
            <div className="mt-6 md:flex items-center gap-[1.875rem]">
              <div className="md:w-[255px]">
                <p className="font-bold">Designo AU Officee</p>
                <p>19 Balonne Street</p>
                <p>New South Wales 2443</p>
              </div>
              <div className="mt-6 md:mt-0 md:w-[255px]">
                <p className="font-bold">Contact</p>
                <p>P: (02) 6720 9092</p>
                <p>M: contact@designo.au</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="location-3"
        className="flex flex-col md:gap-8 lg:flex-row-reverse lg:h-[326px] lg:gap-[1.875rem]"
      >
        <div className=" h-[320px] w-full md:rounded-[15px] overflow-hidden lg:max-w-[350px]">
          <LocationsMap location="" />
        </div>
        <div className="md:rounded-[15px] overflow-hidden lg:w-[730px]">
          <div className="bg-soft-pink relative text-center py-20 md:text-left md:px-[4.75rem] lg:px-[6rem] h-full">
            <div className="absolute top-0 left-0 md:hidden">
              <GradientCircle />
            </div>
            <div className="absolute left-0 flex top-[292px] md:top-auto md:bottom-0">
              <div className="md:rotate-180">
                <GradientCircle />
              </div>
              <div className="md:-rotate-90">
                <GradientCircle />
              </div>
            </div>
            <h1 className="heading-lg text-peach">United Kingdom</h1>
            <div className="mt-6 md:flex items-center gap-[1.875rem]">
              <div className="md:w-[255px]">
                <p className="font-bold">Designo UK Office</p>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div className="mt-6 md:mt-0 md:w-[255px]">
                <p className="font-bold">Contact</p>
                <p>P: 078 3115 1400</p>
                <p>M: contact@designo.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
