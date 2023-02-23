import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";

export default function saveImageToPhotosAlbum(
  path: string
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof my.saveImageToPhotosAlbum> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    my.saveImageToPhotosAlbum({
      filePath: path,
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
