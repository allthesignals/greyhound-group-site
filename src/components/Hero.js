import * as React from "react";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import defaultHeroImage from '../../static/img/gg-illustration-1.jpg'

const Hero = ({ heroImage }) => {
  const image = getImage(heroImage) || { url: defaultHeroImage };
  console.log(image);
  return (
    <>
      <FullWidthImage img={image}/>
      <div className="bg-gg-dark-green h-8 w-full"></div>
    </>
  );
}

export default Hero;
