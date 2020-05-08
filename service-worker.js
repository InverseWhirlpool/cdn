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
    "revision": "2de9cde8e566a854be35ada294b9e7ef"
  },
  {
    "url": "assets/css/styles.styles.015885cd.css",
    "revision": "61508ccd263947dc58b7dfc91577ab5c"
  },
  {
    "url": "assets/img/bind1.9e213a52.png",
    "revision": "9e213a526251c19eee287c94c981bfc2"
  },
  {
    "url": "assets/img/bind1.cdac3a46.png",
    "revision": "cdac3a463c4c7ebf760e8857093f240d"
  },
  {
    "url": "assets/img/bind3.27323328.png",
    "revision": "273233281ac564f8d9f2b3f439eec783"
  },
  {
    "url": "assets/img/bind3.f4a4f1ca.png",
    "revision": "f4a4f1ca2abe4b9e78468a655298d242"
  },
  {
    "url": "assets/img/bind4.20206ac6.png",
    "revision": "20206ac62ed1cedc91e65796d52f68cb"
  },
  {
    "url": "assets/img/bind4.bce5f8d3.png",
    "revision": "bce5f8d3d07f43376036d062611bf9d8"
  },
  {
    "url": "assets/img/bind5.2f9e464a.png",
    "revision": "2f9e464a14bb955a17bd31f9cd4ddf77"
  },
  {
    "url": "assets/img/bind5.c77c5f38.png",
    "revision": "c77c5f382fbeca52c176698d58259cbd"
  },
  {
    "url": "assets/img/bind6.de2b3fc0.png",
    "revision": "de2b3fc0834cebda2783e9e8ca3c5d80"
  },
  {
    "url": "assets/img/bind6.fa70f773.png",
    "revision": "fa70f773a4dbab11bf77701da8dcad42"
  },
  {
    "url": "assets/img/bind7.0ee4ba3c.png",
    "revision": "0ee4ba3c23946e9c373c58396761dbae"
  },
  {
    "url": "assets/img/bind7.880b732d.png",
    "revision": "880b732d5e27b04fec5b14e228af2324"
  },
  {
    "url": "assets/img/receive1.582d5fbb.png",
    "revision": "582d5fbb3e3daadfa6cb240ab334315c"
  },
  {
    "url": "assets/img/receive1.cb673f51.png",
    "revision": "cb673f511570649a949358978cebc42f"
  },
  {
    "url": "assets/img/receive2.46f9ba59.png",
    "revision": "46f9ba59d941f40ff8e3e0f1f22c5742"
  },
  {
    "url": "assets/img/receive2.89104cad.png",
    "revision": "89104cada9591f899aac3022cddbeabd"
  },
  {
    "url": "assets/img/receive4.4f468f8d.png",
    "revision": "4f468f8df57a69c6da7d41aae230d944"
  },
  {
    "url": "assets/img/receive4.78f53389.png",
    "revision": "78f5338960f819fdb88cfed5c52801e1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/send1.582d5fbb.png",
    "revision": "582d5fbb3e3daadfa6cb240ab334315c"
  },
  {
    "url": "assets/img/send1.cb673f51.png",
    "revision": "cb673f511570649a949358978cebc42f"
  },
  {
    "url": "assets/img/send2.8dbf6f99.png",
    "revision": "8dbf6f99f2f2e1a9bf103af7b6a5e0bf"
  },
  {
    "url": "assets/img/send2.90615b18.png",
    "revision": "90615b18ea3eb0a7cc1953ff24a613b8"
  },
  {
    "url": "assets/img/send3.aac4d1ab.png",
    "revision": "aac4d1ab8a9cb8ef63d85e3071b2f7e2"
  },
  {
    "url": "assets/img/send3.aed86f80.png",
    "revision": "aed86f80abe3de635c9fec924d085eff"
  },
  {
    "url": "assets/img/send4.72ac0194.png",
    "revision": "72ac0194bdff5e1af2f996bdb6e453f0"
  },
  {
    "url": "assets/img/send4.f30f2390.png",
    "revision": "f30f239075a0c5295e77b45ea000244e"
  },
  {
    "url": "assets/img/send5.2cc0385d.png",
    "revision": "2cc0385d36435df2d0860ba8ff109276"
  },
  {
    "url": "assets/img/send5.9eb836bd.png",
    "revision": "9eb836bd7aa770b8f20116fd0b85c431"
  },
  {
    "url": "assets/img/send6.8c46cbae.png",
    "revision": "8c46cbae420ae820d4a0f14fbfba9299"
  },
  {
    "url": "assets/img/send6.9c3dcbf2.png",
    "revision": "9c3dcbf29919549c7100016a3edb710d"
  },
  {
    "url": "assets/img/send8.5eb0974b.png",
    "revision": "5eb0974b701b22bbfda27d2e57e6ca8a"
  },
  {
    "url": "assets/img/send8.85217e05.png",
    "revision": "85217e058fde78d275a73e1c3d692ed7"
  },
  {
    "url": "assets/img/settings1.18f993e6.png",
    "revision": "18f993e61be206d7a8217913970c43a1"
  },
  {
    "url": "assets/img/settings1.9f674b4f.png",
    "revision": "9f674b4f2f151f4ed98fe4b681249938"
  },
  {
    "url": "assets/img/settings2.96aed06f.png",
    "revision": "96aed06f41bc03e77af410ddcd83f496"
  },
  {
    "url": "assets/img/settings2.cbb5b3ca.png",
    "revision": "cbb5b3ca7f5c7ddd4c1db77f36f72314"
  },
  {
    "url": "assets/img/settings3.6a603b76.png",
    "revision": "6a603b76f3773ee723e03496cded7a8e"
  },
  {
    "url": "assets/img/settings3.d9ad80c3.png",
    "revision": "d9ad80c3c0537f50dbacb0746a60c590"
  },
  {
    "url": "assets/img/share1.9a1f0536.png",
    "revision": "9a1f05360788d402d4053480697f98fa"
  },
  {
    "url": "assets/img/share1.9bef3b44.png",
    "revision": "9bef3b447ae8f57ad0b522fd0f6d3cd1"
  },
  {
    "url": "assets/img/share2.0d3d27aa.png",
    "revision": "0d3d27aa68bfd15c34acadda46676e5a"
  },
  {
    "url": "assets/img/share2.b389e3db.png",
    "revision": "b389e3dbd107a2708e3148fbd07bee56"
  },
  {
    "url": "assets/img/share3.373bc940.png",
    "revision": "373bc940b167053cb76cc8ddfcd737fa"
  },
  {
    "url": "assets/img/share3.fbebef5d.png",
    "revision": "fbebef5d2c6e79cea8d8c985eeb6125c"
  },
  {
    "url": "assets/js/0.d670dec9.js",
    "revision": "8c83b8a90e0b324c00686d12e21b048d"
  },
  {
    "url": "assets/js/1.47043f21.js",
    "revision": "82f84e5ce2358b48171557bb04c96a92"
  },
  {
    "url": "assets/js/10.415e6659.js",
    "revision": "1196f53248e68e6c864880fddf596bac"
  },
  {
    "url": "assets/js/11.5c152b08.js",
    "revision": "0430d6d3c577ef2218627d515bf2c471"
  },
  {
    "url": "assets/js/12.a4081fc4.js",
    "revision": "2833952e97d12514c91fb4f7d076348a"
  },
  {
    "url": "assets/js/13.b0cdfe3c.js",
    "revision": "b473e34aa4c5b2bcb677a455392e0a34"
  },
  {
    "url": "assets/js/14.628c822b.js",
    "revision": "e0e028d9188f16cc85853bb2128b4291"
  },
  {
    "url": "assets/js/15.612ebc55.js",
    "revision": "065c366794e7da2c23cf2ab12c245aca"
  },
  {
    "url": "assets/js/16.992b085f.js",
    "revision": "0f48256b571f31403591516f75b4b2cf"
  },
  {
    "url": "assets/js/17.41075797.js",
    "revision": "ed704c9eb840f9c70ee990f904e12d77"
  },
  {
    "url": "assets/js/18.fa6b7f40.js",
    "revision": "5096a5abcf177081000132f3cb20df99"
  },
  {
    "url": "assets/js/19.3db92251.js",
    "revision": "0f33e1ddc050fe5aee46d513cfce84ef"
  },
  {
    "url": "assets/js/2.6e91b99b.js",
    "revision": "87b5f7b8a196e987b2af69504c66f11f"
  },
  {
    "url": "assets/js/20.de6064f2.js",
    "revision": "da641e9c33d0fa8165c1777cf92b1187"
  },
  {
    "url": "assets/js/21.008bce2f.js",
    "revision": "163fe61248ce8ff5ceb654526929afb2"
  },
  {
    "url": "assets/js/22.4dda487c.js",
    "revision": "139ecdbc677111cb15e6b1778dd8c0af"
  },
  {
    "url": "assets/js/23.549fc734.js",
    "revision": "18691697f9f296d2c3c587f8c1e6f069"
  },
  {
    "url": "assets/js/24.4b50eb97.js",
    "revision": "dc0710834f339e998a048cb70617c49b"
  },
  {
    "url": "assets/js/25.afc5e3b2.js",
    "revision": "8dac4db00fe15efad75797c230d5c829"
  },
  {
    "url": "assets/js/26.8d711c49.js",
    "revision": "5266d50b73577d4f73f72d1e3b126044"
  },
  {
    "url": "assets/js/27.f205e0c6.js",
    "revision": "2d3f86d78af2d08295790362bf297f71"
  },
  {
    "url": "assets/js/28.cdddd532.js",
    "revision": "7e10410f0b6fbc214bb4b53d384be08a"
  },
  {
    "url": "assets/js/29.af0a639b.js",
    "revision": "5e8412a7583176ae26c341deb7434dc9"
  },
  {
    "url": "assets/js/3.894080f1.js",
    "revision": "7443831835c7d59106b1820e8e453af1"
  },
  {
    "url": "assets/js/30.a8b6ad4d.js",
    "revision": "35d2bea0f5bd8e6bf902455d7cfba7ce"
  },
  {
    "url": "assets/js/31.181981de.js",
    "revision": "d74b57e0d17a9858821a1d0af0f3228e"
  },
  {
    "url": "assets/js/32.9370fc1f.js",
    "revision": "330eb332589baef2e315795d712b11c4"
  },
  {
    "url": "assets/js/33.0d3a1ea8.js",
    "revision": "43c8f3c29227bb01f58cd78233c6114f"
  },
  {
    "url": "assets/js/4.8f8be1d7.js",
    "revision": "958bacc33f50c963dc49f22518c9a491"
  },
  {
    "url": "assets/js/5.6cd90562.js",
    "revision": "3ac3c1d66c0fcc956c60b0b011ccc380"
  },
  {
    "url": "assets/js/6.cca6c913.js",
    "revision": "4ebe5cfdbc67bc2052e963653cc304cb"
  },
  {
    "url": "assets/js/7.1e782bf6.js",
    "revision": "a47745cbf6537c5342b770551be560fd"
  },
  {
    "url": "assets/js/8.71fba5f4.js",
    "revision": "aa676d30d51f0e57226328d1ab1ac0d9"
  },
  {
    "url": "assets/js/9.50067700.js",
    "revision": "32256738ea26aff08fb4c498624be4c0"
  },
  {
    "url": "assets/js/app.0789d8b8.js",
    "revision": "38695a47780935dccc25886811a00313"
  },
  {
    "url": "assets/js/styles.015885cd.js",
    "revision": "acff77afd479e4d16b6e55a0b88a15c1"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "a43bba17d64017890f6ba492efe2afd2"
  },
  {
    "url": "download/index.html",
    "revision": "137d75cad974fc61279ecd4036a24a4a"
  },
  {
    "url": "faq/index.html",
    "revision": "65ae4f4382bbafe489b8d3e57bb69851"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "c83470a439e9644928e193b3d09b1aa5"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "707088cfaad5c35cbecd363170ad5894"
  },
  {
    "url": "guide/index.html",
    "revision": "c7734eef654beede03263c41aa95f1c7"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "8ddc176c8673a1717168845e88959259"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "8b14c759bb7903b194fae862da747481"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "c27b6dcb58cab06be444f9f821079a64"
  },
  {
    "url": "guide/send-file.html",
    "revision": "a99c8d4538199c7bcb3ae61874addbf8"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "5d24dcc0a7eb68978f56e383d6fda4fe"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "4ab6667af2f66beac12907b5f568cbd4"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "93de6331cfc575afc89934b6dbcdbfed"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "5fb05fe8516417f0521ce6ba0c717e8a"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "3edec6e3d060ddd9eed45f6be036f70d"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "dcef567377d3540b05c279fdc980bcd9"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6835fbb766d151a6ee571e391418c2dd"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "48491eff8e0b86e744a157af390ab295"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "fdee66ed32cf6825401834c56f91c3ed"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "485dcdbe39713c875d783cff3b4800bb"
  },
  {
    "url": "index.html",
    "revision": "f4c306ec47cc6ea20e6170119c4cebf6"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "58b388ee0b5f060b2783326ed7345815"
  },
  {
    "url": "zh/about/index.html",
    "revision": "74472a75f13514c6367dbe946eebd16c"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "b1033d47b3f6c59f82c38b9de789591e"
  },
  {
    "url": "zh/download/index.html",
    "revision": "79b9bc9365b012edb2708f572dd5d112"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "e325647929ead8cadae57acc245df54a"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "5a50a66a014a162a90ba04457a3cda18"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "88dbd195b96721e12a811f42f8744689"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5cf99733f52467588e4175378b8e8db1"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "7b58a71fbba3574d794ae58213b52087"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "856c6bd4b5c12ca634a73ed778119147"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "57fa12e1a084a0018e601e4f4fbceda6"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "8dfe51d77046fba42bab51c0e2b7832f"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "5902bab3380da7d6c5f1cd8e3fdb2693"
  },
  {
    "url": "zh/index.html",
    "revision": "b97d96355855b1e2e7e65a7deb176ff9"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "59ad9f2426fea1b6f4e6947dd9139ea1"
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
