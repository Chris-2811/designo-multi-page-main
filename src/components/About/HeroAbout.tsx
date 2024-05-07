import heroImage from '@/assets/about/mobile/image-about-hero.jpg';
import heroImageTablet from '@/assets/about/tablet/image-about-hero.jpg';
import heroImageDesktop from '@/assets/about/desktop/image-about-hero.jpg';
import Rectangle from '../ui/Rectangle';

function HeroAbout() {
  return (
    <section>
      <div className="md:container relative">
        <div className="absolute -z-10 top-[320px] right-[270px] rotate-180">
          <Rectangle />
        </div>
        <div className="md:rounded-[15px] overflow-hidden lg:flex flex-row-reverse items-center lg:h-[480px] ">
          <div className="relative z-20  ">
            <img
              src={heroImage}
              alt=""
              className="w-full h-[320px] sm:hidden"
            />
            <img
              src={heroImageTablet}
              alt=""
              className="w-full hidden sm:block lg:hidden h-[320px] "
            />
            <img
              src={heroImageDesktop}
              alt=""
              className="w-full hidden lg:block h-[480px] lg:min-w-[476px]"
            />
          </div>
          <div className="bg-peach lg:h-full relative bg-about-mobile bg-center-left-down  bg-no-repeat md:bg-none py-20 px-6 text-center lg:text-left lg:px-[5.625rem] ">
            <div className="absolute  right-52 -top-[27rem] md:bg-about-desktop w-[640px] h-[640px] lg:right-0 lg:top-auto lg:bottom-0"></div>
            <h1 className="heading-lg text-white">About Us</h1>
            <p className="main-text mt-6 md:max-w-[573px] md:mx-auto lg:mx-0">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAbout;
