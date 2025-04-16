import ax from "axios";

import { getLocale } from "next-intl/server";
import { API_URL } from "@/config/api";

export const axios = ax.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  async (config) => {
    // const { initDataRaw } = await getInitDataCookie();
    //
    // if (initDataRaw) {
    //   config.headers.Authorization = `tma ${encodeURIComponent(initDataRaw)}`;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  async (config) => {
    config.headers["Accept-Language"] = await getLocale();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
