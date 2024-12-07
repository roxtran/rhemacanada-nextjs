import { Container, ImgWrapper } from "../styles/GlobalStyle";
import { slideUp, staggering } from "../styles/animation";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useScroll } from "../utils/useScroll";

export default function Strategy() {
  const [element, controls] = useScroll();

  return (
    <StyledStrategy id="strategy" variants={staggering} initial="hidden" animate={controls} ref={element}>
      <div className="wrapper">
        <div className="content">
          <motion.h1 variants={slideUp}>Corporate Strategy</motion.h1>
          <motion.h2 variants={slideUp}>Our Threefold Strategy:</motion.h2>
          <div className="items">
            <motion.div variants={slideUp} className="item">
              <div className="number">01</div>
              <div className="text-wrapper">
                <div className="high-light">Identify the needs</div>
              </div>
            </motion.div>
            <motion.div variants={slideUp} className="item">
              <div className="number">02</div>
              <div className="text-wrapper">
                <div className="high-light">Develop the products & services</div>
              </div>
            </motion.div>
            <motion.div variants={slideUp} className="item">
              <div className="number">03</div>
              <div className="text-wrapper">
                <div className="high-light">Sustain the change</div>
              </div>
            </motion.div>
          </div>
          <motion.p className="desc" variants={slideUp}>
            Through a data driven approach and intimate knowledge of our local & global clients we develop products &
            services that meet people at the point of their need, transform lives, while sustaining positive growth.
          </motion.p>
        </div>
        <ImgWrapper variants={slideUp}>
          <Image src="/img/strategy.jpg" layout="fill" objectFit="cover" placeholder="blur" />
        </ImgWrapper>
      </div>
    </StyledStrategy>
  );
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
    margin-bottom: 2rem;
    h1 {
      margin-bottom: 1rem;
    }
    @media screen and (max-width: 64rem) {
      width: 100%;
      padding: 3rem 3rem 0;
    }
  }
  .items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 1rem 0 0;
  }
  .item {
    flex: 40%;
    display: flex;
    margin-bottom: 1rem;
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
    height: 37.5rem;
    width: 45%;
    @media screen and (max-width: 64rem) {
      width: 100%;
    }
  }
`;
