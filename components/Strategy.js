import React from 'react'
import { Container, ImgWrapper } from '../styles/GlobalStyle'
import styled from 'styled-components'
import Image from 'next/image'
import { useScroll } from '../utils/useScroll'
import { motion } from 'framer-motion'
import { slideUp } from './Hero'
import { staggering } from './Services'

export default function Strategy() {
  const [element, controls] = useScroll()

  return (
    <StyledStrategy
      id='strategy'
      variants={staggering}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <div className='wrapper'>
        <div className='content'>
          <motion.h1 variants={slideUp}>Corporate Strategy</motion.h1>
          <motion.p className='desc' variants={slideUp}>
            Through a data driven approach and intimate knowledge of our local &
            global clients we develop products & services that meet people at
            the point of their need, transform lives, while sustaining positive
            growth.
          </motion.p>
          <div className='items'>
            <motion.div variants={slideUp} className='item'>
              <div className='number'>01</div>
              <div className='text-wrapper'>
                <div className='high-light'>
                  Supporting Spiritual Excellence:
                </div>
                <div className='text'>
                  Deliver with excellence a Spirit-filled worship & ministry
                  experience that is innovative, relevant and that serves
                  broader communities.
                </div>
              </div>
            </motion.div>
            <motion.div variants={slideUp} className='item'>
              <div className='number'>02</div>
              <div className='text-wrapper'>
                <div className='high-light'>Affecting Human Wellness:</div>
                <div className='text'>
                  Deliver holistic programs and services that addresses the
                  spiritual, social and economic well-being of the individual,
                  family, and community.
                </div>
              </div>
            </motion.div>
            <motion.div variants={slideUp} className='item'>
              <div className='number'>03</div>
              <div className='text-wrapper'>
                <div className='high-light'>
                  Creating Sustainable Communities:
                </div>
                <div className='text'>
                  Feed, clothe, shelter, integrate and empower those within the
                  broader community who are unable to do so.
                </div>
              </div>
            </motion.div>
            <motion.div variants={slideUp} className='item'>
              <div className='number'>04</div>
              <div className='text-wrapper'>
                <div className='high-light'>Building A Better World:</div>
                <div className='text'>
                  Engage in meaningful educational, missional and environmental
                  initiatives that further human growth and progress.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <ImgWrapper variants={slideUp}>
          <Image src='/img/strategy.jpg' layout='fill' objectFit='cover' />
        </ImgWrapper>
      </div>
    </StyledStrategy>
  )
}

const StyledStrategy = styled(Container)`
  padding: 0;
  background-color: var(--light-grey-bg);
  .wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .content {
    width: 55%;
    padding: 2rem 3rem 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      margin-bottom: 1rem;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 3rem 3rem 0;
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
  .item {
    flex: 40%;
    display: flex;
    margin-bottom: 2rem;
    &:not(:nth-child(2)):not(:nth-child(4)) {
      margin-right: 2rem;
    }
  }
  .number {
    color: var(--blue);
    font-size: 2rem;
    font-weight: 600;
    margin-right: 1rem;
  }
  .high-light {
    color: var(--blue);
    font-weight: 600;
    margin: 0.5rem 0;
  }
  ${ImgWrapper} {
    height: 600px;
    width: 45%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`
