import { slideUp, staggering } from "../styles/animation";

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Container } from "../styles/GlobalStyle";
import { useScroll } from "../utils/useScroll";
import FeedbackForm from "./FeedbackForm";

export default function Feedback() {
  const [element, controls] = useScroll();

  return (
    <StyledFeedback variants={staggering} initial="hidden" animate={controls} ref={element}>
      <div className="wrapper">
        <motion.h1 variants={slideUp}>Give Feedback</motion.h1>
        <motion.div variants={slideUp} className="feedback-wrapper">
          <FeedbackForm />
        </motion.div>
      </div>
    </StyledFeedback>
  );
}

const StyledFeedback = styled(Container)`
  flex-direction: column;
  padding: 0 0 8rem;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .wrapper {
    width: 71.25rem;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .feedback-wrapper {
    width: 37.5rem;

    .form-wrapper {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }

    p {
      margin-bottom: 1rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.625rem;
      border: 0.0625rem solid var(--grey-line);
      border-radius: 0.3125rem;
      margin-bottom: 1.25rem;
      font-size: 0.85rem;
      font-weight: 400;

      :focus {
        box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.2);
        border: 0.0625rem solid var(--blue);
        outline: 0;
      }
    }

    button {
      font-size: 0.9rem;
      margin-top: 1.25rem;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      border: none;
      border-radius: 3.125rem;
      background-color: var(--blue);
      padding: 0.75rem 2.25rem;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0.625rem 1.5rem -0.5rem rgb(20 144 215 / 50%);
      }
    }
  }
  @media screen and (max-width: 40rem) {
    margin-bottom: -3rem;
    .feedback-wrapper {
      max-width: 90vw;
    }
  }
`;
