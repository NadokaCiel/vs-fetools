import ReturnData, { BaseReturn } from "return-data";
import { IPaymentParams } from "./interface";

export class ExceptionPayment extends BaseReturn {
  static get CANCEL() {
    return new ExceptionPayment("CANCEL", null, "您已取消支付");
  }

  static isCancel(obj: any) {
    return (
      BaseReturn.getStatusValue(obj) === ExceptionPayment.CANCEL.getStatus()
    );
  }
}

export default function requestPayment(params: IPaymentParams) {
  return new Promise<[ReturnData<string>, typeof ExceptionPayment]>(
    (resolve) => {
      wx.requestPayment({
        nonceStr: params.nonceStr,
        package: params.package,
        paySign: params.paySign,
        timeStamp: params.timeStamp,
        signType: params.signType as "MD5",
        success() {
          resolve([ReturnData.success(), ExceptionPayment]);
        },
        fail(err) {
          const msg = (err?.errMsg || "微信支付异常，请重试").toLowerCase();

          if (msg.includes("cancel")) {
            resolve([
              ReturnData.exception(ExceptionPayment.CANCEL),
              ExceptionPayment,
            ]);
            return;
          }

          resolve([ReturnData.fail(msg), ExceptionPayment]);
        },
      });
    },
  );
}
 
export function requestPaymentV2(params: IPaymentParams) {
  return new Promise<[ReturnData<string>, typeof ExceptionPayment]>(
    (resolve) => {
      wx.requestPayment({
        nonceStr: params.nonceStr,
        package: params.package,
        paySign: params.paySign,
        timeStamp: params.timeStamp,
        signType: params.signType as "MD5",
        success() {
          resolve([ReturnData.success(), ExceptionPayment]);
        },
        fail(err) {
          const msg = (err?.errMsg || "微信支付异常，请重试").toLowerCase();

          if (msg.includes("cancel")) {
            resolve([
              ReturnData.exception(ExceptionPayment.CANCEL),
              ExceptionPayment,
            ]);
            return;
          }

          resolve([ReturnData.fail(msg), ExceptionPayment]);
        },
      });
    },
  );
}
