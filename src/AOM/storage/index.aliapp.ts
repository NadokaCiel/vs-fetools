import ReturnData from "return-data";
import { objectToText } from "@/util/objectToText";

export function storeData(storeKey: string, data: any) {
  try {
    my.setStorageSync({
      key: storeKey,
      data,
    });
    return [ReturnData.success(), ReturnData];
  } catch (e) {
    return [ReturnData.fail(objectToText(e)), ReturnData];
  }
}

export function queryData<T = any>(
  storeKey: string
): [ReturnData<T | null>, typeof ReturnData] {
  try {
    const res = my.getStorageSync({
      key: storeKey,
    });
    return [ReturnData.success(res?.data as unknown as T), ReturnData];
  } catch (e) {
    return [ReturnData.fail(objectToText(e)), ReturnData];
  }
}

export function clearStorage(storeKey: string) {
  try {
    my.removeStorageSync({
      key: storeKey,
    });
    return [ReturnData.success(), ReturnData];
  } catch (e) {
    return [ReturnData.fail(objectToText(e)), ReturnData];
  }
}

export default {
  storeData,
  queryData,
  clearStorage,
};
