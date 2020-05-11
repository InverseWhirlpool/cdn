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
    "revision": "5567ef6d425075e90a34d70b9e54ed1f"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/10.69b5cdd7.js",
    "revision": "1f5e1fdc1ca3376774fc1e21379aeeca"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/11.b798fab2.js",
    "revision": "f61738bced3953fc173a0a5e9fafdb80"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/12.31fc99fe.js",
    "revision": "fa99a0a7fc8f87ca4301524eaace1196"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/13.a6e52f69.js",
    "revision": "34db52ae382d24e044017bf4ebd4709b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/14.a8e6bade.js",
    "revision": "8f0b02e587194b8d17628f073e7f486d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/15.25df8711.js",
    "revision": "d98318de5de7080e08bc4c91c5d53e18"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/16.b81cffe3.js",
    "revision": "4df9844a5d863de0e6f50e9fb18a95cb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/17.398a0289.js",
    "revision": "1dcec93508abbbb9935843fd0c443530"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/18.d81bcdf0.js",
    "revision": "a1808384515bf28e6163a0f6a1f9a764"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/19.45411d3b.js",
    "revision": "2f7de35b4fa1ff3482a87fe91ab3f5bc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/2.446abee6.js",
    "revision": "350fd559a47a852994902c6976b747ca"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/20.4ea26bc0.js",
    "revision": "8d134af947a7648d051809b0ad77f1df"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/21.2a12ef18.js",
    "revision": "83dc1ef7358aec79f801522ec8c73637"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/22.440ea33f.js",
    "revision": "b6255e2b4dda8a18e1f89f896fc3b1c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/23.94432370.js",
    "revision": "59344e95a23ec51cb3efb30f43ae9127"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/24.d05799c0.js",
    "revision": "3d2ec9e2daa16707a966fd58a180a0d0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/25.b000a419.js",
    "revision": "99d93299b6ad86b75e58a47a92b51051"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/26.c723e891.js",
    "revision": "083187998a5a03a24a83f0aa975a4c76"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/27.20b93942.js",
    "revision": "ee71712eb2fcb6482a1e42000f98f950"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/28.bf114b81.js",
    "revision": "865b762a5c0dc4c1cd68f7c4a097ad38"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/29.a7898f85.js",
    "revision": "cda51b236b61214554c910dbde2dcdaf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/3.d6c44f18.js",
    "revision": "d5f67562b1ec239a165513ec39f9a1b3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/30.bf93dd25.js",
    "revision": "3fe1b48b68d0720139c90aa9753b1948"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/31.29d75721.js",
    "revision": "51c774d3396429207048878fe64737df"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/32.71d73c13.js",
    "revision": "0df48794955fc0102130e29368ca958f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/33.6854a4c6.js",
    "revision": "2f39b1ecae2f09583cda1177ca74d4ac"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/34.12079e3e.js",
    "revision": "b6f014525dd7ce15ea5e4a5e1aa020fa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/35.457f284c.js",
    "revision": "696008af4572269be712f5ceddc1233a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/4.ed9d3943.js",
    "revision": "25d1173f695f78fc83b28f94d0552636"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/5.ba562bce.js",
    "revision": "8b28282cf273e36e5544dd651cb7aa45"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/6.d5a97e03.js",
    "revision": "ab744a581df67996cb223d9a4fb74a06"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/7.a8463e05.js",
    "revision": "5938edfba04c58aae5b2e7803b7064c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/8.5c49b603.js",
    "revision": "59a019c557a784022740508cb8b3eff8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/9.76712d14.js",
    "revision": "ebbc5b10e947a581adae70f926fdda83"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/app.05f5cbf4.js",
    "revision": "8783827edae184615fb005ba9ca4fd38"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "614054ee5ffa5adb592ba4adbda27c9f"
  },
  {
    "url": "download/index.html",
    "revision": "55c8605f447e9fbb32e476fafa815263"
  },
  {
    "url": "faq/index.html",
    "revision": "0772afede75c999396fa632b0c1a20d3"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "1086dbdaf4e8838d82712fa25bd607b3"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "2fb5cf76f36aafd9dcc040fef1c2ccbe"
  },
  {
    "url": "guide/index.html",
    "revision": "eee4719712cfef6aa3bdc08d06cf5063"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "4dd094c3e54c68fcfc6e95f3e7b5569a"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "e0fb579169b015293530894b8f361a02"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "df7bdd42f47855c52e6dcf7af3d2c9a6"
  },
  {
    "url": "guide/send-file.html",
    "revision": "4b5e4e7e85e79b3388650eb5ba98504e"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "e16e3e3767d5b79818617ac547862194"
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
    "revision": "b6bd10d8505dde84412adf46ccaecabe"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "0065a83dbac7ce859f5877c1afcfef7c"
  },
  {
    "url": "zh/about/index.html",
    "revision": "533e86de07fbb82d93cd4d0abfeaa054"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "7eaf8aac7ab4c57963c37f9a801681e5"
  },
  {
    "url": "zh/download/index.html",
    "revision": "62143d222dbae1f18a5e716606aaac8d"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "29c220d5919b80dc10fe7b128778ae6c"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "ffbd9804a33eaf38a562257ae40de215"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "161780b6cf966b71bc1824a47365f8d1"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e8da5833da2436dae159e54162218dee"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "b4b925ed0c2954765ffaa958cce3cef6"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "45554fea7373cf7180392f206f5e2e38"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "a11cf1605f306926054001d53ff638e9"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "fba8cde94e2f47156cd7d8b6e26f6c32"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "c6171c2bca2d7299b1e752e92b9e2003"
  },
  {
    "url": "zh/index.html",
    "revision": "91229a2d8015417bbd3d0cc039aab155"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "125597da31411d3efeaa60c3b4a1aad2"
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
