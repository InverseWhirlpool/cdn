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
    "revision": "77817b459f589880fccac117fd936d41"
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
    "url": "assets/js/10.94ce0dce.js",
    "revision": "3ca2d171f760b5121132d17596f30502"
  },
  {
    "url": "assets/js/11.ce3df3cb.js",
    "revision": "2d6237533dc938382df96f6695d5e2cb"
  },
  {
    "url": "assets/js/12.f65ed0d0.js",
    "revision": "06ef698d9ab3667f89e431c55cf91849"
  },
  {
    "url": "assets/js/13.1991d5c8.js",
    "revision": "eedbdf52e9f5783307fe0a31ca9b08c1"
  },
  {
    "url": "assets/js/14.db9e6911.js",
    "revision": "3d58b567eea0a96f1dd257c87bb99cd6"
  },
  {
    "url": "assets/js/15.d318bded.js",
    "revision": "9ed065a89339e35e1283f5827bde3354"
  },
  {
    "url": "assets/js/16.5b900f60.js",
    "revision": "451ebed8f64181b9084fe12b0ab9abf0"
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
    "url": "assets/js/20.2b188f30.js",
    "revision": "68ef024552b06bf6eef3143c5376c8a1"
  },
  {
    "url": "assets/js/21.353f2d3e.js",
    "revision": "e65d489aaaf1868272a20c898786fc40"
  },
  {
    "url": "assets/js/22.7add07d1.js",
    "revision": "27ece090d2ba3ecd33a0e50bd00e9369"
  },
  {
    "url": "assets/js/23.00da615f.js",
    "revision": "2009568ebafd7df17a1fd8ad0ef51f21"
  },
  {
    "url": "assets/js/24.b1c309d2.js",
    "revision": "1668c6fd6a935ce7308285c1a0ff0553"
  },
  {
    "url": "assets/js/25.4dc0d637.js",
    "revision": "91005f1ba232773bc8c41f7e6991d79a"
  },
  {
    "url": "assets/js/26.e9e3105f.js",
    "revision": "c2713368c2265eaace9538fe5c8d965f"
  },
  {
    "url": "assets/js/27.b9314478.js",
    "revision": "aa598476a64deee9599a1ee665c4ef5c"
  },
  {
    "url": "assets/js/28.4f73d8ea.js",
    "revision": "7e187fcb5daad06e061bada54ff2127d"
  },
  {
    "url": "assets/js/29.af766fa7.js",
    "revision": "3e5976f60967b7834d58d0632fbaaac3"
  },
  {
    "url": "assets/js/3.f4cf4a48.js",
    "revision": "412c3e5374d7571d0453e03cb130faed"
  },
  {
    "url": "assets/js/30.aca9b7f7.js",
    "revision": "bbd3d616257bf7568b71c035fd25b372"
  },
  {
    "url": "assets/js/31.5eb9e626.js",
    "revision": "29c7663495c342438bfc37b194eedd04"
  },
  {
    "url": "assets/js/32.fb49ab7d.js",
    "revision": "bfb66e3ea723ac395f8147635080d191"
  },
  {
    "url": "assets/js/33.3a176973.js",
    "revision": "9d0136e35a31e32f661f0667b7818b2b"
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
    "url": "assets/js/4.5aa473ad.js",
    "revision": "d9a4239409efcd596d446c1b78d56d83"
  },
  {
    "url": "assets/js/5.49fee34f.js",
    "revision": "f48f7c88e80f5f6e1a7a5d7cf4cdff42"
  },
  {
    "url": "assets/js/6.078d0c09.js",
    "revision": "1abebafd60ae462e11d6e85777d5c67a"
  },
  {
    "url": "assets/js/7.7b5bd666.js",
    "revision": "37806480612783f741ea41ecba3d7275"
  },
  {
    "url": "assets/js/8.00c6402f.js",
    "revision": "1e4bc7266acaf72d05403ab8a679f162"
  },
  {
    "url": "assets/js/9.525b6d83.js",
    "revision": "6fcc0b5587bc98d8f077d1cd76e32b15"
  },
  {
    "url": "assets/js/app.cb3daacd.js",
    "revision": "0ef11baec83230c61c8a473e78a9b7f9"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "b4526e4226de20843c7975556cb0c572"
  },
  {
    "url": "download/index.html",
    "revision": "16f41fc8437fa140c2fc491aa79978e2"
  },
  {
    "url": "faq/index.html",
    "revision": "98d6df7b4733c98e53a9c17828abb603"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "cc1b79a4e77d03d99db02137541a86e4"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "cacf9fadf36bae568a2282eb183c8a10"
  },
  {
    "url": "guide/index.html",
    "revision": "c59b2544f01601126f55719328d0ebba"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "9c05a25358ea3e7d0e50b3f35aba0e4f"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "a1d0a8be26f72e0e7f6e04b52b8b5d4d"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "48736089b4927a5c26ded294939aca6c"
  },
  {
    "url": "guide/send-file.html",
    "revision": "7564d033474da95207b15a3867059b4e"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "418cdffe20c9919bbbc76ed52183754e"
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
    "revision": "c2210bb24611119abaedbae399a510fa"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "fd961d87ac42fbedc29c3951f5e4e6ef"
  },
  {
    "url": "zh/about/index.html",
    "revision": "8bdfbbd8d982cff913a3b8733de9622f"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "bd263be50bfedc3e2dd0161bc7ce8002"
  },
  {
    "url": "zh/download/index.html",
    "revision": "65f6dea4faa8610966840836c1908be7"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "7a9229ab80279ca19df7af433b7cf212"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "d43b4fbfc3a0d725c036b8e8eefe7400"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "1ba4fef91366a008d93152386a4b3dde"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d051a4358af4ebf598336b2a3f60f541"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "295016f97b7baf0a74f5212f18461421"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "70e922f9501fa958ccab48c500a4a39d"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "ac6feaa430d2883eec5c5065e42f33da"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "0ec1cab237ffbbf8b28dd17296154c96"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "152b9b82c05661af8fb05be1b7aaf7d5"
  },
  {
    "url": "zh/index.html",
    "revision": "c15fbe02987f0ace77b937c24622a00d"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "8089ac5600c346d6d398c748be741d45"
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
