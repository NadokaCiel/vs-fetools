import AOM from "./AOM";
import Decorator from "./Decorator";
import util from "./util";
declare const _default: {
    Decorator: {};
    AOM: {
        storage: {
            storeData: typeof import("./AOM/storage").storeData;
            queryData: typeof import("./AOM/storage").queryData;
            clearStorage: typeof import("./AOM/storage").clearStorage;
        };
    };
    util: {};
};
export default _default;
export { Decorator, AOM, util };
