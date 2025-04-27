import React, { memo } from "react";
import ProtoTypes from "prop-types";

import styleStrToObject from "./helper";

const IconArrowLeft = memo((props) => {
  const { height = "12px", width = "12px" } = props;
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
      <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
    </svg>
  );
});

IconArrowLeft.propTypes = {
  height: ProtoTypes.string,
  width: ProtoTypes.string,
};

export default IconArrowLeft;
