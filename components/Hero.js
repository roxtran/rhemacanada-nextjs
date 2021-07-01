import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { slides } from '../data/slides'
import { ImgWrapper } from '../styles/GlobalStyle'
import Image from 'next/image'
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll } from '../utils/useScroll'

export const staggering = {
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
  exit: { opacity: 0, y: 60 },
}

export default function Hero() {
  const [element, controls] = useScroll()

  const [current, setCurrent] = useState(0)
  const length = slides.length

  useEffect(() => {
    const autoPlay = setTimeout(handleNextSlide, 10000)

    return () => {
      clearTimeout(autoPlay)
    }
  })

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <StyledHero
      variants={fadeIn}
      initial='hidden'
      exit='exit'
      animate={controls}
      ref={element}
    >
      <IoIosArrowDropleftCircle
        className='arrow arrow-left'
        onClick={handlePrevSlide}
      />
      <IoIosArrowDroprightCircle
        className='arrow arrow-right'
        onClick={handleNextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <AnimatePresence key={index}>
            {index === current && (
              <>
                <ImgWrapper
                  initial={{ scale: 1.15, zIndex: 2, opacity: 0.5 }}
                  animate={{ scale: 1, zIndex: 1, opacity: 1 }}
                  exit={{ scale: 0.8, zIndex: 0, opacity: 0.5 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Image
                    src={slide.imgUrl}
                    alt='slide-item'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='top'
                    placeholder='blur'
                  />
                </ImgWrapper>
                <div className='img-overlay'></div>
                <motion.div
                  className='content-wrapper'
                  variants={staggering}
                  initial='hidden'
                  animate='show'
                  exit='exit'
                >
                  <motion.h1 variants={slideUp}>{slide.h1}</motion.h1>
                  <motion.p variants={slideUp}>{slide.p}</motion.p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )
      })}
    </StyledHero>
  )
}

const StyledHero = styled(motion.section)`
  position: relative;
  top: -90px;
  z-index: 0;
  overflow: hidden;
  width: 100vw;
  height: 72vh;
  @media screen and (max-width: 640px) {
    height: 90vh;
  }
  ${ImgWrapper} {
    position: absolute;
    width: 100vw;
    height: 72vh;
    @media screen and (max-width: 640px) {
      height: 90vh;
    }
  }
  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .arrow {
    position: absolute;
    top: 50%;
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.15);
    z-index: 5;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
  .arrow-left {
    left: 32px;
  }
  .arrow-right {
    right: 32px;
  }
  .content-wrapper {
    /* background-color: rgba(255 255 255 / 25%); */
    /* padding: 2rem;
    border-radius: 10px;
    backdrop-filter: blur(5px); */
    height: 100%;
    position: absolute;
    width: 590px;
    max-width: 90vw;
    top: 45%;
    left: 10%;
    z-index: 4;
    text-shadow: 0 0 24px rgb(0 0 0 / 15%);
    h1 {
      font-size: 2.5rem;
      /* margin-bottom: 0.15rem; */
    }
    p {
      font-size: 1.2rem;
      font-weight: 300;
    }
    h1,
    p {
      color: #fff;
    }
    @media screen and (max-width: 640px) {
      top: 35%;
      left: 5%;
      h1 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 320px) {
      top: 20%;
    }
  }
`
