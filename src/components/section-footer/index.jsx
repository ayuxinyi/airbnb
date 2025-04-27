import PropTypes from "prop-types";
import React, { memo } from "react";

import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { title = "显示全部", color } = props;
  // 获取路由跳转钩子函数
  const navigate = useNavigate();
  const footerClick = () => {
    navigate("/entire");
  };
  return (
    <FooterWrapper $color={color}>
      <div className="info" onClick={footerClick}>
        <span>{title}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  // footerClick: PropTypes.func,
};

export default SectionFooter;
