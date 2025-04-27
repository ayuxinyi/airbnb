import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selectNames, setSelectNames] = useState([]);

  const itemClickHandler = (name) => {
    const newSelectNames = [...selectNames];
    if (newSelectNames.includes(name)) {
      newSelectNames.splice(newSelectNames.indexOf(name), 1);
    } else {
      newSelectNames.push(name);
    }
    setSelectNames(newSelectNames);
  };

  return (
    <FilterWrapper>
      {filterData.map((item, index) => (
        <div
          className={classNames("item", { active: selectNames.includes(item) })}
          onClick={() => itemClickHandler(item)}
          key={index}
        >
          {item}
        </div>
      ))}
    </FilterWrapper>
  );
});

export default EntireFilter;
