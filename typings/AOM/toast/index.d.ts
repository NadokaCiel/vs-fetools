import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
export default function showToast(msg: string, duration?: number): Promise<[
    ReturnData<IMiniProgramResData<typeof wx.showToast> | null>,
    typeof ReturnData
]>;