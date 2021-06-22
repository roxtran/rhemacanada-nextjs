import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()} Rhema Canada. All rights reserved.
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  border-top: 1px solid var(--grey-line);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`
