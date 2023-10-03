module.exports = {
    "globDirectory": "build/",
    "globPatterns": [
      "**/*.{js,css,html,png,jpg,json}"
    ],
    "swSrc": "src/service-worker.js",
    "swDest": "build/service-worker.js",
    "swLib": "node_modules/workbox-sw/build/workbox-sw.js",
};