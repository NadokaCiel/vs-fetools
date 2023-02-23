import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
export default function stopPullDownRefresh(): Promise<[
    ReturnData<IMiniProgramResData<typeof wx.stopPullDownRefresh> | null>,
    typeof ReturnData
]>;
