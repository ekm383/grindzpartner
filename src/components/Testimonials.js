import React from "react"
import styled from "styled-components"

const Testimonials = ({ style, content, author }) => {
  return (
    <TestimonialWrapper style={style}>
      <p>{content}</p>
      <h5>{author}</h5>
    </TestimonialWrapper>
  )
}

const TestimonialWrapper = styled.div`
  width: 50%;
  h5 {
    margin: 10px 0px;
    line-height: 1.4rem;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 0px auto;
  }
`

export default Testimonials
