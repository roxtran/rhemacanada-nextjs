// import { ImgWrapper } from '../styles/GlobalStyle'

import { motion } from "framer-motion";
import styled from "styled-components";

const Loader = ({ setLoading }) => {
  return (
    <StyledLoader>
      <motion.div
        className="wrapper"
        initial={{ width: 0, x: "-40vw" }}
        animate={{ width: "100vw", x: 0 }}
        transition={{ duration: 2 }}
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div
          // initial={{ width: 0 }}
          // animate={{ width: '40vw' }}
          // transition={{ duration: 2 }}
          className="logo"
        ></motion.div>
      </motion.div>
    </StyledLoader>
  );
};

export default Loader;

const StyledLoader = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;

  .wrapper,
  .logo {
    width: 100vw;
    height: 90vh;
  }

  .wrapper {
    margin: auto;

    background: var(--blue);
  }

  .logo {
    background: #fff;
    mask-image: url("/img/logo-mask.png");
    mask-size: cover;
    mask-position: center;
    mask-repeat: no-repeat;
  }

  @media screen and (max-width: 40rem) {
    .wrapper,
    .logo {
      height: 60vh;
    }
  }
`;
