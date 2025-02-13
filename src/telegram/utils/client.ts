import { InitData } from "@telegram-apps/types";

interface InitDataSet {
  initData?: InitData;
  initDataRaw?: string;
}

export const setInitDataCookie = (initData: InitData, initDataRaw: string) => {
  document.cookie = `initDataRaw=${initDataRaw}; path=/; max-age=3600`;
  document.cookie = `initData=${JSON.stringify(initData)}; path=/; max-age=3600`;
};

const getCookieByName = (name: string) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return undefined;
};
export const getInitDataCookie = (): InitDataSet => {
  const initData = getCookieByName("initData");
  const initDataRaw = getCookieByName("initDataRaw");
  return {
    initData: initData ? (JSON.parse(initData) as InitData) : undefined,
    initDataRaw: initDataRaw,
  };
};
