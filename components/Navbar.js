import React from 'react'
import { Container } from '../styles/GlobalStyle'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className='wrapper'>
        <div className='icons'>
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
          <a
            href='https://www.instagram.com/rhemacanada/?hl=en'
            target='_blank'
          >
            <FaInstagram className='icon' />
          </a>
        </div>
        <div className='menu'>
          <Link href='#'>
            <a className='nav-link'>Home</a>
          </Link>
          <Link href='#services'>
            <a className='nav-link'>What We Do</a>
          </Link>
          <Link href='#about'>
            <a className='nav-link'>About Us</a>
          </Link>
          <Link href='#leadership'>
            <a className='nav-link'>Leadership</a>
          </Link>
          <Link href='#strategy'>
            <a className='nav-link'>Corporate Strategy</a>
          </Link>
          <Link href='#contact'>
            <a className='nav-link'>Contact</a>
          </Link>
          <a
            className='nav-link'
            href='https://rhemaonline.vercel.app/facility-bookings'
            target='_blank'
          >
            Book An Event
          </a>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 5.5rem;
  width: 100vw;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.25rem 0;
  .wrapper {
    width: 1140px;
    display: flex;
    justify-content: space-between;
  }
  .icons {
    padding: 12px 0;
  }
  .icon {
    color: #fff;
    margin-right: 1rem;
  }
  .menu {
    display: flex;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    height: 90%;
    padding: 12px 65px;
  }
  .nav-link {
    color: #fff;
    margin: 0 1rem;
  }
`
