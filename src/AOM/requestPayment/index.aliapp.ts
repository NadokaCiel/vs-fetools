import { ALI_PAYMENT_HINT, ALI_PAYMENT_RESULT } from "@/constants/aliConstants";
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
  return new Promise<[ReturnData<string | null>, typeof ExceptionPayment]>(
    (resolve) => {
      my.tradePay({
        tradeNO: params.tradeNO,
        success(result) {
          const { resultCode } = result;
          if (resultCode === ALI_PAYMENT_RESULT.cancel) {
            resolve([
              ReturnData.exception(ExceptionPayment.CANCEL),
              ExceptionPayment,
            ]);
            return;
          }
          if (
            resultCode === ALI_PAYMENT_RESULT.success ||
            resultCode === ALI_PAYMENT_RESULT.processing ||
            resultCode === ALI_PAYMENT_RESULT.unknown
          ) {
            // 注意这里只是可能支付成功 需后端与支付宝交付以确认
            resolve([ReturnData.success(), ExceptionPayment]);
            return;
          }

          resolve([
            ReturnData.fail(
              (ALI_PAYMENT_HINT as any)[resultCode] || "支付异常，请重试"
            ),
            ExceptionPayment,
          ]);
        },
        fail(err) {
          const msg = (err?.errorMessage || "支付异常，请重试").toLowerCase();
          resolve([ReturnData.fail(msg), ExceptionPayment]);
        },
      });
    }
  );
}

export function requestPaymentV2(params: IPaymentParams) {
  return new Promise<[ReturnData<string | null>, typeof ExceptionPayment]>(
    (resolve) => {
      my.tradePay({
        orderStr: params.nonceStr,
        success() {
          resolve([ReturnData.success(), ExceptionPayment]);
        },
        fail(err) {
          const msg = (err?.errorMessage || "支付异常，请重试").toLowerCase();

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
    }
  );
}
