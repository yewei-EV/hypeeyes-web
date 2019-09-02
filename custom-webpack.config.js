MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
module.exports = {
  plugins: [
    new MergeJsonWebpackPlugin({
      prefixFileName: true,
      output: {
        groupBy: [
          { pattern: "./src/i18n/en-US/*.json", fileName: "./i18n/en-us.json" },
          { pattern: "./src/i18n/zh-CN/*.json", fileName: "./i18n/zh-cn.json" },
          { pattern: "./src/i18n/zh-TW/*.json", fileName: "./i18n/zh-tw.json" },
          { pattern: "./src/i18n/fr/*.json", fileName: "./i18n/fr.json" }
        ]
      }
    }),
  ]
};
