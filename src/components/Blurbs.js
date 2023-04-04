import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-col space-y-10 -translate-y-28 sm:max-w-12 sm:px-32">
    {gridItems.map((item, index) => (
      <div key={item.text} className={`md:pl-24 md:pr-24 ${(index % 2 === 0 ? 'self-start' : 'self-end')}`}>
        <div className="
          relative
          bg-white
          rounded-3xl
          border-solid
          border-gg-light-green
          border-8
          max-w-screen-md
          sm:after:bg-gg-light-gray
          sm:after:rounded-3xl
          sm:after:border-solid
          sm:after:border-gg-dark-green
          sm:after:border-8
          sm:after:absolute
          sm:after:w-full
          sm:after:h-full
          sm:after:right-10
          sm:after:top-10
          sm:after:-z-10
          sm:after:content-['']
        ">
          <p className="p-2 text-md sm:text-2xl text-gg-ocean-green uppercase font-black">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
