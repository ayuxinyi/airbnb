import PropTypes from "prop-types";
import React, { memo } from "react";
import { ImageWrapper } from "./style";

const SectionImage = memo((props) => {
  const { item } = props;
  return (
    <ImageWrapper>
      <div className="inner">
        <div className="container">
          <img className="cover" src={item.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{item.city}</div>
            <div className="price">均价{item.price}</div>
          </div>
        </div>
      </div>
    </ImageWrapper>
  );
});

SectionImage.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SectionImage;
