import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Image from "react-image-enlarger";
import Layout from "../components/Layout";
import { useScript } from 'usehooks-ts'
import Hero from "../components/Hero";

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
  const status = useScript('//buildout.com/api.js?v8', {
    removeOnUnmount: false,
  })

  useEffect(() => {
    if (window.BuildOut) {
      window.BuildOut.embed({
        token:     "b1add7922b45a081858a7b02bc33500c7bc35f3b",
        plugin:    "inventory",
        target:    "buildout"
      });
    }
  }, [status]);

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
      lg:mx-24
      -translate-y-48
      lg:transform-none
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
        <div id="buildout"></div>
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
