import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'

export const SocialIcons = () => {
  return (
    <StyledIcons>
      <a
        href='https://www.facebook.com/Rhemachristianministries/'
        target='_blank'
      >
        <FaFacebookF className='icon' />
      </a>
      <a href='https://twitter.com/rhemacanada?lang=en' target='_blank'>
        <FaTwitter className='icon' />
      </a>
      <a
        href='https://www.youtube.com/channel/UCNjybtMYeMfwur19Gd5GvRg'
        target='_blank'
      >
        <FaYoutube className='icon' />
      </a>
      <a href='https://www.instagram.com/rhemacanada/?hl=en' target='_blank'>
        <FaInstagram className='icon' />
      </a>
    </StyledIcons>
  )
}

export const Menu = () => {
  return (
    <StyledMenu>
      <Scroll to='topbar' smooth={true} className='nav-link'>
        Home
      </Scroll>
      <Scroll to='services' smooth={true} offset={-80} className='nav-link'>
        What We Do
      </Scroll>
      <Scroll to='about' smooth={true} offset={-80} className='nav-link'>
        About Us
      </Scroll>
      <Scroll to='leadership' smooth={true} offset={-50} className='nav-link'>
        Leadership
      </Scroll>
      <Scroll to='strategy' smooth={true} offset={-200} className='nav-link'>
        Corporate Strategy
      </Scroll>
      <Scroll to='contact' smooth={true} offset={-70} className='nav-link'>
        Contact
      </Scroll>
      <a
        className='nav-link'
        href='https://rhemaonline.vercel.app/facility-bookings'
        target='_blank'
      >
        Book An Event
      </a>
    </StyledMenu>
  )
}

export default function Navbar() {
  const [YPosition, setYPosition] = useState(0)
  const getYPosition = () => {
    const position = window.pageYOffset
    setYPosition(position)
    // console.log(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', getYPosition, { passive: true })

    return () => {
      window.removeEventListener('scroll', getYPosition)
    }
  }, [])
  return (
    <StyledNavbar YPosition={YPosition}>
      <div className='wrapper'>
        <SocialIcons />
        <Menu />
      </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  z-index: 10;
  /* background: rgba(255, 255, 255, 0.05); */
  background: ${({ YPosition }) =>
    YPosition > 80 ? `var(--blue)` : `rgba(255, 255, 255, 0.05)`};
  box-shadow: ${({ YPosition }) =>
    YPosition > 90 ? `0 4px 25px 5px rgb(0 0 0 / 15%)` : null};
  padding: 1.5rem 0;
  .wrapper {
    width: 1140px;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const StyledIcons = styled.div`
  padding: 12px 0;

  .icon {
    color: #fff;
    margin-right: 1rem;
  }
`
export const StyledMenu = styled.div`
  display: flex;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  height: 90%;
  padding: 12px 60px;
  .nav-link {
    color: #fff !important;
    margin: 0 1rem;
  }
`
