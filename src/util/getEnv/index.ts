import { PLATFORM_TYPE } from "../../constants";

export function getEnv() {
  if (typeof wx !== "undefined" && wx) return PLATFORM_TYPE.wx;
  if (typeof tt !== "undefined" && tt) return PLATFORM_TYPE.tt;
  if (typeof my !== "undefined" && my) return PLATFORM_TYPE.my;
  if (typeof swan !== "undefined" && swan) return PLATFORM_TYPE.swan;
  return null;
}
