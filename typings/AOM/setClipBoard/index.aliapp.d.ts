import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
export default function setClipboard(content: string): Promise<[
    ReturnData<IMiniProgramResData<typeof my.setClipboard> | null>,
    typeof ReturnData
]>;
