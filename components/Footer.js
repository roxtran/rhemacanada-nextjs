import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        &copy; {new Date().getFullYear()} Rhema Canada. All rights reserved. |&nbsp;
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 1rem;
  font-size: 0.9rem;
  border-top: 1px solid var(--grey-line);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;

  div {
    text-align: center;
  }
`;
