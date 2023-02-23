import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";

export default function showToast(
  msg: string,
  duration = 2000
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof wx.showToast> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    wx.showToast({
      title: msg,
      icon: "none",
      duration,
      success(res) {
        resolve([ReturnData.success(res), ReturnData]);
      },
      fail(err) {
        const errMsg = (err?.errMsg || "").toLowerCase();
        resolve([ReturnData.fail(errMsg), ReturnData]);
      },
    });
  });
}
