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
    <Section style={{ margin: "6rem auto" }}>
      <p style={{ fontSize: "2rem", lineHeight: "2.8rem" }}>
        Fantastic Marketing, Intelligent technology, and the{" "}
        <strong>lowest rates in the industry</strong> make Grinds To Go the best
        restaurant takeout marketplace in Hawaii.
      </p>
    </Section>
    <Section id="services" style={{ margin: "6rem auto" }}>
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
        content="If you're short on marketing staff, we offer agency services at a monthly rate that include(s) photography, videography, digital advertising, and more."
      />
      <Features
        subheading="Loyalty Program"
        content="Our loyalty program allows you full control over what your customers are receiving while keeping track of what their favorite places and dishes are."
      />
    </Section>

    <Section id="rates" style={{ margin: "6rem auto" }}>
      <Intro
        heading="Rates"
        subheading="With menu images, upsales, loyalty programs, and cross marketing, get the most powerful online ordering solution."
      />
      <Features
        subheading="15% + 2% Credit Card Fee"
        content="• Showcase your menu on the Grindz To Go Marketplace plus your website. Get More Orders, Save More Money!"
      />
      <Features
        subheading="20% + 2% credit card fee"
        content="• Need to refresh your web design? No problem, that's one of our specialties! Showcase your menu on the Grindz To Go Marketplace plus your website."
      />
      <AniLink fade to="/partner">
        <Button>SIGN UP</Button>
      </AniLink>
    </Section>
  </Layout>
)

export default IndexPage
