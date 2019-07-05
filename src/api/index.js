import HttpRequest from "./axios";
import config from "@/config";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseURL.dev
    : config.baseURL.pro;

const axios = new HttpRequest(baseUrl);

export default axios;
