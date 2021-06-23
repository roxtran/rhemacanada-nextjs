import React from 'react'
import { Container } from '../styles/GlobalStyle'
import styled from 'styled-components'
import { Cards } from './Services'
import { useScroll } from '../utils/useScroll'
import { motion } from 'framer-motion'
import { slideUp } from './Hero'
import { staggering } from './Services'

export default function About() {
  const [element, controls] = useScroll()
  return (
    <StyledAbout
      id='about'
      variants={staggering}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <motion.h1 variants={slideUp}>About Us</motion.h1>
      <div className='blue-bg'></div>
      <AboutCards>
        <motion.a variants={slideUp}>
          <div className='card'>
            <div className='color-overlay'></div>
            <h2>Our Vision</h2>
            <div className='line'></div>
            <p>We empower people to live better lives.</p>
          </div>
        </motion.a>
        <motion.a variants={slideUp}>
          <div className='card'>
            <div className='color-overlay'></div>
            <h2>Our Mission</h2>
            <div className='line'></div>
            <p>
              We change and affect lives by offering products & services that
              meet people at their point of need.
            </p>
          </div>
        </motion.a>
        <motion.a variants={slideUp}>
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
        </motion.a>
      </AboutCards>
    </StyledAbout>
  )
}

const StyledAbout = styled(Container)`
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid var(--grey-line);

  .blue-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 56%;
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
    h2 {
      color: #fff;
    }
    .line {
      background-color: #fff;
    }
  }
  h2 {
    color: var(--blue);
    z-index: 1;
  }
  .line {
    width: 25%;
    height: 1px;
    background-color: var(--text-color);
    margin: 1.5rem 0;
    z-index: 1;
  }
  .card {
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
