import { FaChurch, FaCubes } from "react-icons/fa";
import { slideUp, staggering } from "../styles/animation";

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Container } from "../styles/GlobalStyle";
import { useScroll } from "../utils/useScroll";

export default function Services() {
  const [element, controls] = useScroll();

  return (
    <StyledServices id="services" variants={staggering} initial="hidden" exit="exit" animate={controls} ref={element}>
      <div className="hide-overflow">
        <motion.h1 variants={slideUp}>What We Do</motion.h1>
      </div>
      <Cards>
        <motion.a href="https://rhemaonline.ca" target="_blank" variants={slideUp}>
          <div className="card">
            <div className="color-overlay"></div>
            <FaChurch className="icon" />
            <h3>Church</h3>
          </div>
        </motion.a>
        {/* <motion.a
          href='http://kingscollegepsc.ca/'
          target='_blank'
          variants={slideUp}
        >
          <div className='card'>
            <div className='color-overlay'></div>
            <IoMdSchool className='icon' />
            <h3>Education</h3>
          </div>
        </motion.a> */}
        <motion.a href="http://rfcanada.org/" target="_blank" variants={slideUp}>
          <div className="card">
            <div className="color-overlay"></div>
            <FaCubes className="icon" />
            <h3>Foundation</h3>
          </div>
        </motion.a>
      </Cards>
    </StyledServices>
  );
}

const StyledServices = styled(Container)`
  position: relative;
  flex-direction: column;
  h1 {
    color: var(--blue);
    margin-bottom: 2.5rem;
  }
`;
export const Cards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  a:hover {
    color: #fff;
    h3 {
      color: #fff;
      z-index: 1;
    }
    .color-overlay {
      transform: scale(1);
      opacity: 1;
    }
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--light-grey-bg);
    margin: 1rem;
    padding: 2rem 2rem;
    width: 18.75rem;
    height: 15.625rem;
    border-radius: 0.625rem;
  }
  .color-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--blue);
    transform: scale(0.8);
    opacity: 0;
    border-radius: 0.625rem;
    z-index: 0;
    transition-duration: 0.2s;
  }
  .icon {
    font-size: 3.25rem;
    margin-bottom: 1.25rem;
    z-index: 1;
  }
`;
