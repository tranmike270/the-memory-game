"use strict";var precacheConfig=[["/the-memory-game/index.html","ec98a27821d82d9c66a4f4d6dcb89056"],["/the-memory-game/static/css/main.3d561c17.css","30d9995f70ebdbf12e660377da013921"],["/the-memory-game/static/js/main.6d52f9c5.js","4e9cf0c7c7ceca1e093d71d65abe968a"],["/the-memory-game/static/media/game-body-background.21b0673f.jpg","21b0673fb110674473a3d51c560bf667"],["/the-memory-game/static/media/header-background.e23fa65d.jpg","e23fa65dcedeb00cc5f9ac4ca015699d"],["/the-memory-game/static/media/icon1.eabca039.jpg","eabca0395d0eae82de26594f87c4dd47"],["/the-memory-game/static/media/icon10.406ce0a4.jpg","406ce0a47ad07cc1e441f5b05c981b5c"],["/the-memory-game/static/media/icon11.a3e10625.jpg","a3e10625368bebf193d66f2942589adc"],["/the-memory-game/static/media/icon12.b4e48437.png","b4e484379f12767ca74764711b31fdb9"],["/the-memory-game/static/media/icon13.b5ef0360.png","b5ef0360736710d1e2f15071f54e3a4b"],["/the-memory-game/static/media/icon14.da1a5311.png","da1a53117556a3e1d7cfb2076047f763"],["/the-memory-game/static/media/icon15.4d2fe174.png","4d2fe174521be89fcd9d3472a8485d00"],["/the-memory-game/static/media/icon16.ce4b7489.png","ce4b74892171d828e95443efb810f325"],["/the-memory-game/static/media/icon17.652b02a6.png","652b02a62cd4ded2c188c80e9385c58f"],["/the-memory-game/static/media/icon18.d9c0f5ab.png","d9c0f5ab873d08d7e82f983550f4e0b7"],["/the-memory-game/static/media/icon19.ba7ac0eb.png","ba7ac0ebe36a08388bf8f77816662ba5"],["/the-memory-game/static/media/icon2.4f2245b0.jpg","4f2245b05476d0ba6a74f665a6ca60fd"],["/the-memory-game/static/media/icon20.6ccee528.jpg","6ccee5282627bdaab783e36c279dd800"],["/the-memory-game/static/media/icon21.76326ab9.jpg","76326ab9da36a4e9ec338fa6c19b9ab6"],["/the-memory-game/static/media/icon22.fa0f7ef8.png","fa0f7ef8711147223fa2240f7817ba47"],["/the-memory-game/static/media/icon23.4c3109db.png","4c3109db62d71e4b8f4998d1bb4326c1"],["/the-memory-game/static/media/icon24.f83e1ab2.jpg","f83e1ab2b8c21adf5c46e9b2e65faada"],["/the-memory-game/static/media/icon25.b4df771c.jpg","b4df771ca9a28ef18e3608b1482d2fe3"],["/the-memory-game/static/media/icon3.a09c2400.jpg","a09c240054d3d9e8c2aef137f18f62d7"],["/the-memory-game/static/media/icon4.d908ee09.jpg","d908ee092c547c849ef0c851f6828329"],["/the-memory-game/static/media/icon5.3a9a4267.jpg","3a9a4267596a50e692094f6f52a5e71d"],["/the-memory-game/static/media/icon6.69d0356d.png","69d0356d9b1de6ba6686db1ee220bac2"],["/the-memory-game/static/media/icon7.bdbc6443.jpg","bdbc64432d545bd10ac2f69999ed5d2d"],["/the-memory-game/static/media/icon8.07d75fec.jpg","07d75fec9251d6fb370277587ef9b1ad"],["/the-memory-game/static/media/icon9.a2ba783a.jpg","a2ba783a3dd41298d8fb1ce6ed8f1fad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/the-memory-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});