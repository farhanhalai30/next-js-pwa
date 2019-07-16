self.__precacheManifest = [
  {
    "url": "/_next/static\\mhbBRODP5yfNFxv4ZbcUf\\pages\\test1.js"
  },
  {
    "url": "/_next/static\\mhbBRODP5yfNFxv4ZbcUf\\pages\\index.js"
  },
  {
    "url": "/_next/static\\mhbBRODP5yfNFxv4ZbcUf\\pages\\about.js"
  },
  {
    "url": "/_next/static\\mhbBRODP5yfNFxv4ZbcUf\\pages\\_error.js"
  },
  {
    "url": "/_next/static\\mhbBRODP5yfNFxv4ZbcUf\\pages\\_app.js"
  },
  {
    "url": "/_next/static/runtime/webpack-a79426b5e11f0ba5879d.js"
  },
  {
    "url": "/_next/static/runtime/main-3aa8107668d722494695.js"
  },
  {
    "url": "/_next/static/chunks/commons.863f02c54d3c6477d016.js"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/favicon.ico",
    "revision": "21b739d43fcb9bbb83d8541fe4fe88fa"
  },
  {
    "url": "static/manifest.json",
    "revision": "36bc939ddb6339bbec1f592ab6ccd46e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
