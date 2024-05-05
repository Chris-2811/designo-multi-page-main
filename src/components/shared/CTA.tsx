import { Button } from '../ui/button';

function CTA() {
  return (
    <section className="container">
      <div className="bg-peach relative py-16 md:py-14 px-6 lg:px-[6rem] text-white rounded-[15px] text-center lg:text-left lg:h-[292px] ">
        <div
          className="absolute top-0 left-0 bg-pattern-call-to-action  lg:bg-no-repeat bg-625px-right md:bg-858px-right lg:left-auto lg:right-0 lg:bg-0px-right lg:w-[876px] h-full
          "
        ></div>
        <div className="z-10 relative lg:flex items-center justify-between">
          <div>
            <h1 className="heading-lg mb-4 lg::mb-6 max-w-[335px] mx-auto lg:mx-0 ">
              Let's talk about your project
            </h1>
            <p className="main-text max-w-[445px] mx-auto">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Button>Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
