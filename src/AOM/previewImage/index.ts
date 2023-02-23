import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
import { IOptions } from "./interface";

export default function previewImage(
  params: IOptions
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof wx.previewImage> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    wx.previewImage({
      ...params,
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
