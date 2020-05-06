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
    "revision": "98e498b2e50fef8d3b19ef48fcaceb0e"
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
    "url": "assets/js/10.7f5855c2.js",
    "revision": "8e85e6d2d753b7f7e37b0fb558955107"
  },
  {
    "url": "assets/js/11.3e59b2a1.js",
    "revision": "34dff5b87b05cfa7c476945a1884ce3b"
  },
  {
    "url": "assets/js/12.5cf87229.js",
    "revision": "0d70d31db627f9923bdc9533278a8264"
  },
  {
    "url": "assets/js/13.f8059cda.js",
    "revision": "0f5b81fd47273686b250a6ca9429d37b"
  },
  {
    "url": "assets/js/14.b917a68e.js",
    "revision": "3f613bbc779312323a4836567a2eefcf"
  },
  {
    "url": "assets/js/15.c81b993d.js",
    "revision": "c3184dae9f7987bee4b2d8f39e41d9e7"
  },
  {
    "url": "assets/js/16.083cdf86.js",
    "revision": "0230bf2c5c004346efdb53c33ead411e"
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
    "url": "assets/js/2.554ace4f.js",
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
    "url": "assets/js/23.560a642e.js",
    "revision": "46687ab1c92ddb9413dcd2088258e516"
  },
  {
    "url": "assets/js/24.091fbaa6.js",
    "revision": "715cff55d6222c18b994547f6079ee0e"
  },
  {
    "url": "assets/js/25.2b37f1ff.js",
    "revision": "ac5dd40f69922cda73d3208813e7934c"
  },
  {
    "url": "assets/js/26.7797f0e8.js",
    "revision": "c5bef036034fb6494e93622bc23ceb92"
  },
  {
    "url": "assets/js/27.0780f10a.js",
    "revision": "19865c17dc6657fb852c4e12ec9efeb1"
  },
  {
    "url": "assets/js/28.c383fd69.js",
    "revision": "cf0daf2ffbdd0d41852a9d3bee648177"
  },
  {
    "url": "assets/js/29.8476e653.js",
    "revision": "e2f332643e889bad809c3929fde8d724"
  },
  {
    "url": "assets/js/3.12cb87b3.js",
    "revision": "c31c9bc98ea90a6bafbfe0e315f2517c"
  },
  {
    "url": "assets/js/30.b226f33f.js",
    "revision": "4359eeeac9e81a62f82df52ea61bffda"
  },
  {
    "url": "assets/js/31.7c2f0499.js",
    "revision": "93cde5e5487667768fbb84b89870210e"
  },
  {
    "url": "assets/js/32.abd9a18c.js",
    "revision": "3792520921d5f6096c717013d8b71859"
  },
  {
    "url": "assets/js/33.6859856c.js",
    "revision": "16a5e796ecc2d42810513fa6bcaa34b9"
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
    "url": "assets/js/4.b71bff09.js",
    "revision": "abcbab8e3cb54a664205a50998184e48"
  },
  {
    "url": "assets/js/5.dce5b4f0.js",
    "revision": "8f4a22be4bf9f26fac0a144f470e8c23"
  },
  {
    "url": "assets/js/6.4b72bf78.js",
    "revision": "702a06f3048e0ace47741185efef2830"
  },
  {
    "url": "assets/js/7.bf3aaeb8.js",
    "revision": "0d5137d55dd9f74f8eb8117339325c91"
  },
  {
    "url": "assets/js/8.159f5a4e.js",
    "revision": "d99f676dfcf7c6ab01b752b412afa225"
  },
  {
    "url": "assets/js/9.532875ac.js",
    "revision": "461021bfa7c053e3668071d4cdeb9924"
  },
  {
    "url": "assets/js/app.4a746ba7.js",
    "revision": "0fbab1d2a7b4e89c51df998dcaceeca6"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "55b2aa91fa6d44e851b6af250c88aadc"
  },
  {
    "url": "download/index.html",
    "revision": "3865cead16ac801da9c575600d765d2b"
  },
  {
    "url": "faq/index.html",
    "revision": "b896afebf2ec0daa9ff63c9b122126ae"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "88a710310efcf9e0f02716241ee0626d"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "72549c9a5529ce99cea0ad15dd9e5459"
  },
  {
    "url": "guide/index.html",
    "revision": "ad3def16779c8b2c217ebecfb9f6bd7f"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "d29f26d7a2e8fa41594fe7069e9bd16a"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "509aa1b184a78ada79f2d8da8fca1b09"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "118d713cbeb19863e4fedb9816b3e13d"
  },
  {
    "url": "guide/send-file.html",
    "revision": "c8e4d006e6ab56bbaf60640a2bee01b7"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "59e165b9f85152e2a1dbd110bfa26573"
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
    "revision": "cc77f517d07b64402c768532d1da4ec9"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "8e27c8208d0978eb94ec247c8f46b70a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "34584aabd6a1a7d9eb3c1d83f44a630d"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "14f4b12ac7c70396630e3119b52bc8e9"
  },
  {
    "url": "zh/download/index.html",
    "revision": "eb75e917b8387c17476fcb88c39f015c"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "06b06dc36c4a6861e7b61960b7371f2c"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "b9f66ded1c7429a456abf19722501c8c"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "d1e445d2e648a7b40d29e69747266912"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d89e19cde1146503e2790dbc899b9e74"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "cac8c749d3a0f1609bafa05a2a1ebb36"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "08b24cb5d8c0079bfb9c375b1426e256"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "6a5be781aca40d5ed1bb71374289fcaf"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "e44576a6a456cbed65d97830f01be06a"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "58447e54224e539c1a31b846a981f3a1"
  },
  {
    "url": "zh/index.html",
    "revision": "18268f4691292d06ead3b44fea78ba5c"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "1b3705cfafdc597a568b27fd34b9ef62"
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
