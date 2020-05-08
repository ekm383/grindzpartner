import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import ButtonWhite from "../components/globals/button/ButtonWhite"
import Intro from "../components/Intro"
import Section from "../components/globals/section/Section"
import bg from "../../src/images/home-header-bg.jpg"
import Features from "../components/Features"
import { FaChevronCircleRight } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Restaurant Marketing Hawaii is a full-service digital marketing agency. Running a restaurant is your passion, marketing your restaurant is ours. Better branding. Better results."
      keywords={[
        `Restaurant Marketing`,
        `Hawaii Restaurant`,
        `Hawaii Marketing`,
      ]}
    />
    <HeaderIndex img={bg}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner>
          <AniLink fade to="/partner">
            <ButtonWhite>
              <h3>
                SIGN UP <FaChevronCircleRight />
              </h3>
            </ButtonWhite>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>

    <Section id="services" style={{ height: "100vh" }}>
      <Intro heading="services" />
      <Features
        subheading="online ordering"
        content="We create convenient opportunities for potential or existing customers to order your food directly from our website based on your restaurant's parameters."
      />
      <Features
        subheading="content creation"
        content="Do what you do best and let us take care of the rest. We always make sure there’s fresh video, photos, and copy of your food to fill our website, social media, and monthly newsletter."
      />
      <Features
        subheading="Agency Services"
        content="If you're short on marketing staff, we offer agency services at a monthly rate that include photography, videography, digital advertising, and more."
      />
      <Features
        subheading="Loyalty Program"
        content="Our loyalty program allows you full control over what your customers are receiving while keeping track of what their favorite places and dishes are."
      />
    </Section>

    <Section id="rates" style={{ height: "100vh" }}>
      <Intro
        heading="Rates"
        subheading="With menu images, upsales, loyalty programs, and cross marketing, get the most powerful online ordering solution."
      />
      <Features
        subheading="15% + 2% Credit Card Fee"
        content="• Listed on Grindz To Go Platform and an embedded menu or link on restaurants website."
      />
      <Features
        subheading="20% + 2% credit card fee"
        content="• Listed on Grindz To Go Platform and an embedded menu or link on restaurants website."
        content2="• Restaurant website design, build, maintenance."
      />
      <AniLink fade to="/partner">
        <Button>SIGN UP</Button>
      </AniLink>
    </Section>
  </Layout>
)

export default IndexPage
