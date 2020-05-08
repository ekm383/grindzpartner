import React from "react"
import styled from "styled-components"

const Space = ({ id }) => {
  return <SpaceWrapper id={id}> </SpaceWrapper>
}

const SpaceWrapper = styled.div`
  margin: 6rem auto;
`

export default Space
