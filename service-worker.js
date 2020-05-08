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
    "revision": "4153fee04702a7467e7f514fc22b18ed"
  },
  {
    "url": "assets/css/0.styles.840b39d0.css",
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
    "url": "assets/js/10.0c6d0d9e.js",
    "revision": "d36fcaf5aee8d775be2c1f5b6371009d"
  },
  {
    "url": "assets/js/11.f2c3c610.js",
    "revision": "a3cb7853540a1b7ca2741a517754b4b1"
  },
  {
    "url": "assets/js/12.ac521595.js",
    "revision": "7181a2decdff756fad5456439da2e70b"
  },
  {
    "url": "assets/js/13.d749b13a.js",
    "revision": "c6e95a1c70722c74f75f5a2cc8529cf7"
  },
  {
    "url": "assets/js/14.82f91f66.js",
    "revision": "54ab0503fa73e5ec973033521f8a874b"
  },
  {
    "url": "assets/js/15.7bfb8461.js",
    "revision": "175916917d9e16c83a182642d628096c"
  },
  {
    "url": "assets/js/16.aecfae74.js",
    "revision": "22b8de491bccb686c7e219513e30e99c"
  },
  {
    "url": "assets/js/17.398a0289.js",
    "revision": "1dcec93508abbbb9935843fd0c443530"
  },
  {
    "url": "assets/js/18.93e613ee.js",
    "revision": "4015fc89960a97f6af9977e484fd1f73"
  },
  {
    "url": "assets/js/19.45411d3b.js",
    "revision": "2f7de35b4fa1ff3482a87fe91ab3f5bc"
  },
  {
    "url": "assets/js/2.057c2243.js",
    "revision": "350fd559a47a852994902c6976b747ca"
  },
  {
    "url": "assets/js/20.b5742265.js",
    "revision": "a95888ece4ba49304cf074f50b10308b"
  },
  {
    "url": "assets/js/21.6f88a7cb.js",
    "revision": "9eca5d1c1d9407121b5c5e1479a9ae6f"
  },
  {
    "url": "assets/js/22.8a0d11ba.js",
    "revision": "b8935934b0ad1334308ee4e84ab85ab8"
  },
  {
    "url": "assets/js/23.26831a91.js",
    "revision": "348b1b6122b2afb6e182f675dcfeeab9"
  },
  {
    "url": "assets/js/24.111feda0.js",
    "revision": "87093bc3c2099218fda29ca0d0c0af91"
  },
  {
    "url": "assets/js/25.f6070f53.js",
    "revision": "2a34a51894a87fbf58974302025cc8c2"
  },
  {
    "url": "assets/js/26.7797f0e8.js",
    "revision": "c5bef036034fb6494e93622bc23ceb92"
  },
  {
    "url": "assets/js/27.f43f7600.js",
    "revision": "353cf1c62a49863abd295b2b26ffede7"
  },
  {
    "url": "assets/js/28.7f65a537.js",
    "revision": "7fdbca253d8d039e5d954fd70752eff6"
  },
  {
    "url": "assets/js/29.af766fa7.js",
    "revision": "3e5976f60967b7834d58d0632fbaaac3"
  },
  {
    "url": "assets/js/3.f1b4420d.js",
    "revision": "d7dfae175548f32ac1ba8c9ee15cf5c4"
  },
  {
    "url": "assets/js/30.c7cf9833.js",
    "revision": "c0da18ed46526c864a8aba823a15d71f"
  },
  {
    "url": "assets/js/31.1b4215a7.js",
    "revision": "7a1de864dd86be55c2bdcf687b61d872"
  },
  {
    "url": "assets/js/32.abd9a18c.js",
    "revision": "3792520921d5f6096c717013d8b71859"
  },
  {
    "url": "assets/js/33.6b3f11c4.js",
    "revision": "9b7a810f22f9f4520ed39984054b08a2"
  },
  {
    "url": "assets/js/34.12079e3e.js",
    "revision": "b6f014525dd7ce15ea5e4a5e1aa020fa"
  },
  {
    "url": "assets/js/35.457f284c.js",
    "revision": "696008af4572269be712f5ceddc1233a"
  },
  {
    "url": "assets/js/4.856d82e3.js",
    "revision": "6c5e3aa968902ab493819d4caf66305e"
  },
  {
    "url": "assets/js/5.55369fb9.js",
    "revision": "ca765e03f7390fe442f845c8b993b0dd"
  },
  {
    "url": "assets/js/6.1ef3a89b.js",
    "revision": "d5e54e56948687fe0cfebde1ff828046"
  },
  {
    "url": "assets/js/7.7b5bd666.js",
    "revision": "37806480612783f741ea41ecba3d7275"
  },
  {
    "url": "assets/js/8.a59cab49.js",
    "revision": "56aeb95043fd935fea9a8fffec7698dc"
  },
  {
    "url": "assets/js/9.f4df9fe2.js",
    "revision": "e4a6407bd5e030e687d78283320720c9"
  },
  {
    "url": "assets/js/app.eef83a0e.js",
    "revision": "d4f82fb8c5e7b4c5399e70858389ea33"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "5d45a134df8727142cf21d0f43f34216"
  },
  {
    "url": "download/index.html",
    "revision": "e2b28df8d32f526a71c4a970eac2675a"
  },
  {
    "url": "faq/index.html",
    "revision": "0142432d2e58be21bfe4e8555d67d0ba"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "60e04951aa5c317c4f5e53d5e9a63b31"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "4c41b2611d8c62b5754a0af4ebd40251"
  },
  {
    "url": "guide/index.html",
    "revision": "ffbeadad16256dc2d2340e275ea81041"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "dda587ee97d504618db2516b1c2f5c51"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "dfc25662d182e99cf1322af0d7dc4143"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "ad3978013dd90b06ba4b075128f4cac2"
  },
  {
    "url": "guide/send-file.html",
    "revision": "b31204a9e2a561d63b902665df72c645"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "b09af17c1141059c8267a0c715771960"
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
    "revision": "c6851127d3943fe58ad8e62e13e4155e"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "fb9446bdb5d30416a7a84cd1b9caeceb"
  },
  {
    "url": "zh/about/index.html",
    "revision": "4259fcb712203af2ab3756bb0ed5fd95"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "4e87acd3b16c0bb9c47e5652613f2c55"
  },
  {
    "url": "zh/download/index.html",
    "revision": "5cd29c4d7df3c4ea6115ddeb483e6112"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "c961c855dafea5d7399130325547ff01"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "b09b38958a1bf65a72c9a5339eababc7"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "c53111132edbf2b5962bc1d1a0dcec73"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "8bf3b1bcc905605f841823b95cbc64b6"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "e91d2f9728ad1125e81ddc43b92290b2"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "fc87d5bb0a19f8a48a90af539db8c97d"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "a9d48368fbc5ba8b72103866820a0ec2"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "d43c78d8947c313cc4a0e41eade969d4"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "61ea0bc4c7041ece571597810395cc74"
  },
  {
    "url": "zh/index.html",
    "revision": "58a85fa906b1533d5d9b3755bf2b257f"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "b7843c4057e809f40878222d15d381ca"
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
