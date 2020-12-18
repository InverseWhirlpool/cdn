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
    "revision": "07b1b4ad94a99b403953e63c5c08c540"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch1.69352bfd.png",
    "revision": "69352bfdd837b8231d61b2d55af25d24"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch1.ec3a72dc.png",
    "revision": "ec3a72dcce3b21bebba7a7d3e15a6958"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch2.6f9f09b1.png",
    "revision": "6f9f09b104c96018744aaf9ee00f7770"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch2.7caae476.png",
    "revision": "7caae47617c1d98b7ef2bed5187a13dc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch3.8121eb87.png",
    "revision": "8121eb87d9d5879adc13f73253c7b4ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch3.a98bafcd.png",
    "revision": "a98bafcd86586eb61cc65aa85b58b09c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch4.28fd1c61.png",
    "revision": "28fd1c6180e59cf1b790c8a61e7889fd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch4.48429cf8.png",
    "revision": "48429cf82e1110c5709113bdaf2fc18b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch5.041838e7.png",
    "revision": "041838e788c34a63dc7515d1aee10413"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch5.6fac4c11.png",
    "revision": "6fac4c11c098b5cc339fcd08d8e72806"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch6.a82f696a.png",
    "revision": "a82f696aa1f7713f76efb927d8a7ad86"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/img/receive_from_switch6.be5684b4.png",
    "revision": "be5684b487b82c4eea2d6368319047b1"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/10.abf19074.js",
    "revision": "4ace3193febcebd2f8c736bbf0192048"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/11.0096e267.js",
    "revision": "d644344dd120637807db6cb3cadcfcaa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/12.27ec8e21.js",
    "revision": "ccdda9ffbd98d6170f1dd5ba11e89a9f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/13.da5b5fa8.js",
    "revision": "eed7ac08aa0b87aec94ceaf3628ada57"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/14.e290dd33.js",
    "revision": "9769d353131f93dc6123b1c413d2af74"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/15.ebfcda5d.js",
    "revision": "187e4fe6b24029d0386709790a52b8b6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/16.2ae6579d.js",
    "revision": "cea59b33c7b7ff2d5cbab67707bc5ae6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/17.053c0963.js",
    "revision": "3648776ef57e5bada24e609b973ffa81"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/18.c006abac.js",
    "revision": "ffffbec024c730cf8a2c9c9df934078f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/19.c3f9add8.js",
    "revision": "1e0c729437f6f351531bd04d5425fb35"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/2.9ac4f010.js",
    "revision": "d584df553478e1703806fcc99fde3846"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/20.bb83a5cf.js",
    "revision": "4dbcd3a9b3c025dccc98367cafbe2326"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/21.5df3ccca.js",
    "revision": "640a19ad88a852706025a5771e3384f9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/22.131f289d.js",
    "revision": "9597ac3b572dcade4c7982880cae5d10"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/23.bfbb77c2.js",
    "revision": "ca9288e182b4b828e35b65f5844201cd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/24.65eda59f.js",
    "revision": "466fdbe6313756786c087670f1350663"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/25.f246db3b.js",
    "revision": "a9859a833b9495cd9660e2c3d0f6235e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/26.59219d20.js",
    "revision": "10126d7bd4b6cda913b5da1229a5e039"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/27.8d6a0649.js",
    "revision": "b1a78addcb219bc58b5ce0062e2e48ca"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/28.d2e6043a.js",
    "revision": "523edd005f1a9d016049bf4ac0b081d9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/29.71afb528.js",
    "revision": "7143eba02d437742c559ab9974963341"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/3.f7f7c47f.js",
    "revision": "ce1d2a76353d7753eb7170cebeb7632a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/30.8aa0005d.js",
    "revision": "0a1e640d91b8ed825c87a11aeacf2d44"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/31.1012b21d.js",
    "revision": "4cc26195fa40d785619a69935c2e5fd5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/32.77a6dd85.js",
    "revision": "11fedbf820c36b90a82514494180a70e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/33.cc79a121.js",
    "revision": "307e1a8725f9ea4d2f4d76e4a8ab066f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/34.d8188240.js",
    "revision": "52601289611b9c5120754739306e4ec6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/35.1696d792.js",
    "revision": "5c029b3f9dc99e4539383cf145313b62"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/36.fc05463e.js",
    "revision": "4bb066738e0bb9732267cb749db43784"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/37.331d2cf8.js",
    "revision": "6860386ce0aacaf0bc77d452bbea4925"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/38.6712a2bb.js",
    "revision": "859428836d2f14d8d34d3b6b18ebee00"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/39.c9891336.js",
    "revision": "5aaa64fc8e394564a20bec09020dfed8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/4.283758e3.js",
    "revision": "ee94f8429269929fda535841a154e8fe"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/40.82a12443.js",
    "revision": "145c89ca406623b5f184bd0b6fbd4dec"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/41.52210bb1.js",
    "revision": "db8343d7169941aeb14c7210046fda54"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/5.ad8fe8e4.js",
    "revision": "f7f705752da16451ec955f5ff9f2ab08"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/6.d51ec28d.js",
    "revision": "43ea9b20631578c27ac00ed25888fea2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/7.69ce51dd.js",
    "revision": "d2032b9070a4257058407bf81b914b32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/8.a22d4864.js",
    "revision": "1826ab4fcc65458a0377fe5327ddaf0a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/9.1b8a53b0.js",
    "revision": "5c2e191c7a1ff1d74ef8babb5de5bc42"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/app.97766734.js",
    "revision": "829a5c8fa0a07a73b805600ac72716f0"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "9f8f609193679889b3b6b3b02116d838"
  },
  {
    "url": "download/index.html",
    "revision": "a8a7e97d1a5123c113afe36cea18fb99"
  },
  {
    "url": "faq/index.html",
    "revision": "aecbdd78ee4c8409336737cb167d8ab1"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "9d44c3a2a30c5b18ba6f1d6c5cc853f7"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "b2f0c196e50d716e38acc0c69c41778e"
  },
  {
    "url": "guide/index.html",
    "revision": "80a532239a27c04d2e9cb8ff7e54a09a"
  },
  {
    "url": "guide/quick-copy.html",
    "revision": "53190da48996d30468f949fdb603248d"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "acae6172e2216a24658443603ceb0db4"
  },
  {
    "url": "guide/receive-from-nintendo-switch.html",
    "revision": "4e5b77c2253e78621426cb112045334d"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "66c3b73cac5d01d2b542f681d7b7340c"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "4d87225cee8bb175c0ea27eefbc37acf"
  },
  {
    "url": "guide/send-file.html",
    "revision": "954d7777daf4fc63cd1abc5b82691314"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "ce116c6bac6a1a93156ab00546b54575"
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
    "revision": "d343372c128f53d26d887eb69a81a500"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "24e237ed5872421e7411844151f787e2"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "b528698b449435ec2e85c7bc2b0cc869"
  },
  {
    "url": "zh/about/index.html",
    "revision": "8d99b27ce153c616e2fc905fa0a3ea22"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "3209e397ba58c06398c89713058c0666"
  },
  {
    "url": "zh/download/index.html",
    "revision": "67ac95ade92e820115934de138679660"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "4862b93704f7addc464f74445b85d2aa"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "9a928cd55d476c1e9a3cec9428b711b0"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "3a7726e862757cd82a7844520ec05973"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d9fda52679a08264d6e597c4c1c7af3d"
  },
  {
    "url": "zh/guide/quick-copy.html",
    "revision": "b04f75c6fba11aeebed6206875bfefcb"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "c9d25f37ce839d298993831c7c7a3398"
  },
  {
    "url": "zh/guide/receive-from-nintendo-switch.html",
    "revision": "0b0e0f3ed21189931a87effdcff4f077"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "475d8a103ca75331313e3c48581ed575"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "6dc748678fa6557634b17365fe23b194"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "c6e88c6cf30824a20ed20a711534f997"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "3cbbc933882a44888b54eda3e95ced1a"
  },
  {
    "url": "zh/index.html",
    "revision": "ce37f13be6699548f06df17a3c5267a7"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "5bbc887288e17cf19fa0b8d45620ff76"
  },
  {
    "url": "zh/terms-of-service/index.html",
    "revision": "45666e5c08e8d88c0f8db756802a69c6"
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
