import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
import { IOption } from "./interface";

export default function setPageTitle(
  options: IOption
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof wx.setNavigationBarTitle> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    wx.setNavigationBarTitle({
      ...options,
      title: options.title,
      success() {
        resolve([ReturnData.success(), ReturnData]);
      },
      fail(err) {
        const errMsg = (err?.errMsg || "").toLowerCase();
        resolve([ReturnData.fail(errMsg), ReturnData]);
      },
    });
  });
}
