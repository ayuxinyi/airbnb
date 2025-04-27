import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";
import SearchTabs from "./c-cpns/search-tabs";
import searchJson from "@/assets/data/search_titles.json";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo((props) => {
  const { isSearch = false, setIsSearch } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = searchJson.map((item) => item.title);
  const searchBarClick = () => {
    setIsSearch && setIsSearch(true);
  };
  return (
    <CenterWrapper>
      {!isSearch ? (
        <div className="search-bar" onClick={searchBarClick}>
          <span className="text">搜索方源和体验</span>
          <span className="search">
            <IconSearch />
          </span>
        </div>
      ) : (
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="search-detail-info">
            <SearchSections searchInfos={searchJson[tabIndex].searchInfos} />
          </div>
        </div>
      )}
    </CenterWrapper>
  );
});

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool.isRequired,
  setIsSearch: PropTypes.func.isRequired,
};

export default HeaderCenter;
