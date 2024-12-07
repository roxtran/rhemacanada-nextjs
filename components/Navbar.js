import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { Link as Scroll } from "react-scroll";
import styled from "styled-components";

export default function Navbar() {
  const [YPosition, setYPosition] = useState(0);
  const getYPosition = () => {
    const position = window.pageYOffset;
    setYPosition(position);
    // console.log(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", getYPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", getYPosition);
    };
  }, []);

  return (
    <StyledNavbar YPosition={YPosition}>
      <div className="wrapper">
        <SocialIcons />
        <Menu topbarMenu={false} />
      </div>
    </StyledNavbar>
  );
}

const SocialIcons = () => {
  return (
    <StyledIcons>
      <a href="https://www.facebook.com/Rhemachristianministries/" target="_blank">
        <FaFacebookF className="icon" />
      </a>
      <a href="https://twitter.com/rhemacanada?lang=en" target="_blank">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.youtube.com/channel/UCNjybtMYeMfwur19Gd5GvRg" target="_blank">
        <FaYoutube className="icon" />
      </a>
      <a href="https://www.instagram.com/rhemacanada/?hl=en" target="_blank">
        <FaInstagram className="icon" />
      </a>
    </StyledIcons>
  );
};

export const Menu = ({ topbarMenu, showMenu, setShowMenu }) => {
  return (
    <StyledMenu topbarMenu={topbarMenu} showMenu={showMenu}>
      <Scroll
        to="top"
        smooth={true}
        className="nav-link"
        onClick={() => {
          showMenu && setShowMenu(false);
        }}
      >
        Home
      </Scroll>
      <Scroll
        to="services"
        smooth={true}
        offset={-80}
        className="nav-link"
        onClick={() => {
          showMenu && setShowMenu(false);
        }}
      >
        What We Do
      </Scroll>
      <Scroll
        to="about"
        smooth={true}
        offset={-80}
        className="nav-link"
        onClick={() => {
          showMenu && setShowMenu(false);
        }}
      >
        About Us
      </Scroll>
      <Scroll
        to="leadership"
        smooth={true}
        offset={-50}
        className="nav-link"
        onClick={() => {
          showMenu && setShowMenu(false);
        }}
      >
        Leadership
      </Scroll>
      <Scroll
        to="strategy"
        smooth={true}
        offset={-80}
        className="nav-link"
        onClick={() => {
          showMenu && setShowMenu(false);
        }}
      >
        Corporate Strategy
      </Scroll>
      <Scroll
        to="contact"
        smooth={true}
        offset={-70}
        className="nav-link"
        onClick={() => {
          showMenu && setShowMenu(false);
        }}
      >
        Contact
      </Scroll>
      {/* <a
        className='nav-link'
        href='https://rhemaonline.vercel.app/facility-bookings'
        target='_blank'
        // onClick={() => setShowMenu(false)}
      >
        Book An Event
      </a> */}
    </StyledMenu>
  );
};

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  height: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  z-index: 10;
  /* background: rgba(255, 255, 255, 0.05); */
  background: ${({ YPosition }) => (YPosition > 80 ? `var(--blue)` : `rgba(0, 0, 0, 0.5)`)};
  box-shadow: ${({ YPosition }) => (YPosition > 90 ? `0 0.25rem 1.5625rem 0 rgb(0 0 0 / 15%)` : null)};
  padding: 1.5rem 1rem;
  .wrapper {
    width: 71.25rem;
    display: flex;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 64rem) {
    display: none;
  }
`;
export const StyledIcons = styled.div`
  padding: 0.75rem 0;

  .icon {
    color: #fff;
    margin-right: 1rem;
  }
`;
export const StyledMenu = styled.nav`
  display: ${({ topbarMenu }) => (topbarMenu ? "none" : "flex")};
  border-left: 0.0625rem solid #fff;
  height: 90%;
  padding: 0.75rem 0 0.75rem 3.75rem;
  .nav-link {
    color: #fff !important;
    margin: 0 1rem;
  }
  @media screen and (max-width: 64rem) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--blue);
    height: 100vh;
    min-width: 15.625rem;
    flex-flow: column nowrap;
    box-shadow: 0 0.25rem 1.5625rem 0 rgb(0 0 0 / 15%);
    padding: 4rem 2rem;
    overflow-y: auto;
    border: none;
    transform-origin: 0.0625rem;
    transition: all 0.3s ease-out;
    transform: ${({ showMenu }) => (showMenu ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
    .nav-link {
      margin: 1rem 0;
    }
  }
`;
