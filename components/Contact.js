import React from "react";
import { Container, ImgWrapper } from "../styles/GlobalStyle";
import styled from "styled-components";
import { useScroll } from "../utils/useScroll";
import { motion } from "framer-motion";
import { staggering, slideUp } from "../styles/animation";

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
            401 Magnetic Drive Unit 12, Toronto, ON, M3J-3H9
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.4707838355193!2d-79.47578342239012!3d43.78384327109618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e75b2aae517%3A0x43c072f9e706786c!2s401%20Magnetic%20Dr%20Unit%2012%2C%20North%20York%2C%20ON%20M3J%203H9!5e0!3m2!1sen!2sca!4v1698885142652!5m2!1sen!2sca"
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
    width: 1140px;
    max-width: 90vw;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid var(--grey-line);
  }
  .content {
    flex: 25%;
    padding: 4rem 3rem 0 3rem;
  }
  .line {
    width: 10%;
    height: 4px;
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
      width: 90px;
      font-weight: 600;
    }
  }
  .map-wrapper {
    width: 650px;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`;
