import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { fade } from "../styles/animation";
import { useScroll } from "../utils/useScroll";

export default function Video() {
  const [element, controls] = useScroll();

  return (
    <StyledVideo id="video" variants={fade} initial="hidden" exit="exit" animate={controls} ref={element}>
      <VideoWrapper>
        <video loop muted autoPlay>
          <source src="/video/corporate-culture-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
    </StyledVideo>
  );
}

const StyledVideo = styled(motion.section)`
  position: relative;
  z-index: 0;
  overflow: hidden;
  width: 100vw;
`;
const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: 56.25vw;
    object-fit: cover;
  }
`;
