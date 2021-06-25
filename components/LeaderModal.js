import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { VscTriangleDown } from 'react-icons/vsc'
import { motion, AnimatePresence } from 'framer-motion'

const slideDown = {
  hidden: { y: -200, opacity: 0 },
  show: {
    y: [0, -50, 0],
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  exit: {
    opacity: 1,
    y: 400,
    // transition: { duration: 0.25, ease: 'easeIn' },
  },
}

export default function LeaderModal({ openModal, setOpenModal, leader }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {openModal && (
        <StyledModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='modal-dialog'
            variants={slideDown}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            <a className='btn-close' onClick={() => setOpenModal(false)}>
              Close
              <VscTriangleDown className='btn-icon' />
            </a>
            <div className='modal-content'>
              <div className='modal-left'>
                <figure className='img-wrapper'>
                  <Image
                    src={leader.largeImg}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='top'
                    placeholder='blur'
                  />
                </figure>
                <h2 className='name'>{leader.name}</h2>
                <div className='line'></div>
                <h3 className='title'>{leader.title}</h3>
              </div>
              <div
                className='modal-right'
                dangerouslySetInnerHTML={{ __html: leader.bio }}
              ></div>
            </div>
          </motion.div>
        </StyledModal>
      )}
    </AnimatePresence>
  )
}

const StyledModal = styled(motion.div)`
  background: rgb(0 0 0 / 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-dialog {
    background: #fff;
    position: relative;
    width: 1100px;
    max-width: 90vw;
    height: 85vh;
    border-radius: 5px;
  }
  .btn-close {
    background-color: var(--blue);
    padding: 0.9rem 2.5rem;
    position: absolute;
    top: 0;
    right: 10%;
    transform: translateY(-45%);
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.15rem;
    border-radius: 5px;
    &:hover {
      opacity: 0.9;
    }
    .btn-icon {
      position: relative;
      top: 2px;
      margin-left: 0.35rem;
    }
    @media screen and (max-width: 640px) {
      font-size: 0.85rem;
      padding: 0.9rem 2rem;
    }
  }
  .modal-content {
    display: flex;
    text-align: left;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 6% 0 2% 5%;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      padding: 5% 0 5% 5%;
      padding-top: 3rem;
      overflow: hidden;
      overflow-y: auto;
    }
  }
  .modal-left {
    display: flex;
    flex-direction: column;
    flex: 40%;
    margin-right: 3rem;
    padding-bottom: 1rem;
    .line {
      background: var(--grey-line);
      height: 1px;
      width: 50%;
      margin: 0.5rem 0;
    }
    h2 {
      color: var(--blue);
    }
    h3 {
    }
    @media screen and (max-width: 640px) {
      margin-right: 0;
      width: 100%;
      padding-right: 5%;
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.15rem;
      }
      .line {
        margin: 0.25rem 0;
      }
    }
  }
  .img-wrapper {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: 500px;
    margin-bottom: 1.5rem;
    box-shadow: -4px 5px 15px -10px rgb(0 0 0 / 0.5);
    @media screen and (max-width: 640px) {
      height: 200px;
      width: 200px;
      margin-bottom: 1rem;
    }
  }
  .modal-right {
    flex: 50%;
    height: 100%;
    padding-right: 5%;
    overflow: hidden;
    overflow-y: auto;
    p {
      margin-bottom: 0.5rem;
    }
  }
`
