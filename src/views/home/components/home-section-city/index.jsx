import PropTypes from "prop-types";
import React, { memo } from "react";
import { CityWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionImages from "@/components/section-images";

const HomeSectionCity = memo((props) => {
  const { sectionInfo } = props;
  return (
    <CityWrapper>
      <SectionHeader
        title={sectionInfo.title}
        subTitle={sectionInfo.subtitle}
      />
      <SectionImages images={sectionInfo.list} />
    </CityWrapper>
  );
});

HomeSectionCity.propTypes = {
  sectionInfo: PropTypes.object.isRequired,
};

export default HomeSectionCity;
