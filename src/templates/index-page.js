import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Blurbs from "../components/Blurbs";
import Services from "../components/Services";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  console.log(intro);
  return (
    <div className="bg-gg-light-green">
      <div className="bg-gg-light-green h-8 w-full"></div>
      <div className="bg-gg-dark-green h-8 w-full"></div>
      <FullWidthImage img={heroImage}/>
      <div className="bg-gg-dark-green h-8 w-full"></div>
      <div className="bg-gg-light-green">
        <Blurbs gridItems={intro.blurbs} />
      </div>
      <div className="max-h-[13rem] max-w-full overflow-hidden relative">
        <div className="
          absolute
          z-10
          bg-gg-dark-green
          mx-auto
          my-auto
          left-0
          right-0
          top-0
          bottom-0
          w-fit
          h-fit
          p-8
          px-20
          text-white
          uppercase
          font-black
          rounded-3xl
          text-4xl
          border-gg-light-green
          border-8
        ">
          Our Services
        </div>
        <div className="relative bg-gg-light-gray">
          <div
            className="
              -top-[500px]
              z-0
              bg-gg-light-green
              bg-cover
              w-full
              h-[1000px]
              relative
              overflow-hidden
              after:content-['']
              after:w-[300%]
              after:h-0
              after:rounded-[100%]
              after:pt-[200%]
              after:bg-gg-off-white
              after:absolute
              after:top-[60%]
              after:left-[50%]
              after:-translate-x-1/2
            "
          />
        </div>
      </div>
      <Services gridItems={intro.services} />
      <div className="relative max-h-[13rem] max-w-full overflow-hidden bg-gg-light-gray">
        <div
            className="
              z-0
              bg-gg-light-green
              bg-cover
              w-full
              h-[1000px]
              relative
              overflow-hidden
              after:content-['']
              after:w-[200%]
              after:h-0
              after:rounded-[100%]
              after:pt-[200%]
              after:bg-gg-off-white
              after:absolute
              after:bottom-[80%]
              after:left-[50%]
              after:-translate-x-1/2
            "
          />
      </div>
      <div className="
        -translate-y-32
        bg-gg-light-gray
        mx-24
        p-4
        rounded-3xl
        border-8
        border-gg-dark-green
        flex
        flex-col
      ">
        <div className="
          text-gg-ocean-green
          font-black
          text-3xl
          bg-gg-off-white
          rounded-3xl
          border-8
          border-gg-dark-green
          p-4
          -translate-x-24
        ">Exceeding Expectations and Breaking Stereotypes</div>
        <div className="p-12">
          Churn and burn? We think not.
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    services: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          services {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            name
            description
          }
          heading
          description
        }
      }
    }
  }
`;
