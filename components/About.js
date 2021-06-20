import React from 'react'
import { Container } from '../styles/GlobalStyle'
import styled from 'styled-components'
import { Cards } from './Services'

export default function About() {
  return (
    <AboutWrapper id='about'>
      <h1>About Us</h1>
      <div className='blue-bg'></div>
      <AboutCards>
        <a>
          <div className='card'>
            <div className='color-overlay'></div>
            <h2>Our Vision</h2>
            <div className='line'></div>
            <p>We empower people to live better lives.</p>
          </div>
        </a>
        <a>
          <div className='card'>
            <div className='color-overlay'></div>
            <h2>Our Mission</h2>
            <div className='line'></div>
            <p>
              We change and affect lives by offering products & services that
              meet people at their point of need.
            </p>
          </div>
        </a>
        <a>
          <div className='card'>
            <div className='color-overlay'></div>
            <h2>Core Values</h2>
            <div className='line'></div>
            <p>Rhema is committed to I.C.I.T.E (EYE-SIGHT)</p>
            <p>
              <strong>
                Compassion, Integrity Teamwork, Excellence Innovation
              </strong>
            </p>
          </div>
        </a>
      </AboutCards>
    </AboutWrapper>
  )
}

const AboutWrapper = styled(Container)`
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .blue-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 28rem;
    background: var(--blue);
    z-index: 0;
  }
  h1 {
    z-index: 1;
    color: #fff;
    margin-bottom: 2.5rem;
  }
`
const AboutCards = styled(Cards)`
  a:hover {
    .line {
      background-color: #fff;
    }
  }
  h2 {
    color: var(--blue);
  }
  .line {
    width: 30%;
    height: 1px;
    background-color: var(--text-color);
    margin: 1.5rem 0;
    z-index: 1;
  }
  .card {
    width: 320px;
    height: 100%;
    padding: 3rem;
    border: 3px solid #fff;
  }
  p,
  q {
    text-align: center;
    margin-bottom: 1rem;
    z-index: 1;
  }
  q {
    font-weight: 600;
    font-style: italic;
  }
`
