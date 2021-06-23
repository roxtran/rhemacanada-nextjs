import React from 'react'
import FeedbackForm from './FeedbackForm'
import { Container } from '../styles/GlobalStyle'
import styled from 'styled-components'
import { useScroll } from '../utils/useScroll'
import { motion } from 'framer-motion'
import { slideUp } from './Hero'
import { staggering } from './Services'

export default function Feedback() {
  const [element, controls] = useScroll()

  return (
    <StyledFeedback
      variants={staggering}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <motion.h1 variants={slideUp}>Give Feedback</motion.h1>
      <div className='wrapper'>
        <motion.div variants={slideUp} className='feedback-wrapper'>
          <FeedbackForm />
        </motion.div>
      </div>
    </StyledFeedback>
  )
}

const StyledFeedback = styled(Container)`
  flex-direction: column;
  padding: 0 0 6rem;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .wrapper {
    width: 1140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .feedback-wrapper {
    width: 600px;

    @media screen and (max-width: 480px) {
      max-width: 90vw;
    }

    .form-wrapper {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }

    p {
      margin-bottom: 15px;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--grey-line);
      border-radius: 5px;
      margin-bottom: 20px;
      font-size: 0.85rem;
      font-weight: 400;

      :focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        border: 1px solid var(--blue);
        outline: 0;
      }
    }

    button {
      font-size: 0.9rem;
      margin-top: 20px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 4px;
      border: none;
      border-radius: 50px;
      background-color: var(--blue);
      padding: 12px 36px;
      cursor: pointer;
      &:hover {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
`
