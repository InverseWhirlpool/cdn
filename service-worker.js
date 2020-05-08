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
    "revision": "ea6667e8a7e62a956f42c2f54b530d00"
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
    "url": "assets/js/10.949f3614.js",
    "revision": "9ba2d140e754ff7ef0c41d5d18c91812"
  },
  {
    "url": "assets/js/11.4526e252.js",
    "revision": "4dc68b18749cffd57dfe9144e9ebd10b"
  },
  {
    "url": "assets/js/12.12dd1b28.js",
    "revision": "ac0536774fb2ebd4838d670189ddd97b"
  },
  {
    "url": "assets/js/13.7318c560.js",
    "revision": "2e5ed34f035d1757126489b1f0ac7ae2"
  },
  {
    "url": "assets/js/14.ead38593.js",
    "revision": "02613887f99cba6be3a1b1ba1e0a54d9"
  },
  {
    "url": "assets/js/15.fd4fef34.js",
    "revision": "75abc3fefefa149684c4d69d907e9348"
  },
  {
    "url": "assets/js/16.87ed665a.js",
    "revision": "d2739f2a4476bbba9e0fc9832ffdb2ac"
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
    "url": "assets/js/20.de96682d.js",
    "revision": "44f1ea1ee58de610af29383f07dd66b7"
  },
  {
    "url": "assets/js/21.ed2a0d7b.js",
    "revision": "763fe19fc453708321ca2e9b4dab9b0e"
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
    "url": "assets/js/24.d9d6e4e4.js",
    "revision": "8b9a022561df1bc348065eab9dbec3a5"
  },
  {
    "url": "assets/js/25.f6070f53.js",
    "revision": "2a34a51894a87fbf58974302025cc8c2"
  },
  {
    "url": "assets/js/26.e9e3105f.js",
    "revision": "c2713368c2265eaace9538fe5c8d965f"
  },
  {
    "url": "assets/js/27.da37098a.js",
    "revision": "bd67d81b63e33c11fb694b44c4549e36"
  },
  {
    "url": "assets/js/28.bf114b81.js",
    "revision": "865b762a5c0dc4c1cd68f7c4a097ad38"
  },
  {
    "url": "assets/js/29.40d3ac0c.js",
    "revision": "dcacdbcb5b932b966cac170b8b69aec5"
  },
  {
    "url": "assets/js/3.7fe6036a.js",
    "revision": "629d5f839466c5d358a799e20a2b8742"
  },
  {
    "url": "assets/js/30.aca9b7f7.js",
    "revision": "bbd3d616257bf7568b71c035fd25b372"
  },
  {
    "url": "assets/js/31.6b4dc89e.js",
    "revision": "66c26c928a7d90bd709cfae7e1866e60"
  },
  {
    "url": "assets/js/32.7b9bf9b7.js",
    "revision": "c57cdd360fd2ceb6f6a3fabbadcf1cfb"
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
    "url": "assets/js/4.09c2c9e6.js",
    "revision": "8cf49d4a082ebd0b46f693eebb4fa0a5"
  },
  {
    "url": "assets/js/5.a397e156.js",
    "revision": "1eb34425aa112328feab7d0630d97cf5"
  },
  {
    "url": "assets/js/6.c96adc04.js",
    "revision": "9c94b6bb22978617897484e1d321b7c8"
  },
  {
    "url": "assets/js/7.c3401565.js",
    "revision": "624822f514fb0b84124abdfaa72d13a2"
  },
  {
    "url": "assets/js/8.46c4e7da.js",
    "revision": "042fee737e795e1b59f79a007258771a"
  },
  {
    "url": "assets/js/9.7cc64320.js",
    "revision": "0e35f411844d493fa9d01af2293d8825"
  },
  {
    "url": "assets/js/app.01fe9508.js",
    "revision": "b4470c44eef30bf5282f2f381b058870"
  },
  {
    "url": "banner.svg",
    "revision": "29682eab15e770ea14ac6752d51622e3"
  },
  {
    "url": "development-progress/index.html",
    "revision": "2cf690d998d5669d45223db961e586b1"
  },
  {
    "url": "download/index.html",
    "revision": "852f27e37070b257b865bc703a99948c"
  },
  {
    "url": "faq/index.html",
    "revision": "1cee1720160210a97c0395edae34cf37"
  },
  {
    "url": "guide/auto-stored-to-the-album.html",
    "revision": "9c13581d813c1ede2cfc96efcb00d2a3"
  },
  {
    "url": "guide/bind-device.html",
    "revision": "b3cbc48fb24e475ef8eb995ac955bd15"
  },
  {
    "url": "guide/index.html",
    "revision": "1d941c27ab940e9e3e7593d7917ed786"
  },
  {
    "url": "guide/receive-file.html",
    "revision": "2301c57b480554b517af6ee0a4c58135"
  },
  {
    "url": "guide/send-file-to-browser.html",
    "revision": "6f0f2a2dc08387159ae9b5ae1ca70e2d"
  },
  {
    "url": "guide/send-file-to-kindle.html",
    "revision": "359ad335afee8a6317cd899fc04f9224"
  },
  {
    "url": "guide/send-file.html",
    "revision": "c8bb9a296f31d19443976904c127ad9d"
  },
  {
    "url": "guide/share-files-in-other-apps.html",
    "revision": "fe34d041c109785429933a2a1860106b"
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
    "revision": "ad43b69597d11fe7f019ceb03ef4217b"
  },
  {
    "url": "logo.png",
    "revision": "ff95a554f4c0fc64578c770d39746526"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "96ac042d14fd919b3f8f87f0e019a3a6"
  },
  {
    "url": "zh/about/index.html",
    "revision": "8f0b9b1df9b9cc81b80f10c04a46fc27"
  },
  {
    "url": "zh/development-progress/index.html",
    "revision": "cf2df08bc9b49ca98983b9ec8926a46b"
  },
  {
    "url": "zh/download/index.html",
    "revision": "501353ebb2f56fad087b0f5d1cfbcd06"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "e67a344747c8286f1adf1b54c418cced"
  },
  {
    "url": "zh/guide/auto-stored-to-the-album.html",
    "revision": "06ae63911b0a3e99e38097955838de13"
  },
  {
    "url": "zh/guide/bind-device.html",
    "revision": "d8347cc5715c3f0721cd4dd30b280587"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "aeb5d2561e8f514d1263485f0328a149"
  },
  {
    "url": "zh/guide/receive-file.html",
    "revision": "d59083a198f34829f441904f1d118e43"
  },
  {
    "url": "zh/guide/send-file-to-browser.html",
    "revision": "4aade7b2a6b9b879b42a420f608eff5f"
  },
  {
    "url": "zh/guide/send-file-to-kindle.html",
    "revision": "e36c056fed40159945f96b86281c9be2"
  },
  {
    "url": "zh/guide/send-file.html",
    "revision": "fe91347e411cecbacd5357db03465dd3"
  },
  {
    "url": "zh/guide/share-files-in-other-apps.html",
    "revision": "d09316924348d8433435363ab6528538"
  },
  {
    "url": "zh/index.html",
    "revision": "55f3d4effd8972b27d4e8546acf24c52"
  },
  {
    "url": "zh/privacy-policy/index.html",
    "revision": "0da4750bc1eaaaf01cf455b55e17ca85"
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
