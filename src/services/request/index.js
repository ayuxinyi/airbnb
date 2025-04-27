import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class HttpRequest {
  constructor(baseUrl, timeout = 10000) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
  request(config) {
    return this.instance.request(config);
  }
  get(url, config) {
    return this.instance.get(url, { ...config, method: "get" });
  }
  post(config) {
    return this.instance.post({ ...config, method: "post" });
  }
}

const httpRequest = new HttpRequest(BASE_URL, TIME_OUT);

export default httpRequest;
