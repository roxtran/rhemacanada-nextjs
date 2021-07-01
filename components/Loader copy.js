// import { ImgWrapper } from '../styles/GlobalStyle'
import Image from 'next/image'
import styled from 'styled-components'

const Loader = () => {
  return (
    <StyledLoader>
      <div className='wrapper'>
        <div className='logo'></div>
      </div>
    </StyledLoader>
  )
}

export default Loader

const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;

  .wrapper {
    margin: auto;
    width: 40vw;
    height: 40vh;
    background: linear-gradient(to right, white, var(--blue));
    background-position-x: 0;
    animation: size 4s infinite ease-in-out;
    @keyframes size {
      to {
        background-position-x: 100vw;
      }
    }
  }

  .logo {
    background: #fff;
    width: 40vw;
    height: 40vh;
    mask-image: url('/img/logo-mask.png');
    mask-size: contain;
  }
`
