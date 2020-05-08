import React from "react"
import { FaBars } from "react-icons/fa"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"
import styled from "styled-components"

const NavBarHeader = ({ handleNavBar }) => {
  return (
    <HeaderWrapper>
      <div>
        <a href="https://www.instagram.com/restaurantmarketinghawaii">
          <FaInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/restaurantmarketinghawaii">
          <FaFacebook className="social" />
        </a>
        <a href="https://www.google.com/restaurantmarketinghawaii">
          <FaGoogle className="social" />
        </a>
      </div>
      <div>
        <FaBars
          className="toggle-icon"
          onClick={() => {
            handleNavBar()
          }}
        />
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .social {
    color: var(--mainColor);
    font-size: 1rem;
    margin-right: 0.3rem;
  }
  .toggle-icon {
    font-size: 1.5rem;
    color: var(--DarkGray);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0rem 1rem;
  }
  a {
    text-decoration: none;
  }
`

export default NavBarHeader
