import ReturnData from "return-data";
export declare function storeData(storeKey: string, data: any): (typeof ReturnData | ReturnData<any>)[];
export declare function queryData<T = any>(storeKey: string): [ReturnData<T | null>, typeof ReturnData];
export declare function clearStorage(storeKey: string): (typeof ReturnData | ReturnData<any>)[];
declare const _default: {
    storeData: typeof storeData;
    queryData: typeof queryData;
    clearStorage: typeof clearStorage;
};
export default _default;
