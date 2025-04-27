import httpRequest from "@/services";

export const getRoomList = (offset = 0, size = 20) =>
  httpRequest.get("/airbnb/api/entire/list", { params: { offset, size } });
