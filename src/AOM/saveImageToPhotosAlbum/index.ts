import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";

export default function saveImageToPhotosAlbum(
  path: string
): Promise<
  [
    ReturnData<IMiniProgramResData<typeof wx.saveImageToPhotosAlbum> | null>,
    typeof ReturnData
  ]
> {
  return new Promise((resolve) => {
    wx.saveImageToPhotosAlbum({
      filePath: path,
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
