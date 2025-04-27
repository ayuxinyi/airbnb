import PropTypes from "prop-types";
import React, { memo } from "react";

import RoomItem from "../room-item";
import { RoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], roomWidth = "25%" } = props;
  return (
    <RoomWrapper>
      {roomList?.slice(0, 8).map((item) => (
        <RoomItem roomWidth={roomWidth} roomInfo={item} key={item.id}>
          {item.name}
        </RoomItem>
      ))}
    </RoomWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array.isRequired,
  roomWidth: PropTypes.string.isRequired,
};

export default SectionRooms;
