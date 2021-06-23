import React from 'react'
import { Container, ImgWrapper } from '../styles/GlobalStyle'
import Image from 'next/image'
import styled from 'styled-components'
import { HiMail } from 'react-icons/hi'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function Topbar() {
  return (
    <StyledTopbar>
      <div className='wrapper'>
        <Link href='#'>
          <ImgWrapper>
            <Image
              id='logo'
              src='/img/logo.png'
              alt='Rhema Canada logo'
              layout='fill'
              objectFit='cover'
            />
          </ImgWrapper>
        </Link>
        <div className='info-wrapper'>
          <a href='#'>
            <div className='info'>
              <FaMapMarkerAlt className='icon' />
              <p>49-40 Carl Hall Road Toronto, ON, M3K 2C1</p>
            </div>
          </a>
          <a href='mailto:info@rhemacanada.ca'>
            <div className='info'>
              <HiMail className='icon' />
              <p>info@rhemacanada.ca</p>
            </div>
          </a>
          <a href='tel:4164961794'>
            <div className='info'>
              <FaPhoneAlt className='icon' />
              <p>(416) 496-1794</p>
            </div>
          </a>
        </div>
      </div>
    </StyledTopbar>
  )
}

const StyledTopbar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  padding: 1rem 0;
  z-index: 1;
  @media screen and (max-width: 1024px) {
    padding: 1rem 1rem;
  }
  .wrapper {
    width: 1140px;
    display: flex;
    justify-content: space-between;
  }
  ${ImgWrapper} {
    margin: auto auto auto 0;
    width: 198px;
    height: 44px;
  }
  #logo {
    cursor: pointer;
  }
  .info-wrapper {
    display: flex;
    @media screen and (max-width: 1024px) {
      display: none;
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
    width: 42px;
    height: 42px;
    font-size: 1.5rem;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    margin-right: 0.65rem;
  }
`
