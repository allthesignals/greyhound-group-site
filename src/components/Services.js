import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-col space-y-10 bg-gg-off-white">
    {gridItems.map((item, index) => {
      const isEven = index % 2 === 0;

      return <div
        key={item.text}
        className={`flex w-full items-start group space-x-10 ${isEven ? "flex-row-reverse self-end space-x-reverse" : "flex-row self-start"}`}
      >
        <div
          className={`
            basis-[45%]
            group-hover:basis-[80%]
            ${isEven ? "rounded-l-3xl border-l-8" : "border-r-8 rounded-r-3xl"}
            bg-gg-light-gray
            border-y-8
            p-12
            border-gg-dark-green
            transition-all
            duration-700
            ease-in
            relative
            box-border
          `}
        >
          <div className={`
            transition-all
            uppercase
            text-gg-dark-green
            font-black
            text-3xl
            w-fit
            absolute
            top-0
          `}>
            <div className={`
              bg-gg-light-gray
              p-4
              rounded-3xl
              border-8
              border-gg-dark-green
              -translate-y-2
              group-hover:border-0
              group-hover:translate-y-0
              ${isEven ? `
                -translate-x-[130%]
                group-hover:translate-x-[120%]
              ` : `
                translate-x-[230%]
                group-hover:translate-x-[120%]
              `}
              duration-700
            `}>{item.name}</div>
          </div>
          <PreviewCompatibleImage imageInfo={item} />
          <div className="invisible group-hover:visible text-right pr-12">
            {item.description}
          </div>
        </div>
      </div>
    })}
  </div>
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
