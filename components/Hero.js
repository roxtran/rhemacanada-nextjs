import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { fade, slideUp } from "../styles/animation";

import Image from "next/image";
import styled from "styled-components";
import { slides } from "../data/slides";
import { ImgWrapper } from "../styles/GlobalStyle";
import { useScroll } from "../utils/useScroll";

const staggering = {
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

export default function Hero() {
  const [element, controls] = useScroll();

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const autoPlay = setTimeout(handleNextSlide, 10000);

    return () => {
      clearTimeout(autoPlay);
    };
  });

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <StyledHero id="hero" variants={fade} initial="hidden" exit="exit" animate={controls} ref={element}>
      <IoIosArrowDropleftCircle className="arrow arrow-left" onClick={handlePrevSlide} />
      <IoIosArrowDroprightCircle className="arrow arrow-right" onClick={handleNextSlide} />
      {slides.map((slide, index) => {
        return (
          <AnimatePresence key={index}>
            {index === current && (
              <>
                <ImgWrapper
                  initial={{ scale: 1.15, zIndex: 2, opacity: 0.5 }}
                  animate={{ scale: 1, zIndex: 1, opacity: 1 }}
                  exit={{ scale: 0.8, zIndex: 0, opacity: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={slide.imgUrl}
                    alt="slide-item"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    placeholder="blur"
                    // loading='eager'
                    priority="preload"
                  />
                </ImgWrapper>
                <div className="img-overlay"></div>
                <motion.div className="text-wrapper" variants={staggering} initial="hidden" animate="show" exit="exit">
                  <motion.h1 variants={slideUp}>{slide.h1}</motion.h1>
                  <motion.p variants={slideUp}>{slide.p}</motion.p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        );
      })}
    </StyledHero>
  );
}

const StyledHero = styled(motion.section)`
  position: relative;
  top: -5.625rem;
  margin-bottom: -5.625rem;
  z-index: 0;
  overflow: hidden;
  width: 100vw;
  height: 72vh;
  ${ImgWrapper} {
    position: absolute;
    width: 100vw;
    height: 72vh;
  }
  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
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
    left: 2rem;
  }
  .arrow-right {
    right: 2rem;
  }
  .text-wrapper {
    /* background-color: rgba(255 255 255 / 25%); */
    /* padding: 2rem;
    border-radius: 0.625rem;
    backdrop-filter: blur(0.3125rem); */
    height: 100%;
    position: absolute;
    width: 36.875rem;
    max-width: 90vw;
    bottom: -45%;
    left: 10%;
    z-index: 4;
    text-shadow: 0 0 1.5rem rgb(0 0 0 / 15%);
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
  }
  @media screen and (max-width: 40rem) {
    height: 85vh;
    ${ImgWrapper} {
      height: 85vh;
    }
    .text-wrapper {
      left: 5%;
      bottom: -35%;
      h1 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 20rem) {
    height: 100vh;
    ${ImgWrapper} {
      height: 100vh;
    }
    .text-wrapper {
      bottom: -25%;
    }
  }
`;
