import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = ({ style, subtitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "Grindz-Partner-logo-White-BIG.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "shaka.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <Img className="shaka" fluid={data.image2.childImageSharp.fluid} />
        <Img fluid={data.image1.childImageSharp.fluid} />
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 3rem;
  color: var(--white);
  .shaka {
    position: absolute;
    top: 15%;
    left: 95%;
    width: 100px;
  }
  .box {
    flex-basis: 70%;
    margin-top: -30px;
  }
  img {
    width: 100%;
  }
  .title,
  .subtitle {
    margin-top: 0px;
    margin-bottom: 10px;
    text-align: center;
  }
  .title {
    font-size: 3rem;
    line-height: 3.5rem;
    text-transform: uppercase;
  }
  .titleSmall {
    line-height: 4rem;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    justify-content: flex-start;
    margin-left: 1rem;
    .shaka {
      top: 5%;
      left: 60%;
    }
    .box {
      flex-basis: 100%;
    }
    img {
      width: 90%;
    }
    .titleSmall {
      font-size: 2rem;
      line-height: 2rem;
    }
    .subtitle {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
`

export default Banner