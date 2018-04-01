import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SVGInline from "react-svg-inline";
// import breakpointSvg from "./breakpoint.svg";
// import logoSvg from "./logo.svg";

const svgs = {
  breakpoint: require('./breakpoint.svg'),
  logo: require('./logo.svg'),
};

function Svg({ name, className, fill, height, width, onClick, "aria-label": ariaLabel  }) {
  if (!svgs[name]) {
    const error = `Unknown SVG: ${name}`;
    console.warn(error);
    return null;
  }

  // className = `${name} ${className || ""}`;
  // if (name === "subSettings") {
  //   className = "";
  // }
  // console.log('ClassName');
  // console.log(className);
  // className=classNames({
  //   width: '20',
  //   height: '100%'
  // });
  const props = {
    className,
    width,
    height,
    fill,
    onClick,
    // opacity,
    ["aria-label"]: ariaLabel,
    svg: svgs[name]
  };


  return <SVGInline {...props}/>;
}
Svg.defaultProps = {
  onClick: () => null,
}
Svg.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
}

Svg.displayName = "Svg";
module.exports = Svg;
