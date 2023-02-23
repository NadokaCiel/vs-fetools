export enum ALI_SUBSCRIBE_RESULT {
  success = "subscribe",
  cancel = "cancel",
  fail = "",
}

export enum ALI_PAYMENT_RESULT {
  /**
   * 个人小程序应用没有开放小程序支付能力。
   */
  illegal = "4",
  /**
   * 订单处理成功。
   */
  success = "9000",
  /**
   * 正在处理中。支付结果未知（有可能已经支付成功）。
   */
  processing = "8000",
  /**
   * 订单处理失败。
   */
  fail = "4000",
  /**
   * 用户中途取消。
   */
  cancel = "6001",
  /**
   * 网络连接出错
   */
  netError = "6002",
  /**
   * 处理结果未知（有可能已经成功）。
   */
  unknown = "6004",
}

export enum ALI_LOCATION_RESULT {
  deny = 2001
}

export const ALI_PAYMENT_HINT = {
  [ALI_PAYMENT_RESULT.illegal]: "无权限调用",
  [ALI_PAYMENT_RESULT.cancel]: "您已取消支付",
  [ALI_PAYMENT_RESULT.netError]: "网络连接出错",
  [ALI_PAYMENT_RESULT.fail]: "订单处理失败",
};
