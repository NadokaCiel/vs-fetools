import AOM from "./AOM";
import Decorator from "./Decorator";
import util from "./util";
declare const _default: {
    Decorator: {};
    AOM: {
        storage: {
            storeData: typeof import("./AOM/storage/index.aliapp").storeData;
            queryData: typeof import("./AOM/storage/index.aliapp").queryData;
            clearStorage: typeof import("./AOM/storage/index.aliapp").clearStorage;
        };
    };
    util: {};
};
export default _default;
export { Decorator, AOM, util };
