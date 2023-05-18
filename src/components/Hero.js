import * as React from "react";
import FullWidthImage from "../components/FullWidthImage";
import hero1 from '../../static/img/gg-illustration-1.jpg';
import hero2 from '../../static/img/gg-illustration-2.jpg';
import hero3 from '../../static/img/gg-illustration-3.jpg';
import hero4 from '../../static/img/gg-illustration-4.jpg';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const HERO_IMAGES = [
  hero1,
  hero2,
  hero3,
  hero4,
];

const Hero = () => {
  const image = { url: HERO_IMAGES[getRandomInt(3)] };

  return (
    <>
      <FullWidthImage img={image}/>
      <div className="bg-gg-dark-green h-8 w-full"></div>
    </>
  );
}

export default Hero;
