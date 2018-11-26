"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e6af89a0627e1aa0887d67ec7d68d51b"],["/static/css/main.64b797a9.css","1abb621f5c1da2eda1b63b4bc7a2912f"],["/static/js/main.0ee37b6b.js","44cde830faee97e1250e8a3bc0063e45"],["/static/media/Brian.0ed0a75b.jpg","0ed0a75bee1d7f4052adb8c84216b110"],["/static/media/Dennis.6603bccb.jpg","6603bccb9afb1ed615b604b9649d287f"],["/static/media/Guiyu.c09c89f5.jpg","c09c89f571d0c5185917a27ac292a7ed"],["/static/media/Tatianna.f4dd2e79.jpg","f4dd2e79d55c6ce6ddcf8ad76a42451d"],["/static/media/business_meeting.ce00ba49.jpg","ce00ba49f6e87fbd82f5ea45c986b581"],["/static/media/jeannine.f5bf2679.jpg","f5bf26791c7472271f2fad02445c59b4"],["/static/media/t-1.ef1ac27d.jpg","ef1ac27de677bf4b5dade684b2fc3e6c"],["/static/media/t-2.669dd8bb.jpg","669dd8bb3343f2e4d10ec9361d957e8e"],["/static/media/t-3.1ae537f7.jpg","1ae537f7bcb36bed73ee02e3c440aec5"],["/static/media/team.e859209f.jpg","e859209ffbe06c9d5c0709f013f3eafb"],["/static/media/thumb-up.a3a96217.jpg","a3a9621770b222062b2d8f41315a98a4"],["/static/media/tools.1f92a5a2.png","1f92a5a2aeefad71a086ce1fe7f2902d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});