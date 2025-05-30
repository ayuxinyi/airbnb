import React, { memo } from "react";
import styleStrToObject from "./helper";

const IconSearch = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={styleStrToObject(
        "display:block;fill:none;height:12px;width:12px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible"
      )}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path
        fill="none"
        d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
      ></path>
    </svg>
  );
});

export default IconSearch;
