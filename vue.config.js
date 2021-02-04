// module.exports = {
//   chainWebpack: (config) => {
//     config.module
//       .rule("images")
//       .test(/src\/assets\/images\/(.*)\.+(png|jpe?g|gif)$/i)
//       .use("url-loader")
//       .loader("url-loader")
//       .options({
//         limit: 2000000,
//         fallback: { loader: "file-loader" },
//       })
//       .end();
//   },
// };
// module.exports = {
//   chainWebpack: (config) => {
//     config.module
//       .rule("images")
//       .use("url-loader")
//       .loader("url-loader")
//       .tap((options) => Object.assign(options, { limit: 10240 }));
//   },
// };
// module.exports = {
//     outputDir: './src/assets/images',
//     assetsDir: './public/assets',
// }
