import { slideUp, staggering } from "../styles/animation";

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Container } from "../styles/GlobalStyle";
import { useScroll } from "../utils/useScroll";

export default function Contact() {
  const [element, controls] = useScroll();

  return (
    <StyledContact id="contact" variants={staggering} initial="hidden" animate={controls} ref={element}>
      <motion.h1 variants={slideUp}>Contact Us</motion.h1>
      <div className="wrapper">
        <div className="content">
          <motion.h2 variants={slideUp}>Toronto Headquarter</motion.h2>
          <div className="line"></div>
          <motion.p variants={slideUp} className="address">
            3858 Chesswood Drive, North York, ON, M3J 2W6
          </motion.p>
          <div className="info">
            <motion.p variants={slideUp}>
              <span>Mon-Fri:</span>
              9:00 am - 4:00 pm
            </motion.p>
            <motion.p variants={slideUp}>
              <span>Phone:</span>
              <a href="tel:4164961794">(416) 496-1794</a>
            </motion.p>
            <motion.p variants={slideUp}>
              <span>Fax:</span>
              (416) 496-1795
            </motion.p>
            <motion.p variants={slideUp}>
              <span>Email:</span>
              <a href="mailto:info@rhemacanada.ca">info@rhemacanada.ca</a>
            </motion.p>
          </div>
        </div>
        <motion.div variants={slideUp} className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.835652908633!2d-79.47637759999999!3d43.7555095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b31fbd6b34c8b%3A0x2021c91c91d3ec98!2s3858%20Chesswood%20Dr%2C%20North%20York%2C%20ON%20M3J%202W6!5e0!3m2!1sen!2sca!4v1729265929089!5m2!1sen!2sca"
            width="1000"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled(Container)`
  flex-direction: column;
  h1 {
    margin-bottom: 2rem;
  }
  .wrapper {
    width: 71.25rem;
    max-width: 90vw;
    display: flex;
    flex-wrap: wrap;
    border: 0.0625rem solid var(--grey-line);
  }
  .content {
    flex: 25%;
    padding: 4rem 3rem 0 3rem;
  }
  .line {
    width: 10%;
    height: 0.25rem;
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
      width: 5.625rem;
      font-weight: 600;
    }
  }
  .map-wrapper {
    width: 40.625rem;
    height: 100%;
    border-radius: 0.3125rem;
    overflow: hidden;
    @media screen and (max-width: 64rem) {
      width: 100%;
    }
  }
`;
