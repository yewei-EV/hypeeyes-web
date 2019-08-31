MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
new MergeJsonWebpackPlugin({
  output: {
    groupBy: [
      { pattern: "./src/assets/language/en-US/*.json", fileName: "./i18n/en-us.json" },
      { pattern: "./src/assets/language/zh-CN/*.json", fileName: "./i18n/zh-cn.json" },
      { pattern: "./src/assets/language/zh-TW/*.json", fileName: "./i18n/zh-tw.json" },
      { pattern: "./src/assets/language/fr/*.json", fileName: "./i18n/fr.json" }
    ]
  }
})
