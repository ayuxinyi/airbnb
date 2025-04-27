import httpRequest from "@/services";

export const getGoodPrice = () => httpRequest.get("/airbnb/api/home/goodprice");

export const getHighScore = () => httpRequest.get("/airbnb/api/home/highscore");

export const getDiscount = () => httpRequest.get("/airbnb/api/home/discount");

export const getHotRecommend = () =>
  httpRequest.get("/airbnb/api/home/hotrecommenddest");

export const getLongfor = () => httpRequest.get("/airbnb/api/home/longfor");

export const getPlus = () => httpRequest.get("/airbnb/api/home/plus");
