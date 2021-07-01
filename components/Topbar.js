import { ImgWrapper } from '../styles/GlobalStyle'
import Image from 'next/image'
import styled from 'styled-components'
import { HiMail } from 'react-icons/hi'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Menu } from './Navbar'
import { Link as Scroll } from 'react-scroll'

export default function Topbar({ showMenu, setShowMenu }) {
  return (
    <StyledTopbar id='topbar' showMenu={showMenu}>
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
          <Scroll to='contact' smooth={true}>
            <div className='info'>
              <FaMapMarkerAlt className='icon' />
              <p>49-40 Carl Hall Road Toronto, ON, M3K 2C1</p>
            </div>
          </Scroll>
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
        {showMenu ? (
          <AiOutlineClose
            className='burger'
            onClick={() => {
              setShowMenu(false)
            }}
          />
        ) : (
          <AiOutlineMenu
            className='burger'
            onClick={() => {
              setShowMenu(true)
            }}
          />
        )}
      </div>
      <Menu topbarMenu={true} showMenu={showMenu} setShowMenu={setShowMenu} />
    </StyledTopbar>
  )
}

const StyledTopbar = styled.section`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 1rem 0;
  z-index: 10;
  .wrapper {
    width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .burger {
    display: none;
    font-size: 2rem;
    /* color: var(--text-color); */
    transition-duration: 0.5s ease;
    color: ${({ showMenu }) =>
      showMenu ? 'var(--light-grey-bg)' : 'var(--text-color)'};
    z-index: 99;
  }
  @media screen and (max-width: 1024px) {
    position: sticky;
    top: 0;
    padding: 1rem 1rem;
    box-shadow: 0 4px 15px 5px rgb(0 0 0 / 5%);
    .info-wrapper {
      display: none;
    }
    .burger {
      display: block;
    }
  }
`
