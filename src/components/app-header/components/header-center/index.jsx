import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";

import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";
import SearchTabs from "./c-cpns/search-tabs";
import searchJson from "@/assets/data/search_titles.json";
import SearchSections from "./c-cpns/search-sections";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo((props) => {
  const nodeRef = useRef();
  const detailRef = useRef();
  const { isSearch = true, setIsSearch } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = searchJson.map((item) => item.title);
  const searchBarClick = () => {
    setIsSearch && setIsSearch(true);
  };
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        nodeRef={nodeRef}
        unmountOnExit={true}
      >
        <div ref={nodeRef} className="search-bar" onClick={searchBarClick}>
          <span className="text">搜索方源和体验</span>
          <span className="search">
            <IconSearch />
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        nodeRef={detailRef}
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail" ref={detailRef}>
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="search-detail-info">
            <SearchSections searchInfos={searchJson[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool.isRequired,
  setIsSearch: PropTypes.func.isRequired,
};

export default HeaderCenter;
