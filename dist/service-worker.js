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
    "revision": "ff49f14d7c79bb13ec418dbf3fbadc6f"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/11.d11e2fcc.js",
    "revision": "8ddbddfbeeb7ad9e07ac3af18df5d981"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/12.27ec8e21.js",
    "revision": "ccdda9ffbd98d6170f1dd5ba11e89a9f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/13.bfd6ad40.js",
    "revision": "f122a3e16c0fa0f21f655f90717d041b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/14.e290dd33.js",
    "revision": "9769d353131f93dc6123b1c413d2af74"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/15.db47a95a.js",
    "revision": "5a82c3f5bc8ea4346181287767f571f7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/16.e6ad36a0.js",
    "revision": "cd9b05f9a9ce25673dc98aa304fab204"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/17.053c0963.js",
    "revision": "3648776ef57e5bada24e609b973ffa81"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/18.ab72ce06.js",
    "revision": "e13d295da740dc7d3619307a9a3df00c"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/27.f6cd659d.js",
    "revision": "349692489ac9f8ef6d961aad867fa887"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/28.a50b4da8.js",
    "revision": "dab37181be80886ce53a05c0de1fe098"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/29.f4706a87.js",
    "revision": "f960c64c9929cde528e7498316af6f02"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/3.ca1f3a15.js",
    "revision": "f6a7e6f26b39306bd6e5720a3bb6e854"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/30.df47b475.js",
    "revision": "2aa7d05cf7de81bf63a98ac5fb2ac890"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/31.ca1f23e0.js",
    "revision": "b63045fc46b288d717e4381faf933492"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/32.724f39e6.js",
    "revision": "a291e506c417e501b40ae653655b3768"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/37.9bf4a385.js",
    "revision": "84624fe7f990c66a40bbf9a5f2292928"
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
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/8.6c455b22.js",
    "revision": "dc1eb8fbbc5cc195a4ff9d1b39c8f966"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/9.1b8a53b0.js",
    "revision": "5c2e191c7a1ff1d74ef8babb5de5bc42"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/hypobenthos/cdn/dist/assets/js/app.2b129220.js",
    "revision": "8358f4bc9aad1c521fcc1cc0adcc37a2"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "a6a0b5d95d3212c53226c290e686c336"
  },
  {
    "url": "download/index.html",
    "revision": "252a8da22a3c77ee5a42be205b5f0ac2"
  },
  {
    "url": "faq/index.html",
    "revision": "95686096b5c6468b7011a32be3ebd755"
  },
  {
    "url": "favicon.png",
    "revision": "8abb133250b68e9421b27ce228353d89"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "53d07601833e7bf67fb09d1f295b8273"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "31b848f1fc4708962c7e2b77b1f32267"
  },
  {
    "url": "guide/index.html",
    "revision": "880ebe8f70dda4d81f2d4c47b513ec90"
  },
  {
    "url": "guide/quick-copy.html",
    "revision": "ed066ffc24b8f82105b08d490e062199"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "779256b178863a79e6dd0608bb8e5651"
  },
  {
    "url": "guide/receive-from-nintendo-switch.html",
    "revision": "2307860d1a4932054451630ddd5cdd45"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "1082507a279c4e4a92a9b902258c13c1"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "688030f426f0c1fb1a3a0987c1ede240"
  },
  {
    "url": "guide/send-file.html",
    "revision": "ac635207f9e4045c4da83d6d55a9ce77"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "7e66dfca827f8445c84a6fea908588f6"
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
    "revision": "f847c9793dcdde7a2fdf909426f5ec1e"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "d599827d51fae955d89b336bf4c2a541"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "e766ae807e2af6409d9a38f39184434a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "4e4dcfbb0bbea703d848263bb539f8b8"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "d3d792c7e5ff38933ce235b79c0cd4c0"
  },
  {
    "url": "zh/download/index.html",
    "revision": "5e07dead3c886e8c2390c8b7478ae194"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "14a5454933f153c4e96fb7801d2c9622"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "e5fa7ea40d5c8d5dfc885d599529ce13"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "ef3221ff781956d4fbf8e0b5c46e69ff"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "384238c76dba3d0f7534108eb09fd184"
  },
  {
    "url": "zh/guide/quick-copy.html",
    "revision": "00f62cfc21b3486fd5165fbc9d8a060a"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "3999150a6810a8786d8aaba04952fb40"
  },
  {
    "url": "zh/guide/receive-from-nintendo-switch.html",
    "revision": "d35dd01c1d1fa8c1f06ab38448fee76b"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "12fe4aa67ab98d417c488ec0b20f1a0f"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "74f83f56541b6c4084f638b19085ba51"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "64e4c5fe4783f4fe5f57d99877bd3a44"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "8549a42f205554ed52b42043599d9fa7"
  },
  {
    "url": "zh/index.html",
    "revision": "e21bd6cd0f79ab4d75764ce838ecd68d"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "4fa30f8d4a53dc1c4e541d850989ffa4"
  },
  {
    "url": "zh/terms-of-service/index.html",
    "revision": "2806935930448d985f94281681933e4b"
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
