import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "#services",
        text: "services",
      },
      {
        id: 2,
        path: "#rates",
        text: "rates",
      },
      {
        id: 3,
        path: "/contact",
        text: "contact",
      },
      {
        id: 4,
        path: "/partner",
        text: "sign up",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    color: var(--gray);
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background: var(--darkGray);
      color: var(--white);
      padding: 0.8rem 1.5rem;
    }
  }
  li:nth-child(6) {
    background: var(--mainColor);
  }
  li:nth-child(6) > a {
    color: var(--white);
  }
  height: ${props => (props.open ? "239px" : "0px")};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    padding-left: 2rem;
    .nav-link {
      padding: 1rem 1rem 1rem 1rem;
      font-size: 0.8rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .nav-link:hover {
      background: var(--white);
      color: var(--mainColor);
      padding: 1rem 1.2rem;
    }
    li:nth-child(5) {
      background: var(--white);
    }
    li:nth-child(5) > a {
      color: var(--mainColor);
      &:hover {
        color: var(--mainGray);
      }
    }
  }
`

export default NavBarLinks
