// 引入外部依赖包
import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
// 引入组件
import { SectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-roms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionDiscount = memo((props) => {
  // 从父组件获取数据
  const { sectionInfo } = props;

  // 定义组件内部状态
  // useState的初始化值只有在第一次渲染时才会生效，之后不会更新，需要通过
  // 对应的set方法来更新状态值
  // 在父组件中,通过判断sectionInfo是为空来判断是否渲染该组件，如果为空则不渲染
  // 这样可以确保组件在第一次渲染时，初始状态是正确的。
  const initialName = Object.keys(sectionInfo.dest_list)[0];
  const [currentName, setCurrentName] = useState(initialName);
  const tabs = sectionInfo?.dest_address?.map((item) => item.name);

  // 定义组件内部方法
  const tabChange = useCallback((name) => {
    setCurrentName(name);
  }, []);

  // 渲染组件结构
  return (
    <SectionWrapper>
      <SectionHeader
        title={sectionInfo.title}
        subTitle={sectionInfo.subtitle}
      />
      <SectionTabs tabs={tabs} tabChange={tabChange} />
      <SectionRooms
        roomWidth="33.33333%"
        roomList={sectionInfo.dest_list?.[currentName]}
      />
      <SectionFooter title={`查看更多${currentName}房源`} />
    </SectionWrapper>
  );
});

HomeSectionDiscount.propTypes = {
  sectionInfo: PropTypes.object.isRequired,
};

export default HomeSectionDiscount;
