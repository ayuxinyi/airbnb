import React, { memo } from "react";
import ProtoTypes from "prop-types";

import styleStrToObject from "./helper";

const IconArrowRight = memo((props) => {
  const { width = "12px", height = "12px" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        `display: block; fill: none; height: ${height}; width: ${width}; stroke: currentcolor; stroke-width: 4; overflow: visible;`
      )}
    >
      <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
    </svg>
  );
});

IconArrowRight.propTypes = {
  width: ProtoTypes.string,
  height: ProtoTypes.string,
};

export default IconArrowRight;
