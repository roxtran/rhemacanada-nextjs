import React, { useState } from 'react'
import styled from 'styled-components'

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const handleClick = (newActiveTab) => {
    setActiveTab(newActiveTab)
  }

  return (
    <TabsWrapper>
      <div className='tabs'>
        {children.map((tab) => (
          <a
            onClick={() => handleClick(tab.props.label)}
            className={tab.props.label === activeTab ? 'tab current' : 'tab'}
            key={tab.props.label}
          >
            {tab.props.label}
          </a>
        ))}
        {/* <div className='tab current'>Executive Management Team</div>
        <div className='tab'>Executive Board</div> */}
      </div>
      <div className='content'>
        {children.map((content) => {
          if (content.props.label === activeTab)
            return <div key={content.props.label}>{content}</div>
        })}
      </div>
    </TabsWrapper>
  )
}

const TabsWrapper = styled.div`
  width: 100%;
  .tabs {
    display: flex;
    border-bottom: 2px solid var(--grey-line);
  }
  .tab {
    padding: 1rem 1.75rem;
    position: relative;
    top: 2px;
  }
  .tab.current {
    background: #fff;
    font-weight: 500;
    border: 2px solid var(--grey-line);
    border-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .content {
    padding: 3rem;
    text-align: center;
    border: 2px solid var(--grey-line);
    border-top: 0;
  }
`
