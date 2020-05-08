import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  width: auto;
  margin: 0px auto 30px auto;
  display: block;
  color: var(--mainColor);
  background: yellow;
  border: 2px solid yellow;
  border-radius: 50px;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bolder;
  transition: all 0.2s linear;
  &:hover {
    background: transparent;
    border: 2px solid var(--white);
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
  svg {
    padding-top: 5px;
    vertical-align: top;
  }
`

export default Button
