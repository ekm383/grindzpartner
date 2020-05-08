import React from "react"
import styled from "styled-components"

const HeaderPage = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(15vh);
  background-image: url(${props => props.img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default HeaderPage
