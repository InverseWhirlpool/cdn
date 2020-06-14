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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "3ffbce45c5b4bc179a78881605266c7a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/css/0.styles.18ecd941.css",
    "revision": "61508ccd263947dc58b7dfc91577ab5c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind1.9e213a52.png",
    "revision": "9e213a526251c19eee287c94c981bfc2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind1.cdac3a46.png",
    "revision": "cdac3a463c4c7ebf760e8857093f240d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind3.27323328.png",
    "revision": "273233281ac564f8d9f2b3f439eec783"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind3.f4a4f1ca.png",
    "revision": "f4a4f1ca2abe4b9e78468a655298d242"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind4.20206ac6.png",
    "revision": "20206ac62ed1cedc91e65796d52f68cb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind4.bce5f8d3.png",
    "revision": "bce5f8d3d07f43376036d062611bf9d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind5.2f9e464a.png",
    "revision": "2f9e464a14bb955a17bd31f9cd4ddf77"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind5.c77c5f38.png",
    "revision": "c77c5f382fbeca52c176698d58259cbd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind6.de2b3fc0.png",
    "revision": "de2b3fc0834cebda2783e9e8ca3c5d80"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind6.fa70f773.png",
    "revision": "fa70f773a4dbab11bf77701da8dcad42"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind7.0ee4ba3c.png",
    "revision": "0ee4ba3c23946e9c373c58396761dbae"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/bind7.880b732d.png",
    "revision": "880b732d5e27b04fec5b14e228af2324"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/quick_copy1.4113ccb4.png",
    "revision": "4113ccb4e2c6f52dcb4e9ea19bffc66c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/quick_copy1.f6fd26d3.png",
    "revision": "f6fd26d38742bcd656c3cdfbb496051d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/quick_copy2.030f493f.png",
    "revision": "030f493f567d01eba56dee2c06d5724c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/quick_copy2.581c6df4.png",
    "revision": "581c6df423fa755a0ca1ea434e11e770"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/quick_copy3.23b1992c.png",
    "revision": "23b1992c94f0fc6bfe164da5be4c970f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/quick_copy3.d300675f.png",
    "revision": "d300675f7e96988fd36065d24dccd4b9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive1.582d5fbb.png",
    "revision": "582d5fbb3e3daadfa6cb240ab334315c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive1.cb673f51.png",
    "revision": "cb673f511570649a949358978cebc42f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive2.46f9ba59.png",
    "revision": "46f9ba59d941f40ff8e3e0f1f22c5742"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive2.89104cad.png",
    "revision": "89104cada9591f899aac3022cddbeabd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive4.4f468f8d.png",
    "revision": "4f468f8df57a69c6da7d41aae230d944"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive4.78f53389.png",
    "revision": "78f5338960f819fdb88cfed5c52801e1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send1.582d5fbb.png",
    "revision": "582d5fbb3e3daadfa6cb240ab334315c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send1.cb673f51.png",
    "revision": "cb673f511570649a949358978cebc42f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send2.8dbf6f99.png",
    "revision": "8dbf6f99f2f2e1a9bf103af7b6a5e0bf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send2.90615b18.png",
    "revision": "90615b18ea3eb0a7cc1953ff24a613b8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send3.aac4d1ab.png",
    "revision": "aac4d1ab8a9cb8ef63d85e3071b2f7e2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send3.aed86f80.png",
    "revision": "aed86f80abe3de635c9fec924d085eff"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send4.72ac0194.png",
    "revision": "72ac0194bdff5e1af2f996bdb6e453f0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send4.f30f2390.png",
    "revision": "f30f239075a0c5295e77b45ea000244e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send5.2cc0385d.png",
    "revision": "2cc0385d36435df2d0860ba8ff109276"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send5.9eb836bd.png",
    "revision": "9eb836bd7aa770b8f20116fd0b85c431"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send6.8c46cbae.png",
    "revision": "8c46cbae420ae820d4a0f14fbfba9299"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send6.9c3dcbf2.png",
    "revision": "9c3dcbf29919549c7100016a3edb710d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send8.5eb0974b.png",
    "revision": "5eb0974b701b22bbfda27d2e57e6ca8a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/send8.85217e05.png",
    "revision": "85217e058fde78d275a73e1c3d692ed7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/settings1.18f993e6.png",
    "revision": "18f993e61be206d7a8217913970c43a1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/settings1.9f674b4f.png",
    "revision": "9f674b4f2f151f4ed98fe4b681249938"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/settings2.96aed06f.png",
    "revision": "96aed06f41bc03e77af410ddcd83f496"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/settings2.cbb5b3ca.png",
    "revision": "cbb5b3ca7f5c7ddd4c1db77f36f72314"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/settings3.6a603b76.png",
    "revision": "6a603b76f3773ee723e03496cded7a8e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/settings3.d9ad80c3.png",
    "revision": "d9ad80c3c0537f50dbacb0746a60c590"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/share1.9a1f0536.png",
    "revision": "9a1f05360788d402d4053480697f98fa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/share1.9bef3b44.png",
    "revision": "9bef3b447ae8f57ad0b522fd0f6d3cd1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/share2.0d3d27aa.png",
    "revision": "0d3d27aa68bfd15c34acadda46676e5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/share2.b389e3db.png",
    "revision": "b389e3dbd107a2708e3148fbd07bee56"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/share3.373bc940.png",
    "revision": "373bc940b167053cb76cc8ddfcd737fa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/share3.fbebef5d.png",
    "revision": "fbebef5d2c6e79cea8d8c985eeb6125c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/10.ef9c3334.js",
    "revision": "c9bc501781feed67d90174a163cae554"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/11.b0941c3c.js",
    "revision": "ea3d442691b029382e95e80763ac5b6a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/12.3c526cc9.js",
    "revision": "68f80e3030554b3a03eee7f3c8aea66c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/13.0b90ef6d.js",
    "revision": "c487ef3231d1ef8135dd05d464a8c8b1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/14.5862042f.js",
    "revision": "61ed5d75e0c60e95ea365f8e2b78ab1a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/15.b6932746.js",
    "revision": "9800d9b0cabbc40da40db33ffe6fd46b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/16.9e9d4da7.js",
    "revision": "3bff56680e3d1acad88824c54bf93150"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/17.7b8a0253.js",
    "revision": "4baccbcb3fdc518470996169f771adff"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/18.13aa7a5c.js",
    "revision": "6df230b578772fe4ca96ac35013fc131"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/19.93e6bdbe.js",
    "revision": "5a10da6e064c9d55636969e1da811c95"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/2.dfa4f50b.js",
    "revision": "00f890c2dd7a37be303a012c993e7a6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/20.af0f0bcd.js",
    "revision": "b1b32dca5bf880f83f94d5b31f1d5e82"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/21.a3c83a95.js",
    "revision": "5268726dd325d67a9bc3b05eaa1669e7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/22.9c8cabc0.js",
    "revision": "7c7ffa1c2d5d6bacaa33ac2b0f95ac5c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/23.e84112ab.js",
    "revision": "1ca7f544b434b29ebdcf3ca2a15bc0d9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/24.7b7deb28.js",
    "revision": "5303859ace85b3e3d25a2b149429be02"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/25.412bf723.js",
    "revision": "99a49fd1bbf04ea8737a7f51050d812a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/26.854edc59.js",
    "revision": "44eb35d4b594b0f7bf9d8e4630522a39"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/27.42a4e339.js",
    "revision": "e3733c1124d795fc5db60af49d260498"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/28.b4f37ce2.js",
    "revision": "76600fdf2f15558f600354fae0fea9a4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/29.1c6a941a.js",
    "revision": "930e05e347468eb9c8cf3df646b0f139"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/3.9cea1b76.js",
    "revision": "f39c83c39fe97b232004bb7ae840e653"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/30.31665dcb.js",
    "revision": "d6aef4e7ee413bb428ba6ee4efb836f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/31.40ba6f95.js",
    "revision": "0871eb36d2adb69454fcfd1361633a45"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/32.fd7b106d.js",
    "revision": "7222850df5f91d103081acda1886b533"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/33.47e31633.js",
    "revision": "042c8411d996a4185cbb4975ecf241a2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/34.09fda414.js",
    "revision": "c550254182d4be2f331313f484546fb6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/35.1e2daee7.js",
    "revision": "9d09994a59cd5bdccdb061e86d80d482"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/36.c58481b7.js",
    "revision": "96cdfdaa94a950535648df9ebb7206b3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/37.708883ef.js",
    "revision": "b50f9775730321922907eb611df8bd89"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/4.9d54dbcd.js",
    "revision": "9b724003fa2b546bd36a82d887f56ad2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/5.5e30cdc2.js",
    "revision": "ea9ead1ffbc448431ebbb8e97972bbb4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/6.06124532.js",
    "revision": "6eb89705d70d428ef0e1c58d129a639d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/7.74616710.js",
    "revision": "3d1f558542706b6b3f9ce08eefabb989"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/8.ad7cd421.js",
    "revision": "e50ba6047de7a25455a2b038aa52bb69"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/9.00d00657.js",
    "revision": "791afbfa2b7f9fc93bca1a035dd941ee"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/app.cf80be79.js",
    "revision": "76276404597163a8346e17c30248699c"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "73c952d586443f4282aa16d8eee83e16"
  },
  {
    "url": "download/index.html",
    "revision": "1abcfd43d0881851d04c044b27b4716b"
  },
  {
    "url": "faq/index.html",
    "revision": "5295269d4922990fee414c42dfc2437d"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "9d9c34128c6007ed8961bdccb75260e9"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "f673e566ec0d02de97f9e11ca63790a7"
  },
  {
    "url": "guide/index.html",
    "revision": "3eca9b893289402cf3a25752e5b7a2e5"
  },
  {
    "url": "guide/quick-copy.html",
    "revision": "ee777e6f4d5ec48bd36243bfcaffff18"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "3d09e3fe4e08252554fbcab313333397"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "7a07f39f39fa861a85b1698dc05dc15d"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "600bc426c01a16968173e41adeb9484f"
  },
  {
    "url": "guide/send-file.html",
    "revision": "4131e573f128767fe3011aebc268aede"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "fa08630d8f249b6ec0c70078ced8004e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-128x128.png",
    "revision": "4ab6667af2f66beac12907b5f568cbd4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-144x144.png",
    "revision": "93de6331cfc575afc89934b6dbcdbfed"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-152x152.png",
    "revision": "5fb05fe8516417f0521ce6ba0c717e8a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-192x192.png",
    "revision": "3edec6e3d060ddd9eed45f6be036f70d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-384x384.png",
    "revision": "dcef567377d3540b05c279fdc980bcd9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-512x512.png",
    "revision": "6835fbb766d151a6ee571e391418c2dd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-72x72.png",
    "revision": "48491eff8e0b86e744a157af390ab295"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/icon-96x96.png",
    "revision": "fdee66ed32cf6825401834c56f91c3ed"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/images/icons/safari-pinned-tab.svg",
    "revision": "485dcdbe39713c875d783cff3b4800bb"
  },
  {
    "url": "index.html",
    "revision": "387fae4d458cc66fc0bee7a895239e64"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "86fff443d03b6bbaa356a014bd88a6ef"
  },
  {
    "url": "zh/about/index.html",
    "revision": "747e0f67a9cb2d589bab0b6bc7580507"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "fee98b9733593c04213d1333ee88f568"
  },
  {
    "url": "zh/download/index.html",
    "revision": "79a138f82b734a32abf6687ef24dfd7a"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "254b50a18f1e4928ffe79642a3c7a70d"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "0bac7d28f77d58f00a1225f8272739fc"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "ead3fcc452002d61e649a87e92c5ad1f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5e4bfbb9208ab143195b46845d0855c8"
  },
  {
    "url": "zh/guide/quick-copy.html",
    "revision": "c53880683f6172d6f865b95b3c09cac4"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "be50c91da29d4ad713c47efc5fb839be"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "6b9ac288ae80a6e7f3b829d473830398"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "c818df2aa508946f3217ecbd9f6c1aa8"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "36d7b5f37e1ffe3f39de6c297dcdefe6"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "0b6202006bf1596a3398afacd137ae5a"
  },
  {
    "url": "zh/index.html",
    "revision": "d6bb273a226ecaf9b5587e83cecafcb7"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "3d88cba698461f6f09c10e6f025a42c8"
  }
].concat(self.__precacheManifest || []);
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
