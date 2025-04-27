import PropTypes from "prop-types";
import React, { memo, useState, useTransition } from "react";
import classnames from "classnames";

import { TabWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabs = [], tabChange } = props;
  const [currentIndex, setActiveTab] = useState(0);
  const [, startTransition] = useTransition();
  const tabClickHandler = (index, name) => {
    setActiveTab(index);
    startTransition(() => tabChange(name));
  };
  return (
    <TabWrapper>
      <ScrollView>
        {tabs.map((tab, index) => (
          <span
            onClick={() => tabClickHandler(index, tab)}
            className={classnames({ active: currentIndex === index })}
            key={index}
          >
            {tab}
          </span>
        ))}
      </ScrollView>
    </TabWrapper>
  );
});

SectionTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabChange: PropTypes.func.isRequired,
};

export default SectionTabs;
