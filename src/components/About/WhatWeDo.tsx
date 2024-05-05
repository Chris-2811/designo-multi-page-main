import React from 'react';
import imageDesktop from '@/assets/about/desktop/image-real-deal.jpg';
import imageMobile from '@/assets/about/mobile/image-real-deal.jpg';
import imageTablet from '@/assets/about/tablet/image-real-deal.jpg';

function WhatWeDo() {
  return (
    <section className="mt-[7.5rem] lg:mt-40">
      <div className="md:container">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:h-[640px] lg:rounded-[15px] overflow-hidden">
          <div className="lg:w-2/3 pt-20 pb-[6.75rem] px-6 text-center bg-soft-pink h-full lg:px-[6rem] grid place-items-center lg:text-left">
            <div>
              <h2 className="heading-lg text-peach">The real deal</h2>
              <p className="secondary-text mt-6">
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and 'w'e strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p className="mt-4">
                {' '}
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[476px!] lg:h-full">
            <img
              src={imageMobile}
              srcSet={`${imageMobile} 640w, ${imageTablet} 768w, ${imageDesktop} 1024w`}
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, 1024px"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
