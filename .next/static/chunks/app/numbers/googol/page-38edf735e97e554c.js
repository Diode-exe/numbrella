(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{1693:function(e,t,n){Promise.resolve().then(n.bind(n,9963))},6487:function(e,t,n){"use strict";n.d(t,{e:function(){return r}});class r{static formatNumberWithBreaks(e){let t=e.replace(/,/g,""),n=t.length,r="";for(let e=0;e<n;e+=3){let s=Math.max(n-e-3,0),a=t.slice(s,n-e);r=a+(r?","+r:"")}return r}}},9963:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7437);n(2265);var s=n(340),a=n(6487);let l=s.M.allCharacters(),u="10,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000";function i(e,t){let n=a.e.formatNumberWithBreaks(e.toString()).split(""),s=n.map((e,n)=>{let s="true"==t.toString()?l.filter(e=>"0"==e.id)[0].prettyStyle:l.filter(t=>t.id==e)[0].prettyStyle;return(0,r.jsx)("span",{className:"".concat(s),children:e},n)});return s}function o(){let e=[];console.log(u);let t=u.split("");return t.forEach((t,n)=>{let s=l.filter(e=>{var n;return(null===(n=e.id)||void 0===n?void 0:n.toString())==t})[0].prettyStyle,a="".concat("m-1"," ").concat(s);e.push((0,r.jsx)("span",{className:a,children:t},n)),","==t&&e.push((0,r.jsx)("wbr",{}))}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-4xl font-black tracking-wide font-mono text-center",children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Googol",children:"Googol"})}),(0,r.jsxs)("div",{className:"text-center text-5xl text-black-600/100 m-5",children:[(0,r.jsx)("span",{className:"normal-nums text-5xl",children:i(10,!1)}),(0,r.jsx)("span",{className:"ordinal text-xl align-top",children:i(100,!1)})]}),(0,r.jsx)("div",{className:"text-center text-2xl text-black-600/100 mx-8",children:"Ten Duotrigintillion"}),(0,r.jsx)("div",{className:"text-left m-8 font-mono text-5xl font-black columns-1 break-words",children:e})]})}},340:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});class r{static allCharacters(){let e=[];return e.push(new r(",","text-gray-400 m-0")),e.push(new r("0","text-gray-500")),e.push(new r("1","text-pink-500")),e.push(new r("2","text-amber-500")),e.push(new r("3","text-lime-500")),e.push(new r("4","text-emerald-500")),e.push(new r("5","text-blue-400")),e.push(new r("6","text-indigo-600")),e.push(new r("7","text-fuchsia-500")),e.push(new r("8","text-rose-500")),e.push(new r("9","text-cyan-400")),e.push(new r("January","text-green-300")),e.push(new r("February","text-green-400")),e.push(new r("March","text-pink-500")),e.push(new r("April","text-amber-500")),e.push(new r("May","text-lime-500")),e.push(new r("June","text-emerald-500")),e.push(new r("July","text-blue-400")),e.push(new r("August","text-indigo-600")),e.push(new r("September","text-fuchsia-500")),e.push(new r("October","text-rose-500")),e.push(new r("November","text-cyan-400")),e.push(new r("December","text-yellow-200")),e.push(new r("Monday","text-indigo-500")),e.push(new r("Tuesday","text-fuchsia-500")),e.push(new r("Wednesday","text-pink-500")),e.push(new r("Thursday","text-amber-500")),e.push(new r("Friday","text-lime-500")),e.push(new r("Saturday","text-emerald-500")),e.push(new r("Sunday","text-blue-400")),e}constructor(e,t){this.id=e,this.prettyStyle=t}}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,a={},o=null,c=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:c,props:a,_owner:u.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=1693)}),_N_E=e.O()}]);