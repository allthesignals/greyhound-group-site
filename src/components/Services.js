import * as React from "react";
import PropTypes from "prop-types";

const FeatureGrid = ({ gridItems }) => (
  <>
    {gridItems.map((item, index) => ((index % 2 === 0) ?
      <div className="pl-12 py-4 bg-gg-off-white">
        <div className="
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
        hover:w-11/12
        pt-2
        group
      ">
        <div className="
          transition-all
          -translate-x-2/3
          group-hover:transform-none
          group-hover:text-center
          uppercase
          text-gg-dark-green
          font-black text-3xl
        ">
          <span className="bg-gg-light-gray p-4 rounded-3xl border-8 border-gg-dark-green">{item.name}</span>
        </div>
        <div className="invisible group-hover:visible text-right pr-12">{item.description}</div>
      </div>
    </div> :
    <div className="pr-12 py-4 bg-gg-off-white text-right">
      <div className="
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
        hover:w-11/12
        pt-2
        group
      ">
        <div className="
          transition-all
          translate-x-2/3
          group-hover:transform-none
          group-hover:text-center
          uppercase
          text-gg-dark-green
          font-black
          text-3xl
        ">
          <span className="bg-gg-light-gray p-4 rounded-3xl border-8 border-gg-dark-green">{item.name}</span>
        </div>
        <div className="invisible group-hover:visible text-right pr-12">{item.description}</div>
      </div>
    </div>
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
