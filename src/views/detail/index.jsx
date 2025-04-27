import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { DetailWrapper } from "./style";
import DetailPictures from "./components/detail-pictures";
import { setHeaderConfig } from "@/store/features/app";

export default memo(function Detail() {
  const dispatch = useDispatch();
  const { info } = useSelector(
    (state) => ({
      info: state.detail.info,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(setHeaderConfig({ isFixed: false, topAlpha: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPictures pictures={info.picture_urls} />
    </DetailWrapper>
  );
});
