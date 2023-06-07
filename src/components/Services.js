import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-col space-y-10 bg-gg-off-white">
    {gridItems.map((item, index) => {
      const isEven = index % 2 === 0;

      return <div
        key={index}
        className={`
          flex w-full
          items-start
          group
          relative
          ${isEven ? 'flex-row-reverse self-end space-x-reverse' : 'flex-row self-start'}
        `}
      >
        <div className={`
          absolute
          top-0
          w-full
        `}>
          <div className={`
            transition-all
            duration-700
            bg-gg-light-gray
            p-4
            uppercase
            rounded-3xl
            border-8
            border-gg-dark-green
            text-gg-ocean-green
            font-black
            text-3xl
            group-hover:border-transparent
            group-hover:bg-transparent
            w-fit
            absolute
            ${isEven ? `
              left-1/4
              sm:group-hover:left-[45%]
            ` : `
              sm:left-[60%]
              group-hover:left-1/4
            `}
          `}>{item.name}</div>
        </div>
        <div
          className={`
            basis-[45%]
            group-hover:basis-[80%]
            bg-gg-light-gray
            border-y-8
            p-12
            border-gg-dark-green
            transition-all
            duration-700
            ease-in
            box-border
            ${isEven ? 'rounded-l-3xl border-l-8' : 'border-r-8 rounded-r-3xl'}
          `}
        >
          <div className="inline-block float-left mr-12">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="transition-colors group-hover:delay-700 text-transparent group-hover:text-current text-left px-12 pt-12">
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
