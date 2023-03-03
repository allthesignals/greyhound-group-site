import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-col -translate-y-28 max-w-12 px-32">
    {gridItems.map((item, index) => (
      <div key={item.text} className={`flex relative pb-12 self-${(index % 2 === 0 ? 'end' : 'start')}`}>
        <div className="absolute left-4 -top-4 bg-gg-off-white rounded-3xl border-solid border-gg-light-green border-8 max-w-screen-md">
          <p className="p-2 text-3xl">{item.text}</p>
        </div>
        <div className="bg-gg-light-gray rounded-3xl border-solid border-gg-dark-green border-8 max-w-screen-md">
          <p className="p-2 text-3xl invisible">{item.text}</p>
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
