import { Link } from 'react-router-dom';
import arrowRight from '@/assets/shared/desktop/icon-right-arrow.svg';
import { useLocation } from 'react-router-dom';

function Services() {
  const location = useLocation();
  const pathname = location.pathname;

  const webDesignHeight = pathname === '/' ? 'lg:h-[640px]' : 'lg:h-[308px]';

  return (
    <section className="mt-[7.5rem] lg:mt-40">
      <div
        className={`container grid lg:grid-cols-2 ${
          pathname === '/' && 'lg:grid-rows-2'
        } md:gap-y-6 md:gap-x-[1.875rem] text-white gap-6`}
      >
        {pathname !== '/web-design' && (
          <div
            className={`bg-web-design relative h-[250px] rounded-[15px] bg-no-repeat bg-cover grid place-items-center group overflow-hidden lg:row-span-2 ${webDesignHeight}  cursor-pointer `}
          >
            <div className="absolute inset-0 bg-black/50 -z-10"></div>

            <div className="absolute inset-0 group-hover:bg-peach/50"></div>
            <div className="z-10 ">
              <h2 className="heading-services uppercase">Web design</h2>
              <div className="">
                <Link
                  to="/web-design"
                  className="uppercase flex items-center justify-center gap-4 text-[0.975rem] font-medium mt-3 "
                >
                  View Projects
                  <img src={arrowRight} alt="arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        )}
        {pathname !== '/app-design' && (
          <div className="bg-app-design relative h-[250px] rounded-[15px] bg-no-repeat bg-cover grid place-items-center overflow-hidden group lg:h-[308px]  cursor-pointer">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 group-hover:bg-peach/50"></div>
            <div className="z-10">
              <h2 className="heading-services uppercase">App Design</h2>
              <div className="">
                <Link
                  to="/app-design"
                  className="uppercase flex items-center justify-center gap-4 text-[0.975rem] font-medium mt-3 "
                >
                  View Projects
                  <img src={arrowRight} alt="arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        )}
        {pathname !== '/graphic-design' && (
          <div className="bg-graphic-design relative h-[250px] rounded-[15px] bg-no-repeat bg-cover grid place-items-center overflow-hidden group lg:h-[308px] cursor-pointer">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 group-hover:bg-peach/50"></div>

            <div className="z-10">
              <h2 className="heading-services uppercase">Graphic Design</h2>
              <Link
                to="/graphic-design"
                className="uppercase flex items-center justify-center gap-4 text-[0.975rem] font-medium mt-3 "
              >
                View Projects
                <img src={arrowRight} alt="arrow-right" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
