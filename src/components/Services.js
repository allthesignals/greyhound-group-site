import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-col space-y-10 bg-gg-off-white">
    {gridItems.map((item, index) => {
      const isLeft = index % 2 === 0;

      return <div
        key={index}
        className={`
          flex w-full
          items-start
          group
          relative
          ${isLeft ? 'flex-row-reverse self-end space-x-reverse' : 'flex-row self-start'}
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
            sm:border-8
            border-4
            border-gg-dark-green
            text-gg-ocean-green
            font-black
            sm:text-3xl
            text-md
            group-hover:border-transparent
            group-hover:bg-transparent
            w-fit
            absolute
            ${isLeft ? `
              sm:left-[10%]
              sm:group-hover:left-[75%]
              left-[10%]
              group-hover:left-[50%]
            ` : `
              sm:left-[60%]
              left-[50%]
              group-hover:left-1/4
            `}
          `}>{item.name}</div>
        </div>
        <div
          className={`
            sm:basis-[45%]
            group-hover:basis-[80%]
            bg-gg-light-gray
            sm:border-y-8
            border-y-4
            p-2
            sm:p-12
            border-gg-dark-green
            transition-all
            duration-300
            ease-in
            box-border
            ${isLeft ? 'rounded-l-3xl sm:border-l-8 border-l-4' : 'sm:border-r-8 border-r-4 rounded-r-3xl'}
          `}
        >
          <div className="sm:group-hover:block group-hover:hidden inline-block float-left mr-0 sm:mr-12">
            <PreviewCompatibleImage className='w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]' imageInfo={item} />
          </div>
          <div className="
            transition-colors
            group-hover:delay-700
            hidden
            group-hover:block
            text-left
            sm:text-base
            text-sm
            px-12
            pt-12
          ">
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
