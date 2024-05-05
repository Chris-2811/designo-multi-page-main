import { useState } from 'react';
import logo from '@/assets/shared/desktop/logo-dark.png';
import hamburger from '@/assets/shared/mobile/icon-hamburger.svg';
import close from '@/assets/shared/mobile/icon-close.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <header
      className="bg-white
    "
    >
      <div className="container max-w-none bg-white relative z-20 py-[2.125rem] md:py-16 flex justify-between items-center">
        <div className="w-[202px]">
          <NavLink to="/">
            <img src={logo} alt="" />
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
              <NavLink to="/about">
                <li className="border-b-2 border-b-transparent hover:border-b-black/20">
                  Our company
                </li>
              </NavLink>
              <NavLink to="/locations">
                <li className="border-b border-b-transparent hover:border-b-black/20">
                  locations
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="border-b-2 border-b-transparent hover:border-b-black/20">
                  contact
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      {modalOpen && (
        <div className="md:hidden">
          <div className="absolute w-full text-black bg-black px-6 py-12 z-20 ">
            <nav>
              <ul
                role="list"
                className="text-white uppercase text-2xl flex flex-col gap-8"
              >
                <NavLink onClick={() => setModalOpen(!modalOpen)} to="/about">
                  <li>Our Company</li>
                </NavLink>
                <NavLink
                  onClick={() => setModalOpen(!modalOpen)}
                  to="/locations"
                >
                  <li>Locations</li>
                </NavLink>
                <NavLink onClick={() => setModalOpen(!modalOpen)} to="/contact">
                  <li>contact</li>
                </NavLink>
              </ul>
            </nav>
          </div>
          <div className="bg-black/50 inset-0 absolute z-10"></div>
        </div>
      )}
    </header>
  );
}

export default Header;
