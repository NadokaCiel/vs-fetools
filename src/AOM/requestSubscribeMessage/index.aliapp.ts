import { ALI_SUBSCRIBE_RESULT } from "@/constants/aliConstants";
import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
import { IRequestSubscribeMessage } from "./interface";

export default function requestSubscribeMessage(
  params: IRequestSubscribeMessage
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof my.requestSubscribeMessage> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    my.requestSubscribeMessage({
      entityIds: params.templateIds,
      success(res: any) {
        if (res.behavior === ALI_SUBSCRIBE_RESULT.success) {
          resolve([ReturnData.success(res), ReturnData]);
          return;
        }
        resolve([ReturnData.fail(res?.errorMessage), ReturnData]);
      },
      fail(err) {
        const errMsg = (err?.errorMessage || "").toLowerCase();
        resolve([ReturnData.fail(err?.errorMessage), ReturnData]);
      },
    });
  });
}
