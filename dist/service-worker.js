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
    "revision": "71dd63a67269dcd3936c3d5113b79096"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/10.b7bf0c7f.js",
    "revision": "0b93db7f401580cdb6af1504bf371727"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/11.a76d6346.js",
    "revision": "0c93b51b237060ba24a11e4b990b221c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/12.fae5e386.js",
    "revision": "b1a4a17f21a1d9984b111a759fc78834"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/13.8b2faa1c.js",
    "revision": "a0aa56919ba0116378b07b23386755bd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/14.719cc8bc.js",
    "revision": "08b41622b486712f3c404b1e10f9caa3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/15.b21c4723.js",
    "revision": "e5b8834222d2258b485e83222661fe07"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/16.e8a0e883.js",
    "revision": "cd30b7b1c97aee6a9a995b17d85035ed"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/17.cc138ce3.js",
    "revision": "8646b06ad22a52840186dc1d3a515fa0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/18.a48f6425.js",
    "revision": "c23a5517253f17da193e463d598e64de"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/20.7b4e0900.js",
    "revision": "a9340267b4f78ac5932e6d7d5cabde98"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/21.a3c83a95.js",
    "revision": "5268726dd325d67a9bc3b05eaa1669e7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/22.1d9931c2.js",
    "revision": "2f016d4dd1d477dc130e174d4cd2d168"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/23.4f7a5d05.js",
    "revision": "7a755e129d252ae54ee93f1def9b680a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/24.7b7deb28.js",
    "revision": "5303859ace85b3e3d25a2b149429be02"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/25.4fb6a7ed.js",
    "revision": "8c6934048b2a289f5023dd488ac1a957"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/26.0f5e52d5.js",
    "revision": "051cab25475fa743cd0a0468c672ce4d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/27.c15ccb97.js",
    "revision": "2ad1041fcebb59ddc38cef6c5010d22c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/28.1af919e3.js",
    "revision": "dc872d8d69882993cb174c22486f68f3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/29.89a9617e.js",
    "revision": "09c5bdae4e957ea0e224564877c2f44b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/3.7a40d066.js",
    "revision": "cc03c2f723b15d7971f1a5d7418e90ad"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/30.54a02b61.js",
    "revision": "8f4f62a05c5d9fbaf8e8e56643bfdee2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/31.319f093e.js",
    "revision": "fbc9d33579a13379dc5a8a1664b42214"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/32.d21a22c4.js",
    "revision": "5119a0eb63e7bafeb047e0bb110022f2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/33.bf6244d0.js",
    "revision": "25792fd083b7bfbe831c0a8445523fc1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/34.61489dee.js",
    "revision": "419bb10d286d99de7fe470860fdc3343"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/35.bbc43350.js",
    "revision": "55a23158ae8f10c9836ed1c90e3efb13"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/36.403e1c90.js",
    "revision": "041bb448ae60a55f5bbd6ea63008c73f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/37.05619777.js",
    "revision": "51ab65315cd154d7165ec60616ed6659"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/38.97d4ea35.js",
    "revision": "2fc3c34a1e3b048b6d36fdedf5956eb6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/39.c9519ce5.js",
    "revision": "37616826cb79e26622fb3102a7055ee8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/4.30bb2dfc.js",
    "revision": "6b3a7505d833be55ed68ea6bffb5475c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/5.e35d7932.js",
    "revision": "1fc23598e9f7b0cb17e1c2c76940f272"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/6.d8f2c4f3.js",
    "revision": "fb437ba2ef907b1d48758622909f6399"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/7.140c3831.js",
    "revision": "aeb550ab214f4563f4b1757a11273ee1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/8.a98d1090.js",
    "revision": "ec73b2a65357a5d19d7125f3a8774f1e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/9.2032cfcd.js",
    "revision": "e18c81476715600178c734321dca9625"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/app.534c4a1b.js",
    "revision": "f618e0cbe2c308f43587724237f4dd07"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "f6afbf4fb1562fb8c5de1bc6f44040c2"
  },
  {
    "url": "download/index.html",
    "revision": "19279ac8b1b8057368d9c5e7b23001bd"
  },
  {
    "url": "faq/index.html",
    "revision": "506bbc2634eb2799e384bfe028f3e4ac"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "41f5029e975aacfa1ef3baf44bfaeaf1"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "6012f09ceee54a41771042be7de81a3c"
  },
  {
    "url": "guide/index.html",
    "revision": "fcface42c416fd483a94694ddb564d1a"
  },
  {
    "url": "guide/quick-copy.html",
    "revision": "0d077c7be860f848d49b59ec2df3826a"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "0dbe5834c0b9fcd6a8191f38e8de61b9"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "7c2d7406021eb1ee2f32f8196c005cd7"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "54082102ddf3489a97a938cf343482cb"
  },
  {
    "url": "guide/send-file.html",
    "revision": "2b07f871d47e4e110f29d2c8cb92c533"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "b86e031f30446d880f562df7c6407884"
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
    "revision": "8df30a81309c27bc75244b0fa3d95976"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "a2a2c2d2c863175642ef29f3aeadc98f"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "610ba1229dd0f445e82a53f76403ba63"
  },
  {
    "url": "zh/about/index.html",
    "revision": "bf87d77d1fb3bdb0fce389834c968506"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "a33ea28fca50a7b986289686d51c20d2"
  },
  {
    "url": "zh/download/index.html",
    "revision": "56cda631609030a457f80972628e27fa"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "cb80b15b149509da00597b33f0224704"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "df3aedb77c2e001c4a4aaa4b611265e9"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "1287d85b97e3eec85a09182b368e268b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4773855fa4403c84947bff5c45c3430a"
  },
  {
    "url": "zh/guide/quick-copy.html",
    "revision": "a9e51ae2293c7a5a7f83c7d17875bb92"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "bd501a1cba1b88958f756e4c780dda66"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "3556cd326df1aa4a863f9d43686e2c22"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "5e4da2f001ec3edc20daebdd5c9d9118"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "e2816403b6febf82e3a9cb683c74a215"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "8fee3246bbe4cadff190fe5bbef1d17a"
  },
  {
    "url": "zh/index.html",
    "revision": "3f13a4e654131f6babe247af9ed8fb80"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "704f39295012c1f552c123a4a847273d"
  },
  {
    "url": "zh/terms-of-service/index.html",
    "revision": "44993d7193689a43271b1faf37f8bbd9"
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
