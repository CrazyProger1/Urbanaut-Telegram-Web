import ax from "axios";

import { getLocale } from "next-intl/server";
import { API_URL } from "@/config/api";
import { getSession } from "@/helpers/auth";

export const axios = ax.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session) {
      config.headers.Authorization = `tma ${encodeURIComponent(session.initData)}`;
    }

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
