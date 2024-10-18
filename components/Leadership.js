import React, { useState } from "react";
import { executiveBoard as eb, executiveManagementTeam as emt } from "../data/leaders";
import { slideUp, staggering } from "../styles/animation";
import { Container, ImgWrapper } from "../styles/GlobalStyle";

import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { useScroll } from "../utils/useScroll";
import LeaderModal from "./LeaderModal";
import Tabs from "./Tabs";

export default function Leadership() {
  const [element, controls] = useScroll();

  const [showModal, setShowModal] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <>
      <LeaderModal leader={selectedLeader} showModal={showModal} setShowModal={setShowModal} />
      <StyledLeadership id="leadership" variants={staggering} initial="hidden" animate={controls} ref={element}>
        <div className="wrapper">
          <motion.h1 variants={slideUp}>Leadership</motion.h1>
          <Tabs>
            <motion.div label="Executive Management Team">
              <motion.p className="desc" variants={slideUp}>
                Tasked with the operational success of the Rhema organization, our Executive Team ensures the successful
                execution of our global mission. We invite you to take a moment to meet the men and women who are
                leading our future while inspiring us each day.
              </motion.p>
              <div className="leaders" variants={staggering} initial="hidden" animate={controls} ref={element}>
                {emt.map((leader) => (
                  <motion.a
                    key={leader.name}
                    className="leader"
                    variants={slideUp}
                    onClick={() => {
                      setShowModal(true);
                      setSelectedLeader(leader);
                    }}
                  >
                    <ImgWrapper>
                      <Image src={leader.smallImg} layout="fill" objectFit="cover" placeholder="blur" />
                    </ImgWrapper>
                    <p className="name">{leader.name}</p>
                    <p className="title">{leader.title}</p>
                    <div className="leader-overlay">
                      <p className="name">{leader.name}</p>
                      <p className="title">{leader.title}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <div label="Executive Board">
              <motion.p className="desc" variants={slideUp}>
                Tasked with overall governance, our Executive Board ensures that through fiduciary duty, oversight and
                strategic policies, the vision of our organization is realized. Meet the members of our board who are
                championing our future success.
              </motion.p>
              <div className="leaders" variants={staggering} initial="hidden" animate={controls} ref={element}>
                {eb.map((leader) => (
                  <motion.a
                    key={leader.name}
                    className="leader"
                    variants={slideUp}
                    onClick={() => {
                      setShowModal(true);
                      setSelectedLeader(leader);
                    }}
                  >
                    <ImgWrapper>
                      <Image src={leader.smallImg} layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <p className="name">{leader.name}</p>
                    <p className="title">{leader.title}</p>
                    <div className="leader-overlay">
                      <p className="name">{leader.name}</p>
                      <p className="title">{leader.title}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </StyledLeadership>
    </>
  );
}

const StyledLeadership = styled(Container)`
  flex-direction: column;
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
  .wrapper {
    width: 1140px;
    max-width: 95vw;
  }
  .desc {
    margin-bottom: 2rem;
    padding: 1%;
    @media screen and (max-width: 640px) {
      margin-top: 1rem;
    }
  }
  .leaders {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .leader {
    width: 280px;
    min-height: 370px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem;
    border: 1px solid var(--grey-line);
    padding: 2rem;
    overflow: hidden;
    &:hover .leader-overlay {
      opacity: 1;
      transform: scale(1);
    }
  }
  ${ImgWrapper} {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .leader > .name {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  .leader-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--blue);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-duration: 0.5s easeInOut;
    transform: scale(1.2);
    opacity: 0;
    padding: 1rem;
    .name {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .title {
      font-size: 1.25rem;
    }
  }
`;
