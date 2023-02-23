import { IMiniProgramParams } from "@/util/__interface__/util";

export type IOption =
  | {}
  | IMiniProgramParams<typeof wx.stopPullDownRefresh>
  | IMiniProgramParams<typeof my.stopPullDownRefresh>;
