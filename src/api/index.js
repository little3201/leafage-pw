import HttpRequest from "./axios";
import config from "@/config";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? config.baseURL.prod
    : config.baseURL.dev;

const axios = new HttpRequest(baseUrl);

export default axios;
