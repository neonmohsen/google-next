const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: [
      "assets.stickpng.com",
      "i.imgur.com",
      "185.110.190.86",
      "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
    ],
  },
});
