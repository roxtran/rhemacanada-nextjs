import React from 'react'
import FeedbackForm from './FeedbackForm'
import { Container } from '../styles/GlobalStyle'
import styled from 'styled-components'

export default function Feedback() {
  return (
    <FeedbackWrapper>
      <h1>Give Feedback</h1>
      <div className='wrapper'>
        <div className='feedback-wrapper'>
          <FeedbackForm />
        </div>
      </div>
    </FeedbackWrapper>
  )
}

const FeedbackWrapper = styled(Container)`
  flex-direction: column;
  padding: 0 0 6rem;
  h1 {
    text-align: center;
    margin-bottom: 3rem;
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
      max-width: 90%;
    }

    p {
      margin-bottom: 15px;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px 10px;
      border: 1px solid var(--grey-line);
      border-radius: 5px;
      margin-bottom: 20px;

      :focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        border: 1px solid var(--dark-blue);
        outline: 0;
      }
    }

    button {
      margin-top: 20px;
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 4px;
      border: 2px solid #fff;
      border-radius: 50px;
      background-color: var(--blue);
      padding: 10px 40px;
      cursor: pointer;
    }
  }
`
