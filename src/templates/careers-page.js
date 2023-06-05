import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const CareerPageTemplate = ({
  heading,
  jobs,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="
      bg-white
      rounded-3xl
      border-solid
      border-gg-dark-green
      border-8
      p-2
      m-2
      sm:mx-24
    ">
      <div className="
        text-gg-ocean-green
        font-black
        text-3xl
        bg-gg-light-gray
        rounded-3xl
        border-8
        border-gg-dark-green
        p-8
        w-fit
        mx-auto
        -translate-y-12
        uppercase
      ">{heading}</div>
      <div className="sm:p-12">
        <PageContent className="w-fit  prose max-w-none" content={content} />
        <div className="mt-8 text-md">Open Positions</div>
        <div className="divide-y-8 divide-gg-dark-green">
          {jobs.map((job) => <div className="py-8">
            <div class="text-xl">{job.title}</div>
            <div class="whitespace-pre-wrap">
              {job.description}
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

CareerPageTemplate.propTypes = {
  heading: PropTypes.string,
  jobs: PropTypes.array,
};

const CareerPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { markdownRemark } = data;
  console.log(data);
  return (
    <Layout>
      <CareerPageTemplate
        heading={frontmatter.heading}
        jobs={frontmatter.jobs}
        contentComponent={HTMLContent}
        content={markdownRemark.html}
      />
    </Layout>
  );
};

CareerPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CareerPage;

export const productPageQuery = graphql`
  query CareerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heading
        jobs {
          title
          description
        }
      }
    }
  }
`;
