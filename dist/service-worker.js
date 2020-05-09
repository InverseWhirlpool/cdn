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
    "revision": "9b00a008ef5188ec1f732b508aaa31b2"
  },
  {
    "url": "assets/css/0.styles.18ecd941.css",
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
    "url": "assets/js/10.e3b8ac0f.js",
    "revision": "4ead52dc388f1c213094a0f99b417851"
  },
  {
    "url": "assets/js/11.cb92749e.js",
    "revision": "19bc1079c46a75a5a57ca5fd5d75ccb3"
  },
  {
    "url": "assets/js/12.3ebbae18.js",
    "revision": "da9b0d781aafd8904000d0a96aba5e65"
  },
  {
    "url": "assets/js/13.d587302b.js",
    "revision": "db1a15aad94d7847d6d6448dac732667"
  },
  {
    "url": "assets/js/14.0ef6dfdc.js",
    "revision": "b66b0e55f7c9df1439526840fd07cddd"
  },
  {
    "url": "assets/js/15.acb57849.js",
    "revision": "f536ed49e0245c9933e3b0d9e30b2baa"
  },
  {
    "url": "assets/js/16.288c36f1.js",
    "revision": "1fccd23ff31b8243098ebbefe9cb767c"
  },
  {
    "url": "assets/js/17.398a0289.js",
    "revision": "1dcec93508abbbb9935843fd0c443530"
  },
  {
    "url": "assets/js/18.d81bcdf0.js",
    "revision": "a1808384515bf28e6163a0f6a1f9a764"
  },
  {
    "url": "assets/js/19.45411d3b.js",
    "revision": "2f7de35b4fa1ff3482a87fe91ab3f5bc"
  },
  {
    "url": "assets/js/2.446abee6.js",
    "revision": "350fd559a47a852994902c6976b747ca"
  },
  {
    "url": "assets/js/20.4ea26bc0.js",
    "revision": "8d134af947a7648d051809b0ad77f1df"
  },
  {
    "url": "assets/js/21.b383bada.js",
    "revision": "6be5836bbf0b699c34a22845767e8ef9"
  },
  {
    "url": "assets/js/22.50596bc9.js",
    "revision": "17a5c73526c9f688e2fe2f4e9ceb98a3"
  },
  {
    "url": "assets/js/23.00da615f.js",
    "revision": "2009568ebafd7df17a1fd8ad0ef51f21"
  },
  {
    "url": "assets/js/24.0578835b.js",
    "revision": "3154583d9a8bf9e2b738e63998de29fa"
  },
  {
    "url": "assets/js/25.d784aa8b.js",
    "revision": "c791d3c7fdeb56ccb974e2d8293cd079"
  },
  {
    "url": "assets/js/26.154e6cf1.js",
    "revision": "c24e7b3ae7cf81a586d55e351c096d67"
  },
  {
    "url": "assets/js/27.20b93942.js",
    "revision": "ee71712eb2fcb6482a1e42000f98f950"
  },
  {
    "url": "assets/js/28.bf114b81.js",
    "revision": "865b762a5c0dc4c1cd68f7c4a097ad38"
  },
  {
    "url": "assets/js/29.a7898f85.js",
    "revision": "cda51b236b61214554c910dbde2dcdaf"
  },
  {
    "url": "assets/js/3.be97df41.js",
    "revision": "7599008c0106af648fc41c05ae3fe4ad"
  },
  {
    "url": "assets/js/30.bf93dd25.js",
    "revision": "3fe1b48b68d0720139c90aa9753b1948"
  },
  {
    "url": "assets/js/31.18b1e5ff.js",
    "revision": "4c85eb18a3fb9812e0a6324fb8e0c253"
  },
  {
    "url": "assets/js/32.e1aa22c8.js",
    "revision": "ea4a2bd7c70fd248685e2790e367461f"
  },
  {
    "url": "assets/js/33.6854a4c6.js",
    "revision": "2f39b1ecae2f09583cda1177ca74d4ac"
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
    "url": "assets/js/4.9288a631.js",
    "revision": "fb6951f22262c33b1b220a37d668a92f"
  },
  {
    "url": "assets/js/5.cf636ba2.js",
    "revision": "874ef90ea69be05acf0800e7e488f33b"
  },
  {
    "url": "assets/js/6.5b9b83d7.js",
    "revision": "84f5917cdf20ea3aee856461cec0b67b"
  },
  {
    "url": "assets/js/7.cbfad0ef.js",
    "revision": "e8bcb6ec30529cebee8a722645a7927c"
  },
  {
    "url": "assets/js/8.cd7fa235.js",
    "revision": "09a5d9cf68c994991d770030fced8573"
  },
  {
    "url": "assets/js/9.c8f0b53d.js",
    "revision": "70a22fae7e3f85e9fc527e238a0cdf3c"
  },
  {
    "url": "assets/js/app.1708b281.js",
    "revision": "8cd9f94e1a504c0943d392c5f4fa530d"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "9b467de54a34a01ef703f1c95aef7f14"
  },
  {
    "url": "download/index.html",
    "revision": "8f292ea28964aaecc645d9dd401f6c6a"
  },
  {
    "url": "faq/index.html",
    "revision": "980582bc03cb2040b0025b1a3bc5813e"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "b54944a513c18f660c59e01640b78402"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "c722cf522ed5f71508199a9015adbf9a"
  },
  {
    "url": "guide/index.html",
    "revision": "66207267d4f8556d9f0270218df9ff3a"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "1019ad89071c2443739dc3d3d0efdc84"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "22f4ef83de2e4da2ca3528d7140a82f6"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "7481f85dfb5d460054e755d12f90805c"
  },
  {
    "url": "guide/send-file.html",
    "revision": "01544f1f44841bf38c1e247bd4a6630a"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "fc21930188c907ca0d4c1ecc58cdbc71"
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
    "revision": "2cd4a23a9eb9920b5cea9356f1d25785"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "82c38ba0ae3338641e2d40e5b13da7da"
  },
  {
    "url": "zh/about/index.html",
    "revision": "f5b0fe43d7d8d2e6a3b3e6cb82a66634"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "6521d0d4400b02797fb5afcc51ff683a"
  },
  {
    "url": "zh/download/index.html",
    "revision": "b0e24e1ddbc6a2487518ef8fc020eec9"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "101b5edfc701645b80d4edff2a30ad2c"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "b41461a2c0a4d54809b2ec9c120166ae"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "685e458774d24e9b2a288c0c35867583"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "913ae4876f6abe76a95966e7c21dc48b"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "b3455a81182abbbd7715a8c1b40041d4"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "682d2abfcf183344a6232b80a4f7487a"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "242cbd2c5143e60ca3fd628a96967a0f"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "0b9d3b92f56e79aeac4abe3b5831e689"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "9b3f271248e08c40afc59ac72ecd05d1"
  },
  {
    "url": "zh/index.html",
    "revision": "32965cca55c330690d5b31e7ff32e681"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "aea922d7b67410e693369c1bbf1f839a"
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
