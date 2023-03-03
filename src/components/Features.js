import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex -top-4 pl-32 pr-32 flex-col">
    {gridItems.map((item) => (
      <div key={item.text} className="bg-gg-off-white rounded-3xl border-solid border-gg-light-green border-8 max-w-xl -translate-y-6">
        <section className="section">
          <p className="p-2">{item.text}</p>
        </section>
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
