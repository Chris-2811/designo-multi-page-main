import React from 'react';
import { useLocation } from 'react-router-dom';

function HeroDesign() {
  const pathname = useLocation().pathname;

  return (
    <section className="md:container ">
      <div className="bg-peach relative bg-pattern-design-mobile md:bg-pattern-design-tablet lg:bg-pattern-design-desktop text-center  py-[6.5625rem] md:px px-6 md:px-10  overflow-hidden md:rounded-[15px] bg-right-top">
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
          <p className="main-text text-white mt-6 max-w-[440px] mx-auto">
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
