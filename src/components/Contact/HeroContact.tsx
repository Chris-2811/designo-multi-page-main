import Rectangle from '../ui/Rectangle';
import ContactForm from './ContactForm';

function HeroContact() {
  return (
    <section>
      <div className="md:container relative">
        <div className="absolute -z-10 -bottom-[844px] left-[269px]">
          <Rectangle />
        </div>
        <div className=" bg-peach overflow-hidden bg-hero-contact-mobile md:bg-none bg-left-100 bg-no-repeat  relative  py-[4.5rem] px-6 md:px-[3.625rem] md:rounded-[15px] lg:flex  justify-between lg:px-[6rem] lg:py-[3.375rem] lg:gap-12">
          <div className="absolute w-[640px] h-[640px] -top-14 -left-28 md:bg-hero-contact-desktop lg:left-0 lg:-top-[5.5rem]"></div>
          <div className="text-center md:text-left lg:mt-20">
            <h1 className="heading-lg">Contact Us</h1>
            <p className="main-text mt-6 md:max-w-[573px] md:mt-8 lg:max-w-[445px]">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default HeroContact;
