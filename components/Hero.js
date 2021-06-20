import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { slides } from '../data/slides'
import { ImgWrapper } from '../styles/GlobalStyle'
import Image from 'next/image'
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  useEffect(() => {
    const autoPlay = setTimeout(nextSlide, 5000)

    return () => {
      clearTimeout(autoPlay)
    }
  })

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <HeroWrapper>
      <IoIosArrowDropleftCircle
        className='arrow arrow-left'
        onClick={prevSlide}
      />
      <IoIosArrowDroprightCircle
        className='arrow arrow-right'
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <>
                <ImgWrapper className='img-wrapper'>
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
                <div className='content-wrapper'>
                  <h1>{slide.h1}</h1>
                  <p>{slide.p}</p>
                </div>
              </>
            )}
          </div>
        )
      })}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;
  z-index: 0;
  overflow: hidden;
  .img-wrapper {
    width: 100vw;
    height: 70vh;
  }
  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    width: 100%;
    height: 100%;
  }
  .arrow {
    position: absolute;
    top: 50%;
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.15);
    z-index: 1;
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
  .slide {
    opacity: 0;
    transition-duration: 1s;
    transform: scale(1.15);
  }
  .slide.active {
    opacity: 1;
    /* transition-duration: 1s; */
    transform: scale(1);
  }
  .content-wrapper {
    position: absolute;
    width: 650px;
    top: 45%;
    left: 10%;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 1.2rem;
      font-weight: 300;
    }
    h1,
    p {
      color: #fff;
    }
  }
`
