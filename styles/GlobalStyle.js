import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.1s ease-out;
    font-family: 'Poppins', sans-serif;
  }
  html, body {
    background: #fff;
    width: 100vw;
    overflow-x: hidden;
    color: var(--text-color);
    font-weight: 300;
  }
  a {
    cursor: pointer;
    color: var(--text-color);
    text-decoration: none;
    &:active, &:focus {
      outline: 0;
      border: none;
    }
  }
  h1, h2, h3, h4 {
    font-weight: 600;
    color: var(--heading-color);
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  p {
    line-height: 1.5;
  }
  ol, ul {
    padding-left: 0;
  }
`
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 8rem;
`
export const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  background: var(--blue);
  border-radius: 5px;
  color: #fff;
  padding: 10px 25px;
  text-align: center;
  text-transform: capitalize;
  &:hover {
    /* background: var(--light-blue); */
    color: #fff;
    /* box-shadow: var(--shadow); */
  }
`
export const ImgWrapper = styled(motion.div)`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`
