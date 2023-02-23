import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
import { IRequestSubscribeMessage } from "./interface";

export default function requestSubscribeMessage(
  params: IRequestSubscribeMessage
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof wx.requestSubscribeMessage> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    wx.requestSubscribeMessage({
      tmplIds: params.templateIds,
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
