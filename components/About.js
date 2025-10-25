import { slideUp, staggering } from "../styles/animation";

import { Cards } from "./Services";
import { Container } from "../styles/GlobalStyle";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useScroll } from "../utils/useScroll";

export default function About() {
  const [element, controls] = useScroll();
  return (
    <StyledAbout id="about" variants={staggering} initial="hidden" animate={controls} ref={element}>
      <motion.h1 variants={slideUp}>About Us</motion.h1>
      <div className="blue-bg"></div>
      <AboutCards>
        <motion.a variants={slideUp} href="/executive-summary" target="_blank">
          <div className="card">
            <div className="color-overlay"></div>
            <h2>Our Vision</h2>
            <div className="line"></div>
            <p>We empower people to live better lives.</p>
          </div>
        </motion.a>
        <motion.a variants={slideUp}>
          <div className="card">
            <div className="color-overlay"></div>
            <h2>Our Mission</h2>
            <div className="line"></div>
            <p>We change and affect lives by offering products & services that meet people at their point of need.</p>
          </div>
        </motion.a>
        <motion.a variants={slideUp}>
          <div className="card">
            <div className="color-overlay"></div>
            <h2>Core Values</h2>
            <div className="line"></div>
            <p>Rhema is committed to I.C.I.T.E (EYE-SIGHT)</p>
            <p>
              <strong>Integrity, Compassion, Innovation, Teamwork, Excellence</strong>
            </p>
          </div>
        </motion.a>
      </AboutCards>
    </StyledAbout>
  );
}

const StyledAbout = styled(Container)`
  position: relative;
  flex-direction: column;
  border-bottom: 0.0625rem solid var(--grey-line);

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
`;
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
    height: 0.125rem;
    background-color: var(--text-color);
    margin: 1.5rem 0;
    z-index: 1;
  }
  .card {
    min-height: 21.875rem;
    padding: 3rem;
    border: 0.1875rem solid #fff;
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
`;
