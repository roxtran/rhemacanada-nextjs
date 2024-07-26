import { slideUp, staggering } from "../styles/animation";

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Container } from "../styles/GlobalStyle";
import { useScroll } from "../utils/useScroll";

export default function Culture() {
  const [element, controls] = useScroll();

  return (
    <StyledCulture id="culture" variants={staggering} initial="hidden" exit="exit" animate={controls} ref={element}>
      <div className="hide-overflow">
        <a href="/our-culture">
          <motion.h1 variants={slideUp}>Our Culture</motion.h1>
        </a>
      </div>
      <div className="wrapper">
        <motion.a
          href="http://cms.rhemacanada.com/rhemacanada/wp-content/uploads/2024/07/RCM-of-Canada-Inc_By-Law_Final-20240718-1.pdf"
          target="_blank"
          variants={slideUp}
        >
          <h3>By-Laws</h3>
        </motion.a>
        <motion.a
          href="http://cms.rhemacanada.com/rhemacanada/wp-content/uploads/2024/07/RHEMA-CHRISTIAN-MINISTRIES-OF-CANADA-INC_CONSTITUTION_FINAL_20240130-2.pdf"
          target="_blank"
          variants={slideUp}
        >
          <h3>Constitution</h3>
        </motion.a>
      </div>
    </StyledCulture>
  );
}

const StyledCulture = styled(Container)`
  position: relative;
  flex-direction: column;
  padding-bottom: 3rem;
  h1 {
    color: var(--blue);
    margin-bottom: 1rem;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
