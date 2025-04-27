import PropTypes from "prop-types";
import React, { memo } from "react";

import { HeadWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <HeadWrapper>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </HeadWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionHeader;
