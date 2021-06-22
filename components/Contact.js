import React from 'react'
import { Container, ImgWrapper } from '../styles/GlobalStyle'
import styled from 'styled-components'

export default function Contact() {
  return (
    <StyledContact id='contact'>
      <h1>Contact Us</h1>
      <div className='wrapper'>
        <div className='content'>
          <h2>Toronto Headquarter</h2>
          <div className='line'></div>
          <p className='address'>
            49-40 Carl Hall Road Downsview Park, M3K 2C1
          </p>
          <div className='info'>
            <p>
              <span>Mon-Fri:</span>
              9:00 am - 4:00 pm
            </p>
            <p>
              <span>Phone:</span>
              <a href='tel:4164961794'>(416) 496-1794</a>
            </p>
            <p>
              <span>Fax:</span>
              (416) 496-1795
            </p>
            <p>
              <span>Email:</span>
              <a href='mailto:info@rhemacanada.ca'>info@rhemacanada.ca</a>
            </p>
          </div>
        </div>
        <div className='map-wrapper'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2156851747036!2d-79.48001688449921!3d43.74761767911818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b31f3db445a91%3A0xe4bdbb1f2de0ba9b!2s40%20Carl%20Hall%20Rd%20%2349%2C%20North%20York%2C%20ON%20M3K%202C1!5e0!3m2!1sen!2sca!4v1619679421572!5m2!1sen!2sca'
            width='1000'
            height='420'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </StyledContact>
  )
}

const StyledContact = styled(Container)`
  flex-direction: column;
  h1 {
    margin-bottom: 2rem;
  }
  .wrapper {
    width: 1140px;
    display: flex;
    border: 1px solid var(--grey-line);
  }
  .content {
    flex: 25%;
    padding: 4rem 3rem 0 3rem;
  }
  .line {
    width: 10%;
    height: 4px;
    background: var(--blue);
    margin: 2rem 0;
  }
  .info {
    margin: 2rem 0;
    p {
      margin-bottom: 0.5rem;
    }
    span {
      float: left;
      width: 90px;
      font-weight: 600;
    }
  }
  .map-wrapper {
    width: 650px;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
`
