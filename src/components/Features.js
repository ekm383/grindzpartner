import React from "react"
import styled from "styled-components"

const Features = ({ heading, subheading, content, content2, style }) => {
  return (
    <FeaturesWrapper style={style}>
      <div>
        <h2>{heading}</h2>
        <h4>{subheading}</h4>
        <p>{content}</p>
        <p>{content2}</p>
      </div>
    </FeaturesWrapper>
  )
}

const FeaturesWrapper = styled.div`
  flex-basis: 48%;
  margin-bottom: 2rem;
  h4 {
    color: var(--mainColor);
    margin-bottom: 0.3rem;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 0.7rem;
    h2 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 1rem;
    }
  }
`

export default Features
