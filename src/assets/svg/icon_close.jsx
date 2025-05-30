import React, { memo } from "react";
import styleStrToObject from "./helper";

const IconClose = memo(() => {
  return (
    <div>
      <svg
        viewBox="0 0 12 12"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={styleStrToObject(
          "height: 12px; width: 12px; display: block; fill: currentcolor;"
        )}
      >
        <path
          d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  );
});

export default IconClose;
