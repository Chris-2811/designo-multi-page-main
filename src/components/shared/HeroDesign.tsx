import { useLocation } from 'react-router-dom';
import Rectangle from '../ui/Rectangle';

function HeroDesign() {
  const pathname = useLocation().pathname;
  const bg =
    location.pathname === '/web-design'
      ? 'bg-intro-web bg-center md:bg-right-10  lg:bg-right'
      : location.pathname === '/app-design'
      ? 'bg-intro-mobile bg-right-top  lg:bg-intro-app md:bg-right-20 md:bg-intro-tablet  lg:bg-left-10 '
      : location.pathname === '/graphic-design' &&
        'bg-intro-mobile bg-right-top md:bg-right-20 lg:bg-right-80  md:bg-intro-tablet lg:bg-intro-graphic';

  return (
    <section className="md:container relative">
      <div className="absolute -z-10 top-[116px] right-[270px]  rotate-180">
        <Rectangle />
      </div>
      <div
        className={`bg-peach relative ${bg}  bg-no-repeat text-center  py-[6.5625rem] md:px px-6 md:px-10  overflow-hidden md:rounded-[15px] lg:py-16 `}
      >
        <div className="absolute bg-pattern-design-pages w-full h-full"></div>
        <div>
          <h1
            className="text-white
                 heading-lg max-w-[525px] mx-auto"
          >
            {pathname === '/web-design'
              ? 'Web Design'
              : pathname === '/app-design'
              ? 'App Design'
              : 'Graphic Design'}
          </h1>
          <p className="main-text text-white mt-6 max-w-[400px] mx-auto">
            {pathname === '/web-design'
              ? 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
              : pathname === '/app-design'
              ? 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
              : 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroDesign;
