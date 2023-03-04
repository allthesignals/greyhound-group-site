import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Blurbs from "../components/Blurbs";
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

  return (
    <>
      <div className="bg-gg-light-green h-8 w-full"></div>
      <div className="bg-gg-dark-green h-8 w-full"></div>
      <FullWidthImage img={heroImage}/>
      <div className="bg-gg-dark-green h-8 w-full"></div>
      <div className="bg-gg-light-green">
        <Blurbs gridItems={intro.blurbs} />
      </div>
      <div className="relative">
        <div
          className="
            -top-[500px]
            -z-10
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
    </>
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
          heading
          description
        }
      }
    }
  }
`;
