import React from 'react'
import { Container, ImgWrapper } from '../styles/GlobalStyle'
import styled from 'styled-components'
import Image from 'next/image'

export default function Strategy() {
  return (
    <StrategyWrapper>
      <div className='wrapper'>
        <div className='content'>
          <h1>Corporate Strategy</h1>
          <p className='desc'>
            Through a data driven approach and intimate knowledge of our local &
            global clients we develop products & services that meet people at
            the point of their need, transform lives, while sustaining positive
            growth.
          </p>
          <div className='items'>
            <div className='item'>
              <div className='number'>01</div>
              <div className='text-wrapper'>
                <div className='high-light'>
                  Supporting Spiritual Excellence:
                </div>
                <div className='text'>
                  Deliver with excellence a Spirit-filled worship & ministry
                  experience that is innovative, relevant and that serves
                  broader communities.
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='number'>02</div>
              <div className='text-wrapper'>
                <div className='high-light'>
                  Supporting Spiritual Excellence:
                </div>
                <div className='text'>
                  Deliver with excellence a Spirit-filled worship & ministry
                  experience that is innovative, relevant and that serves
                  broader communities.
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='number'>03</div>
              <div className='text-wrapper'>
                <div className='high-light'>
                  Supporting Spiritual Excellence:
                </div>
                <div className='text'>
                  Deliver with excellence a Spirit-filled worship & ministry
                  experience that is innovative, relevant and that serves
                  broader communities.
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='number'>04</div>
              <div className='text-wrapper'>
                <div className='high-light'>
                  Supporting Spiritual Excellence:
                </div>
                <div className='text'>
                  Deliver with excellence a Spirit-filled worship & ministry
                  experience that is innovative, relevant and that serves
                  broader communities.
                </div>
              </div>
            </div>
          </div>
        </div>
        <ImgWrapper className='img-wrapper'>
          <Image src='/img/strategy.jpg' layout='fill' objectFit='cover' />
        </ImgWrapper>
      </div>
    </StrategyWrapper>
  )
}

const StrategyWrapper = styled(Container)`
  padding: 0;
  background-color: var(--light-grey-bg);
  .wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 50%;
    padding: 2rem 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
  .item {
    flex: 40%;
    display: flex;
    margin-right: 2rem;
    margin-bottom: 2rem;
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
  .img-wrapper {
    height: 600px;
    width: 50%;
  }
`
