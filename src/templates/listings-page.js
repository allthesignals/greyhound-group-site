import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Image from "react-image-enlarger";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import LISTINGS_DATA from "../pages/listings/data.json"

function EnlargableImage({ src }) {
  const [zoomed, setZoomed] = useState(false);

  return <Image
    className="w-full"
    zoomed={zoomed}
    src={src}
    onClick={() => setZoomed(true)}
    onRequestClose={() => setZoomed(false)}
  />
}

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
        {LISTINGS_DATA.map(listing => <div className="flex flex-col sm:flex-row space-x-4 m-1">
          <div className="basis-1/3 m-2">
            <EnlargableImage src={listing.image}  />
          </div>
          <div className="basis-1/3">
            <h1 className="text-2xl">{listing.name}</h1>
            <p>
              {listing.description}
            </p>
          </div>
          <div className="basis-1/3">
            <span className="text-xs">type</span>
            <h3 className="text-lg">{listing.type}</h3>
            <span className="text-xs">subtype</span>
            <h3 className="text-lg">{listing.subtype}</h3>
            <span className="text-xs">status</span>
            <h3 className="text-lg">{listing.status}</h3>
            <span className="text-xs">price</span>
            <h3 className="text-lg">{listing.price}</h3>
            <span className="text-xs">size</span>
            <h3 className="text-lg">{listing.size}</h3>
          </div>
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
          type
          subtype
          status
          price
          size
          name
          description
          image
        }
      }
    }
  }
`;
