export default function getExtensions(platform = "weapp") {
  return {
    extensions: [...getExtensionsPrefix(platform), ".ts", ".js"]
  };
};

const PLATFORM_RULE = {
  weapp: [".weapp.ts", ".weapp.js"],
  aliapp: [".aliapp.ts", ".aliapp.js"],
  swan: [".swan.ts", ".swan.js"],
  tt: [".tt.ts", ".tt.js"],
}

function getExtensionsPrefix(platform) {
  return PLATFORM_RULE?.[platform] || [];
};
