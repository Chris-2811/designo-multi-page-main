import talentImage from '@/assets/about/mobile/image-world-class-talent.jpg';
import talentImageTablet from '@/assets/about/tablet/image-world-class-talent.jpg';
import talentImageDesktop from '@/assets/about/desktop/image-world-class-talent.jpg';

function Talent() {
  return (
    <section>
      <div className="md:container text-center w-full md:mt-[7.5rem] lg:mt-40 md:rounded-[15px] overflow-hidden lg:flex">
        <img src={talentImage} alt="" className="w-full h-[320px] sm:hidden" />
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
        <div className="bg-[#FDF3F0] py-20 px-6 lg:flex flex-col justify-center lg:px-[6rem] lg:text-left">
          <h1 className="heading-lg  text-peach">Word-class talent</h1>
          <p className="secondary-text mt-6">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Talent;
