import * as React from "react";
import PropTypes from "prop-types";

const FeatureGrid = ({ gridItems }) => (
  <>
    {gridItems.map((item, index) => ((index % 2 === 0) ?
      <div className="pl-12 py-4 bg-gg-off-white"><div className="
        bg-gg-light-gray
        border-y-8
        border-l-8
        p-12
        rounded-l-3xl
        border-gg-dark-green
        ml-auto
        w-1/2
        transition-all
        ease-in
        hover:w-full
      ">{item.name}</div></div> :
      <div className="pr-12 py-4 bg-gg-off-white text-right"><div className="
        bg-gg-light-gray
        border-y-8
        border-r-8
        p-12
        rounded-r-3xl
        border-gg-dark-green
        mr-auto
        w-1/2
        transition-[width]
        ease-in
        hover:w-full
      ">{item.name}</div></div>
    ))}
  </>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
