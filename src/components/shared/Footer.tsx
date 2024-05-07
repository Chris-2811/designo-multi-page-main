import { NavLink } from 'react-router-dom';
import logo from '@/assets/shared/desktop/logo-light.png';
import CTA from './CTA';
import facebook from '@/assets/shared/desktop/icon-facebook.svg';
import youtube from '@/assets/shared/desktop/icon-youtube.svg';
import twitter from '@/assets/shared/desktop/icon-twitter.svg';
import pinterest from '@/assets/shared/desktop/icon-pinterest.svg';
import instagram from '@/assets/shared/desktop/icon-instagram.svg';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const isDesignPage = location.pathname.endsWith('-design');

  const spacingStyles = isDesignPage
    ? 'mt-[286px]  md:mt-[384px] lg:mt-[380px] pt-[253px] md:pt-[166px] lg:pt-[144px]'
    : location.pathname !== '/contact'
    ? 'pt-[253px] md:pt-[166px] lg:pt-[144px] mt-[311px] md:mt-[342px] lg:mt-[380px]'
    : 'pt-16 md:pt-20 lg:pt-[4.5rem] mt-[7.5rem] lg:mt-40';

  return (
    <footer
      className={`relative ${spacingStyles}  bg-black text-white  pb-16 px-6 text-center lg:pb-[4.5rem]`}
    >
      <div className="container">
        {location.pathname !== '/contact' && (
          <div className="absolute w-full top-0 left-[50%] -translate-x-[50%] -translate-y-[50%]  md:-translate-y-[100%] md:top-[86px] lg:top-[64px] ">
            <CTA />
          </div>
        )}
        <div className="md:flex items-center justify-between md:border-b md:border-b-white/10">
          <div className=" pb-8 border-b border-b-white/10 md:border-b-0">
            <NavLink to="/" aria-label="Home">
              <img
                src={logo}
                alt="Company logo"
                className="w-[197px] mx-auto"
              />
            </NavLink>
          </div>
          <nav aria-label="secondary-navigation" className="mb-12 mt-8">
            <ul
              role="list"
              className="uppercase space-y-8 tracking-[2px] text-sm leading-none md:flex items-center md:space-y-0 gap-10"
            >
              <li>
                <NavLink to="/about">Our Company</NavLink>
              </li>
              <li>
                <NavLink to="/locations">Locations</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:flex items-center justify-between md:mt-8">
          <div className="mb-10 md:flex items-center gap-[0.625rem] md:text-left">
            <address className="not-italic text-white/50 leading-[26px]  md:w-[223px] lg:w-[350px]">
              <div className="font-medium text-white/70">
                Designo Central Office
              </div>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </address>
            <div className="mt-10 text-white/50 leading-[26px] md:mt-0  md:w-[223px] lg:w-[350px]">
              <div className="font-medium text-white/70">
                Contact Us (Central Office)
              </div>
              <p>P: +1 253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="" />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="" />
                  <span className="sr-only">Youtube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="" />
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={pinterest} alt="" />
                  <span className="sr-only">Pinterest</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="" />
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
