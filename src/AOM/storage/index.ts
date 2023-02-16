import ReturnData from "return-data";
import { objectToText } from "@/util/objectToText";

export function storeData(storeKey: string, data: any) {
  try {
    wx.setStorageSync(storeKey, data);
    return [ReturnData.success(), ReturnData];
  } catch (e) {
    return [ReturnData.fail(objectToText(e)), ReturnData];
  }
}

export function queryData<T = any>(
  storeKey: string
): [ReturnData<T | null>, typeof ReturnData] {
  try {
    return [ReturnData.success(wx.getStorageSync(storeKey)), ReturnData];
  } catch (e) {
    return [ReturnData.fail(objectToText(e)), ReturnData];
  }
}

export function clearStorage(storeKey: string) {
  try {
    wx.removeStorageSync(storeKey);
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
