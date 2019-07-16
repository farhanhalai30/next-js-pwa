// next.config.js
const withOffline = require("next-offline");

const nextConfig = {
  // target: "serverless"
  assetPrefix: process.env.NODE_ENV === "production" ? "/next-js-pwa" : ""
};

module.exports = withOffline(nextConfig);
