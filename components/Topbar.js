import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { Link as Scroll } from "react-scroll";
import styled from "styled-components";
import { ImgWrapper } from "../styles/GlobalStyle";
import { Menu } from "./Navbar";

export default function Topbar({ showMenu, setShowMenu }) {
  return (
    <StyledTopbar id="topbar" showMenu={showMenu}>
      <div className="wrapper">
        <Link href="/">
          <ImgWrapper>
            <Image id="logo" src="/img/logo.png" alt="Rhema Canada logo" layout="fill" objectFit="cover" />
          </ImgWrapper>
        </Link>
        <div className="info-wrapper">
          <Scroll to="contact" smooth={true}>
            <div className="info">
              <FaMapMarkerAlt className="icon" />
              <p>3858 Chesswood Drive, North York, ON, M3J 2W6</p>
            </div>
          </Scroll>
          <a href="mailto:info@rhemacanada.ca">
            <div className="info">
              <HiMail className="icon" />
              <p>info@rhemacanada.ca</p>
            </div>
          </a>
          <a href="tel:4164961794">
            <div className="info">
              <FaPhoneAlt className="icon" />
              <p>(416) 496-1794</p>
            </div>
          </a>
        </div>
        {showMenu ? (
          <AiOutlineClose
            className="burger"
            onClick={() => {
              setShowMenu(false);
            }}
          />
        ) : (
          <AiOutlineMenu
            className="burger"
            onClick={() => {
              setShowMenu(true);
            }}
          />
        )}
      </div>
      <Menu topbarMenu={true} showMenu={showMenu} setShowMenu={setShowMenu} />
    </StyledTopbar>
  );
}

const StyledTopbar = styled.section`
  position: sticky;
  top: 0;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 1rem;
  z-index: 10;
  box-shadow: 0 0.25rem 0.9375rem 0.3125rem rgb(0 0 0 / 5%);

  .wrapper {
    width: 71.25rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;

    @media screen and (min-width: 64rem) {
      grid-template-columns: auto 1fr;
    }
  }
  ${ImgWrapper} {
    margin: auto auto auto 0;
    width: 12.375rem;
    height: 2.75rem;
  }
  #logo {
    cursor: pointer;
  }
  .info-wrapper {
    display: none;
    grid-template-columns: 1.5fr 1fr 1fr;

    @media screen and (min-width: 75rem) {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }
  .info {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    font-size: 0.9rem;
    font-weight: 400;
  }
  .icon {
    width: 2.625rem;
    height: 2.625rem;
    font-size: 1.5rem;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    margin-right: 0.65rem;
  }
  .burger {
    display: block;
    font-size: 2rem;
    transition-duration: 0.5s ease;
    color: ${({ showMenu }) => (showMenu ? "var(--light-grey-bg)" : "var(--text-color)")};
    z-index: 99;
  }

  @media screen and (min-width: 64rem) {
    position: relative;
    .info-wrapper {
      display: grid;
    }
    .burger {
      display: none;
    }
  }
`;
