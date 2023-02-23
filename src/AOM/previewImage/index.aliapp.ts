import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
import { IOptions } from "./interface";

export default function previewImage(
  params: IOptions
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof my.previewImage> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    my.previewImage({
      ...params,
      current: Number(params.current ?? 0),
      success(res) {
        resolve([ReturnData.success(res), ReturnData]);
      },
      fail(err) {
        const errMsg = (err?.errorMessage || "").toLowerCase();
        resolve([ReturnData.fail(errMsg), ReturnData]);
      },
    });
  });
}
