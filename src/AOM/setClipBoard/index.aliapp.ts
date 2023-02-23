import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";

export default function setClipboard(
  content: string
): Promise<
  [ReturnData<IMiniProgramResData<typeof my.setClipboard> | null>, typeof ReturnData]
> {
  return new Promise((resolve) => {
    my.setClipboard({
      text: content,
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
