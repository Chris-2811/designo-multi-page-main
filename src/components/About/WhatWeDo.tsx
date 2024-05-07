import imageDesktop from '@/assets/about/desktop/image-real-deal.jpg';
import imageMobile from '@/assets/about/mobile/image-real-deal.jpg';
import imageTablet from '@/assets/about/tablet/image-real-deal.jpg';
import Rectangle from '../ui/Rectangle';

function WhatWeDo() {
  return (
    <section className="mt-[7.5rem] lg:mt-40 ">
      <div className="md:container relative">
        <div className="absolute -z-10 bottom-[388px] left-[665px]">
          <Rectangle />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:h-[640px] md:rounded-[15px] overflow-hidden">
          <div className="lg:w-2/3 h-[584px] lg:h-full md:min-h-0 relative pt-20 pb-[6.75rem] px-6 text-center bg-soft-pink w-full lg:px-[6rem] grid place-items-center lg:text-left">
            <div className="absolute top-0 left-0 md:-top-52 md:left-[5.875rem] rounded-full opacity-[0.06] bg-gradient-linear w-[292px] h-[292px] rotate-180 lg:top-auto lg:bottom-[292px] lg:-left-36"></div>
            <div className="absolute bottom-0 left-0 md:left-auto md:right-2 md:bottom-12 flex lg:bottom-0 lg:right-auto lg:-left-36">
              <div className="rounded-full opacity-[0.06] bg-gradient-linear w-[292px] h-[292px]"></div>
              <div className="rounded-full opacity-[0.06] bg-gradient-linear w-[292px] h-[292px] rotate-180 md:rotate-90"></div>
            </div>
            <div className="md:max-w-[572px]">
              <h2 className="heading-lg text-peach">The real deal</h2>
              <p className="secondary-text mt-6">
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p className="mt-4">
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
          <div className="w-full h-[320px] lg:w-[476px] lg:h-full">
            <div className="relative z-10">
              <img
                src={imageMobile}
                alt=""
                className="w-full h-[320px] sm:hidden"
              />
              <img
                src={imageTablet}
                alt=""
                className="w-full h-[320px] hidden sm:block lg:hidden"
              />
              <img
                src={imageDesktop}
                alt=""
                className="w-full h-[320px] hidden lg:block lg:min-w-[476px] lg:h-[640px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
