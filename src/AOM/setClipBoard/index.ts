/* eslint-disable indent */
import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";

export default function setClipboard(
  content: string
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof wx.setClipboardData> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    wx.setClipboardData({
      data: content,
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
