import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";

export default memo(function HeaderLeft() {
  const navigate = useNavigate();
  return (
    <LeftWrapper>
      <div onClick={() => navigate("/home")}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});
