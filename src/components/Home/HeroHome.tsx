import React from 'react';
import { Button } from '../ui/button';
import heroImage from '@/assets/home/desktop/image-hero-phone.png';

function HeroHome() {
  return (
    <section className=" md:container ">
      <div className="bg-peach relative text-center pt-20 px-6 md:px-10 lg:pt-[8.75rem] overflow-hidden md:rounded-[15px] lg:flex lg:text-left items-start lg:px-[6rem]">
        <div className="absolute  bg-pattern-hero-home h-[640px] w-[640px] top-[50%] -translate-y-[50%] left-0 md:left-auto md:-right-[25%]  lg:left-auto lg:right-0  lg:top-0 lg:-translate-y-0"></div>
        <div className="relative z-20 lg:pb-[8.75rem]">
          <h1
            className="text-white
             heading-lg max-w-[525px] mx-auto lg:w-[540px]"
          >
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="main-text mt-[0.75rem] md:mt-5 max-w-[445px] mx-auto lg:mx-0 lg:mt-6">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div className="mt-6 lg:mt-10">
            <Button>Learn more</Button>
          </div>
        </div>
        <div className="relative w-full h-[465px] -mt-20 lg:-mt-40 flex justify-center">
          <img
            src={heroImage}
            alt="mobile-phone"
            className=" absolute top-0 min-w-[500px] h-[800px] lg:h-[855px] mx-auto left-[50%] lg:left-[65%] -translate-x-[50%] lg:object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
