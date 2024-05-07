import { useState } from 'react';
import logo from '@/assets/shared/desktop/logo-dark.png';
import hamburger from '@/assets/shared/mobile/icon-hamburger.svg';
import close from '@/assets/shared/mobile/icon-close.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <header
      className="bg-white z-100 relative
    "
    >
      <div className="container max-w-none bg-white relative z-40 py-[2.125rem] md:py-16 flex justify-between items-center">
        <div className="w-[202px]">
          <NavLink to="/" aria-label="Home">
            <img src={logo} alt="Company logo" />
          </NavLink>
        </div>
        <div
          onClick={() => setModalOpen(!modalOpen)}
          className=" w-6 cursor-pointer md:hidden"
        >
          {modalOpen ? (
            <img src={close} alt="close-button" />
          ) : (
            <img src={hamburger} alt="hamburger-menu" />
          )}
        </div>

        <div className="hidden md:block">
          <nav>
            <ul
              role="list"
              className="text-dark-grey uppercase flex items-center gap-10 text-sm tracking-[2px] leading-none"
            >
              <li className="border-b-2 border-b-transparent hover:border-b-black/20">
                <NavLink to="/about">Our company</NavLink>
              </li>
              <li className="border-b border-b-transparent hover:border-b-black/20">
                <NavLink to="/locations">locations</NavLink>
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-black/20">
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {modalOpen && (
        <div className="md:hidden">
          <div className="absolute w-full text-black bg-black px-6 py-12 z-50  ">
            <nav>
              <ul
                role="list"
                className="text-white uppercase text-2xl flex flex-col gap-8 tracking-[2px]"
              >
                <li>
                  <NavLink onClick={() => setModalOpen(!modalOpen)} to="/about">
                    Our Company
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setModalOpen(!modalOpen)}
                    to="/locations"
                  >
                    Locations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setModalOpen(!modalOpen)}
                    to="/contact"
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bg-black/50 inset-0 fixed  z-30  min-h-screen "></div>
        </div>
      )}
    </header>
  );
}

export default Header;
