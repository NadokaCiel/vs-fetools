import { IMiniProgramResData } from "@/util/__interface__/util";
import ReturnData from "return-data";
export default function setPageTitle(title: string): Promise<[
    ReturnData<IMiniProgramResData<typeof my.setNavigationBar> | null>,
    typeof ReturnData
]>;
