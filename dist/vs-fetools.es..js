import ReturnData from 'return-data';

function objectToText(data) {
    var _a, _b;
    try {
        return (_b = (_a = data === null || data === void 0 ? void 0 : data.toString) === null || _a === void 0 ? void 0 : _a.call(data)) !== null && _b !== void 0 ? _b : JSON.stringify(JSON.parse(data));
    }
    catch (e) {
        return "";
    }
}

function storeData(storeKey, data) {
    try {
        wx.setStorageSync(storeKey, data);
        return [ReturnData.success(), ReturnData];
    }
    catch (e) {
        return [ReturnData.fail(objectToText(e)), ReturnData];
    }
}
function queryData(storeKey) {
    try {
        return [ReturnData.success(wx.getStorageSync(storeKey)), ReturnData];
    }
    catch (e) {
        return [ReturnData.fail(objectToText(e)), ReturnData];
    }
}
function clearStorage(storeKey) {
    try {
        wx.removeStorageSync(storeKey);
        return [ReturnData.success(), ReturnData];
    }
    catch (e) {
        return [ReturnData.fail(objectToText(e)), ReturnData];
    }
}
var storage = {
    storeData: storeData,
    queryData: queryData,
    clearStorage: clearStorage,
};

var AOM = {
    storage: storage,
};

var Decorator = {};

var util = {};

var index = {
    Decorator: Decorator,
    AOM: AOM,
    util: util,
};

export { AOM, Decorator, index as default, util };
//# sourceMappingURL=vs-fetools.es..js.map
