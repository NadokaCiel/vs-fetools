import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";

export default function showToast(
  msg: string,
  duration = 2000
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof my.showToast> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    my.showToast({
      content: msg,
      duration,
      success() {
        resolve([ReturnData.success(), ReturnData]);
      },
      fail(err) {
        const errMsg = (err?.errorMessage || "").toLowerCase();
        resolve([ReturnData.fail(errMsg), ReturnData]);
      },
    });
  });
}
