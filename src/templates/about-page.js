import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (<>
    <div className="
      bg-white
      rounded-3xl
      border-solid
      border-gg-dark-green
      border-8
      p-2
      m-2
      sm:mx-24
      w-fit
    ">
      <div className="
        text-gg-ocean-green
        font-black
        sm:text-3xl
        text-xl
        bg-gg-light-gray
        rounded-3xl
        border-8
        border-gg-dark-green
        sm:p-8
        p-2
        w-fit
        translate-x-24
        -translate-y-12
      ">{title}</div>
      <PageContent className="w-fit sm:p-12 prose" content={content} />
    </div>
  </>);
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
