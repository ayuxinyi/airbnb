import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { PictureWrapper } from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo((props) => {
  const { pictures } = props;
  const [showBrowser, setShowBrowser] = useState(false);
  const close = () => {
    setShowBrowser(false);
  };
  return (
    <PictureWrapper>
      <div className="pictures" onClick={() => setShowBrowser(true)}>
        <div className="pictures-left">
          <div className="item">
            <img src={pictures[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="pictures-right">
          {pictures.slice(1, 5).map((item) => (
            <div className="item" key={item}>
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
      {showBrowser && <PictureBrowser close={close} pictures={pictures} />}
    </PictureWrapper>
  );
});

DetailPictures.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default DetailPictures;
