import PropTypes from "prop-types";
import React, { memo } from "react";
import { PlusWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";

const HomeSectionPlus = memo((props) => {
  const { sectionInfo } = props;
  return (
    <PlusWrapper>
      <SectionHeader
        title={sectionInfo.title}
        subTitle={sectionInfo.subtitle}
      />
      <ScrollView>
        {sectionInfo.list.map((item) => (
          <RoomItem key={item.id} roomInfo={item} />
        ))}
      </ScrollView>
      <SectionFooter color="#000" />
    </PlusWrapper>
  );
});

HomeSectionPlus.propTypes = {
  sectionInfo: PropTypes.object.isRequired,
};

export default HomeSectionPlus;
