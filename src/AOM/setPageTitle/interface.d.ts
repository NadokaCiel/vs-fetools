import { IMiniProgramParams } from "@/util/__interface__/util";

export type IOption =
  | {
      title: string;
    }
  | IMiniProgramParams<typeof wx.setNavigationBarTitle>
  | IMiniProgramParams<typeof my.setNavigationBar>;
