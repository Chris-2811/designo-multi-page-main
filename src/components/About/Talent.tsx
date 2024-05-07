import talentImage from '@/assets/about/mobile/image-world-class-talent.jpg';
import talentImageTablet from '@/assets/about/tablet/image-world-class-talent.jpg';
import talentImageDesktop from '@/assets/about/desktop/image-world-class-talent.jpg';

function Talent() {
  return (
    <section>
      <div className="md:container text-center w-full md:mt-[7.5rem] lg:mt-40  overflow-hidden lg:flex md:rounded-[15px]">
        <div className="relative z-10  lg:min-w-[476px] overflow-hidden">
          <img
            src={talentImage}
            alt=""
            className="w-full h-[320px] sm:hidden"
          />
          <img
            src={talentImageTablet}
            alt=""
            className="w-full h-[320px] hidden sm:block lg:hidden"
          />
          <img
            src={talentImageDesktop}
            alt=""
            className="w-full h-[320px] hidden lg:block lg:min-w-[476px] lg:h-[640px]"
          />
        </div>
        <div className="bg-[#FDF3F0]  min-h-[584px] md:min-h-0  relative py-20 px-6 lg:flex flex-col justify-center lg:px-[6rem] lg:text-left">
          <div className="absolute top-0 left-0 md:-top-52 md:left-[5.875rem] rounded-full opacity-[0.06] bg-gradient-linear w-[292px] h-[292px] rotate-180 lg:top-auto lg:bottom-[292px] lg:-left-36"></div>
          <div className="absolute bottom-0 left-0 md:left-auto md:right-2 md:bottom-12 flex lg:bottom-0 lg:right-auto lg:-left-36">
            <div className=" rounded-full opacity-[0.06] bg-gradient-linear w-[292px] h-[292px]  "></div>
            <div className=" rounded-full opacity-[0.06] bg-gradient-linear w-[292px] h-[292px] rotate-180 md:rotate-90"></div>
          </div>
          <div className="md:max-w-[572px] mx-auto lg:mx-0">
            <h1 className="heading-lg  text-peach">Word-class talent</h1>
            <p className="secondary-text mt-6">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="mt-6">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Talent;
