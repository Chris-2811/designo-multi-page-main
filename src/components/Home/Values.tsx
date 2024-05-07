import passionate from '@/assets/home/desktop/illustration-passionate.svg';
import resourceful from '@/assets/home/desktop/illustration-resourceful.svg';
import friendly from '@/assets/home/desktop/illustration-friendly.svg';
import Rectangle from '../ui/Rectangle';

function Values() {
  return (
    <section className="mt-[7.5rem] lg:my-[10rem]  ">
      <div className="container relative text-center space-y-20 lg:flex items-center justify-between gap-[1.875rem] lg:space-y-0 ">
        <div className="absolute left-[279px] top-32 -z-20">
          <Rectangle />
        </div>
        <div className="flex flex-col items-center  md:flex-row md:gap-12 md:text-left lg:flex-col lg:text-center">
          <div className="relative w-full ">
            <div className="absolute max-w-[202px] bg-rotate bg-rotate-90 bg-rotate-0 left-0"></div>
            <img
              src={passionate}
              alt=""
              className=" mx-auto md:mx-0 lg:mx-auto "
            />
          </div>
          <div>
            <h3 className="heading-sm uppercase mt-12 lg:mt-0 ">Passionate</h3>
            <p className="mt-8 md:mt-4 lg:mt-8  secondary-text max-w-[440px] mx-auto md:max-w-none">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:gap-12 md:text-left lg:flex-col lg:text-center">
          <div className="relative w-full h-full overflow-visible">
            <div className="absolute max-w-[202px] bg-rotate  bg-rotate-270"></div>
            <img
              src={resourceful}
              alt=""
              className="mx-auto md:mx-0 lg:mx-auto"
            />
          </div>
          <div>
            <h3 className="heading-sm uppercase mt-12 md:mt-0">RESOURCEFUL</h3>
            <p className="mt-8 md:mt-4 lg:mt-8  secondary-text max-w-[440px] mx-auto md:max-w-none">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:gap-12 md:text-left lg:flex-col lg:text-center">
          <div className="relative w-full">
            <div className="absolute max-w-[202px] bg-rotate bg-rotate-45 bg-rotate-0 -z-10"></div>
            <img
              src={friendly}
              alt=""
              className="   mx-auto md:mx-0 lg:mx-auto"
            />
          </div>
          <div>
            <h3 className="heading-sm uppercase mt-12 md:mt-0">FRIENDLY</h3>
            <p className="mt-8 md:mt-4 lg:mt-8  secondary-text max-w-[440px] mx-auto md:max-w-none">
              {' '}
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
