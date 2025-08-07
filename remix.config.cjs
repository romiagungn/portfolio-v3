/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // server: process.env.NODE_ENV === "development" ? undefined : "./server.js", // Baris ini mungkin berbeda, tidak apa-apa
  serverBuildPath: ".netlify/functions-internal/server.js", // Ini adalah baris KUNCI
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};