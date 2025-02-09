import { cookies } from "next/headers";
import { InitData } from "@telegram-apps/types";

interface InitDataSet {
  initData?: InitData;
  initDataRaw?: string;
}

export const getInitDataCookie = async (): Promise<InitDataSet> => {
  const cookieStore = await cookies();
  const initDataRaw = cookieStore.get("initDataRaw");
  const initDataJSON = cookieStore.get("initData");

  if (initDataRaw && initDataJSON) {
    return {
      initData: JSON.parse(initDataJSON.value),
      initDataRaw: initDataRaw.value,
    };
  }
  return { initData: undefined, initDataRaw: undefined };
};
