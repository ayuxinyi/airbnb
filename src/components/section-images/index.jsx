import PropTypes from "prop-types";
import React, { memo } from "react";
import { ImagesWrapper } from "./style";
import SectionImage from "../section-image";
import ScrollView from "@/base-ui/scroll-view";

const SectionImages = memo((props) => {
  const { images = [] } = props;
  return (
    <ImagesWrapper>
      <ScrollView>
        {images.map((image) => (
          <SectionImage key={image.city} item={image} />
        ))}
      </ScrollView>
    </ImagesWrapper>
  );
});

SectionImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default SectionImages;
