import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-col -translate-y-28 max-w-12 px-32">
    {gridItems.map((item, index) => (
      <div key={item.text} className={`${(index % 2 === 0 ? 'self-end' : 'self-start')}`}>
        <div className="
          relative
          bg-gg-off-white
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
          sm:after:right-8
          sm:after:top-8
          sm:after:-z-10
          sm:after:content-['']
        ">
          <p className="p-2 text-3xl">{item.text}</p>
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
