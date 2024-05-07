import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="container">
      <div className="bg-peach bg-pattern-call-to-action bg-center-right-25 md:bg-center-right-70 lg:bg-right bg-no-repeat  relative py-16 md:py-14 px-6 lg:px-[6rem] text-white rounded-[15px] text-center lg:text-left lg:h-[292px] ">
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
            <Button asChild>
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
