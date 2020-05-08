import React from "react"
import styled from "styled-components"

const HeaderIndex = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  height: 100vh;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default HeaderIndex
