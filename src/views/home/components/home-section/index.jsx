import PropTypes from "prop-types";
import React, { memo } from "react";

import { SectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-roms";
import SectionFooter from "@/components/section-footer";

const HomeSection = memo((props) => {
  const { sectionInfo = {} } = props;
  return (
    <SectionWrapper>
      <div className="discount"></div>
      <SectionHeader
        title={sectionInfo.title}
        subTitle={sectionInfo.subtitle}
      />
      <SectionRooms roomList={sectionInfo.list} />
      <SectionFooter color="#000" />
    </SectionWrapper>
  );
});

HomeSection.propTypes = {
  sectionInfo: PropTypes.object.isRequired,
};

export default HomeSection;
