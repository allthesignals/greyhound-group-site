import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ListingsPageTemplate = ({
  image,
  listings,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <>
    <Hero />
    <div className="
      bg-white
      rounded-3xl
      border-solid
      border-gg-dark-green
      border-8
      p-2
      m-2
      mx-24
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
        translate-x-24
        -translate-y-12
      ">Listings</div>
      <div className="flex flex-col space-y-4 divide-y-4 divide-gg-light-green">
        {listings.map(listing => <div>
          <PreviewCompatibleImage imageInfo={listing.image} />
        </div>)}
      </div>
    </div>
    </>
  );
};

ListingsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  listings: PropTypes.array,
};

const ListingsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ListingsPageTemplate
        image={frontmatter.image}
        listings={frontmatter.listings}
      />
    </Layout>
  );
};

ListingsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ListingsPage;

export const listingsPageQuery = graphql`
  query ListingsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        listings {
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          text
        }
      }
    }
  }
`;
