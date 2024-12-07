import React, { useState } from "react";

import styled from "styled-components";

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <StyledTabs>
      <div className="tabs">
        {children.map((tab) => (
          <a
            onClick={() => handleClick(tab.props.label)}
            className={tab.props.label === activeTab ? "tab current" : "tab"}
            key={tab.props.label}
          >
            {tab.props.label}
          </a>
        ))}
        {/* <div className='tab current'>Executive Management Team</div>
        <div className='tab'>Executive Board</div> */}
      </div>
      <div className="tab-content">
        {children.map((content) => {
          if (content.props.label === activeTab) return <div key={content.props.label}>{content}</div>;
        })}
      </div>
    </StyledTabs>
  );
}

const StyledTabs = styled.div`
  width: 100%;
  .tabs {
    display: flex;
    border-bottom: 0.125rem solid var(--grey-line);
  }
  .tab {
    padding: 1rem 1.75rem;
    position: relative;
    top: 0.125rem;
  }
  .tab.current {
    background: #fff;
    font-weight: 500;
    border: 0.125rem solid var(--grey-line);
    border-bottom: 0;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }
  .tab-content {
    padding: 5%;
    text-align: center;
    border: 0.125rem solid var(--grey-line);
    border-top: 0;
    @media screen and (max-width: 40rem) {
      /* padding: 2rem; */
    }
  }
`;
