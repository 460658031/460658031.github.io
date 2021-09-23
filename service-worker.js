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

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8e2b7f6794ff0144b520e7cbc19e638"
  },
  {
    "url": "accumulate/index.html",
    "revision": "9d187b1b669cbd494a3da1de12208bc4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d633e0a5aeaccd69de27ef0a9dea3972"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.112fd9cf.js",
    "revision": "7d0bc7129d12c6dfe0fa076f6b510d5a"
  },
  {
    "url": "assets/js/11.6e3c7bc6.js",
    "revision": "1bf348accbd4da3e837c70792cc49464"
  },
  {
    "url": "assets/js/12.dad24a3e.js",
    "revision": "507af4cdd4eb2981ec192a806f93affb"
  },
  {
    "url": "assets/js/13.2b069dfb.js",
    "revision": "d846fe7b1a94a12601e626415d4c2abd"
  },
  {
    "url": "assets/js/14.5281b704.js",
    "revision": "13fd93156c65514cc97de0f3684ba82f"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.27e3467f.js",
    "revision": "5581b679c944e1d7f9ba5c681c7d2d46"
  },
  {
    "url": "assets/js/4.05ee44ad.js",
    "revision": "b302043a74ee51aa86b6845845c0be93"
  },
  {
    "url": "assets/js/5.c8a49ddb.js",
    "revision": "90af07f186e9ff668932780a5cba01b2"
  },
  {
    "url": "assets/js/6.031c1c2a.js",
    "revision": "5d8c668ccdd466dd9fee1d622eb53c99"
  },
  {
    "url": "assets/js/7.f7e9dc45.js",
    "revision": "1c39784523521455b3226d610c58f43d"
  },
  {
    "url": "assets/js/8.580c1dd6.js",
    "revision": "77ce0f7a970ef8c275907a077b5460e9"
  },
  {
    "url": "assets/js/9.a128b309.js",
    "revision": "d62007b6715820fba2d4b528f6240d53"
  },
  {
    "url": "assets/js/app.3168d185.js",
    "revision": "ef741fe5ab332f085a16801378b0a753"
  },
  {
    "url": "Docker/Docker入门.html",
    "revision": "c75fb270aa8ad77e00dbd91042186250"
  },
  {
    "url": "Docker/Windows环境运行容器.html",
    "revision": "7294ef2f20dcf61d49d6c63342ba3598"
  },
  {
    "url": "Git/GitHub部署本地服务.html",
    "revision": "f5d9c24acc31559dbbb9109c6cfe4f9a"
  },
  {
    "url": "guide.html",
    "revision": "0c90c851aadcdd8eb564ebf5bd063389"
  },
  {
    "url": "images/docker-for-win-switch.png",
    "revision": "778d2ac6b2910e525a8036b42bc02a13"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "fe5f879744be2a04f32712830c926762"
  },
  {
    "url": "Mysql/mysql 数据库检测.html",
    "revision": "3affa3c38e08adeb7aca645b756da6ca"
  },
  {
    "url": "others/index.html",
    "revision": "80e1eb483fda8891c0f67214d5fd2882"
  },
  {
    "url": "基础知识/markdown语法.html",
    "revision": "dd98eeedc49aeb427836eeb635657de6"
  },
  {
    "url": "基础知识/堆栈.html",
    "revision": "c196861e87a3c689f46ebbef9fb08699"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
