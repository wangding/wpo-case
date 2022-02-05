/*
* @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing
* permissions and limitations under the License.
*/
"use strict";window.LH_CURRENT_VERSION="9.1.0",function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("fs")):"function"==typeof define&&define.amd?define(["fs"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ReportGenerator=t(e.require$$0)}(this,(function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function i(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})})),t}
/**
	 * @license Copyright 2018 The Lighthouse Authors. All Rights Reserved.
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
	 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
	 */
const r=i(Object.freeze({__proto__:null,default:{}}));
/**
	 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
	 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
	 */
const a={REPORT_TEMPLATE:'\x3c!--\n@license\nCopyright 2018 The Lighthouse Authors. All Rights Reserved.\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS-IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n--\x3e\n<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">\n  <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEhklEQVR4AWJxL/BhIAesev1U5tcflpncgNrKIsqNIwzC9feMpDUzs70kOczMzMzJJcxwCTMzncPMnOwtzBwzMzPb0vRfeZPp0VhPS5I39V5fdiXV1/VD+9QC7OVn9BsyH1XIoEI1PfmJvLFowVV564+34DFUHudbmfDh4kVXh//7XwE+WjS/YfXZe3yr4j2rqj1AIhSB7hZ8ZtPZu/zw8cK523U4wE1/rvPfWrz4zs0m9ZdC9yUJAlASdBAgocRegfF/f3/h/PuaFsxMdwjAR0vm1+06eMMfIrhLqTWqdH4EumU2SPfMhigJAlRQbZrgrRsl9U+Y2DYDFCz3ILC9kiAiqSrMwbWT0nceEnR+9Kggc2zjOJCASDENkg0a5HfZZgDP81CM3CrQs2Z1+o7DJ6ePr8sK0AOCHv5Jjdt3evyYSaZ351VIStIxPRAUtrBYbxC6w+BZ0ivVSBKkIhJhemSyZpfB00EiPO2VjzYkxhcqXQqCWCShGplvi3y0QxqbuBurMjyJeWnkHZuAEgIQGsUBqwrfjZ+IlBgKyRJzVVYF8O6qFWdh86YzQzMrZigYmxAyfvHgLZQ/LC1CbeniW2Hkqr/PH16SgvGuf2/uzNMBwJA/njxizGPtSyAf7EziJCMGRDRdhoAC4PL1A/SrKQMAAQkEfpJAcRQdrBJ7gNwjSpJsdwK+CANBkqa1LgQB4IicV9nYUct7gaxuDJUErQIiEAiMxLVOFlKzIktPpT0ggpdpC/8YAHnxbgkUY4tAAFSR7AAXNyAAWHJrA/kHGjzg5nleuwFO7Nd/IoDw4Pm58+4jNLmYG0wRA5bErc2Mr3Y+dXTDW1VvwqbJkzMCHQ4S1GTCBOIgUHJrGdEwqzR+jAp/o2qAZelUDoQnruEEdDclJI6576AlNVfc+22XN/+Y1vnJD0Yind6UpEEvn/Hqq15EYjCW7jZCJEpnNvDgkyelDjs106kuux2AAXCSobULOWP8mLhYlpoDMK4qAFXJGk+grtH8YXVz5KJblqaG1+VUdTc0I290bmUQAriGITRbdQnom0aoFj8kx1+wMD2ifncAXUQE4SkDqN1hE0jEophs1SUwZAOhUAiMCLwRtamtTZtbbmZErSAUHbSysaoEmnrsakiMiUAURi283gN6wans9oX8rOCrj7/JP35DFD+iQ7Au/K2KE1jzx6ujjUnXFH9KjEq6ZlhsTBICrNLJf47Pv/pkHzvup1w4dmUbEei0+bcXRqJuh5kVARQ8byyYxOwNGr7A87xh1tp8sGT+uMInrwi++Xj7TQz2d27NvwEkrOflAFQGIDA5khASBCGdO2/Z/MnLPwYfv5TFhjW7QhVKAB6afwe2LpFlFsCnlQEosgQgDsdOG1/LKeNqJS4JCSPJ/i+TakwEARor7gER1Iva5JmPOJK0RUqmoPnnlzFCtmIAhAAQEIQRgDaiYPIauNXcnDlRIrWNFY3hm7PG9YRqr7IV7HrCgAC17befjEvRq2nGhAHtBqDpOuI/I1diUUAMYIxEdyejBJqLnNoszGZtfiX/CztGv2mq+sdaAAAAAElFTkSuQmCC">\n  <title>Lighthouse Report</title>\n  <style>body {margin: 0}</style>\n</head>\n<body>\n  <noscript>Lighthouse report requires JavaScript. Please enable.</noscript>\n\n  <div id="lh-log"></div>\n\n  <script>window.__LIGHTHOUSE_JSON__ = %%LIGHTHOUSE_JSON%%;<\/script>\n  <script>%%LIGHTHOUSE_JAVASCRIPT%%\n  __initLighthouseReport__();\n  //# sourceURL=compiled-reportrenderer.js\n  <\/script>\n  <script>console.log(\'window.__LIGHTHOUSE_JSON__\', __LIGHTHOUSE_JSON__);<\/script>\n</body>\n</html>\n',REPORT_JAVASCRIPT:n.default.readFileSync(__dirname+"/../../dist/report/standalone.js","utf8"),...r};class o{static replaceStrings(e,t){if(0===t.length)return e;const n=t[0],i=t.slice(1);return e.split(n.search).map((e=>o.replaceStrings(e,i))).join(n.replacement)}static sanitizeJson(e){return JSON.stringify(e).replace(/</g,"\\u003c").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}static generateReportHtml(e){const t=o.sanitizeJson(e),n=a.REPORT_JAVASCRIPT.replace(/<\//g,"\\u003c/");return o.replaceStrings(a.REPORT_TEMPLATE,[{search:"%%LIGHTHOUSE_JSON%%",replacement:t},{search:"%%LIGHTHOUSE_JAVASCRIPT%%",replacement:n}])}static generateFlowReportHtml(e){const t=o.sanitizeJson(e);return o.replaceStrings(a.FLOW_REPORT_TEMPLATE,[{search:"%%LIGHTHOUSE_FLOW_JSON%%",replacement:t},{search:"%%LIGHTHOUSE_FLOW_JAVASCRIPT%%",replacement:a.FLOW_REPORT_JAVASCRIPT},{search:"/*%%LIGHTHOUSE_FLOW_CSS%%*/",replacement:a.FLOW_REPORT_CSS}])}static generateReportCSV(e){const t=e=>`"${e.replace(/"/g,'""')}"`,n=e=>e.map((e=>e.toString())).map(t),i=Object.keys(e.categories).map((t=>{const i=[],r=e.categories[t],a=null===r.score?-1:r.score;return i.push(n([e.requestedUrl,e.finalUrl,r.title,`${t}-score`,`Overall ${r.title} Category Score`,"numeric",a])),i.concat(r.auditRefs.map((t=>{const i=e.audits[t.id],a=null===i.score?-1:i.score;return n([e.requestedUrl,e.finalUrl,r.title,i.id,i.title,i.scoreDisplayMode,a])})))}));return[["requestedUrl","finalUrl","category","name","title","type","score"]].concat(...i).map((e=>e.join(","))).join("\r\n")}static generateReport(e,t){const n=Array.isArray(t);"string"==typeof t&&(t=[t]);const i=t.map((t=>{if("html"===t)return o.generateReportHtml(e);if("csv"===t)return o.generateReportCSV(e);if("json"===t)return JSON.stringify(e,null,2);throw new Error("Invalid output mode: "+t)}));return n?i:i[0]}}return o})),
/*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).pako={})}(this,(function(e){var t=(e,t,n,i)=>{let r=65535&e|0,a=e>>>16&65535|0,o=0;for(;0!==n;){o=n>2e3?2e3:n,n-=o;do{r=r+t[i++]|0,a=a+r|0}while(--o);r%=65521,a%=65521}return r|a<<16|0};const n=new Uint32Array((()=>{let e,t=[];for(var n=0;n<256;n++){e=n;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t})());var i=(e,t,i,r)=>{const a=n,o=r+i;e^=-1;for(let n=r;n<o;n++)e=e>>>8^a[255&(e^t[n])];return-1^e};var r=function(e,t){let n,i,r,a,o,s,l,c,d,f,h,u,w,m,b,_,g,p,k,A,y,E,v,R;const S=e.state;n=e.next_in,v=e.input,i=n+(e.avail_in-5),r=e.next_out,R=e.output,a=r-(t-e.avail_out),o=r+(e.avail_out-257),s=S.dmax,l=S.wsize,c=S.whave,d=S.wnext,f=S.window,h=S.hold,u=S.bits,w=S.lencode,m=S.distcode,b=(1<<S.lenbits)-1,_=(1<<S.distbits)-1;e:do{u<15&&(h+=v[n++]<<u,u+=8,h+=v[n++]<<u,u+=8),g=w[h&b];t:for(;;){if(p=g>>>24,h>>>=p,u-=p,p=g>>>16&255,0===p)R[r++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=w[(65535&g)+(h&(1<<p)-1)];continue t}if(32&p){S.mode=12;break e}e.msg="invalid literal/length code",S.mode=30;break e}k=65535&g,p&=15,p&&(u<p&&(h+=v[n++]<<u,u+=8),k+=h&(1<<p)-1,h>>>=p,u-=p),u<15&&(h+=v[n++]<<u,u+=8,h+=v[n++]<<u,u+=8),g=m[h&_];n:for(;;){if(p=g>>>24,h>>>=p,u-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=m[(65535&g)+(h&(1<<p)-1)];continue n}e.msg="invalid distance code",S.mode=30;break e}if(A=65535&g,p&=15,u<p&&(h+=v[n++]<<u,u+=8,u<p&&(h+=v[n++]<<u,u+=8)),A+=h&(1<<p)-1,A>s){e.msg="invalid distance too far back",S.mode=30;break e}if(h>>>=p,u-=p,p=r-a,A>p){if(p=A-p,p>c&&S.sane){e.msg="invalid distance too far back",S.mode=30;break e}if(y=0,E=f,0===d){if(y+=l-p,p<k){k-=p;do{R[r++]=f[y++]}while(--p);y=r-A,E=R}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{R[r++]=f[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{R[r++]=f[y++]}while(--p);y=r-A,E=R}}}else if(y+=d-p,p<k){k-=p;do{R[r++]=f[y++]}while(--p);y=r-A,E=R}for(;k>2;)R[r++]=E[y++],R[r++]=E[y++],R[r++]=E[y++],k-=3;k&&(R[r++]=E[y++],k>1&&(R[r++]=E[y++]))}else{y=r-A;do{R[r++]=R[y++],R[r++]=R[y++],R[r++]=R[y++],k-=3}while(k>2);k&&(R[r++]=R[y++],k>1&&(R[r++]=R[y++]))}break}}break}}while(n<i&&r<o);k=u>>3,n-=k,u-=k<<3,h&=(1<<u)-1,e.next_in=n,e.next_out=r,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=r<o?o-r+257:257-(r-o),S.hold=h,S.bits=u};const a=15,o=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),s=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),l=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),c=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var d=(e,t,n,i,r,d,f,h)=>{const u=h.bits;let w,m,b,_,g,p,k=0,A=0,y=0,E=0,v=0,R=0,S=0,x=0,O=0,T=0,I=null,U=0;const C=new Uint16Array(16),Z=new Uint16Array(16);let L,D,N,H=null,z=0;for(k=0;k<=a;k++)C[k]=0;for(A=0;A<i;A++)C[t[n+A]]++;for(v=u,E=a;E>=1&&0===C[E];E--);if(v>E&&(v=E),0===E)return r[d++]=20971520,r[d++]=20971520,h.bits=1,0;for(y=1;y<E&&0===C[y];y++);for(v<y&&(v=y),x=1,k=1;k<=a;k++)if(x<<=1,x-=C[k],x<0)return-1;if(x>0&&(0===e||1!==E))return-1;for(Z[1]=0,k=1;k<a;k++)Z[k+1]=Z[k]+C[k];for(A=0;A<i;A++)0!==t[n+A]&&(f[Z[t[n+A]]++]=A);if(0===e?(I=H=f,p=19):1===e?(I=o,U-=257,H=s,z-=257,p=256):(I=l,H=c,p=-1),T=0,A=0,k=y,g=d,R=v,S=0,b=-1,O=1<<v,_=O-1,1===e&&O>852||2===e&&O>592)return 1;for(;;){L=k-S,f[A]<p?(D=0,N=f[A]):f[A]>p?(D=H[z+f[A]],N=I[U+f[A]]):(D=96,N=0),w=1<<k-S,m=1<<R,y=m;do{m-=w,r[g+(T>>S)+m]=L<<24|D<<16|N|0}while(0!==m);for(w=1<<k-1;T&w;)w>>=1;if(0!==w?(T&=w-1,T+=w):T=0,A++,0==--C[k]){if(k===E)break;k=t[n+f[A]]}if(k>v&&(T&_)!==b){for(0===S&&(S=v),g+=y,R=k-S,x=1<<R;R+S<E&&(x-=C[R+S],!(x<=0));)R++,x<<=1;if(O+=1<<R,1===e&&O>852||2===e&&O>592)return 1;b=T&_,r[b]=v<<24|R<<16|g-d|0}}return 0!==T&&(r[g+T]=k-S<<24|64<<16|0),h.bits=v,0},f={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{Z_FINISH:h,Z_BLOCK:u,Z_TREES:w,Z_OK:m,Z_STREAM_END:b,Z_NEED_DICT:_,Z_STREAM_ERROR:g,Z_DATA_ERROR:p,Z_MEM_ERROR:k,Z_BUF_ERROR:A,Z_DEFLATED:y}=f,E=12,v=30,R=e=>(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24);function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const x=e=>{if(!e||!e.state)return g;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,m},O=e=>{if(!e||!e.state)return g;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,x(e)},T=(e,t)=>{let n;if(!e||!e.state)return g;const i=e.state;return t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?g:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=n,i.wbits=t,O(e))},I=(e,t)=>{if(!e)return g;const n=new S;e.state=n,n.window=null;const i=T(e,t);return i!==m&&(e.state=null),i};let U,C,Z=!0;const L=e=>{if(Z){U=new Int32Array(512),C=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(d(1,e.lens,0,288,U,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;d(2,e.lens,0,32,C,0,e.work,{bits:5}),Z=!1}e.lencode=U,e.lenbits=9,e.distcode=C,e.distbits=5},D=(e,t,n,i)=>{let r;const a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),i>=a.wsize?(a.window.set(t.subarray(n-a.wsize,n),0),a.wnext=0,a.whave=a.wsize):(r=a.wsize-a.wnext,r>i&&(r=i),a.window.set(t.subarray(n-i,n-i+r),a.wnext),(i-=r)?(a.window.set(t.subarray(n-i,n),0),a.wnext=i,a.whave=a.wsize):(a.wnext+=r,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=r))),0};var N={inflateReset:O,inflateReset2:T,inflateResetKeep:x,inflateInit:e=>I(e,15),inflateInit2:I,inflate:(e,n)=>{let a,o,s,l,c,f,S,x,O,T,I,U,C,Z,N,H,z,P,j,J,B,M,F=0;const q=new Uint8Array(4);let G,V;const Y=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return g;a=e.state,a.mode===E&&(a.mode=13),c=e.next_out,s=e.output,S=e.avail_out,l=e.next_in,o=e.input,f=e.avail_in,x=a.hold,O=a.bits,T=f,I=S,M=m;e:for(;;)switch(a.mode){case 1:if(0===a.wrap){a.mode=13;break}for(;O<16;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(2&a.wrap&&35615===x){a.check=0,q[0]=255&x,q[1]=x>>>8&255,a.check=i(a.check,q,2,0),x=0,O=0,a.mode=2;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&x)<<8)+(x>>8))%31){e.msg="incorrect header check",a.mode=v;break}if((15&x)!==y){e.msg="unknown compression method",a.mode=v;break}if(x>>>=4,O-=4,B=8+(15&x),0===a.wbits)a.wbits=B;else if(B>a.wbits){e.msg="invalid window size",a.mode=v;break}a.dmax=1<<a.wbits,e.adler=a.check=1,a.mode=512&x?10:E,x=0,O=0;break;case 2:for(;O<16;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(a.flags=x,(255&a.flags)!==y){e.msg="unknown compression method",a.mode=v;break}if(57344&a.flags){e.msg="unknown header flags set",a.mode=v;break}a.head&&(a.head.text=x>>8&1),512&a.flags&&(q[0]=255&x,q[1]=x>>>8&255,a.check=i(a.check,q,2,0)),x=0,O=0,a.mode=3;case 3:for(;O<32;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}a.head&&(a.head.time=x),512&a.flags&&(q[0]=255&x,q[1]=x>>>8&255,q[2]=x>>>16&255,q[3]=x>>>24&255,a.check=i(a.check,q,4,0)),x=0,O=0,a.mode=4;case 4:for(;O<16;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}a.head&&(a.head.xflags=255&x,a.head.os=x>>8),512&a.flags&&(q[0]=255&x,q[1]=x>>>8&255,a.check=i(a.check,q,2,0)),x=0,O=0,a.mode=5;case 5:if(1024&a.flags){for(;O<16;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}a.length=x,a.head&&(a.head.extra_len=x),512&a.flags&&(q[0]=255&x,q[1]=x>>>8&255,a.check=i(a.check,q,2,0)),x=0,O=0}else a.head&&(a.head.extra=null);a.mode=6;case 6:if(1024&a.flags&&(U=a.length,U>f&&(U=f),U&&(a.head&&(B=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(o.subarray(l,l+U),B)),512&a.flags&&(a.check=i(a.check,o,U,l)),f-=U,l+=U,a.length-=U),a.length))break e;a.length=0,a.mode=7;case 7:if(2048&a.flags){if(0===f)break e;U=0;do{B=o[l+U++],a.head&&B&&a.length<65536&&(a.head.name+=String.fromCharCode(B))}while(B&&U<f);if(512&a.flags&&(a.check=i(a.check,o,U,l)),f-=U,l+=U,B)break e}else a.head&&(a.head.name=null);a.length=0,a.mode=8;case 8:if(4096&a.flags){if(0===f)break e;U=0;do{B=o[l+U++],a.head&&B&&a.length<65536&&(a.head.comment+=String.fromCharCode(B))}while(B&&U<f);if(512&a.flags&&(a.check=i(a.check,o,U,l)),f-=U,l+=U,B)break e}else a.head&&(a.head.comment=null);a.mode=9;case 9:if(512&a.flags){for(;O<16;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(x!==(65535&a.check)){e.msg="header crc mismatch",a.mode=v;break}x=0,O=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),e.adler=a.check=0,a.mode=E;break;case 10:for(;O<32;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}e.adler=a.check=R(x),x=0,O=0,a.mode=11;case 11:if(0===a.havedict)return e.next_out=c,e.avail_out=S,e.next_in=l,e.avail_in=f,a.hold=x,a.bits=O,_;e.adler=a.check=1,a.mode=E;case E:if(n===u||n===w)break e;case 13:if(a.last){x>>>=7&O,O-=7&O,a.mode=27;break}for(;O<3;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}switch(a.last=1&x,x>>>=1,O-=1,3&x){case 0:a.mode=14;break;case 1:if(L(a),a.mode=20,n===w){x>>>=2,O-=2;break e}break;case 2:a.mode=17;break;case 3:e.msg="invalid block type",a.mode=v}x>>>=2,O-=2;break;case 14:for(x>>>=7&O,O-=7&O;O<32;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if((65535&x)!=(x>>>16^65535)){e.msg="invalid stored block lengths",a.mode=v;break}if(a.length=65535&x,x=0,O=0,a.mode=15,n===w)break e;case 15:a.mode=16;case 16:if(U=a.length,U){if(U>f&&(U=f),U>S&&(U=S),0===U)break e;s.set(o.subarray(l,l+U),c),f-=U,l+=U,S-=U,c+=U,a.length-=U;break}a.mode=E;break;case 17:for(;O<14;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(a.nlen=257+(31&x),x>>>=5,O-=5,a.ndist=1+(31&x),x>>>=5,O-=5,a.ncode=4+(15&x),x>>>=4,O-=4,a.nlen>286||a.ndist>30){e.msg="too many length or distance symbols",a.mode=v;break}a.have=0,a.mode=18;case 18:for(;a.have<a.ncode;){for(;O<3;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}a.lens[Y[a.have++]]=7&x,x>>>=3,O-=3}for(;a.have<19;)a.lens[Y[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,G={bits:a.lenbits},M=d(0,a.lens,0,19,a.lencode,0,a.work,G),a.lenbits=G.bits,M){e.msg="invalid code lengths set",a.mode=v;break}a.have=0,a.mode=19;case 19:for(;a.have<a.nlen+a.ndist;){for(;F=a.lencode[x&(1<<a.lenbits)-1],N=F>>>24,H=F>>>16&255,z=65535&F,!(N<=O);){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(z<16)x>>>=N,O-=N,a.lens[a.have++]=z;else{if(16===z){for(V=N+2;O<V;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(x>>>=N,O-=N,0===a.have){e.msg="invalid bit length repeat",a.mode=v;break}B=a.lens[a.have-1],U=3+(3&x),x>>>=2,O-=2}else if(17===z){for(V=N+3;O<V;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}x>>>=N,O-=N,B=0,U=3+(7&x),x>>>=3,O-=3}else{for(V=N+7;O<V;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}x>>>=N,O-=N,B=0,U=11+(127&x),x>>>=7,O-=7}if(a.have+U>a.nlen+a.ndist){e.msg="invalid bit length repeat",a.mode=v;break}for(;U--;)a.lens[a.have++]=B}}if(a.mode===v)break;if(0===a.lens[256]){e.msg="invalid code -- missing end-of-block",a.mode=v;break}if(a.lenbits=9,G={bits:a.lenbits},M=d(1,a.lens,0,a.nlen,a.lencode,0,a.work,G),a.lenbits=G.bits,M){e.msg="invalid literal/lengths set",a.mode=v;break}if(a.distbits=6,a.distcode=a.distdyn,G={bits:a.distbits},M=d(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,G),a.distbits=G.bits,M){e.msg="invalid distances set",a.mode=v;break}if(a.mode=20,n===w)break e;case 20:a.mode=21;case 21:if(f>=6&&S>=258){e.next_out=c,e.avail_out=S,e.next_in=l,e.avail_in=f,a.hold=x,a.bits=O,r(e,I),c=e.next_out,s=e.output,S=e.avail_out,l=e.next_in,o=e.input,f=e.avail_in,x=a.hold,O=a.bits,a.mode===E&&(a.back=-1);break}for(a.back=0;F=a.lencode[x&(1<<a.lenbits)-1],N=F>>>24,H=F>>>16&255,z=65535&F,!(N<=O);){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(H&&0==(240&H)){for(P=N,j=H,J=z;F=a.lencode[J+((x&(1<<P+j)-1)>>P)],N=F>>>24,H=F>>>16&255,z=65535&F,!(P+N<=O);){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}x>>>=P,O-=P,a.back+=P}if(x>>>=N,O-=N,a.back+=N,a.length=z,0===H){a.mode=26;break}if(32&H){a.back=-1,a.mode=E;break}if(64&H){e.msg="invalid literal/length code",a.mode=v;break}a.extra=15&H,a.mode=22;case 22:if(a.extra){for(V=a.extra;O<V;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}a.length+=x&(1<<a.extra)-1,x>>>=a.extra,O-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=23;case 23:for(;F=a.distcode[x&(1<<a.distbits)-1],N=F>>>24,H=F>>>16&255,z=65535&F,!(N<=O);){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(0==(240&H)){for(P=N,j=H,J=z;F=a.distcode[J+((x&(1<<P+j)-1)>>P)],N=F>>>24,H=F>>>16&255,z=65535&F,!(P+N<=O);){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}x>>>=P,O-=P,a.back+=P}if(x>>>=N,O-=N,a.back+=N,64&H){e.msg="invalid distance code",a.mode=v;break}a.offset=z,a.extra=15&H,a.mode=24;case 24:if(a.extra){for(V=a.extra;O<V;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}a.offset+=x&(1<<a.extra)-1,x>>>=a.extra,O-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){e.msg="invalid distance too far back",a.mode=v;break}a.mode=25;case 25:if(0===S)break e;if(U=I-S,a.offset>U){if(U=a.offset-U,U>a.whave&&a.sane){e.msg="invalid distance too far back",a.mode=v;break}U>a.wnext?(U-=a.wnext,C=a.wsize-U):C=a.wnext-U,U>a.length&&(U=a.length),Z=a.window}else Z=s,C=c-a.offset,U=a.length;U>S&&(U=S),S-=U,a.length-=U;do{s[c++]=Z[C++]}while(--U);0===a.length&&(a.mode=21);break;case 26:if(0===S)break e;s[c++]=a.length,S--,a.mode=21;break;case 27:if(a.wrap){for(;O<32;){if(0===f)break e;f--,x|=o[l++]<<O,O+=8}if(I-=S,e.total_out+=I,a.total+=I,I&&(e.adler=a.check=a.flags?i(a.check,s,I,c-I):t(a.check,s,I,c-I)),I=S,(a.flags?x:R(x))!==a.check){e.msg="incorrect data check",a.mode=v;break}x=0,O=0}a.mode=28;case 28:if(a.wrap&&a.flags){for(;O<32;){if(0===f)break e;f--,x+=o[l++]<<O,O+=8}if(x!==(4294967295&a.total)){e.msg="incorrect length check",a.mode=v;break}x=0,O=0}a.mode=29;case 29:M=b;break e;case v:M=p;break e;case 31:return k;default:return g}return e.next_out=c,e.avail_out=S,e.next_in=l,e.avail_in=f,a.hold=x,a.bits=O,(a.wsize||I!==e.avail_out&&a.mode<v&&(a.mode<27||n!==h))&&D(e,e.output,e.next_out,I-e.avail_out),T-=e.avail_in,I-=e.avail_out,e.total_in+=T,e.total_out+=I,a.total+=I,a.wrap&&I&&(e.adler=a.check=a.flags?i(a.check,s,I,e.next_out-I):t(a.check,s,I,e.next_out-I)),e.data_type=a.bits+(a.last?64:0)+(a.mode===E?128:0)+(20===a.mode||15===a.mode?256:0),(0===T&&0===I||n===h)&&M===m&&(M=A),M},inflateEnd:e=>{if(!e||!e.state)return g;let t=e.state;return t.window&&(t.window=null),e.state=null,m},inflateGetHeader:(e,t)=>{if(!e||!e.state)return g;const n=e.state;return 0==(2&n.wrap)?g:(n.head=t,t.done=!1,m)},inflateSetDictionary:(e,n)=>{const i=n.length;let r,a,o;return e&&e.state?(r=e.state,0!==r.wrap&&11!==r.mode?g:11===r.mode&&(a=1,a=t(a,n,i,0),a!==r.check)?p:(o=D(e,n,i,i),o?(r.mode=31,k):(r.havedict=1,m))):g},inflateInfo:"pako inflate (from Nodeca project)"};const H=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var z=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(const t in n)H(n,t)&&(e[t]=n[t])}}return e},P=e=>{let t=0;for(let n=0,i=e.length;n<i;n++)t+=e[n].length;const n=new Uint8Array(t);for(let t=0,i=0,r=e.length;t<r;t++){let r=e[t];n.set(r,i),i+=r.length}return n};let j=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){j=!1}const J=new Uint8Array(256);for(let e=0;e<256;e++)J[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;J[254]=J[254]=1;var B=e=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(e);let t,n,i,r,a,o=e.length,s=0;for(r=0;r<o;r++)n=e.charCodeAt(r),55296==(64512&n)&&r+1<o&&(i=e.charCodeAt(r+1),56320==(64512&i)&&(n=65536+(n-55296<<10)+(i-56320),r++)),s+=n<128?1:n<2048?2:n<65536?3:4;for(t=new Uint8Array(s),a=0,r=0;a<s;r++)n=e.charCodeAt(r),55296==(64512&n)&&r+1<o&&(i=e.charCodeAt(r+1),56320==(64512&i)&&(n=65536+(n-55296<<10)+(i-56320),r++)),n<128?t[a++]=n:n<2048?(t[a++]=192|n>>>6,t[a++]=128|63&n):n<65536?(t[a++]=224|n>>>12,t[a++]=128|n>>>6&63,t[a++]=128|63&n):(t[a++]=240|n>>>18,t[a++]=128|n>>>12&63,t[a++]=128|n>>>6&63,t[a++]=128|63&n);return t},M=(e,t)=>{const n=t||e.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(e.subarray(0,t));let i,r;const a=new Array(2*n);for(r=0,i=0;i<n;){let t=e[i++];if(t<128){a[r++]=t;continue}let o=J[t];if(o>4)a[r++]=65533,i+=o-1;else{for(t&=2===o?31:3===o?15:7;o>1&&i<n;)t=t<<6|63&e[i++],o--;o>1?a[r++]=65533:t<65536?a[r++]=t:(t-=65536,a[r++]=55296|t>>10&1023,a[r++]=56320|1023&t)}}return((e,t)=>{if(t<65534&&e.subarray&&j)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let n="";for(let i=0;i<t;i++)n+=String.fromCharCode(e[i]);return n})(a,r)},F=(e,t)=>{(t=t||e.length)>e.length&&(t=e.length);let n=t-1;for(;n>=0&&128==(192&e[n]);)n--;return n<0||0===n?t:n+J[e[n]]>t?n:t},q={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var G=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};var V=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const Y=Object.prototype.toString,{Z_NO_FLUSH:Q,Z_FINISH:K,Z_OK:W,Z_STREAM_END:X,Z_NEED_DICT:$,Z_STREAM_ERROR:ee,Z_DATA_ERROR:te,Z_MEM_ERROR:ne}=f;function ie(e){this.options=z({chunkSize:65536,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new G,this.strm.avail_out=0;let n=N.inflateInit2(this.strm,t.windowBits);if(n!==W)throw new Error(q[n]);if(this.header=new V,N.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=B(t.dictionary):"[object ArrayBuffer]"===Y.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(n=N.inflateSetDictionary(this.strm,t.dictionary),n!==W)))throw new Error(q[n])}function re(e,t){const n=new ie(t);if(n.push(e),n.err)throw n.msg||q[n.err];return n.result}ie.prototype.push=function(e,t){const n=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let a,o,s;if(this.ended)return!1;for(o=t===~~t?t:!0===t?K:Q,"[object ArrayBuffer]"===Y.call(e)?n.input=new Uint8Array(e):n.input=e,n.next_in=0,n.avail_in=n.input.length;;){for(0===n.avail_out&&(n.output=new Uint8Array(i),n.next_out=0,n.avail_out=i),a=N.inflate(n,o),a===$&&r&&(a=N.inflateSetDictionary(n,r),a===W?a=N.inflate(n,o):a===te&&(a=$));n.avail_in>0&&a===X&&n.state.wrap>0&&0!==e[n.next_in];)N.inflateReset(n),a=N.inflate(n,o);switch(a){case ee:case te:case $:case ne:return this.onEnd(a),this.ended=!0,!1}if(s=n.avail_out,n.next_out&&(0===n.avail_out||a===X))if("string"===this.options.to){let e=F(n.output,n.next_out),t=n.next_out-e,r=M(n.output,e);n.next_out=t,n.avail_out=i-t,t&&n.output.set(n.output.subarray(e,e+t),0),this.onData(r)}else this.onData(n.output.length===n.next_out?n.output:n.output.subarray(0,n.next_out));if(a!==W||0!==s){if(a===X)return a=N.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(0===n.avail_in)break}}return!0},ie.prototype.onData=function(e){this.chunks.push(e)},ie.prototype.onEnd=function(e){e===W&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=P(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var ae=ie,oe=re,se=function(e,t){return(t=t||{}).raw=!0,re(e,t)},le=re,ce=f,de={Inflate:ae,inflate:oe,inflateRaw:se,ungzip:le,constants:ce};e.Inflate=ae,e.constants=ce,e.default=de,e.inflate=oe,e.inflateRaw=se,e.ungzip=le,Object.defineProperty(e,"__esModule",{value:!0})}));import"./main-eac69980.js";