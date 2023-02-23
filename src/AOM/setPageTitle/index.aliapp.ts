import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
import { IOption } from "./interface";

export default function setPageTitle(
  options: IOption
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof my.setNavigationBar> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    my.setNavigationBar({
      ...options,
      title: options.title,
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
