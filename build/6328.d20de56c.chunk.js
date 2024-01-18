(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[6328],{29520:B=>{function z(s,n,u,h){for(var Z=-1,w=s==null?0:s.length;++Z<w;){var P=s[Z];n(h,P,u(P),s)}return h}B.exports=z},83377:(B,z,s)=>{var n=s(54483),u=n("length");B.exports=u},98694:(B,z,s)=>{var n=s(1107);function u(h,Z,w,P){return n(h,function(v,A,U){Z(P,v,w(v),U)}),P}B.exports=u},1107:(B,z,s)=>{var n=s(84856),u=s(52593),h=u(n);B.exports=h},22107:(B,z,s)=>{var n=s(13578),u=s(27138),h="[object RegExp]";function Z(w){return u(w)&&n(w)==h}B.exports=Z},92403:(B,z,s)=>{var n=s(1107),u=s(47727);function h(Z,w){var P=-1,v=u(Z)?Array(Z.length):[];return n(Z,function(A,U,q){v[++P]=w(A,U,q)}),v}B.exports=h},16429:(B,z,s)=>{var n=s(36393),u=s(82393),h=s(90040),Z=s(92403),w=s(63135),P=s(20435),v=s(9998),A=s(51339),U=s(26126);function q(te,oe,Be){oe.length?oe=n(oe,function(ae){return U(ae)?function(re){return u(re,ae.length===1?ae[0]:ae)}:ae}):oe=[A];var me=-1;oe=n(oe,P(h));var de=Z(te,function(ae,re,se){var Ne=n(oe,function(Re){return Re(ae)});return{criteria:Ne,index:++me,value:ae}});return w(de,function(ae,re){return v(ae,re,Be)})}B.exports=q},63135:B=>{function z(s,n){var u=s.length;for(s.sort(n);u--;)s[u]=s[u].value;return s}B.exports=z},17654:(B,z,s)=>{var n=s(85194);function u(h,Z){if(h!==Z){var w=h!==void 0,P=h===null,v=h===h,A=n(h),U=Z!==void 0,q=Z===null,te=Z===Z,oe=n(Z);if(!q&&!oe&&!A&&h>Z||A&&U&&te&&!q&&!oe||P&&U&&te||!w&&te||!v)return 1;if(!P&&!A&&!oe&&h<Z||oe&&w&&v&&!P&&!A||q&&w&&v||!U&&v||!te)return-1}return 0}B.exports=u},9998:(B,z,s)=>{var n=s(17654);function u(h,Z,w){for(var P=-1,v=h.criteria,A=Z.criteria,U=v.length,q=w.length;++P<U;){var te=n(v[P],A[P]);if(te){if(P>=q)return te;var oe=w[P];return te*(oe=="desc"?-1:1)}}return h.index-Z.index}B.exports=u},37177:(B,z,s)=>{var n=s(29520),u=s(98694),h=s(90040),Z=s(26126);function w(P,v){return function(A,U){var q=Z(A)?n:u,te=v?v():{};return q(A,P,h(U,2),te)}}B.exports=w},52593:(B,z,s)=>{var n=s(47727);function u(h,Z){return function(w,P){if(w==null)return w;if(!n(w))return h(w,P);for(var v=w.length,A=Z?v:-1,U=Object(w);(Z?A--:++A<v)&&P(U[A],A,U)!==!1;);return w}}B.exports=u},30930:(B,z,s)=>{var n=s(83377),u=s(11993),h=s(61781);function Z(w){return u(w)?h(w):n(w)}B.exports=Z},61781:B=>{var z="\\ud800-\\udfff",s="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",u="\\u20d0-\\u20ff",h=s+n+u,Z="\\ufe0e\\ufe0f",w="["+z+"]",P="["+h+"]",v="\\ud83c[\\udffb-\\udfff]",A="(?:"+P+"|"+v+")",U="[^"+z+"]",q="(?:\\ud83c[\\udde6-\\uddff]){2}",te="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="\\u200d",Be=A+"?",me="["+Z+"]?",de="(?:"+oe+"(?:"+[U,q,te].join("|")+")"+me+Be+")*",ae=me+Be+de,re="(?:"+[U+P+"?",P,q,te,w].join("|")+")",se=RegExp(v+"(?="+v+")|"+re+ae,"g");function Ne(Re){for(var xe=se.lastIndex=0;se.test(Re);)++xe;return xe}B.exports=Ne},63799:(B,z,s)=>{var n=s(71041),u=s(37177),h=Object.prototype,Z=h.hasOwnProperty,w=u(function(P,v,A){Z.call(P,A)?P[A].push(v):n(P,A,[v])});B.exports=w},50156:(B,z,s)=>{var n=s(22107),u=s(20435),h=s(25336),Z=h&&h.isRegExp,w=Z?u(Z):n;B.exports=w},63514:(B,z,s)=>{var n=s(13578),u=s(26126),h=s(27138),Z="[object String]";function w(P){return typeof P=="string"||!u(P)&&h(P)&&n(P)==Z}B.exports=w},84921:(B,z,s)=>{var n=s(52695),u=s(4500),h=s(47727),Z=s(63514),w=s(30930),P="[object Map]",v="[object Set]";function A(U){if(U==null)return 0;if(h(U))return Z(U)?w(U):U.length;var q=u(U);return q==P||q==v?U.size:n(U).length}B.exports=A},8243:(B,z,s)=>{var n=s(93367),u=s(16429),h=s(52431),Z=s(65145),w=h(function(P,v){if(P==null)return[];var A=v.length;return A>1&&Z(P,v[0],v[1])?v=[]:A>2&&Z(v[0],v[1],v[2])&&(v=[v[0]]),u(P,n(v,1),[])});B.exports=w},79146:(B,z,s)=>{var n=s(16946);function u(h){return n(h).toLowerCase()}B.exports=u},88702:(B,z,s)=>{var n=s(63546),u=s(82311),h=s(11993),Z=s(3243),w=s(50156),P=s(30930),v=s(66734),A=s(69740),U=s(16946),q=30,te="...",oe=/\w*$/;function Be(me,de){var ae=q,re=te;if(Z(de)){var se="separator"in de?de.separator:se;ae="length"in de?A(de.length):ae,re="omission"in de?n(de.omission):re}me=U(me);var Ne=me.length;if(h(me)){var Re=v(me);Ne=Re.length}if(ae>=Ne)return me;var xe=ae-P(re);if(xe<1)return re;var je=Re?u(Re,0,xe).join(""):me.slice(0,xe);if(se===void 0)return je+re;if(Re&&(xe+=je.length-xe),w(se)){if(me.slice(xe).search(se)){var ft,ne=je;for(se.global||(se=RegExp(se.source,U(oe.exec(se))+"g")),se.lastIndex=0;ft=se.exec(ne);)var at=ft.index;je=je.slice(0,at===void 0?xe:at)}}else if(me.indexOf(n(se),xe)!=xe){var gt=je.lastIndexOf(se);gt>-1&&(je=je.slice(0,gt))}return je+re}B.exports=Be},81465:(B,z,s)=>{var n=s(21157);function u(h){return h&&h.length?n(h):[]}B.exports=u},14291:(B,z,s)=>{"use strict";s.d(z,{Q:()=>Z});var n=s(74081),u=s(19003),h=s(35632);const Z=({options:P,...v})=>(0,n.jsx)(h.NU,{...v,children:P.map(A=>"children"in A?(0,n.jsx)(h.Ab,{label:A.label,values:A.children.map(U=>U.value.toString()),children:A.children.map(U=>(0,n.jsx)(w,{value:U.value,children:U.label},U.value))},A.label):(0,n.jsx)(h.ML,{value:A.value,children:A.label},A.value))}),w=(0,u.default)(h.ML)`
  padding-left: ${({theme:P})=>P.spaces[7]};
`},45949:(B,z,s)=>{"use strict";s.d(z,{Z:()=>h});var n=s(74081);const u=Z=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 34 25",...Z,children:[(0,n.jsx)("rect",{width:33,height:23,x:.5,y:1,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"})]}),h=u},10477:(B,z,s)=>{"use strict";s.d(z,{Z:()=>h});var n=s(74081);const u=Z=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...Z,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),h=u},40243:(B,z,s)=>{"use strict";s.d(z,{Z:()=>h});var n=s(74081);const u=Z=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...Z,children:[(0,n.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,n.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),h=u},74003:(B,z,s)=>{"use strict";s.d(z,{Z:()=>h});var n=s(74081);const u=Z=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...Z,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,n.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),h=u},15134:(B,z,s)=>{"use strict";s.d(z,{Z:()=>h});var n=s(74081);const u=Z=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...Z,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),h=u},28580:(B,z,s)=>{"use strict";s.d(z,{Z:()=>h});var n=s(74081);const u=Z=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:[(0,n.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"}),(0,n.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"})]}),h=u},6328:(B,z,s)=>{"use strict";s.r(z),s.d(z,{A:()=>lt,C:()=>Bt,a:()=>Je,g:()=>c,i:()=>vd,u:()=>ze});var n=s(74081),u=s(27279),h=s(52185),Z=s(40810),w=s(57074),P=s(14291),v=s(85898),A=s(78565),U=s(42615),q=s(90529),te=s(49899),oe=s(96448),Be=s(23851),me=s(12826),de=s(87161),ae=s(67393),re=s(33832),se=s(52870),Ne=s(33699),Re=s(97069),xe=s(31078),je=s(19098),ft=s(9812),ne=s(51413),at=s(37386),gt=s(35090),La=s(84814),Na=s(17992),Ra=s(92602),Ea=s(92856),an=s(2667),Ia=s(62750),Oa=s(71943),Da=s(930),wa=s(87549),Pa=s(81565),Ba=s(3785),ka=s(1296),F=s(94486),za=s(364),Y=s(61020),sn=s(47533),Ze=s(51447),O=s(19003);const Ee=(e,t,a)=>{if(!t)return;if(typeof t=="object")return(Array.isArray(t)?t:[t?.desktop,t?.tablet,t?.mobile]).reduce((i,d,f)=>{if(d)switch(f){case 0:return`${i}${e}: ${a.spaces[d]};`;case 1:return`${i}${a.mediaQueries.tablet}{${e}: ${a.spaces[d]};}`;case 2:return`${i}${a.mediaQueries.mobile}{${e}: ${a.spaces[d]};}`;default:return i}return i},"");const r=a.spaces[t]??t;return`${e}: ${r};`};function Ua(e,t){return typeof e=="string"?!1:t in e}function Pd(e){return e&&typeof e=="object"&&!Array.isArray(e)}function ie(e,t,a){return t&&Ua(e,t)?e[t]:a}const Wa={color:!0,cursor:!0,height:!0,width:!0},Q=O.default.div.withConfig({shouldForwardProp:(e,t)=>!Wa[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>ie(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>ie(e.colors,t,t)};
  color: ${({theme:e,color:t})=>ie(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>Ee("padding",t,e)}
  ${({theme:e,paddingTop:t})=>Ee("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>Ee("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>Ee("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>Ee("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>Ee("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>Ee("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>Ee("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>Ee("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:a})=>t?e.borderRadius:a};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>ie(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:a,borderWidth:r})=>{if(t&&!a&&typeof r>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>ie(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>ie(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>ie(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>ie(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>ie(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>ie(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>ie(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>ie(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>ie(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>ie(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>ie(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>ie(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,Va=(0,O.default)(Q)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>Ee("gap",t,e)}
`,Ha=e=>{const{gap:t="0",gridCols:a=12,...r}=e;return(0,n.jsx)(Va,{gap:t,gridCols:a,...r})},Ga=`${232/16}rem`,Ya=(0,O.default)(Ha)`
  width: ${Ga};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,Qa=({ariaLabel:e,...t})=>(0,n.jsx)(Ya,{"aria-label":e,as:"nav",...t});var ht=s(89577);const Xa={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Ka=u["useId".toString()]||(()=>{});let Ja=0;const qe=e=>{const[t,a]=(0,u.useState)(Ka());return(0,u.useLayoutEffect)(()=>{e||a(r=>r??String(Ja++))},[e]),e?.toString()??(t||"")},qa=e=>{const t=(0,u.useRef)();return(0,u.useEffect)(()=>{t.current=e}),t.current},_a=(0,O.default)(Q)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,es=({unsetMargin:e=!0,...t})=>(0,n.jsx)(_a,{...t,background:"neutral150",as:"hr",unsetMargin:e}),ts=e=>(0,n.jsx)("form",{...e,role:"search"});var ns=s(85305);function as(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function on(...e){return t=>e.forEach(a=>as(a,t))}function Bd(...e){return React.useCallback(on(...e),e)}const kd=e=>({theme:t,size:a})=>t.sizes[e][a],rn=(e="&")=>({theme:t,hasError:a=!1})=>(0,O.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${a?t.colors.danger600:t.colors.primary600};
      box-shadow: ${a?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,ln=({theme:e})=>(0,O.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,dn=(0,u.createContext)({id:"",required:!1}),cn=()=>(0,u.useContext)(dn),ss={direction:!0},ce=(0,O.default)(Q).withConfig({shouldForwardProp:(e,t)=>!ss[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>Ee("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`,un={S:6.5,M:10.5},os=(0,u.forwardRef)(({endAction:e,startAction:t,disabled:a=!1,onChange:r,size:o="M",...l},i)=>{const{id:d,error:f,hint:m,name:g,required:p}=cn();let M;f?M=`${d}-error`:m&&(M=`${d}-hint`);const T=Boolean(f),b=$=>{!a&&r&&r($)};return(0,n.jsxs)(Mt,{justifyContent:"space-between",hasError:T,disabled:a,children:[t?(0,n.jsx)(Q,{paddingLeft:3,paddingRight:2,children:t}):null,(0,n.jsx)(rs,{id:d,name:g,ref:i,"aria-describedby":M,"aria-invalid":T,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(t),hasRightAction:Boolean(e),onChange:b,"aria-required":p,$size:o,...l}),e?(0,n.jsx)(Q,{paddingLeft:2,paddingRight:3,children:e}):null]})}),rs=O.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${un[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${un[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,Mt=(0,O.default)(ce)`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${rn()}

  ${({theme:e,disabled:t})=>t?(0,O.css)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`,yt=O.default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,is=(0,O.default)(ce)`
  font-size: 1.6rem;
  padding: 0;
`,ls=(0,u.forwardRef)(({label:e,children:t,...a},r)=>(0,n.jsxs)(is,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:r,children:[(0,n.jsx)(yt,{as:"span",children:e}),(0,u.cloneElement)(t,{"aria-hidden":!0,focusable:!1})]})),ds=(0,u.forwardRef)(({children:e,name:t,error:a,hint:r,id:o,required:l=!1,...i},d)=>{const f=qe(o),m=(0,u.useMemo)(()=>({name:t,id:f,error:a,hint:r,required:l}),[a,f,r,t,l]);return(0,n.jsx)(Q,{ref:d,...i,children:(0,n.jsx)(dn.Provider,{value:m,children:e})})}),cs="[@strapi/design-system]:",us=e=>{const t=e;let a=!1;if(typeof t!="function")throw new TypeError(`${cs} once requires a function parameter`);return(...r)=>{a||(t(...r),a=!0)}},mn="alpha",pn="beta",fn="delta",gn="epsilon",$t="omega",hn="pi",yn="sigma",zd=[mn,pn,fn,gn,$t,hn,yn],ms=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,ps=({variant:e=$t,theme:t})=>{switch(e){case mn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case pn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case fn:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case gn:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case $t:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case hn:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case yn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},fs={fontSize:!0,fontWeight:!0},K=O.default.span.withConfig({shouldForwardProp:(e,t)=>!fs[e]&&t(e)})`
  ${ps}
  ${ms}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>ie(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>ie(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>ie(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,gs=us(console.warn),hs=(0,u.forwardRef)(({children:e,action:t,required:a,...r},o)=>{const{id:l,required:i}=cn(),d=i||a;return a!==void 0&&gs('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,n.jsxs)(ys,{ref:o,variant:"pi",textColor:"neutral800",htmlFor:l,fontWeight:"bold",as:"label",...r,children:[e,d&&(0,n.jsx)(xs,{textColor:"danger600",children:"*"}),t&&(0,n.jsx)(bs,{marginLeft:1,children:t})]})}),ys=(0,O.default)(K)`
  display: flex;
  align-items: center;
`,xs=(0,O.default)(K)`
  line-height: 0;
`,bs=(0,O.default)(ce)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,vs=(0,O.default)(ns.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,xn=(0,O.default)(ht.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,Cs=O.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${xn} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${Mt} {
    border: 1px solid transparent;
  }

  ${rn(Mt)}
`,Ts=(0,u.forwardRef)(({name:e,size:t="M",children:a,value:r="",onClear:o,clearLabel:l,...i},d)=>{const f=(0,u.useRef)(null),m=r.length>0,g=M=>{o(M),f.current.focus()},p=on(d,f);return(0,n.jsx)(Cs,{children:(0,n.jsxs)(ds,{name:e,children:[(0,n.jsx)(yt,{children:(0,n.jsx)(hs,{children:a})}),(0,n.jsx)(os,{ref:p,value:r,startAction:(0,n.jsx)(xn,{"aria-hidden":!0}),size:t,endAction:m?(0,n.jsx)(ls,{label:l,onClick:g,children:(0,n.jsx)(vs,{})}):void 0,...i})]})})}),js=e=>{const[t,a]=(0,u.useState)(!1),r=(0,u.useRef)(null),o=()=>{typeof r.current=="number"&&(clearTimeout(r.current),r.current=null)};return(0,u.useEffect)(()=>()=>{o()},[]),{visible:t,onFocus:()=>{a(!0)},onBlur:()=>{a(!1)},onMouseEnter:()=>{r.current=setTimeout(()=>{a(!0)},e)},onMouseLeave:()=>{o(),a(!1)}}},Ve=8,Ms=(e,t)=>{const a=(e.width-t.width)/2,r=t.left-a,o=t.top+t.height+Ve+window.pageYOffset;return{left:r,top:o}},$s=(e,t)=>{const a=(e.height-t.height)/2,r=t.left+t.width+Ve,o=t.top-a+window.pageYOffset;return{left:r,top:o}},Ss=(e,t)=>{const a=(e.height-t.height)/2,r=t.left-e.width-Ve,o=t.top-a+window.pageYOffset;return{left:r,top:o}},As=(e,t)=>{const a=(e.width-t.width)/2;let r=t.left-a,o=t.top-e.height-Ve+window.pageYOffset;const l=window.innerWidth-t.right;return t.left+e.width-l>window.innerWidth?(r=t.left-e.width-Ve,o=t.top+window.scrollY-t.height/2):r<0?(r=t.width+t.left+Ve,o=t.top+window.scrollY-e.height/2+Ve):o<0&&r>0&&(o=t.top+t.height+Ve),{left:r,top:o}},Zs=(e,t,a)=>{const r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return a==="bottom"?Ms(r,o):a==="right"?$s(r,o):a==="left"?Ss(r,o):As(r,o)},Fs=(e,t)=>{const a=(0,u.useRef)(null),r=(0,u.useRef)(null);return(0,u.useLayoutEffect)(()=>{if(e){const o=a.current,l=r.current;if(o&&l){const i=Zs(o,l,t);o.style.left=`${i.left}px`,o.style.top=`${i.top}px`}}},[t,e]),{tooltipWrapperRef:a,toggleSourceRef:r}};var Ls=s(69530);const bn=u.forwardRef(({container:e=globalThis?.document?.body,...t},a)=>e?(0,Ls.createPortal)((0,n.jsx)(Q,{ref:a,...t}),e):null);bn.displayName="Portal";const Ns=(0,O.default)(Q)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,Rs=({children:e,label:t,description:a,delay:r=500,position:o="top",id:l,...i})=>{const d=qe(l),f=qe(),{visible:m,...g}=js(r),{tooltipWrapperRef:p,toggleSourceRef:M}=Fs(m,o),T=u.cloneElement(e,{tabIndex:0,"aria-labelledby":t?d:void 0,"aria-describedby":a?d:void 0,...g});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(bn,{children:(0,n.jsxs)(Ns,{id:d,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:p,visible:m,position:"absolute",...i,children:[m&&(0,n.jsx)(yt,{id:f,children:a}),(0,n.jsx)(K,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:t||a})]})}),(0,n.jsx)("span",{ref:M,children:T})]})},Es=(0,O.default)(ce)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${ln}
`,St=u.forwardRef(({disabled:e,children:t,background:a="neutral0",...r},o)=>(0,n.jsx)(Es,{ref:o,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:a,borderColor:"neutral200",cursor:"pointer",...r,children:t}));St.displayName="BaseButton";const Is="tertiary",st="secondary",Os=["S","M","L"],Ds=[Is,st],ws=u.forwardRef(({label:e,background:t,borderWidth:a,noBorder:r=!1,children:o,icon:l,disabled:i=!1,onClick:d,size:f=Os[0],"aria-label":m,variant:g=Ds[0],...p},M)=>{const T=$=>{!i&&d&&d($)},b=(0,n.jsxs)(vn,{"aria-disabled":i,background:i?"neutral150":t,borderWidth:r?0:a,justifyContent:"center",...p,ref:M,size:f,onClick:T,variant:g,children:[(0,n.jsx)(yt,{as:"span",children:e??m}),u.cloneElement(l||o,{"aria-hidden":!0,focusable:!1})]});return e?(0,n.jsx)(Rs,{label:e,children:b}):b}),vn=(0,O.default)(St)`
  background-color: ${({theme:e,variant:t})=>{if(t===st)return e.colors.primary100}};
  border-color: ${({theme:e,variant:t})=>t===st?e.colors.primary200:e.colors.neutral200};
  height: ${({theme:e,size:t})=>e.sizes.button[t]};
  width: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    g,
    path {
      fill: ${({theme:e,variant:t})=>t===st?e.colors.primary500:e.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:e,variant:t})=>t===st?e.colors.primary600:e.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,Ud=(0,O.default)(ce)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${vn} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,Cn=(0,O.default)(es)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,Ps=({as:e="h2",label:t,searchLabel:a="",searchable:r=!1,onChange:o=()=>{},value:l="",onClear:i=()=>{},onSubmit:d=()=>{},id:f})=>{const[m,g]=(0,u.useState)(!1),p=qa(m),M=qe(f),T=(0,u.useRef)(void 0),b=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{m&&T.current&&T.current.focus(),p&&!m&&b.current&&b.current.focus()},[m,p]);const $=()=>{g(N=>!N)},W=N=>{i(N),T.current.focus()},S=N=>{N.relatedTarget?.id!==M&&g(!1)},L=N=>{N.key===Xa.ESCAPE&&g(!1)};return m?(0,n.jsxs)(Q,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(ts,{children:(0,n.jsx)(Ts,{name:"searchbar",value:l,onChange:o,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:L,ref:T,onBlur:S,onClear:W,onSubmit:d,clearLabel:"Clear",size:"S",children:a})}),(0,n.jsx)(Q,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(Cn,{})})]}):(0,n.jsxs)(Q,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(ce,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(K,{variant:"beta",as:e,children:t}),r&&(0,n.jsx)(ws,{ref:b,onClick:$,label:a,icon:(0,n.jsx)(ht.Z,{})})]}),(0,n.jsx)(Q,{paddingTop:4,children:(0,n.jsx)(Cn,{})})]})},Bs=({children:e,spacing:t=2,horizontal:a=!1,...r})=>(0,n.jsx)(Q,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(ce,{as:"ol",gap:t,direction:a?"row":"column",alignItems:a?"center":"stretch",...r,children:u.Children.map(e,(o,l)=>(0,n.jsx)("li",{children:o},l))})});var At=s(3494);const Tn=(0,O.default)(ce)`
  border: none;
  padding: 0;
  background: transparent;
`,ks=O.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,zs=({collapsable:e=!1,label:t,onClick:a=()=>{},ariaExpanded:r,ariaControls:o})=>e?(0,n.jsxs)(Tn,{as:"button",onClick:a,"aria-expanded":r,"aria-controls":o,textAlign:"left",children:[(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(K,{variant:"sigma",textColor:"neutral600",children:t})}),e&&(0,n.jsx)(ks,{rotated:r,children:(0,n.jsx)(At.Z,{"aria-hidden":!0})})]}):(0,n.jsx)(Tn,{children:(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(K,{variant:"sigma",textColor:"neutral600",children:t})})}),Us=(0,O.default)(ce)`
  border-radius: ${({theme:e,size:t})=>t==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:t})=>t.sizes.badge[e]};
`,Ws=({active:e=!1,size:t="M",textColor:a="neutral600",backgroundColor:r="neutral150",children:o,minWidth:l=5,...i})=>{const d=t==="S"?1:2;return(0,n.jsx)(Us,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:l,paddingLeft:d,paddingRight:d,background:e?"primary200":r,size:t,...i,children:(0,n.jsx)(K,{variant:"sigma",textColor:e?"primary600":a,children:o})})},Vs=(0,O.default)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,Hs=({collapsable:e=!1,label:t,badgeLabel:a,children:r,id:o})=>{const[l,i]=(0,u.useState)(!0),d=qe(o),f=()=>{i(m=>!m)};return(0,n.jsxs)(ce,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(Vs,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(Q,{position:"relative",paddingRight:a?6:0,children:[(0,n.jsx)(zs,{onClick:f,ariaExpanded:l,ariaControls:d,collapsable:e,label:t}),a&&(0,n.jsx)(Ws,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:a})]})}),(!e||l)&&(0,n.jsx)("ol",{id:d,children:u.Children.map(r,(m,g)=>(0,n.jsx)("li",{children:m},g))})]})},Gs=(0,O.default)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,Ys=O.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,Qs=O.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Xs=({label:e,children:t,id:a})=>{const[r,o]=(0,u.useState)(!0),l=qe(a),i=()=>{o(d=>!d)};return(0,n.jsxs)(Q,{children:[(0,n.jsx)(Gs,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsx)(ce,{justifyContent:"space-between",children:(0,n.jsxs)(Ys,{onClick:i,"aria-expanded":r,"aria-controls":l,children:[(0,n.jsx)(Qs,{rotated:r,children:(0,n.jsx)(At.Z,{"aria-hidden":!0})}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(K,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),r&&(0,n.jsx)("ul",{id:l,children:u.Children.map(t,(d,f)=>(0,n.jsx)("li",{children:d},f))})]})};var Ks=s(1939);const Zt=u.forwardRef(({href:e,rel:t="noreferrer noopener",target:a="_self",disabled:r=!1,isExternal:o=!1,...l},i)=>(0,n.jsx)(Q,{as:"a",ref:i,target:o?"_blank":a,rel:o?t:void 0,href:r?"#":e,"aria-disabled":r,cursor:"pointer",...l}));Zt.displayName="BaseLink";const Js=(0,O.default)(Q)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${K} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,jn=(0,O.default)(Ks.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  }
`,qs=O.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,Mn=u.forwardRef(({children:e,icon:t=null,withBullet:a=!1,as:r=Zt,isSubSectionChild:o=!1,...l},i)=>(0,n.jsxs)(Js,{as:r,icon:t,background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:i,...l,children:[(0,n.jsxs)(ce,{children:[t?(0,n.jsx)(qs,{children:t}):(0,n.jsx)(jn,{}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(K,{as:"span",children:e})})]}),a&&(0,n.jsx)(Q,{as:ce,paddingRight:4,children:(0,n.jsx)(jn,{$active:!0})})]}));var _s=s(34120);const eo=(0,O.default)(Zt)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${ln};
`,xt=u.forwardRef(({children:e,href:t,disabled:a=!1,startIcon:r,endIcon:o,isExternal:l=!0,...i},d)=>(0,n.jsxs)(eo,{ref:d,href:t,disabled:a,isExternal:l,...i,children:[r,(0,n.jsx)(K,{textColor:a?"neutral600":"primary600",children:e}),o,t&&!o&&l&&(0,n.jsx)(_s.Z,{})]}));xt.displayName="Link";const $n=()=>(0,n.jsx)(Q,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(K,{variant:"pi",textColor:"neutral500",children:"/"})});$n.displayName="Divider";const to=(0,O.default)(ce)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,Sn=({label:e,children:t,...a})=>{const r=u.Children.toArray(t);return(0,n.jsx)(Q,{"aria-label":e,...a,children:(0,n.jsx)(to,{as:"ol",children:u.Children.map(r,(o,l)=>{const i=r.length>1&&l+1<r.length;return(0,n.jsxs)(ce,{inline:!0,as:"li",children:[o,i&&(0,n.jsx)($n,{})]})})})})};Sn.displayName="Breadcrumbs";const An=({children:e,isCurrent:t=!1,...a})=>(0,n.jsx)(Q,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(K,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"normal","aria-current":t,...a,children:e})});An.displayName="Crumb";var we=s(17246),no=s(61043),ao=s(30085);const Ft="success-light",Lt="danger-light",bt="default",ot="tertiary",rt="secondary",Zn="danger",Fn="success",Nt="ghost",Rt=[Ft,Lt],so=[bt,ot,rt,Zn,Fn,Nt,...Rt],oo=["S","M","L"],Me=e=>e===Ft||e===Lt?`${e.substring(0,e.lastIndexOf("-"))}`:e===ot?"neutral":e===bt||e===rt||so.every(t=>t!==e)?"primary":`${e}`,Ln=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${K} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,ro=({theme:e,variant:t})=>[...Rt,rt].includes(t)?`
      background-color: ${e.colors.neutral0};
    `:t===ot?`
      background-color: ${e.colors.neutral100};
    `:t===Nt?`
      background-color: ${e.colors.neutral100};
    `:t===bt?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}500`]};
    background: ${e.colors[`${Me(t)}500`]};
  `,io=({theme:e,variant:t})=>[...Rt,rt].includes(t)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Me(t)}600`]};
      ${K} {
        color: ${e.colors[`${Me(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${Me(t)}600`]};
        }
      }
    `:t===ot?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}600`]};
    background: ${e.colors[`${Me(t)}600`]};
  `,lo=({theme:e,variant:t})=>{switch(t){case Lt:case Ft:case rt:return`
          border: 1px solid ${e.colors[`${Me(t)}200`]};
          background: ${e.colors[`${Me(t)}100`]};
          ${K} {
            color: ${e.colors[`${Me(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${Me(t)}700`]};
            }
          }
        `;case ot:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${K} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case Nt:return`
        border: 1px solid transparent;
        background: transparent;

        ${K} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case Fn:case Zn:return`
          border: 1px solid ${e.colors[`${Me(t)}600`]};
          background: ${e.colors[`${Me(t)}600`]};
          ${K} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},co=(0,O.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,uo=(0,O.default)(ao.Z)`
  animation: ${co} 2s infinite linear;
  will-change: transform;
`,mo=(0,O.default)(St)`
  height: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${Ln}

    &:active {
      ${Ln}
    }
  }

  &:hover {
    ${ro}
  }

  &:active {
    ${io}
  }

  ${lo}
`,Nn=u.forwardRef(({variant:e=bt,startIcon:t,endIcon:a,disabled:r=!1,children:o,onClick:l,size:i=oo[0],loading:d=!1,fullWidth:f=!1,...m},g)=>{const p=r||d,M=T=>{!p&&l&&l(T)};return(0,n.jsxs)(mo,{ref:g,"aria-disabled":p,disabled:p,size:i,variant:e,onClick:M,fullWidth:f,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:f,justifyContent:f?"center":void 0,paddingLeft:4,paddingRight:4,width:f?"100%":void 0,...m,children:[(t||d)&&(0,n.jsx)(Q,{"aria-hidden":!0,children:d?(0,n.jsx)(uo,{}):t}),(0,n.jsx)(K,{variant:i==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:o}),a&&(0,n.jsx)(ce,{"aria-hidden":!0,children:a})]})});Nn.displayName="Button";const po=we.fC,fo=(0,u.forwardRef)(({size:e,endIcon:t=(0,n.jsx)(At.Z,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...a},r)=>(0,n.jsx)(we.xz,{asChild:!0,children:(0,n.jsx)(Nn,{ref:r,type:"button",variant:"ghost",endIcon:t,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...a})})),go=(0,u.forwardRef)(({children:e,intersectionId:t,popoverPlacement:a="bottom-start",...r},o)=>{const[l,i]=a.split("-");return(0,n.jsx)(we.Uv,{children:(0,n.jsx)(we.VY,{align:i,side:l,loop:!0,asChild:!0,children:(0,n.jsxs)(Rn,{ref:o,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...r,children:[e,(0,n.jsx)(Q,{id:t,width:"100%",height:"1px"})]})})})}),Rn=(0,O.default)(ce)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,ho=({onSelect:e,disabled:t=!1,...a})=>(0,n.jsx)(we.ck,{asChild:!0,onSelect:e,disabled:t,children:a.isLink||a.isExternal?(0,n.jsx)(yo,{color:"neutral800",...a,isExternal:a.isExternal??!1,children:(0,n.jsx)(K,{children:a.children})}):(0,n.jsx)(In,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...a,children:(0,n.jsx)(K,{children:a.children})})}),En=({theme:e})=>(0,O.css)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${K} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${K} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,In=(0,O.default)(ce)`
  ${En}
`,yo=(0,O.default)(xt)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>ie(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${En}
`,Wd=(0,u.forwardRef)((e,t)=>(0,n.jsx)(we.__,{asChild:!0,children:(0,n.jsx)(xo,{ref:t,variant:"sigma",textColor:"neutral600",...e})})),xo=(0,O.default)(K)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,Vd=we.Tr,Hd=(0,u.forwardRef)(({disabled:e=!1,...t},a)=>(0,n.jsx)(we.fF,{asChild:!0,disabled:e,children:(0,n.jsxs)(bo,{ref:a,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[(0,n.jsx)(K,{children:t.children}),(0,n.jsx)(vo,{height:12,width:12})]})})),bo=(0,O.default)(In)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,vo=(0,O.default)(no.Z)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Gd=(0,u.forwardRef)((e,t)=>(0,n.jsx)(we.Uv,{children:(0,n.jsx)(we.tu,{sideOffset:8,asChild:!0,children:(0,n.jsx)(Rn,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),Co=po,To=fo,jo=go,Mo=ho,Yd=null,Qd=null,Xd=null,Kd=null;var $o=s(43406),So=s(78659),Ao=s(43808),Zo=s(75894),On=s(98447),Fo=s(13931),Lo=s(98481),No=s(35609),Ro=s(39622),Eo=s(87203),Io=s(9964),Oo=s(24630),Do=s(85021),wo=s(95908),Po=s(4551),Bo=s(12048),ko=s(46873),zo=s(34902),Uo=s(87343),Wo=s(40710),Vo=s(82943),Ho=s(62692),Go=s(48401),Yo=s(38972),Qo=s(18602),Xo=s(31702),Ko=s(28616),Jo=s(83642),qo=s(44431),_o=s(27712),er=s(88225),tr=s(70755),nr=s(92297),ar=s(62160),sr=s(55798),or=s(7760),rr=s(97338),ir=s(16694),lr=s(94294),dr=s(9597),cr=s(88898),ur=s(13150),mr=s(26981),pr=s(84207),fr=s(15764),gr=s(62117),hr=s(64302),yr=s(4522),xr=s(22905),br=s(62061),vr=s(52923),Cr=s(31524),Tr=s(25242),jr=s(85758),Mr=s(9947),$r=s(8930),Sr=s(83586),Ar=s(17012),Zr=s(30676),Fr=s(85555),Lr=s(96436),Nr=s(34027),Rr=s(46301),Er=s(62526),Ir=s(55103),Or=s(3760),Dr=s(71217),wr=s(14063),Pr=s(2312),Dn=s(92056),wn=s(7040),Pn=s(38849),Br=s(3071),kr=s(20645),zr=s(24233),Ur=s(57600),Wr=s(13907),Vr=s(9855),Bn=s(66390),kn=s(16760),zn=s(70414),Hr=s(9874),Gr=s(75759),Yr=s(59620),Qr=s(9663),Xr=s(71019),Kr=s(86739),Jr=s(36916),qr=s(3440),_r=s(75327),ei=s(99842),He=s(25659),ti=s(71928),ni=s(41720),ai=s(24780),si=s(56023),oi=s(74645),ri=s(51045),ii=s(94936),li=s(65638),di=s(77335),ci=s(1945),ui=s(4284),mi=s(28073),pi=s(30142),fi=s(51367),gi=s(27920),hi=s(3129),yi=s(43498),xi=s(50250),bi=s(74727),vi=s(36602),Ci=s(96911),Ti=s(29460),ji=s(27336),Mi=s(79038),$i=s(3297),Si=s(27001),Ai=s(87856),Zi=s(83373),Fi=s(88224),Li=s(119),Ni=s(68129),Ri=s(76946),Ei=s(41433),it=s(10751),Ii=s(45949),Oi=s(66091),Un=s(10477),Di=s(80792),vt=s(19156),wi=s(17014),Pi=s(70764),Wn=s(86980),Et=s(17786),Vn=s(4803),Bi=s(40243),ki=s(14830),zi=s(74003),Ui=s(15134),Hn=s(9864),Wi=s(71226),Vi=s(28580),Hi=s(64417),Gi=s(18076),ke=s(51943),C=s(13356),It=s(6078),D=s(98934),Yi=s(63799),Gn=s(43433),Qi=s(84921),Ke=s(59461),Xi=s(10131),Yn=s(79146),Ki=s(29206),Ot=s(6699),Qn=s(88702),Ji=s(81465),j=s(47853),qi=s(12665),Dt=s(51527),Xn=s(45648),_i=s(49204),Kn=s(74919),el=s(8243);const c=e=>`${C.p}.${e}`,Jn=(0,u.createContext)(),ze=()=>(0,u.useContext)(Jn),qn=u.createContext(),Je=()=>(0,u.useContext)(qn),tl=()=>{const{components:e,componentsGroupedByCategory:t,contentTypes:a,isInDevelopmentMode:r,sortedContentTypesList:o,modifiedData:l,initialData:i}=ze(),d=(0,F.lm)(),{trackUsage:f}=(0,F.rS)(),[m,g]=(0,u.useState)(""),{onOpenModalCreateSchema:p,onOpenModalEditCategory:M}=Je(),{locale:T}=(0,Y.Z)(),{startsWith:b}=(0,F.L0)(T,{sensitivity:"base"}),$=(0,F.Xe)(T,{sensitivity:"base"}),W=!Object.keys(a).some(V=>a[V].isTemporary===!0)&&!Object.keys(e).some(V=>e[V].isTemporary===!0)&&It(l,i),S=()=>{W?(f("willCreateContentType"),p({modalType:"contentType",kind:"collectionType",actionType:"create",forTarget:"contentType"})):k()},L=()=>{W?(f("willCreateSingleType"),p({modalType:"contentType",kind:"singleType",actionType:"create",forTarget:"contentType"})):k()},N=()=>{W?(f("willCreateComponent"),p({modalType:"component",kind:null,actionType:"create",forTarget:"component"})):k()},k=()=>{d({type:"info",message:{id:c("notification.info.creating.notSaved"),defaultMessage:"Please save your work before creating a new collection type or component"}})},_=Object.entries(t).map(([V,Te])=>({name:V,title:V,isEditable:r,onClickEdit(ee,Se){ee.stopPropagation(),W?M(Se.name):k()},links:Te.map(ee=>({name:ee.uid,to:`/plugins/${C.p}/component-categories/${V}/${ee.uid}`,title:ee.schema.displayName})).sort((ee,Se)=>$.compare(ee.title,Se.title))})).sort((V,Te)=>$.compare(V.title,Te.title)),he=o.filter(V=>V.visible);return{menu:[{name:"models",title:{id:`${c("menu.section.models.name")}`,defaultMessage:"Collection Types"},customLink:r&&{id:`${c("button.model.create")}`,defaultMessage:"Create new collection type",onClick:S},links:he.filter(V=>V.kind==="collectionType")},{name:"singleTypes",title:{id:`${c("menu.section.single-types.name")}`,defaultMessage:"Single Types"},customLink:r&&{id:`${c("button.single-types.create")}`,defaultMessage:"Create new single type",onClick:L},links:he.filter(V=>V.kind==="singleType")},{name:"components",title:{id:`${c("menu.section.components.name")}`,defaultMessage:"Components"},customLink:r&&{id:`${c("button.component.create")}`,defaultMessage:"Create a new component",onClick:N},links:_}].map(V=>V.links.some(ee=>Array.isArray(ee.links))?{...V,links:V.links.map(ee=>{const Se=ee.links.filter(pe=>b(pe.title,m));return Se.length===0?null:{...ee,links:Se.sort((pe,le)=>$.compare(pe.title,le.title))}}).filter(Boolean)}:{...V,links:V.links.filter(ee=>b(ee.title,m)).sort((ee,Se)=>$.compare(ee.title,Se.title))}),searchValue:m,onSearchChange:g}},nl=()=>{const{menu:e,searchValue:t,onSearchChange:a}=tl(),{formatMessage:r}=(0,Y.Z)();return(0,n.jsxs)(Qa,{ariaLabel:r({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),children:[(0,n.jsx)(Ps,{searchable:!0,value:t,onClear:()=>a(""),onChange:o=>a(o.target.value),label:r({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),searchLabel:r({id:"global.search",defaultMessage:"Search"})}),(0,n.jsx)(Bs,{children:e.map(o=>(0,n.jsxs)(u.Fragment,{children:[(0,n.jsx)(Hs,{label:r({id:o.title.id,defaultMessage:o.title.defaultMessage}),collapsable:!0,badgeLabel:o.links.length.toString(),children:o.links.map(l=>l.links?(0,n.jsx)(Xs,{label:ke(l.title),children:l.links.map(i=>(0,n.jsx)(Mn,{as:sn.NavLink,to:i.to,active:i.active,isSubSectionChild:!0,children:ke(r({id:i.name,defaultMessage:i.title}))},i.name))},l.name):(0,n.jsx)(Mn,{as:sn.NavLink,to:l.to,active:l.active,children:ke(r({id:l.name,defaultMessage:l.title}))},l.name))}),o.customLink&&(0,n.jsx)(h.x,{paddingLeft:7,children:(0,n.jsx)(Z.A,{onClick:o.customLink.onClick,startIcon:(0,n.jsx)(w.J,{as:He.Z,width:(0,F.Q1)(8),height:(0,F.Q1)(8)}),marginTop:2,children:r({id:o.customLink.id,defaultMessage:o.customLink.defaultMessage})})})]},o.name))})]})},_n=e=>e.kind==="collectionType"&&(e.restrictRelationsTo===null||Array.isArray(e.restrictRelationsTo)&&e.restrictRelationsTo.length>0),wt=(e,t)=>e.find(({name:a})=>a===t),al=[{label:"All",children:[{label:"images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)",value:"images"},{label:"videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)",value:"videos"},{label:"audios (MP3, WAV, OGG)",value:"audios"},{label:"files (CSV, ZIP, PDF, Excel, JSON, ...)",value:"files"}]}],sl=({intlLabel:e,name:t,onChange:a,value:r=null})=>{const{formatMessage:o}=(0,Y.Z)(),l=r===null||r?.length===0?o({id:"global.none",defaultMessage:"None"}):[...r].sort().map(d=>ke(d)).join(", "),i=e.id?o({id:e.id,defaultMessage:e.defaultMessage}):t;return(0,n.jsx)(P.Q,{id:"select1",label:i,customizeContent:()=>l,onChange:d=>{d.length>0?a({target:{name:t,value:d,type:"allowed-types-select"}}):a({target:{name:t,value:null,type:"allowed-types-select"}})},options:al,value:r||[]})},ea={biginteger:it.Z,blocks:Ii.Z,boolean:Oi.Z,collectionType:Un.Z,component:Di.Z,contentType:Un.Z,date:vt.Z,datetime:vt.Z,decimal:it.Z,dynamiczone:wi.Z,email:Pi.Z,enum:Wn.Z,enumeration:Wn.Z,file:Et.Z,files:Et.Z,float:it.Z,integer:it.Z,json:Vn.Z,JSON:Vn.Z,media:Et.Z,number:it.Z,password:Bi.Z,relation:ki.Z,richtext:zi.Z,singleType:Ui.Z,string:Hn.Z,text:Hn.Z,time:vt.Z,timestamp:vt.Z,uid:Wi.Z},ol=(0,O.default)(h.x)`
  svg {
    height: 100%;
    width: 100%;
  }
`,lt=({type:e,customField:t=null,...a})=>{const r=(0,F.mZ)();let o=ea[e];if(t){const i=r.get(t)?.icon;i&&(o=i)}return ea[e]?(0,n.jsx)(ol,{height:(0,F.Q1)(24),width:(0,F.Q1)(32),shrink:0,...a,"aria-hidden":!0,children:(0,n.jsx)(h.x,{as:o})}):null},ta=(0,O.default)(h.x)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border: 1px solid ${({theme:e})=>e.colors.primary200};
  }
`,rl=["blocks"],il=()=>(0,n.jsx)(v.k,{grow:1,justifyContent:"flex-end",children:(0,n.jsxs)(v.k,{gap:1,hasRadius:!0,background:"alternative100",padding:`${2/16}rem ${4/16}rem`,children:[(0,n.jsx)(w.J,{width:`${10/16}rem`,height:`${10/16}rem`,as:Vi.Z,color:"alternative600"}),(0,n.jsx)(A.Z,{textColor:"alternative600",variant:"sigma",children:"New"})]})}),ll=({type:e="text"})=>{const{formatMessage:t}=(0,Y.Z)(),{onClickSelectField:a}=Je(),r=()=>{a({attributeType:e,step:e==="component"?"1":null})};return(0,n.jsx)(ta,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:r,children:(0,n.jsxs)(v.k,{children:[(0,n.jsx)(lt,{type:e}),(0,n.jsxs)(h.x,{paddingLeft:4,width:"100%",children:[(0,n.jsxs)(v.k,{justifyContent:"space-between",children:[(0,n.jsx)(A.Z,{fontWeight:"bold",children:t({id:c(`attribute.${e}`),defaultMessage:e})}),rl.includes(e)&&(0,n.jsx)(il,{})]}),(0,n.jsx)(v.k,{children:(0,n.jsx)(A.Z,{variant:"pi",textColor:"neutral600",children:t({id:c(`attribute.${e}.description`),defaultMessage:"A type for modeling data"})})})]})]})})},dl=({attributes:e})=>(0,n.jsx)(U.k,{tagName:"button",children:(0,n.jsx)(v.k,{direction:"column",alignItems:"stretch",gap:8,children:e.map((t,a)=>(0,n.jsx)(q.r,{gap:3,children:t.map(r=>(0,n.jsx)(te.P,{col:6,children:(0,n.jsx)(ll,{type:r})},r))},a))})}),cl=({customFieldUid:e,customField:t})=>{const{type:a,intlLabel:r,intlDescription:o}=t,{formatMessage:l}=(0,Y.Z)(),{onClickSelectCustomField:i}=Je(),d=()=>{i({attributeType:a,customFieldUid:e})};return(0,n.jsx)(ta,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:d,children:(0,n.jsxs)(v.k,{children:[(0,n.jsx)(lt,{type:a,customField:e}),(0,n.jsxs)(h.x,{paddingLeft:4,children:[(0,n.jsx)(v.k,{children:(0,n.jsx)(A.Z,{fontWeight:"bold",children:l(r)})}),(0,n.jsx)(v.k,{children:(0,n.jsx)(A.Z,{variant:"pi",textColor:"neutral600",children:l(o)})})]})]})})},ul=(0,O.default)(h.x)`
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${e.colors.neutral150} 100%)`};
  opacity: 0.33;
`,ml=()=>(0,n.jsx)(v.k,{wrap:"wrap",gap:4,children:[...Array(4)].map((e,t)=>(0,n.jsx)(ul,{height:"138px",width:"375px",hasRadius:!0},`empty-card-${t}`))}),pl=()=>{const{formatMessage:e}=(0,Y.Z)();return(0,n.jsxs)(h.x,{position:"relative",children:[(0,n.jsx)(ml,{}),(0,n.jsx)(h.x,{position:"absolute",top:6,width:"100%",children:(0,n.jsxs)(v.k,{alignItems:"center",justifyContent:"center",direction:"column",children:[(0,n.jsx)(w.J,{as:Hi.Z,color:"",width:"160px",height:"88px"}),(0,n.jsx)(h.x,{paddingTop:6,paddingBottom:4,children:(0,n.jsxs)(h.x,{textAlign:"center",children:[(0,n.jsx)(A.Z,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.heading"),defaultMessage:"Nothing in here yet."})}),(0,n.jsx)(h.x,{paddingTop:4,children:(0,n.jsx)(A.Z,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.sub-heading"),defaultMessage:"Find what you are looking for through a wide range of extensions."})})})]})}),(0,n.jsx)(oe.Q,{to:`/marketplace?${Ki.stringify({categories:["Custom fields"]})}`,variant:"secondary",startIcon:(0,n.jsx)(He.Z,{}),children:e({id:c("modalForm.empty.button"),defaultMessage:"Add custom fields"})})]})})]})},fl=()=>{const{formatMessage:e}=(0,Y.Z)(),t=(0,F.mZ)(),a=Object.entries(t.getAll());if(!a.length)return(0,n.jsx)(pl,{});const r=a.sort((o,l)=>o[1].name>l[1].name?1:-1);return(0,n.jsx)(U.k,{tagName:"button",children:(0,n.jsxs)(v.k,{direction:"column",alignItems:"stretch",gap:3,children:[(0,n.jsx)(q.r,{gap:3,children:r.map(([o,l])=>(0,n.jsx)(te.P,{col:6,children:(0,n.jsx)(cl,{customFieldUid:o,customField:l},o)},o))}),(0,n.jsx)(xt,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",isExternal:!0,children:e({id:c("modalForm.tabs.custom.howToLink"),defaultMessage:"How to add custom fields"})})]})})},gl=({attributes:e,forTarget:t,kind:a})=>{const{formatMessage:r}=(0,Y.Z)(),o=c("modalForm.tabs.default"),l=c("modalForm.tabs.custom"),i=t.includes("component")?"component":a,d=c(`modalForm.sub-header.chooseAttribute.${i}`);return(0,n.jsx)(Be.f,{padding:7,children:(0,n.jsxs)(me.v,{label:r({id:c("modalForm.tabs.label"),defaultMessage:"Default and Custom types tabs"}),id:"attribute-type-tabs",variant:"simple",children:[(0,n.jsxs)(v.k,{justifyContent:"space-between",children:[(0,n.jsx)(A.Z,{variant:"beta",as:"h2",children:r({id:d,defaultMessage:"Select a field"})}),(0,n.jsxs)(de.m,{children:[(0,n.jsx)(de.O,{children:r({id:o,defaultMessage:"Default"})}),(0,n.jsx)(de.O,{children:r({id:l,defaultMessage:"Custom"})})]})]}),(0,n.jsx)(h.x,{paddingBottom:6,children:(0,n.jsx)(ae.i,{})}),(0,n.jsxs)(re.n,{children:[(0,n.jsx)(re.x,{children:(0,n.jsx)(dl,{attributes:e})}),(0,n.jsx)(re.x,{children:(0,n.jsx)(fl,{})})]})]})})},hl=({intlLabel:e,name:t,options:a,onChange:r,value:o=null})=>{const{formatMessage:l}=(0,Y.Z)(),i=e.id?l({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):t,d=f=>{let m="";f==="true"&&(m=!0),f==="false"&&(m=!1),r({target:{name:t,value:m,type:"select-default-boolean"}})};return(0,n.jsx)(se.P,{label:i,id:t,name:t,onChange:d,value:(o===null?"":o).toString(),children:a.map(({metadatas:{intlLabel:f,disabled:m,hidden:g},key:p,value:M})=>(0,n.jsx)(Ne.W,{value:M,disabled:m,hidden:g,children:f.defaultMessage},p))})},yl=(0,O.default)(v.k)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,Re.k3)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    will-change: transform, opacity;
    background: ${({theme:e})=>e.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({theme:e})=>e.colors.neutral0};
      width: ${({theme:e})=>e.spaces[5]};
      height: ${({theme:e})=>e.spaces[5]};
      border: solid 1px ${({theme:e})=>e.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({theme:e})=>e.spaces[3]};
        height: ${({theme:e})=>e.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({theme:e})=>e.colors.primary100};
    ${A.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    .checkmark {
      border: solid 1px ${({theme:e})=>e.colors.primary600};
      &::after {
        background: ${({theme:e})=>e.colors.primary600};
        transform: scale(1);
      }
    }
  }
`,Pt=({intlLabel:e,name:t,onChange:a,radios:r=[],value:o})=>{const{formatMessage:l}=(0,Y.Z)();return(0,n.jsxs)(v.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(A.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:t,as:"label",children:l(e)}),(0,n.jsx)(yl,{gap:4,alignItems:"stretch",children:r.map(i=>(0,n.jsxs)("label",{htmlFor:i.value.toString(),className:"container",children:[(0,n.jsx)("input",{id:i.value.toString(),name:t,className:"option-input",checked:i.value===o,value:i.value,onChange:a,type:"radio"},i.value),(0,n.jsx)(h.x,{className:"option",padding:4,children:(0,n.jsxs)(v.k,{children:[(0,n.jsx)(h.x,{paddingRight:4,children:(0,n.jsx)("span",{className:"checkmark"})}),(0,n.jsxs)(v.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(A.Z,{fontWeight:"bold",children:l(i.title)}),(0,n.jsx)(A.Z,{variant:"pi",textColor:"neutral600",children:l(i.description)})]})]})})]},i.value))})]})},xl=({onChange:e,name:t,intlLabel:a,...r})=>{const o=l=>{const i=l.target.value!=="false";e({target:{name:t,value:i,type:"boolean-radio-group"}})};return(0,n.jsx)(Pt,{...r,name:t,onChange:o,intlLabel:a})},bl=({error:e,intlLabel:t,modifiedData:a,name:r,onChange:o,value:l=null})=>{const{formatMessage:i}=(0,Y.Z)(),[d,f]=(0,u.useState)(!!l||l===0),m=t.id?i({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):r,g=a.type==="biginteger"?"text":"number",p=!a.type,M=e?i({id:e,defaultMessage:e}):"";return(0,n.jsxs)(v.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(xe.X,{id:r,name:r,onValueChange:T=>{o({target:{name:r,value:T?g==="text"?"0":0:null}}),f(W=>!W)},value:d,children:m}),d&&(0,n.jsx)(h.x,{paddingLeft:6,style:{maxWidth:"200px"},children:g==="text"?(0,n.jsx)(je.o,{label:"","aria-label":m,disabled:p,error:M,id:r,name:r,onChange:o,value:l===null?"":l}):(0,n.jsx)(ft.Y,{"aria-label":m,disabled:p,error:M,id:r,name:r,onValueChange:T=>{o({target:{name:r,value:T,type:g}})},value:l||0})})]})},vl=({onChange:e,...t})=>{const a=(0,F.lm)(),r=o=>{a({type:"info",message:{id:c("contentType.kind.change.warning"),defaultMessage:"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."}}),e(o)};return(0,n.jsx)(Pt,{...t,onChange:r})},Cl=({description:e,disabled:t=!1,intlLabel:a,isCreating:r,name:o,onChange:l,value:i=!1})=>{const{formatMessage:d}=(0,Y.Z)(),[f,m]=(0,u.useState)(!1),g=a.id?d({id:a.id,defaultMessage:a.defaultMessage},{...a.values}):o,p=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=()=>m($=>!$),T=()=>{l({target:{name:o,value:!1}}),M()},b=({target:{checked:$}})=>{if(!$&&!r){M();return}l({target:{name:o,value:$}})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xe.X,{checked:i,disabled:t,hint:p,name:o,onChange:b,children:g}),(0,n.jsx)(F.QH,{isOpen:f,onToggleDialog:M,onConfirm:T,bodyText:{id:c("popUpWarning.draft-publish.message"),defaultMessage:"If you disable the draft & publish, your drafts will be deleted."},leftButtonText:{id:"components.popUpWarning.button.cancel",defaultMessage:"No, cancel"},rightButtonText:{id:c("popUpWarning.draft-publish.button.confirm"),defaultMessage:"Yes, disable"}})]})},Tl=({categoryName:e,deleteCategory:t,deleteComponent:a,deleteContentType:r,isAttributeModal:o,isCustomFieldModal:l,isComponentAttribute:i,isComponentToDzModal:d,isContentTypeModal:f,isCreatingComponent:m,isCreatingComponentAttribute:g,isCreatingComponentInDz:p,isCreatingComponentWhileAddingAField:M,isCreatingContentType:T,isCreatingDz:b,isComponentModal:$,isDzAttribute:W,isEditingAttribute:S,isEditingCategory:L,isInFirstComponentStep:N,onSubmitAddComponentAttribute:k,onSubmitAddComponentToDz:_,onSubmitCreateContentType:he,onSubmitCreateComponent:$e,onSubmitCreateDz:V,onSubmitEditAttribute:Te,onSubmitEditCategory:ee,onSubmitEditComponent:Se,onSubmitEditContentType:pe,onSubmitEditCustomFieldAttribute:le,onSubmitEditDz:Ue,onClickFinish:ye})=>{const{formatMessage:J}=(0,Y.Z)();return d?p?(0,n.jsx)(ne.z,{variant:"secondary",type:"submit",onClick:R=>{R.preventDefault(),_(R,!0)},startIcon:(0,n.jsx)(He.Z,{}),children:J({id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"})}):(0,n.jsx)(ne.z,{variant:"default",type:"submit",onClick:R=>{R.preventDefault(),_(R,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):o&&W&&!b?(0,n.jsx)(ne.z,{variant:"default",type:"submit",onClick:R=>{R.preventDefault(),ye(),Ue(R,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):o&&W&&b?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(ne.z,{variant:"secondary",type:"submit",onClick:R=>{R.preventDefault(),V(R,!0)},startIcon:(0,n.jsx)(He.Z,{}),children:J({id:c("form.button.add-components-to-dynamiczone"),defaultMessage:"Add components to the zone"})})}):o&&i?N?(0,n.jsx)(ne.z,{variant:"secondary",type:"submit",onClick:R=>{R.preventDefault(),k(R,!0)},children:J(g?{id:c("form.button.configure-component"),defaultMessage:"Configure the component"}:{id:c("form.button.select-component"),defaultMessage:"Configure the component"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.z,{variant:"secondary",type:"submit",onClick:R=>{R.preventDefault(),k(R,!0)},startIcon:(0,n.jsx)(He.Z,{}),children:J(M?{id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"}:{id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ne.z,{variant:"default",type:"button",onClick:R=>{R.preventDefault(),ye(),k(R,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):o&&!i&&!W?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.z,{type:S?"button":"submit",variant:"secondary",onClick:R=>{R.preventDefault(),Te(R,!0)},startIcon:(0,n.jsx)(He.Z,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ne.z,{type:S?"submit":"button",variant:"default",onClick:R=>{R.preventDefault(),ye(),Te(R,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):f?(0,n.jsxs)(n.Fragment,{children:[!T&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.z,{type:"button",variant:"danger",onClick:R=>{R.preventDefault(),r()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ne.z,{type:"submit",variant:"default",onClick:R=>{R.preventDefault(),pe(R,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),T&&(0,n.jsx)(ne.z,{type:"submit",variant:"secondary",onClick:R=>{R.preventDefault(),he(R,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):$?(0,n.jsxs)(n.Fragment,{children:[!m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.z,{type:"button",variant:"danger",onClick:R=>{R.preventDefault(),a()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ne.z,{type:"submit",variant:"default",onClick:R=>{R.preventDefault(),Se(R,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),m&&(0,n.jsx)(ne.z,{type:"submit",variant:"secondary",onClick:R=>{R.preventDefault(),$e(R,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):L?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.z,{type:"button",variant:"danger",onClick:R=>{R.preventDefault(),e&&t(e)},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ne.z,{type:"submit",variant:"default",onClick:R=>{R.preventDefault(),ee(R)},children:J({id:"global.finish",defaultMessage:"finish"})})]}):l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.z,{type:S?"button":"submit",variant:"secondary",onClick:R=>{R.preventDefault(),le(R,!0)},startIcon:(0,n.jsx)(He.Z,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ne.z,{type:S?"submit":"button",variant:"default",onClick:R=>{R.preventDefault(),ye(),le(R,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):null},jl=({actionType:e=null,attributeName:t,attributeType:a,categoryName:r,contentTypeKind:o,dynamicZoneTarget:l,forTarget:i,modalType:d=null,targetUid:f,customFieldUid:m=null,showBackLink:g=!1})=>{const{formatMessage:p}=(0,Y.Z)(),{modifiedData:M}=ze(),{onOpenModalAddField:T}=Je();let b="component",$=[];const W=M?.[i]?.[f]||M?.[i]||null,S=W?.schema.displayName;if(d==="contentType"&&(b=o),["component","editCategory"].includes(d||"")&&(b="component"),["component","contentType"].includes(d||"")){let N=c(`modalForm.component.header-${e}`);return d==="contentType"&&(N=c(`modalForm.${o}.header-create`)),e==="edit"&&(N=c("modalForm.header-edit")),(0,n.jsx)(at.x,{children:(0,n.jsxs)(v.k,{children:[(0,n.jsx)(h.x,{children:(0,n.jsx)(lt,{type:b})}),(0,n.jsx)(h.x,{paddingLeft:3,children:(0,n.jsx)(A.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:p({id:N},{name:S})})})]})})}return $=[{label:S,info:{category:W?.category||null,name:W?.schema.displayName}}],d==="chooseAttribute"&&(b=["component","components"].includes(i)?"component":W.schema.kind),d==="addComponentToDynamicZone"&&(b="dynamiczone",$.push({label:l})),(d==="attribute"||d==="customField")&&(b=a,$.push({label:t})),d==="editCategory"&&($=[{label:p({id:c("modalForm.header.categories"),defaultMessage:"Categories"})},{label:r}]),(0,n.jsx)(at.x,{children:(0,n.jsxs)(v.k,{gap:3,children:[g&&(0,n.jsx)(xt,{"aria-label":p({id:c("modalForm.header.back"),defaultMessage:"Back"}),startIcon:(0,n.jsx)(On.Z,{}),onClick:()=>T({forTarget:i,targetUid:f}),href:"#back",isExternal:!1}),(0,n.jsx)(lt,{type:b,customField:m}),(0,n.jsx)(Sn,{label:$.map(({label:N})=>N).join(","),children:$.map(({label:N,info:k},_,he)=>{if(N=ke(N),!N)return null;const $e=`${N}.${_}`;return k?.category&&(N=`${N} (${ke(k.category)} - ${ke(k.name)})`),(0,n.jsx)(An,{isCurrent:_===he.length-1,children:N},$e)})})]})})},Ml=({modalType:e,forTarget:t,kind:a,actionType:r,step:o})=>{switch(e){case"chooseAttribute":return c(`modalForm.sub-header.chooseAttribute.${t?.includes("component")?"component":a||"collectionType"}`);case"attribute":return c(`modalForm.sub-header.attribute.${r}${o!=="null"&&o!==null&&r!=="edit"?".step":""}`);case"customField":return c(`modalForm.sub-header.attribute.${r}`);case"addComponentToDynamicZone":return c("modalForm.sub-header.addComponentToDynamicZone");default:return c("configurations")}},$l=({actionType:e,modalType:t,forTarget:a,kind:r,step:o,attributeType:l,attributeName:i,customField:d})=>{const{formatMessage:f}=(0,Y.Z)(),m=t==="customField"?d?.intlLabel:{id:c(`attribute.${l}`)};return(0,n.jsxs)(v.k,{direction:"column",alignItems:"flex-start",paddingBottom:2,gap:1,children:[(0,n.jsx)(A.Z,{as:"h2",variant:"beta",children:f({id:Ml({actionType:e,forTarget:a,kind:r,step:o,modalType:t}),defaultMessage:"Add new field"},{type:m?ke(f(m)):"",name:ke(i),step:o})}),(0,n.jsx)(A.Z,{variant:"pi",textColor:"neutral600",children:f({id:c(`attribute.${l}.description`),defaultMessage:"A type for modeling data"})})]})},Bt={alien:$o.Z,apps:So.Z,archive:Ao.Z,arrowDown:Zo.Z,arrowLeft:On.Z,arrowRight:Fo.Z,arrowUp:Lo.Z,attachment:No.Z,bell:Ro.Z,bold:Eo.Z,book:Io.Z,briefcase:Oo.Z,brush:Do.Z,bulletList:wo.Z,calendar:Po.Z,car:Bo.Z,cast:ko.Z,chartBubble:zo.Z,chartCircle:Uo.Z,chartPie:Wo.Z,check:Vo.Z,clock:Ho.Z,cloud:Go.Z,code:Yo.Z,cog:Qo.Z,collapse:Xo.Z,command:Ko.Z,connector:Jo.Z,crop:qo.Z,crown:_o.Z,cube:er.Z,cup:tr.Z,cursor:nr.Z,dashboard:ar.Z,database:sr.Z,discuss:or.Z,doctor:rr.Z,earth:ir.Z,emotionHappy:lr.Z,emotionUnhappy:dr.Z,envelop:cr.Z,exit:ur.Z,expand:mr.Z,eye:pr.Z,feather:fr.Z,file:gr.Z,fileError:hr.Z,filePdf:yr.Z,filter:xr.Z,folder:br.Z,gate:vr.Z,gift:Cr.Z,globe:Tr.Z,grid:jr.Z,handHeart:Mr.Z,hashtag:$r.Z,headphone:Sr.Z,heart:Ar.Z,house:Zr.Z,information:Fr.Z,italic:Lr.Z,key:Nr.Z,landscape:Rr.Z,layer:Er.Z,layout:Ir.Z,lightbulb:Or.Z,link:Dr.Z,lock:wr.Z,magic:Pr.Z,manyToMany:Dn.Z,manyToOne:wn.Z,manyWays:Pn.Z,medium:Br.Z,message:kr.Z,microphone:zr.Z,monitor:Ur.Z,moon:Wr.Z,music:Vr.Z,oneToMany:Bn.Z,oneToOne:kn.Z,oneWay:zn.Z,paint:Hr.Z,paintBrush:Gr.Z,paperPlane:Yr.Z,pencil:Qr.Z,phone:Xr.Z,picture:Kr.Z,pin:Jr.Z,pinMap:qr.Z,plane:_r.Z,play:ei.Z,plus:He.Z,priceTag:ti.Z,puzzle:ni.Z,question:ai.Z,quote:si.Z,repeat:oi.Z,restaurant:ri.Z,rocket:ii.Z,rotate:li.Z,scissors:di.Z,search:ht.Z,seed:ci.Z,server:ui.Z,shield:mi.Z,shirt:pi.Z,shoppingCart:fi.Z,slideshow:gi.Z,stack:hi.Z,star:yi.Z,store:xi.Z,strikeThrough:bi.Z,sun:vi.Z,television:Ci.Z,thumbDown:Ti.Z,thumbUp:ji.Z,train:Mi.Z,twitter:$i.Z,typhoon:Si.Z,underline:Ai.Z,user:Zi.Z,volumeMute:Fi.Z,volumeUp:Li.Z,walk:Ni.Z,wheelchair:Ri.Z,write:Ei.Z},Sl=(0,O.default)(v.k)`
  label {
    ${(0,Re.k3)()}
    border-radius: ${({theme:e})=>e.borderRadius};
    border: 1px solid ${({theme:e})=>e.colors.neutral100};
  }
`,Al=({iconKey:e,name:t,onChange:a,isSelected:r,ariaLabel:o})=>(0,n.jsx)(gt.g,{name:t,required:!1,children:(0,n.jsxs)(La.Q,{htmlFor:e,id:`${e}-label`,children:[(0,n.jsxs)(Na.T,{children:[(0,n.jsx)(Ra._,{type:"radio",id:e,name:t,checked:r,onChange:a,value:e,"aria-checked":r,"aria-labelledby":`${e}-label`}),o]}),(0,n.jsx)(v.k,{padding:2,cursor:"pointer",hasRadius:!0,background:r?"primary200":void 0,children:(0,n.jsx)(w.J,{as:Bt[e],color:r?"primary600":"neutral300"})})]})}),Zl=({intlLabel:e,name:t,onChange:a,value:r=""})=>{const{formatMessage:o}=(0,Y.Z)(),[l,i]=(0,u.useState)(!1),[d,f]=(0,u.useState)(""),m=Object.keys(Bt),[g,p]=(0,u.useState)(m),M=(0,u.useRef)(null),T=(0,u.useRef)(null),b=()=>{i(!l)},$=({target:{value:L}})=>{f(L),p(()=>m.filter(N=>N.toLowerCase().includes(L.toLowerCase())))},W=()=>{b(),f(""),p(m)},S=()=>{a({target:{name:t,value:""}})};return(0,u.useEffect)(()=>{l&&T.current?.focus()},[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(v.k,{justifyContent:"space-between",paddingBottom:2,children:[(0,n.jsx)(A.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",as:"label",children:o(e)}),(0,n.jsxs)(v.k,{gap:1,children:[l?(0,n.jsx)(Ea.w,{ref:T,name:"searchbar",size:"S",placeholder:o({id:c("ComponentIconPicker.search.placeholder"),defaultMessage:"Search for an icon"}),onBlur:()=>{d||b()},onChange:$,value:d,onClear:W,clearLabel:o({id:c("IconPicker.search.clear.label"),defaultMessage:"Clear the icon search"}),children:o({id:c("IconPicker.search.placeholder.label"),defaultMessage:"Search for an icon"})}):(0,n.jsx)(an.h,{ref:M,onClick:b,"aria-label":o({id:c("IconPicker.search.button.label"),defaultMessage:"Search icon button"}),icon:(0,n.jsx)(ht.Z,{}),noBorder:!0}),r&&(0,n.jsx)(Ia.u,{description:o({id:c("IconPicker.remove.tooltip"),defaultMessage:"Remove the selected icon"}),children:(0,n.jsx)(an.h,{onClick:S,"aria-label":o({id:c("IconPicker.remove.button"),defaultMessage:"Remove the selected icon button"}),icon:(0,n.jsx)(Gi.Z,{}),noBorder:!0})})]})]}),(0,n.jsx)(Sl,{position:"relative",padding:1,background:"neutral100",hasRadius:!0,wrap:"wrap",gap:2,maxHeight:"126px",overflow:"auto",textAlign:"center",children:g.length>0?g.map(L=>(0,n.jsx)(Al,{iconKey:L,name:t,onChange:a,isSelected:L===r,ariaLabel:o({id:c("IconPicker.icon.label"),defaultMessage:"Select {icon} icon"},{icon:L})},L)):(0,n.jsx)(h.x,{padding:4,grow:2,children:(0,n.jsx)(A.Z,{variant:"delta",textColor:"neutral600",textAlign:"center",children:o({id:c("IconPicker.emptyState.label"),defaultMessage:"No icon found"})})})})]})},Fl=({description:e,error:t,intlLabel:a,modifiedData:r,name:o,onChange:l,value:i})=>{const{formatMessage:d}=(0,Y.Z)(),f=(0,u.useRef)(l),m=r?.displayName||"";(0,u.useEffect)(()=>{if(m){const T=(0,C.n)(m);try{const b=Ot(T,2);f.current({target:{name:o,value:b}})}catch{f.current({target:{name:o,value:T}})}}else f.current({target:{name:o,value:""}})},[m,o]);const g=t?d({id:t,defaultMessage:t}):"",p=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=d(a);return(0,n.jsx)(je.o,{error:g,label:M,id:o,hint:p,name:o,onChange:l,value:i||""})},Ll=({oneThatIsCreatingARelationWithAnother:e,target:t})=>{const{contentTypes:a,sortedContentTypesList:r}=ze(),o=(0,Ke.I0)(),l=r.filter(_n),{plugin:i=null,schema:{displayName:d}={displayName:"error"}}=a?.[t]??{},f=({uid:m,plugin:g,title:p,restrictRelationsTo:M})=>()=>{const T=g?`${g}_${p}`:p;o({type:C.O,target:{value:m,oneThatIsCreatingARelationWithAnother:e,selectedContentTypeFriendlyName:T,targetContentTypeAllowedRelations:M}})};return(0,n.jsxs)(Co,{children:[(0,n.jsx)(Nl,{children:`${d} ${i?`(from: ${i})`:""}`}),(0,n.jsx)(jo,{zIndex:5,children:l.map(({uid:m,title:g,restrictRelationsTo:p,plugin:M})=>(0,n.jsxs)(Mo,{onSelect:f({uid:m,plugin:M,title:g,restrictRelationsTo:p}),children:[g,"\xA0",M&&(0,n.jsxs)(n.Fragment,{children:["(from: ",M,")"]})]},m))})]})},Nl=(0,O.default)(To)`
  svg {
    width: ${6/16}rem;
    height: ${4/16}rem;
  }
`,na=({disabled:e=!1,error:t,header:a,isMain:r=!1,name:o,onChange:l,oneThatIsCreatingARelationWithAnother:i="",target:d="",value:f=""})=>(0,n.jsxs)(h.x,{background:"neutral100",hasRadius:!0,borderColor:"neutral200",children:[(0,n.jsx)(v.k,{paddingTop:r?4:1,paddingBottom:r?3:1,justifyContent:"center",children:r?(0,n.jsx)(A.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",children:a}):(0,n.jsx)(Ll,{target:d,oneThatIsCreatingARelationWithAnother:i})}),(0,n.jsx)(ae.i,{background:"neutral200"}),(0,n.jsx)(h.x,{padding:4,children:(0,n.jsx)(F.jm,{disabled:e,error:t?.id||null,intlLabel:{id:c("form.attribute.item.defineRelation.fieldName"),defaultMessage:"Field name"},name:o,onChange:l,type:"text",value:f})})]}),Rl=(0,O.default)(h.x)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({theme:e})=>e.colors.primary600};
    z-index: 0;
  }
`,El=(0,O.default)(h.x)`
  background: ${({theme:e,isSelected:t})=>e.colors[t?"primary100":"neutral0"]};
  border: 1px solid
    ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral200"]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`,Il=(0,O.default)(v.k)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,Ol={oneWay:zn.Z,oneToOne:kn.Z,oneToMany:Bn.Z,manyToOne:wn.Z,manyToMany:Dn.Z,manyWay:Pn.Z},Dl=({naturePickerType:e,oneThatIsCreatingARelationWithAnother:t,relationType:a,target:r})=>{const o=(0,Ke.I0)(),{formatMessage:l}=(0,Y.Z)(),{contentTypes:i,modifiedData:d}=ze(),f=["oneWay","oneToOne","oneToMany","manyToOne","manyToMany","manyWay"],m=["oneWay","manyWay"],p=(e==="contentType"?D(d,[e,"schema","kind"],""):e)==="collectionType"?f:m,M=a==="manyToOne",T=D(i,[r,"schema","displayName"],"unknown"),b=M?T:t,$=M?t:T,W=Ot(b,a==="manyToMany"?2:1),S=D(i,[r,"schema","restrictRelationsTo"],null),L=Ot($,["manyToMany","oneToMany","manyToOne","manyWay"].includes(a)?2:1);return a?(0,n.jsxs)(v.k,{style:{flex:1},children:[(0,n.jsx)(Rl,{children:(0,n.jsx)(v.k,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center",children:(0,n.jsx)(U.k,{tagName:"button",children:(0,n.jsx)(v.k,{gap:3,children:p.map(N=>{const k=Ol[N],_=S===null||S.includes(N);return(0,n.jsx)(El,{as:"button",isSelected:a===N,disabled:!_,onClick:()=>{_&&o({type:C.a,target:{oneThatIsCreatingARelationWithAnother:t,targetContentType:r,value:N}})},padding:2,type:"button",children:(0,n.jsx)(k,{},N)},N)})})})})}),(0,n.jsxs)(Il,{justifyContent:"center",children:[(0,n.jsxs)(A.Z,{children:[Qn(W,{length:24}),"\xA0"]}),(0,n.jsxs)(A.Z,{textColor:"primary600",children:[l({id:c(`relation.${a}`)}),"\xA0"]}),(0,n.jsx)(A.Z,{children:Qn(L,{length:24})})]})]}):null},wl=({formErrors:e,mainBoxHeader:t,modifiedData:a,naturePickerType:r,onChange:o})=>{const l=(0,C.g)(a.relation,a.targetAttribute);return(0,n.jsxs)(v.k,{style:{position:"relative"},children:[(0,n.jsx)(na,{isMain:!0,header:t,error:e?.name||null,name:"name",onChange:o,value:a?.name||""}),(0,n.jsx)(Dl,{naturePickerType:r,oneThatIsCreatingARelationWithAnother:t,relationType:l,target:a.target}),(0,n.jsx)(na,{disabled:["oneWay","manyWay"].includes(l),error:e?.targetAttribute||null,name:"targetAttribute",onChange:o,oneThatIsCreatingARelationWithAnother:t,target:a.target,value:a?.targetAttribute||""})]})},Pl=({error:e=null,intlLabel:t,name:a,onChange:r,value:o=void 0})=>{const{formatMessage:l}=(0,Y.Z)(),{allComponentsCategories:i}=ze(),[d,f]=(0,u.useState)(i),m=e?l({id:e,defaultMessage:e}):"",g=l(t),p=T=>{r({target:{name:a,value:T,type:"select-category"}})},M=T=>{f(b=>[...b,T]),p(T)};return(0,n.jsx)(Oa.XU,{error:m,id:a,label:g,name:a,onChange:p,onCreateOption:M,value:o,children:d.map(T=>(0,n.jsx)(Da.O,{value:T,children:T},T))})},Bl=({error:e=null,intlLabel:t,isAddingAComponentToAnotherComponent:a,isCreating:r,isCreatingComponentWhileAddingAField:o,componentToCreate:l,name:i,onChange:d,targetUid:f,forTarget:m,value:g})=>{const{formatMessage:p}=(0,Y.Z)(),M=e?p({id:e,defaultMessage:e}):"",T=p(t),{componentsGroupedByCategory:b,componentsThatHaveOtherComponentInTheirAttributes:$}=ze(),W=["component","components"].includes(m);let S=Object.entries(b).reduce((L,N)=>{const[k,_]=N,he=_.map($e=>({uid:$e.uid,label:$e.schema.displayName,categoryName:k}));return[...L,...he]},[]);return a&&(S=S.filter(L=>!$.includes(L.uid))),W&&(S=S.filter(L=>L.uid!==f)),o&&(S=[{uid:g,label:l?.displayName,categoryName:l?.category}]),(0,n.jsx)(se.P,{disabled:o||!r,error:M,label:T,id:i,name:i,onChange:L=>{d({target:{name:i,value:L,type:"select-category"}})},value:g||"",children:S.map(L=>(0,n.jsx)(Ne.W,{value:L.uid,children:`${L.categoryName} - ${L.label}`},L.uid))})},kl=({dynamicZoneTarget:e,intlLabel:t,name:a,onChange:r,value:o})=>{const{formatMessage:l}=(0,Y.Z)(),{componentsGroupedByCategory:i,modifiedData:d}=ze(),m=wt(d.contentType.schema.attributes,e)?.components||[],g=Object.keys(i).reduce((T,b)=>{const $=i[b].filter(({uid:W})=>!m.includes(W));return $.length>0&&(T[b]=$),T},{}),p=Object.entries(g).reduce((T,b)=>{const[$,W]=b,S={label:$,children:W.map(({uid:L,schema:{displayName:N}})=>({label:N,value:L}))};return T.push(S),T},[]),M=l({id:c("components.SelectComponents.displayed-value"),defaultMessage:"{number, plural, =0 {# components} one {# component} other {# components}} selected"},{number:o?.length??0});return(0,n.jsx)(P.Q,{id:"select1",label:l(t),customizeContent:()=>M,name:a,onChange:T=>{r({target:{name:a,value:T,type:"select-components"}})},options:p,value:o||[]})},zl=({intlLabel:e,error:t=void 0,modifiedData:a,name:r,onChange:o,options:l,value:i=""})=>{const{formatMessage:d}=(0,Y.Z)(),f=d(e),m=t?d({id:t,defaultMessage:t}):"",g=p=>{o({target:{name:r,value:p,type:"select"}}),i&&a.default!==void 0&&a.default!==null&&o({target:{name:"default",value:null}})};return(0,n.jsx)(se.P,{error:m,label:f,id:r,name:r,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:p,disabled:M,hidden:T},key:b,value:$})=>(0,n.jsx)(Ne.W,{value:$,disabled:M,hidden:T,children:d({id:p.id,defaultMessage:p.defaultMessage},p.values)},b))})},aa=({intlLabel:e,error:t=void 0,modifiedData:a,name:r,onChange:o,options:l,value:i=""})=>{const{formatMessage:d}=(0,Y.Z)(),f=d(e),m=t?d({id:t,defaultMessage:t}):"",g=p=>{o({target:{name:r,value:p,type:"select"}}),i&&(p==="biginteger"&&i!=="biginteger"&&(a.default!==void 0&&a.default!==null&&o({target:{name:"default",value:null}}),a.max!==void 0&&a.max!==null&&o({target:{name:"max",value:null}}),a.min!==void 0&&a.min!==null&&o({target:{name:"min",value:null}})),typeof p=="string"&&["decimal","float","integer"].includes(p)&&i==="biginteger"&&(a.default!==void 0&&a.default!==null&&o({target:{name:"default",value:null}}),a.max!==void 0&&a.max!==null&&o({target:{name:"max",value:null}}),a.min!==void 0&&a.min!==null&&o({target:{name:"min",value:null}})))};return(0,n.jsx)(se.P,{error:m,label:f,id:r,name:r,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:p,disabled:M,hidden:T},key:b,value:$})=>(0,n.jsx)(Ne.W,{value:$,disabled:M,hidden:T,children:d(p)},b))})};aa.defaultProps={error:void 0,value:""};const Ul=({description:e=null,error:t=null,intlLabel:a,modifiedData:r,name:o,onChange:l,value:i=null})=>{const{formatMessage:d}=(0,Y.Z)(),f=(0,u.useRef)(l),m=r?.displayName||"";(0,u.useEffect)(()=>{m?f.current({target:{name:o,value:(0,C.n)(m)}}):f.current({target:{name:o,value:""}})},[m,o]);const g=t?d({id:t,defaultMessage:t}):"",p=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=d(a);return(0,n.jsx)(je.o,{error:g,label:M,id:o,hint:p,name:o,onChange:l,value:i||""})},sa=({form:e,formErrors:t,genericInputProps:a,modifiedData:r,onChange:o})=>{const{formatMessage:l}=(0,Y.Z)();return(0,n.jsx)(n.Fragment,{children:e.map((i,d)=>i.items.length===0?null:(0,n.jsxs)(h.x,{children:[i.sectionTitle&&(0,n.jsx)(h.x,{paddingBottom:4,children:(0,n.jsx)(A.Z,{variant:"delta",as:"h3",children:l(i.sectionTitle)})}),(0,n.jsx)(q.r,{gap:4,children:i.items.map((f,m)=>{const g=`${d}.${m}`,p=D(r,f.name,void 0),M=Object.keys(t).find(b=>b===f.name),T=M?t[M].id:D(t,[...f.name.split(".").filter(b=>b!=="componentToCreate"),"id"],null);return f.type==="pushRight"?(0,n.jsx)(te.P,{col:f.size||6,children:(0,n.jsx)("div",{})},f.name||g):(0,n.jsx)(te.P,{col:f.size||6,children:(0,n.jsx)(F.jm,{...f,...a,error:T,onChange:o,value:p})},f.name||g)})})]},d))})},Wl=({description:e=null,disabled:t=!1,error:a="",intlLabel:r,labelAction:o,name:l,onChange:i,placeholder:d=null,value:f=""})=>{const{formatMessage:m}=(0,Y.Z)(),g=a?m({id:a,defaultMessage:a}):"",p=e?m({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=m(r),T=d?m({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",b=Array.isArray(f)?f.join(`
`):"",$=W=>{const S=W.target.value.split(`
`);i({target:{name:l,value:S}})};return(0,n.jsx)(wa.g,{disabled:t,error:g,label:M,labelAction:o,id:l,hint:p,name:l,onChange:$,placeholder:T,value:b,children:b})},Pe={name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.attribute.form.base.name.description"),defaultMessage:"No space is allowed for the name of the attribute"}},Vl={sections:[{sectionTitle:null,items:[Pe]}]},_e={base(e=""){return[{sectionTitle:null,items:[{name:`${e}displayName`,type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display Name"}},{name:`${e}category`,type:"select-category",intlLabel:{id:c("modalForm.components.create-component.category.label"),defaultMessage:"Select a category or enter a name to create a new one"}}]},{sectionTitle:null,items:[{name:`${e}icon`,type:"icon-picker",size:12,intlLabel:{id:c("modalForm.components.icon.label"),defaultMessage:"Icon"}}]}]},advanced(){return[]}},E={default:{name:"default",type:"text",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"}},max:{name:"max",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximum"),defaultMessage:"Maximum value"}},maxLength:{name:"maxLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximumLength"),defaultMessage:"Maximum length"}},min:{name:"min",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimum"),defaultMessage:"Minimum value"}},minLength:{name:"minLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimumLength"),defaultMessage:"Minimum length"}},private:{name:"private",type:"checkbox",intlLabel:{id:c("form.attribute.item.privateField"),defaultMessage:"Private field"},description:{id:c("form.attribute.item.privateField.description"),defaultMessage:"This field will not show up in the API response"}},regex:{intlLabel:{id:c("form.attribute.item.text.regex"),defaultMessage:"RegExp pattern"},name:"regex",type:"text",description:{id:c("form.attribute.item.text.regex.description"),defaultMessage:"The text of the regular expression"}},required:{name:"required",type:"checkbox",intlLabel:{id:c("form.attribute.item.requiredField"),defaultMessage:"Required field"},description:{id:c("form.attribute.item.requiredField.description"),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:"unique",type:"checkbox",intlLabel:{id:c("form.attribute.item.uniqueField"),defaultMessage:"Unique field"},description:{id:c("form.attribute.item.uniqueField.description"),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}},Hl={blocks(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.private]}]}},boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:!0,type:"select-default-boolean",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},name:"default",options:[{value:"true",key:"true",metadatas:{intlLabel:{id:"true",defaultMessage:"true"}}},{value:"",key:"null",metadatas:{intlLabel:{id:"null",defaultMessage:"null"}}},{value:"false",key:"false",metadatas:{intlLabel:{id:"false",defaultMessage:"false"}}}]}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.private]}]}},component({repeatable:e},t){return t==="1"?{sections:_e.advanced()}:e?{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.private,E.max,E.min]}]}:{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.private]}]}},date({type:e}){return{sections:[{sectionTitle:null,items:[{...E.default,type:e||"date",value:null,withDefaultValue:!1,disabled:!e,autoFocus:!1}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.unique,E.private]}]}},dynamiczone(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.max,E.min]}]}},email(){return{sections:[{sectionTitle:null,items:[{...E.default,type:"email"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.unique,E.maxLength,E.minLength,E.private]}]}},enumeration(e){return{sections:[{sectionTitle:null,items:[{name:"default",type:"select",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{},options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}}},...(e.enum||[]).filter((t,a)=>e.enum.indexOf(t)===a&&t).map(t=>({key:t,value:t,metadatas:{intlLabel:{id:`${t}.no-override`,defaultMessage:t}}}))]},{intlLabel:{id:c("form.attribute.item.enumeration.graphql"),defaultMessage:"Name override for GraphQL"},name:"enumName",type:"text",validations:{},description:{id:c("form.attribute.item.enumeration.graphql.description"),defaultMessage:"Allows you to override the default generated name for GraphQL"}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.private]}]}},json(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.private]}]}},media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:c("form.attribute.media.allowed-types"),defaultMessage:"Select allowed types of media"},name:"allowedTypes",type:"allowed-types-select",size:7,value:"",validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.private]}]}},number(e){const t=e.type==="decimal"||e.type==="float"?"any":1;return{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"default",type:e.type==="biginteger"?"text":"number",step:t,intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.unique,E.max,E.min,E.private]}]}},password(){return{sections:[{sectionTitle:null,items:[E.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.maxLength,E.minLength,E.private]}]}},relation(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.private]}]}},richtext(){return{sections:[{sectionTitle:null,items:[E.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.maxLength,E.minLength,E.private]}]}},text(){return{sections:[{sectionTitle:null,items:[E.default,E.regex]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.unique,E.maxLength,E.minLength,E.private]}]}},uid(e){return{sections:[{sectionTitle:null,items:[{...E.default,disabled:Boolean(e.targetField),type:"text"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[E.required,E.maxLength,E.minLength,E.private]}]}}},kt={intlLabel:{id:"global.type",defaultMessage:"Type"},name:"createComponent",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.create"),defaultMessage:"Create a new component"},description:{id:c("form.attribute.component.option.create.description"),defaultMessage:"A component is shared across types and components, it will be available and accessible everywhere."},value:!0},{title:{id:c("form.attribute.component.option.reuse-existing"),defaultMessage:"Use an existing component"},description:{id:c("form.attribute.component.option.reuse-existing.description"),defaultMessage:"Reuse a component already created to keep your data consistent across content-types."},value:!1}]},oa={advanced:Hl,base:{component(e,t){if(t==="1"){const a=e.createComponent===!0?_e.base("componentToCreate."):[];return{sections:[{sectionTitle:null,items:[kt]},...a]}}return{sections:[{sectionTitle:null,items:[Pe,{name:"component",type:"select-component",intlLabel:{id:c("modalForm.attributes.select-component"),defaultMessage:"Select a component"},isMultiple:!1}]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"repeatable",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.repeatable"),defaultMessage:"Repeatable component"},description:{id:c("form.attribute.component.option.repeatable.description"),defaultMessage:"Best for multiple instances (array) of ingredients, meta tags, etc.."},value:!0},{title:{id:c("form.attribute.component.option.single"),defaultMessage:"Single component"},description:{id:c("form.attribute.component.option.single.description"),defaultMessage:"Best for grouping fields like full address, main information, etc..."},value:!1}]}]}]}},date(){return{sections:[{sectionTitle:null,items:[Pe,{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",type:"select-date",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"date",value:"date",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.date"),defaultMessage:"date (ex: 01/01/{currentYear})",values:{currentYear:new Date().getFullYear()}}}},{key:"datetime",value:"datetime",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.datetime"),defaultMessage:"datetime (ex: 01/01/{currentYear} 00:00 AM)",values:{currentYear:new Date().getFullYear()}}}},{key:"time",value:"time",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.time"),defaultMessage:"time (ex: 00:00 AM)"}}}]}]}]}},enumeration(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{name:"enum",type:"textarea-enum",size:6,intlLabel:{id:c("form.attribute.item.enumeration.rules"),defaultMessage:"Values (one line per value)"},placeholder:{id:c("form.attribute.item.enumeration.placeholder"),defaultMessage:`Ex:
morning
noon
evening`},validations:{required:!0}}]}]}},media(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"multiple",size:12,type:"boolean-radio-group",radios:[{title:{id:c("form.attribute.media.option.multiple"),defaultMessage:"Multiple media"},description:{id:c("form.attribute.media.option.multiple.description"),defaultMessage:"Best for sliders, carousels or multiple files download"},value:!0},{title:{id:c("form.attribute.media.option.single"),defaultMessage:"Single media"},description:{id:c("form.attribute.media.option.single.description"),defaultMessage:"Best for avatar, profile picture or cover"},value:!1}]}]}]}},number(){return{sections:[{sectionTitle:null,items:[Pe,{intlLabel:{id:c("form.attribute.item.number.type"),defaultMessage:"Number format"},name:"type",type:"select-number",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"integer",value:"integer",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.integer"),defaultMessage:"integer (ex: 10)"}}},{key:"biginteger",value:"biginteger",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.biginteger"),defaultMessage:"biginteger (ex: 123456789)"}}},{key:"decimal",value:"decimal",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.decimal"),defaultMessage:"decimal (ex: 2.22)"}}},{key:"float",value:"float",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.float"),defaultMessage:"decimal (ex: 3.3333333)"}}}]}]}]}},relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:"FIXME",defaultMessage:"FIXME"},name:"relation",size:12,type:"relation"}]}]}},string(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},text(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},uid(e,t,a){const r=a.filter(({type:o})=>["string","text"].includes(o)).map(({name:o})=>({key:o,value:o,metadatas:{intlLabel:{id:`${o}.no-override`,defaultMessage:o}}}));return{sections:[{sectionTitle:null,items:[{...Pe,placeholder:{id:c("modalForm.attribute.form.base.name.placeholder"),defaultMessage:"e.g. slug, seoUrl, canonicalUrl"}},{intlLabel:{id:c("modalForm.attribute.target-field"),defaultMessage:"Attached field"},name:"targetField",type:"select",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"global.none",defaultMessage:"None"}}},...r]}]}]}}}},zt=e=>e?qi(e,{decamelize:!1,lowercase:!1,separator:"_"}):"",ra=/^[A-Za-z][_0-9A-Za-z]*$/,ia=e=>({name:"attributeNameAlreadyUsed",message:F.I0.unique,test(t){return t?!e.includes(t):!1}}),Ut=e=>({name:"forbiddenAttributeName",message:c("error.attributeName.reserved-name"),test(t){return t?!e.includes(t):!1}}),y={default:()=>j.Z_().nullable(),max:()=>j.Rx().integer().nullable(),min:()=>j.Rx().integer().when("max",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),maxLength:()=>j.Rx().integer().positive(c("error.validation.positive")).nullable(),minLength:()=>j.Rx().integer().min(0).when("maxLength",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),name(e,t){return j.Z_().test(ia(e)).test(Ut(t)).matches(ra,F.I0.regex).required(F.I0.required)},required:()=>j.O7(),type:()=>j.Z_().required(F.I0.required),unique:()=>j.O7().nullable()},Wt=(e,t)=>({name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength(),regex:j.Z_().test({name:"isValidRegExpPattern",message:c("error.validation.regex"),test(r){return new RegExp(r||"")!==null}}).nullable()}),Vt=()=>({name:"isMinSuperiorThanMax",message:c("error.validation.minSupMax"),test(e){if(!e)return!0;const{max:t}=this.parent;return!t||Number.isNaN(Dt(e))?!0:Dt(t)>=Dt(e)}}),dt={date(e,t){const a={name:y.name(e,t),type:y.type()};return j.Ry(a)},datetime(e,t){const a={name:y.name(e,t),type:y.type()};return j.Ry(a)},time(e,t){const a={name:y.name(e,t),type:y.type()};return j.Ry(a)},default(e,t){const a={name:y.name(e,t),type:y.type()};return j.Ry(a)},biginteger(e,t){const a={name:y.name(e,t),type:y.type(),default:j.Z_().nullable().matches(/^-?\d*$/),unique:y.unique(),required:y.required(),max:j.Z_().nullable().matches(/^-?\d*$/,F.I0.regex),min:j.Z_().nullable().test(Vt()).matches(/^-?\d*$/,F.I0.regex)};return j.Ry(a)},boolean(e,t){const a={name:y.name(e,t),default:j.O7().nullable(),required:y.required(),unique:y.unique()};return j.Ry(a)},component(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),max:y.max(),min:y.min(),component:j.Z_().required(F.I0.required)};return j.Ry(a)},decimal(e,t){const a={name:y.name(e,t),type:y.type(),default:j.Rx(),required:y.required(),max:j.Rx(),min:j.Rx().test(Vt())};return j.Ry(a)},dynamiczone(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),max:y.max(),min:y.min()};return j.Ry(a)},email(e,t){const a={name:y.name(e,t),type:y.type(),default:j.Z_().email().nullable(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.Ry(a)},enumeration(e,t){const a=/^[_A-Za-z][_0-9A-Za-z]*$/,r={name:j.Z_().test(ia(e)).test(Ut(t)).matches(a,F.I0.regex).required(F.I0.required),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),enum:j.IX().of(j.Z_()).min(1,F.I0.min).test({name:"areEnumValuesUnique",message:c("error.validation.enum-duplicate"),test(o){return o?!Ji(o.map(zt).filter((i,d,f)=>f.indexOf(i)!==d)).length:!1}}).test({name:"doesNotHaveEmptyValues",message:c("error.validation.enum-empty-string"),test:o=>o?!o.map(zt).some(l=>l===""):!1}).test({name:"doesMatchRegex",message:c("error.validation.enum-regex"),test:o=>o?o.map(zt).every(l=>a.test(l)):!1}),enumName:j.Z_().nullable()};return j.Ry(r)},float(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),default:j.Rx(),max:j.Rx(),min:j.Rx().test(Vt())};return j.Ry(a)},integer(e,t){const a={name:y.name(e,t),type:y.type(),default:j.Rx().integer(),unique:y.unique(),required:y.required(),max:y.max(),min:y.min()};return j.Ry(a)},json(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),unique:y.unique()};return j.Ry(a)},media(e,t){const a={name:y.name(e,t),type:y.type(),multiple:j.O7(),required:y.required(),allowedTypes:j.IX().of(j.Z_().oneOf(["images","videos","files","audios"])).min(1).nullable()};return j.Ry(a)},password(e,t){const a={name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.Ry(a)},relation(e,t,a,{initialData:r,modifiedData:o}){const l={name:y.name(e,t),target:j.Z_().required(F.I0.required),relation:j.Z_().required(),type:j.Z_().required(),targetAttribute:j.Vo(()=>{const i=(0,C.g)(o.relation,o.targetAttribute);if(i==="oneWay"||i==="manyWay")return j.Z_().nullable();const d=j.Z_().test(Ut(t)),m=[...a.map(({name:g})=>g),o.name].filter(g=>g!==r.targetAttribute);return d.matches(ra,F.I0.regex).test({name:"forbiddenTargetAttributeName",message:c("error.validation.relation.targetAttribute-taken"),test(g){return g?!m.includes(g):!1}}).required(F.I0.required)})};return j.Ry(l)},richtext(e,t){const a={name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.Ry(a)},blocks(e,t){const a={name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.Ry(a)},string(e,t){const a=Wt(e,t);return j.Ry(a)},text(e,t){const a=Wt(e,t);return j.Ry(a)},uid(e,t){const a=Wt(e,t);return j.Ry(a)}},la=/^[A-Za-z][-_0-9A-Za-z]*$/,Gl=e=>{const t={name:j.Z_().matches(la,F.I0.regex).test({name:"nameNotAllowed",message:F.I0.unique,test(a){return a?!e.includes(a?.toLowerCase()):!1}}).required(F.I0.required)};return j.Ry(t)},Yl={base:{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.editCategory.base.name.description"),defaultMessage:"No space is allowed for the name of the category"}}]}]}},Ql=(e,t,a)=>{const r={displayName:j.Z_().test({name:"nameAlreadyUsed",message:F.I0.unique,test(o){if(!o)return!1;const l=(0,C.c)(o,a);return!e.includes(l)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(o){return o?!t.includes(o?.trim()?.toLowerCase()):!1}}).required(F.I0.required),category:j.Z_().matches(la,F.I0.regex).required(F.I0.required),icon:j.Z_()};return j.Ry(r)},da={name:"displayName",type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display name"}},Ht={advanced:{default(){return{sections:[{items:[{intlLabel:{id:c("contentType.draftAndPublish.label"),defaultMessage:"Draft & publish"},description:{id:c("contentType.draftAndPublish.description"),defaultMessage:"Allows writing a draft version of an entry, before it is published"},name:"draftAndPublish",type:"toggle-draft-publish",validations:{}}]}]}}},base:{create(){return{sections:[{sectionTitle:null,items:[da,{description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text-singular"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text-plural"}]}]}},edit(){return{sections:[{sectionTitle:null,items:[da,{disabled:!0,description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{disabled:!0,description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text"},{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"kind",type:"content-type-radio-group",size:12,radios:[{title:{id:c("form.button.collection-type.name"),defaultMessage:"Collection Type"},description:{id:c("form.button.collection-type.description"),defaultMessage:"Best for multiple instances like articles, products, comments, etc."},value:"collectionType"},{title:{id:c("form.button.single-type.name"),defaultMessage:"Single Type"},description:{id:c("form.button.single-type.description"),defaultMessage:"Best for single instance like about us, homepage, etc."},value:"singleType"}]}]}]}}}},Xl=({usedContentTypeNames:e=[],reservedModels:t=[],singularNames:a=[],pluralNames:r=[],collectionNames:o=[]})=>{const l={displayName:j.Z_().test({name:"nameAlreadyUsed",message:F.I0.unique,test(i){if(!i)return!1;const d=(0,C.b)(i);return!e.includes(d)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){return i?!t.includes(i?.trim()?.toLowerCase()):!1}}).required(F.I0.required),pluralName:j.Z_().test({name:"pluralNameAlreadyUsed",message:F.I0.unique,test(i){return i?!r.includes(i):!1}}).test({name:"pluralNameAlreadyUsedAsSingular",message:c("error.contentType.pluralName-equals-singularName"),test(i){return i?!a.includes(i):!1}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.pluralName-used"),test(i,d){return i?d.parent.singularName!==i:!1}}).test({name:"pluralNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){return i?!t.includes(i?.trim()?.toLowerCase()):!1}}).test({name:"pluralNameNotAlreadyUsedInCollectionName",message:c("error.contentType.pluralName-equals-collectionName"),test(i){return i?!o.includes(i?.trim()?.toLowerCase()):!1}}).required(F.I0.required),singularName:j.Z_().test({name:"singularNameAlreadyUsed",message:F.I0.unique,test(i){return i?!a.includes(i):!1}}).test({name:"singularNameAlreadyUsedAsPlural",message:c("error.contentType.singularName-equals-pluralName"),test(i){return i?!r.includes(i):!1}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.singularName-used"),test(i,d){return i?d.parent.pluralName!==i:!1}}).test({name:"singularNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){return i?!t.includes(i?.trim()?.toLowerCase()):!1}}).required(F.I0.required),draftAndPublish:j.O7(),kind:j.Z_().oneOf(["singleType","collectionType"]),reviewWorkflows:j.O7()};return j.Ry(l)},Gt={advanced:{default(){return{sections:_e.advanced()}}},base:{createComponent(){return{sections:[{sectionTitle:null,items:[kt]},..._e.base("componentToCreate.")]}},default(){return{sections:[{sectionTitle:null,items:[kt]},{sectionTitle:null,items:[{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{name:"components",type:"select-components",intlLabel:{id:c("modalForm.attributes.select-components"),defaultMessage:"Select the components"},isMultiple:!0}]}]}}}},ca=(e,t)=>{e.forEach(a=>{if(!("sectionTitle"in a)){t[0].items?.push(a);return}t.push(a)})},ua=(e,t)=>e.filter(({name:a})=>a!==t.initialData.name).map(({name:a})=>a),Ge={customField:{schema({schemaAttributes:e,attributeType:t,customFieldValidator:a,reservedNames:r,schemaData:o,ctbFormsAPI:l}){const i=ua(e,o);dt[t];let d;return t==="relation"?d=dt[t](i,r.attributes,[],{initialData:{},modifiedData:{}}):d=dt[t](i,r.attributes),l.makeCustomFieldValidator(d,a,i,r.attributes,o)},form:{base({customField:e}){const t=[{sectionTitle:null,items:[Pe]}];return e.options?.base&&ca(e.options.base,t),{sections:t}},advanced({customField:e,data:t,step:a,extensions:r,...o}){const l=[{sectionTitle:null,items:[]}],i=r.getAdvancedForm(["attribute",e.type],{data:t,type:e.type,step:a,...o});if(e.options?.advanced&&ca(e.options.advanced,l),i){const d={sectionTitle:{id:c("modalForm.custom-fields.advanced.settings.extended"),defaultMessage:"Extended settings"},items:i};l.push(d)}return{sections:l}}}},attribute:{schema(e,t,a,r,o,l){const i=e?.schema?.attributes??[],d=ua(i,o);try{const f=dt[t](d,a.attributes,r,o);return l.makeValidator(["attribute",t],f,d,a.attributes,r,o)}catch(f){return console.error("Error yup build schema",f),dt.default(d,a.attributes)}},form:{advanced({data:e,type:t,step:a,extensions:r,...o}){try{const l=oa.advanced[t](e,a).sections,i=r.getAdvancedForm(["attribute",t],{data:e,type:t,step:a,...o});return{sections:l.reduce((f,m)=>(m.sectionTitle===null?f.push(m):f.push({...m,items:[...m.items,...i]}),f),[])}}catch(l){return console.error(l),{sections:[]}}},base({data:e,type:t,step:a,attributes:r}){try{return oa.base[t](e,a,r)}catch{return Vl}}}},contentType:{schema(e,t,a,r,o,l){const i=Object.values(l).map(b=>b.schema.singularName),d=Object.values(l).map(b=>b?.schema?.pluralName??""),f=t?e.filter(b=>b!==a):e,m=t?i.filter(b=>{const{schema:$}=l[a];return $.singularName!==b}):i,g=t?d.filter(b=>{const{schema:$}=l[a];return $.pluralName!==b}):d,p=Object.values(l).map(b=>b?.schema?.collectionName??""),M=t?p.filter(b=>{const{schema:$}=l[a],W=$.pluralName,S=$.collectionName;return b!==W||b!==S}):p,T=Xl({usedContentTypeNames:f,reservedModels:r.models,singularNames:m,pluralNames:g,collectionNames:M});return o.makeValidator(["contentType"],T,f,r.models,m,g)},form:{base({actionType:e}){return e==="create"?Ht.base.create():Ht.base.edit()},advanced({extensions:e}){const t=Ht.advanced.default().sections.map(r=>r.items).flat(),a=e.getAdvancedForm(["contentType"]);return{sections:[{items:[...t,...a]}]}}}},component:{schema(e,t,a,r=!1,o=null){const l=r?e.filter(i=>i!==o):e;return Ql(l,a.models,t)},form:{advanced(){return{sections:_e.advanced()}},base(){return{sections:_e.base()}}}},addComponentToDynamicZone:{form:{advanced(){return Gt.advanced.default()},base({data:e}){return e?.createComponent??!1?Gt.base.createComponent():Gt.base.default()}}},editCategory:{schema(e,t){const a=e.filter(r=>r!==t.name).map(r=>r.toLowerCase());return Gl(a)},form:{advanced:()=>({sections:[]}),base(){return Yl.base}}}},Kl=()=>e=>e[`${C.p}_formModal`]||C.i,Jl=()=>(0,Xn.P1)(Kl(),e=>e),ql=(e,t)=>{const a=D(e,["contentType","schema","kind"],"");return a==="singleType"||a===t.kind?!0:D(e,["contentType","schema","attributes"],[]).filter(({relation:l,type:i,targetAttribute:d})=>{const f=(0,C.g)(l,d);return i==="relation"&&!["oneWay","manyWay"].includes(f||"")}).length===0},_l=(e="",t,a)=>{const r=["text","boolean","blocks","json","number","email","date","password","media","enumeration","relation","richtext"],o=e==="contentType",l=a.includes(t),i=!o&&!l;return o?[[...r.slice(0,-1),"uid",...r.slice(-1)],["component","dynamiczone"]]:i?[r,["component"]]:[r]},ma=e=>e.reduce((t,a)=>{const r=a.items.reduce((o,l)=>(l.name&&o.push(l.name),o),[]);return[...t,...r]},[]),ed=()=>{const{onCloseModal:e,onNavigateToChooseAttributeModal:t,onNavigateToAddCompoToDZModal:a,onNavigateToCreateComponentStep2:r,actionType:o,attributeName:l,attributeType:i,customFieldUid:d,categoryName:f,dynamicZoneTarget:m,forTarget:g,modalType:p,isOpen:M,kind:T,step:b,targetUid:$,showBackLink:W}=Je(),S=(0,F.mZ)().get(d),L=(0,u.useRef)(),N=(0,u.useMemo)(Jl,[]),k=(0,Ke.I0)(),_=(0,F.lm)(),he=(0,Ke.v9)(G=>N(G),Ke.wU),{push:$e}=(0,Ze.k6)(),{trackUsage:V}=(0,F.rS)(),{formatMessage:Te}=(0,Y.Z)(),{getPlugin:ee}=(0,F.j1)(),pe=ee(C.p)?.apis.forms,le=pe.components.inputs,{addAttribute:Ue,addCustomFieldAttribute:ye,addCreatedComponentToDynamicZone:J,allComponentsCategories:R,changeDynamicZoneComponents:Yt,contentTypes:et,components:ut,createSchema:tt,deleteCategory:Qt,deleteData:Tt,editCategory:Xt,editCustomFieldAttribute:Kt,submitData:Jt,modifiedData:be,nestedComponents:qt,setModifiedData:_t,sortedContentTypesList:en,updateSchema:jt,reservedNames:Ye}=ze(),{componentToCreate:mt,formErrors:We,initialData:fe,isCreatingComponentWhileAddingAField:pt,modifiedData:x}=he,I=g==="contentType"||g==="component"?[g]:[g,$];(0,u.useEffect)(()=>{if(M){const G=en.filter(_n);p==="editCategory"&&_t(),o==="edit"&&p==="attribute"&&g==="contentType"&&V("willEditFieldOfContentType");const Ae=[...I,"schema","attributes"],De=wt(D(be,Ae,[]),m)||null;if(p==="editCategory"&&o==="edit"&&k({type:C.S,modalType:p,actionType:o,data:{name:f}}),p==="contentType"&&o==="create"&&k({type:C.S,modalType:p,actionType:o,data:{draftAndPublish:!0},pluginOptions:{}}),p==="contentType"&&o==="edit"){const{displayName:X,draftAndPublish:ge,kind:Le,pluginOptions:Ce,pluralName:Od,reviewWorkflows:Dd,singularName:wd}=D(be,[...I,"schema"],{displayName:null,pluginOptions:{},singularName:null,pluralName:null});k({type:C.S,actionType:o,modalType:p,data:{displayName:X,draftAndPublish:ge,kind:Le,pluginOptions:Ce,pluralName:Od,reviewWorkflows:Dd??!1,singularName:wd}})}if(p==="component"&&o==="edit"){const X=D(be,I,{});k({type:C.S,actionType:o,modalType:p,data:{displayName:X.schema.displayName,category:X.category,icon:X.schema.icon}})}if(p==="addComponentToDynamicZone"&&o==="edit"){const X={...De,components:[],name:m,createComponent:!1,componentToCreate:{type:"component"}};k({type:C.d,attributeToEdit:X})}if(i){const ge={...wt(D(be,Ae,[]),l),name:l};i==="component"&&o==="edit"&&(ge.repeatable||Gn(ge,"repeatable",!1)),k(p==="customField"?{type:C.e,customField:S,isEditing:o==="edit",modifiedDataToSetForEditing:ge,forTarget:g}:{type:C.f,attributeType:i,nameToSetForRelation:D(G,["0","title"],"error"),targetUid:D(G,["0","uid"],"error"),isEditing:o==="edit",modifiedDataToSetForEditing:ge,step:b,forTarget:g})}}else k({type:C.R})},[o,l,i,f,m,g,M,p]);const H=p==="contentType",ue=p==="component",ve=p==="attribute",Ie=p==="customField",Oe=i==="component"&&ve,Qe=o==="create",Xe=D(x,"createComponent",!1)||pt,nt=b==="1",Ta=p==="editCategory",ja=p==="chooseAttribute",tn=(0,C.b)(x.displayName||""),nn=D(be,[...I,"schema","attributes"],null),Cd=async()=>{let G;const Ae=Xe&&b==="1"?D(x,"componentToCreate",{}):x;if(H)G=Ge.contentType.schema(Object.keys(et),o==="edit",D(be,[...I,"uid"],null),Ye,pe,et);else if(ue)G=Ge.component.schema(Object.keys(ut),x.category||"",Ye,o==="edit",D(be,[...I,"uid"],null));else if(Ie)G=Ge.customField.schema({schemaAttributes:D(be,[...I,"schema","attributes"],[]),attributeType:S.type,reservedNames:Ye,schemaData:{modifiedData:x,initialData:fe},ctbFormsAPI:pe,customFieldValidator:S.options?.validator});else if(Oe&&Xe&&nt)G=Ge.component.schema(Object.keys(ut),D(x,"componentToCreate.category",""),Ye,pe);else if(ve&&!nt){const De=i==="relation"?"relation":x.type;let X=[];if(De==="relation"){const ge=D(x,["target"],null);X=D(et,[ge,"schema","attributes"],[]).filter(({name:Ce})=>o!=="edit"?!0:Ce!==fe.targetAttribute)}G=Ge.attribute.schema(D(be,I,{}),De,Ye,X,{modifiedData:x,initialData:fe},pe)}else if(Ta)G=Ge.editCategory.schema(R,fe);else if(nt&&Xe)G=Ge.component.schema(Object.keys(ut),D(x,"componentToCreate.category",""),Ye,pe);else return;await G.validate(Ae,{abortEarly:!1})},Ma=(0,u.useCallback)(({target:{name:G,value:Ae,type:De,...X}})=>{const ge=["enumName","max","min","maxLength","minLength","regex","default"];let Le;ge.includes(G)&&Ae===""?Le=null:Le=Ae;const Ce=Object.assign({},We);G==="max"&&delete Ce.min,G==="maxLength"&&delete Ce.minLength,delete Ce[G],k({type:C.h,errors:Ce}),k({type:C.j,keys:G.split("."),value:Le,...X})},[k,We]),Fe=async(G,Ae=Qe)=>{G.preventDefault();try{await Cd(),Md(Ae);const De=g==="components"?$:tn;if(H)if(Qe)tt({...x,kind:T},p,tn),$e({pathname:`/plugins/${C.p}/content-types/${tn}`}),t({forTarget:g,targetUid:De});else{ql(be,x)?(e(),Jt(x)):_({type:"warning",message:{id:"notification.contentType.relations.conflict"}});return}else if(p==="component")if(Qe){const X=(0,C.c)(x.displayName,x.category),{category:ge,...Le}=x;tt(Le,"component",X,ge),$e({pathname:`/plugins/${C.p}/component-categories/${ge}/${X}`}),t({forTarget:g,targetUid:X})}else{jt(x,p,$),e();return}else if(Ta){if(Yn(fe.name)===Yn(x.name)){e();return}Xt(fe.name,x);return}else if(Ie){const X={attributeToSet:{...x,customField:d},forTarget:g,targetUid:$,initialAttribute:fe};o==="edit"?Kt(X):ye(X),Ae?t({forTarget:g,targetUid:De}):e();return}else if(ve&&!Xe){if(i==="dynamiczone"){Ue(x,g,$,o==="edit",fe),Qe?(k({type:C.k}),L.current!==void 0&&L.current._handlers.setSelectedTabIndex(0),a({dynamicZoneTarget:x.name})):e();return}if(!Oe){Ue(x,g,$,o==="edit",fe),Ae?t({forTarget:g,targetUid:De}):e();return}if(nt){r(),k({type:C.l,forTarget:g});return}Ue(x,g,$,o==="edit",fe,!0),Ae?t({forTarget:g,targetUid:$}):e()}else if(ve&&Xe){if(nt){V("willCreateComponentFromAttributesModal"),k({type:C.m,forTarget:g}),r();return}const{category:X,type:ge,...Le}=mt,Ce=(0,C.c)(mt.displayName,X);tt(Le,ge,Ce,X,Xe),Ue(x,g,$,!1),k({type:C.R}),Ae?t({forTarget:"components",targetUid:Ce}):e();return}else{if(nt)if(Xe){const{category:X,type:ge,...Le}=x.componentToCreate,Ce=(0,C.c)(x.componentToCreate.displayName,X);tt(Le,ge,Ce,X,Xe),J(m,[Ce]),t({forTarget:"components",targetUid:Ce})}else Yt(m,x.components),e();else console.error("This case is not handled");return}k({type:C.R})}catch(De){const X=(0,F.CJ)(De);k({type:C.h,errors:X})}},Td=()=>{window.confirm(Te({id:"window.confirm.close-modal.file",defaultMessage:"Are you sure? Your changes will be lost."}))&&(e(),k({type:C.R}))},$a=()=>{It(x,fe)?(e(),k({type:C.R})):Td()},jd=G=>{if(G==="advanced"){if(H){V("didSelectContentTypeSettings");return}g==="contentType"&&V("didSelectContentTypeFieldSettings")}},Md=G=>{p==="attribute"&&g==="contentType"&&i!=="dynamiczone"&&G&&V("willAddMoreFieldToContentType")},$d=()=>!!(p==="editCategory"||p==="component"||Xi(x,"createComponent")),Sd=_l(g,$,qt);if(!M||!p)return null;const Sa=D(Ge,[p,"form"],{advanced:()=>({sections:[]}),base:()=>({sections:[]})}),Ad=g==="components"||g==="component",Aa={customInputs:{"allowed-types-select":sl,"boolean-radio-group":xl,"checkbox-with-number-field":bl,"icon-picker":Zl,"content-type-radio-group":vl,"radio-group":Pt,relation:wl,"select-category":Pl,"select-component":Bl,"select-components":kl,"select-default-boolean":hl,"select-number":aa,"select-date":zl,"toggle-draft-publish":Cl,"text-plural":Fl,"text-singular":Ul,"textarea-enum":Wl,...le},componentToCreate:mt,dynamicZoneTarget:m,formErrors:We,isAddingAComponentToAnotherComponent:Ad,isCreatingComponentWhileAddingAField:pt,mainBoxHeader:D(be,[...I,"schema","displayName"],""),modifiedData:x,naturePickerType:g,isCreating:Qe,targetUid:$,forTarget:g},Za=Sa.advanced({data:x,type:i,step:b,actionType:o,attributes:nn,extensions:pe,forTarget:g,contentTypeSchema:be.contentType||{},customField:S}).sections,Fa=Sa.base({data:x,type:i,step:b,actionType:o,attributes:nn,extensions:pe,forTarget:g,contentTypeSchema:be.contentType||{},customField:S}).sections,Zd=ma(Fa),Fd=ma(Za),Ld=Object.keys(We).some(G=>Zd.includes(G)),Nd=Object.keys(We).some(G=>Fd.includes(G)),Rd=D(et,[$,"schema","kind"]),Ed=()=>o==="edit"&&nn.every(({name:G})=>G!==x?.name),Id=()=>{Ed()&&V("didEditFieldNameOnContentType")};return(0,n.jsxs)(Pa.P,{onClose:$a,labelledBy:"title",children:[(0,n.jsx)(jl,{actionType:o,attributeName:l,categoryName:f,contentTypeKind:T,dynamicZoneTarget:m,modalType:p,forTarget:g,targetUid:$,attributeType:i,customFieldUid:d,showBackLink:W}),ja&&(0,n.jsx)(gl,{attributes:Sd,forTarget:g,kind:Rd||"collectionType"}),!ja&&(0,n.jsxs)("form",{onSubmit:Fe,children:[(0,n.jsx)(Be.f,{children:(0,n.jsxs)(me.v,{label:"todo",id:"tabs",variant:"simple",ref:L,onTabChange:G=>{G===1&&jd("advanced")},children:[(0,n.jsxs)(v.k,{justifyContent:"space-between",children:[(0,n.jsx)($l,{actionType:o,forTarget:g,kind:T,step:b,modalType:p,attributeType:i,attributeName:l,customField:S}),(0,n.jsxs)(de.m,{children:[(0,n.jsx)(de.O,{hasError:Ld,children:Te({id:c("popUpForm.navContainer.base"),defaultMessage:"Basic settings"})}),(0,n.jsx)(de.O,{hasError:Nd,disabled:$d(),children:Te({id:c("popUpForm.navContainer.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,n.jsx)(ae.i,{}),(0,n.jsx)(h.x,{paddingTop:6,children:(0,n.jsxs)(re.n,{children:[(0,n.jsx)(re.x,{children:(0,n.jsx)(v.k,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(sa,{form:Fa,formErrors:We,genericInputProps:Aa,modifiedData:x,onChange:Ma})})}),(0,n.jsx)(re.x,{children:(0,n.jsx)(v.k,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(sa,{form:Za,formErrors:We,genericInputProps:Aa,modifiedData:x,onChange:Ma})})})]})})]})}),(0,n.jsx)(Ba.m,{endActions:(0,n.jsx)(Tl,{deleteCategory:Qt,deleteContentType:Tt,deleteComponent:Tt,categoryName:fe.name,isAttributeModal:p==="attribute",isCustomFieldModal:p==="customField",isComponentToDzModal:p==="addComponentToDynamicZone",isComponentAttribute:i==="component",isComponentModal:p==="component",isContentTypeModal:p==="contentType",isCreatingComponent:o==="create",isCreatingDz:o==="create",isCreatingComponentAttribute:x.createComponent||!1,isCreatingComponentInDz:x.createComponent||!1,isCreatingComponentWhileAddingAField:pt,isCreatingContentType:o==="create",isEditingAttribute:o==="edit",isDzAttribute:i==="dynamiczone",isEditingCategory:p==="editCategory",isInFirstComponentStep:b==="1",onSubmitAddComponentAttribute:Fe,onSubmitAddComponentToDz:Fe,onSubmitCreateComponent:Fe,onSubmitCreateContentType:Fe,onSubmitCreateDz:Fe,onSubmitEditAttribute:Fe,onSubmitEditCategory:Fe,onSubmitEditComponent:Fe,onSubmitEditContentType:Fe,onSubmitEditCustomFieldAttribute:Fe,onSubmitEditDz:Fe,onClickFinish:Id}),startActions:(0,n.jsx)(ne.z,{variant:"tertiary",onClick:$a,children:Te({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})]})},td=()=>e=>e[`${C.p}_dataManagerProvider`]||C.o,nd=()=>(0,Xn.P1)(td(),e=>e),ad=(e,t)=>{const a=Object.keys(e).filter(r=>{const o=D(e,r,{}),l=D(t,r,{}),i=D(o,["isTemporary"],!1),d=!It(o,l);return i||d});return(0,C.q)(a)},sd=(e,t)=>{const a=fa(D(e,"schema.attributes",[]),t),r=D(e,"isTemporary",!1)?{tmpUID:e.uid}:{uid:e.uid};return Object.assign({},r,{category:e.category},Kn(e.schema,"attributes"),{attributes:a})},pa=(e,t=!1)=>{const a=D(e,"uid",null),r=fa(D(e,"schema.attributes",[]),a),o=t?{category:D(e,"category","")}:{},l=Object.assign(o,Kn(e.schema,"attributes"),{attributes:r});return delete l.uid,delete l.isTemporary,delete l.visible,delete l.restrictRelationsTo,l},fa=(e,t)=>e.reduce((a,{name:r,...o})=>{const l=o,i=l.target===t,d=l.type==="relation",f=D(l,"targetAttribute",null);if(!i)if(d){const m=Object.assign({},l,{targetAttribute:ga(f)});a[r]=Ct(m)}else a[r]=Ct(l);if(i){const m=l.target,g=Object.assign({},l,{target:m,targetAttribute:ga(f)});a[r]=Ct(g)}if(l.customField){const m={...l,type:"customField"};a[r]=Ct(m)}return a},{}),ga=e=>e==="-"?null:e,Ct=e=>Object.keys(e).reduce((t,a)=>(e[a]!==null&&a!=="plugin"&&(t[a]=e[a]),t),{}),od=(e,t,a)=>ad(e,t).map(l=>{const i=D(e,l,{});return sd(i,a)}),rd=e=>el(Object.keys(e).map(t=>({visible:e[t].schema.visible,name:t,title:e[t].schema.displayName,plugin:e[t].plugin||null,uid:t,to:`/plugins/${C.p}/content-types/${t}`,kind:e[t].schema.kind,restrictRelationsTo:e[t].schema.restrictRelationsTo})).filter(t=>t!==null),t=>_i(t.title)),ha=e=>e.reduce((t,a)=>(t[a.uid]=a,t),{}),id=(e,t,a,r)=>{const o=t.reduce((d,f)=>{const m=D(a,f,{});return d[f]=m,d},{});return{[r?"contentType":"component"]:e,components:o}},ya=e=>Object.keys(e).reduce((t,a)=>{const r=e[a].schema;return t[a]={...e[a],schema:{...r,attributes:ld(r.attributes)}},t},{}),ld=e=>Object.keys(e).reduce((t,a)=>(t.push({...e[a],name:a}),t),[]),dd=e=>{const t=Object.keys(e).reduce((a,r)=>{const o=D(e,[r]),l=o.uid;return cd(o)&&a.push(l),a},[]);return(0,C.q)(t)},cd=e=>D(e,["schema","attributes"],[]).some(a=>{const{type:r}=a;return r==="component"}),xa=e=>{const t=Object.keys(e).reduce((a,r)=>{const o=e?.[r]?.schema?.attributes??[],l=ud(o);return[...a,...l]},[]);return(0,C.q)(t)},ud=e=>e.reduce((t,a)=>{const{type:r,component:o}=a;return r==="component"&&t.push(o),t},[]),md=(e,t)=>{const a=Object.keys(e).map(r=>D(e,[r,...t],""));return(0,C.q)(a)},ba="did-not-kill-server",pd="server is down";function ct(e,t){return new Promise(a=>{fetch(`${window.strapi.backendURL}/_health`,{method:"HEAD",mode:"no-cors",headers:{"Content-Type":"application/json","Keep-Alive":"false"}}).then(r=>{if(r.status>=400)throw new Error(pd);if(!t)throw new Error(ba);a(e)}).catch(r=>{setTimeout(()=>ct(e,r.message!==ba).then(a),100)})})}const fd=e=>Object.values(e.attributes).filter(a=>a.type==="dynamiczone").every(a=>Array.isArray(a.components)&&a.components.length>0),gd=({children:e})=>{const t=(0,Ke.I0)(),{components:a,contentTypes:r,isLoading:o,isLoadingForDataToBeSet:l,initialData:i,modifiedData:d,reservedNames:f}=(0,Ke.v9)(nd()),m=(0,F.lm)(),{lockAppWithAutoreload:g,unlockAppWithAutoreload:p}=(0,F.Vu)(),{setCurrentStep:M}=(0,F.c1)(),{getPlugin:T}=(0,F.j1)(),b=T(C.p),{autoReload:$}=(0,F.L7)(),{formatMessage:W}=(0,Y.Z)(),{trackUsage:S}=(0,F.rS)(),{refetchPermissions:L}=(0,F.vn)(),{pathname:N}=(0,Ze.TH)(),{onCloseModal:k}=Je(),_=(0,Ze.$B)(`/plugins/${C.p}/content-types/:uid`),he=(0,Ze.$B)(`/plugins/${C.p}/component-categories/:categoryUid/:componentUid`),$e=(0,F.kY)(),{put:V,post:Te,del:ee}=$e,Se=(0,u.useRef)();Se.current=W;const pe=$,le=_!==null,Ue=le?"contentType":"component",ye=le?D(_,"params.uid",null):D(he,"params.componentUid",null),J=(0,u.useRef)(),R=le?"content-types":"components";J.current=async()=>{try{const[{data:{data:x}},{data:{data:I}},{data:H}]=await Promise.all(["components","content-types","reserved-names"].map(Qe=>$e.get(`/${C.p}/${Qe}`))),ue=ha(x),ve=ya(ue),Ie=ha(I),Oe=ya(Ie);t({type:C.G,components:ve,contentTypes:Oe,reservedNames:H})}catch(x){console.error({err:x}),m({type:"warning",message:{id:"notification.error"}})}},(0,u.useEffect)(()=>(J.current(),()=>{t({type:C.r})}),[]),(0,u.useEffect)(()=>{!o&&ye&&jt()},[o,N,ye]),(0,u.useEffect)(()=>{$||m({type:"info",message:{id:c("notification.info.autoreaload-disable")}})},[$,m]);const Yt=(x,I,H,ue=!1,ve,Ie=!1)=>{const Oe=ue?C.w:C.x;t({type:Oe,attributeToSet:x,forTarget:I,targetUid:H,initialAttribute:ve,shouldAddComponentToData:Ie})},et=({attributeToSet:x,forTarget:I,targetUid:H,initialAttribute:ue})=>{t({type:C.A,attributeToSet:x,forTarget:I,targetUid:H,initialAttribute:ue})},ut=({attributeToSet:x,forTarget:I,targetUid:H,initialAttribute:ue})=>{t({type:C.E,attributeToSet:x,forTarget:I,targetUid:H,initialAttribute:ue})},tt=(x,I)=>{t({type:C.u,dynamicZoneTarget:x,componentsToAdd:I})},Qt=(x,I,H,ue,ve=!1)=>{const Ie=I==="contentType"?C.y:C.z;t({type:Ie,data:x,componentCategory:ue,schemaType:I,uid:H,shouldAddComponentToData:ve})},Tt=(x,I)=>{t({type:C.C,dynamicZoneTarget:x,newComponents:I})},Xt=(x,I,H="")=>{const ue=x==="components"?C.B:C.F;x==="contentType"&&S("willDeleteFieldOfContentType"),t({type:ue,mainDataKey:x,attributeToRemoveName:I,componentUid:H})},Kt=async x=>{try{const I=`/${C.p}/component-categories/${x}`,H=window.confirm(W({id:c("popUpWarning.bodyMessage.category.delete")}));k(),H&&(g?.(),await ee(I),await ct(!0),p?.(),await fe())}catch(I){console.error({err:I}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},Jt=async()=>{try{const x=`/${C.p}/${R}/${ye}`,I=D(d,[Ue,"isTemporary"],!1),H=window.confirm(W({id:c(`popUpWarning.bodyMessage.${le?"contentType":"component"}.delete`)}));if(k(),H){if(I){t({type:C.D});return}g?.(),await ee(x),await ct(!0),await p?.(),await fe()}}catch(x){console.error({err:x}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},be=async(x,I)=>{try{const H=`/${C.p}/component-categories/${x}`;k(),g?.(),await V(H,I),await ct(!0),await p?.(),await fe()}catch(H){console.error({err:H}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},qt=()=>{const x=Object.assign({},a,d.components);if(!le){const H=D(d,"component",{});Gn(x,D(H,["uid"],""),H)}const I=dd(x);return(0,C.q)(I)},_t=()=>{const x=xa(a),I=xa(d.components||{});return(0,C.q)([...I,...x])},en=(x,I)=>{t({type:C.v,dzName:x,componentToRemoveIndex:I})},jt=()=>{const I=D(le?r:a,ye??"",{schema:{attributes:[]}}),H=(0,C.s)(I.schema.attributes,a),ue=id(I,H,a,le),ve=D(I,"isTemporary",!1)&&Qi(D(I,"schema.attributes",[]))===0;t({type:C.t,schemaToSet:ue,hasJustCreatedSchema:ve})},Ye=(0,u.useMemo)(()=>{const x=le?r:a;return ye==="create-content-type"?!1:!Object.keys(x).includes(ye||"")&&!o},[a,r,ye,le,o]),mt=(0,u.useMemo)(()=>{const x=Object.keys(r).filter(I=>D(r,[I,"schema","visible"],!0)).sort();return D(x,"0","create-content-type")},[r]);if(Ye)return(0,n.jsx)(Ze.l_,{to:`/plugins/${C.p}/content-types/${mt}`});const We=async x=>{try{const I=D(d,[Ue,"isTemporary"],!1),H={components:od(d.components,a,ye)};if(le){const Oe=(b?.apis?.forms).mutateContentTypeSchema({...pa(d.contentType),...x},i.contentType);if(!fd(Oe)){m({type:"warning",message:{id:c("notification.error.dynamiczone-min.validation"),defaultMessage:"At least one component is required in a dynamic zone to be able to save a content type"}});return}H.contentType=Oe,S("willSaveContentType")}else H.component=pa(d.component,!0),S("willSaveComponent");g?.();const ue=`/${C.p}/${R}`,ve=I?ue:`${ue}/${ye}`;if(I?await Te(ve,H):await V(ve,H),await ct(!0),await p?.(),I&&(i.contentType?.schema.kind==="collectionType"||i.contentType?.schema.kind==="singleType")&&M("contentTypeBuilder.success"),le){S("didSaveContentType");const Ie=D(H,["contentType","schema","name"],""),Oe=D(i,["contentType","schema","name"],"");!I&&Ie!==Oe&&S("didEditNameOfContentType")}else S("didSaveComponent");await fe()}catch(I){le||S("didNotSaveComponent"),console.error({err:I.response}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},fe=async()=>{await L()},pt=(x,I,H)=>{t({type:C.U,data:x,schemaType:I,uid:H})};return(0,n.jsx)(Jn.Provider,{value:{addAttribute:Yt,addCustomFieldAttribute:et,addCreatedComponentToDynamicZone:tt,allComponentsCategories:md(a,["category"]),changeDynamicZoneComponents:Tt,components:a,componentsGroupedByCategory:Yi(a,"category"),componentsThatHaveOtherComponentInTheirAttributes:qt(),contentTypes:r,createSchema:Qt,deleteCategory:Kt,deleteData:Jt,editCategory:be,editCustomFieldAttribute:ut,isInDevelopmentMode:pe,initialData:i,isInContentTypeView:le,modifiedData:d,nestedComponents:_t(),removeAttribute:Xt,removeComponentFromDynamicZone:en,reservedNames:f,setModifiedData:jt,sortedContentTypesList:rd(r),submitData:We,updateSchema:pt},children:l?(0,n.jsx)(F.dO,{}):(0,n.jsxs)(n.Fragment,{children:[e,pe&&(0,n.jsx)(ed,{})]})})},hd=(0,u.memo)(gd),va={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:!1,showBackLink:!1,kind:null,step:null,targetUid:null,customFieldUid:null},yd=({children:e})=>{const[t,a]=u.useState(va),{trackUsage:r}=(0,F.rS)(),o=({attributeType:S,customFieldUid:L})=>{a(N=>({...N,actionType:"create",modalType:"customField",attributeType:S,customFieldUid:L}))},l=({attributeType:S,step:L})=>{t.forTarget==="contentType"&&r("didSelectContentTypeFieldType",{type:S}),a(N=>({...N,actionType:"create",modalType:"attribute",step:L,attributeType:S,showBackLink:!0}))},i=({dynamicZoneTarget:S,targetUid:L})=>{a(N=>({...N,dynamicZoneTarget:S,targetUid:L,modalType:"addComponentToDynamicZone",forTarget:"contentType",step:"1",actionType:"edit",isOpen:!0}))},d=({forTarget:S,targetUid:L})=>{a(N=>({...N,actionType:"create",forTarget:S,targetUid:L,modalType:"chooseAttribute",isOpen:!0,showBackLink:!1}))},f=S=>{a(L=>({...L,...S,isOpen:!0}))},m=S=>{a(L=>({...L,categoryName:S,actionType:"edit",modalType:"editCategory",isOpen:!0}))},g=({forTarget:S,targetUid:L,attributeName:N,attributeType:k,customFieldUid:_})=>{a(he=>({...he,modalType:"customField",customFieldUid:_,actionType:"edit",forTarget:S,targetUid:L,attributeName:N,attributeType:k,isOpen:!0}))},p=({forTarget:S,targetUid:L,attributeName:N,attributeType:k,step:_})=>{a(he=>({...he,modalType:"attribute",actionType:"edit",forTarget:S,targetUid:L,attributeName:N,attributeType:k,step:_,isOpen:!0}))},M=({modalType:S,forTarget:L,targetUid:N,kind:k})=>{a(_=>({..._,modalType:S,actionType:"edit",forTarget:L,targetUid:N,kind:k,isOpen:!0}))},T=()=>{a(va)},b=({forTarget:S,targetUid:L})=>{a(N=>({...N,forTarget:S,targetUid:L,modalType:"chooseAttribute"}))},$=()=>{a(S=>({...S,attributeType:"component",modalType:"attribute",step:"2"}))},W=({dynamicZoneTarget:S})=>{a(L=>({...L,dynamicZoneTarget:S,modalType:"addComponentToDynamicZone",actionType:"create",step:"1",attributeType:null,attributeName:null}))};return(0,n.jsx)(qn.Provider,{value:{...t,onClickSelectField:l,onClickSelectCustomField:o,onCloseModal:T,onNavigateToChooseAttributeModal:b,onNavigateToAddCompoToDZModal:W,onOpenModalAddComponentsToDZ:i,onNavigateToCreateComponentStep2:$,onOpenModalAddField:d,onOpenModalCreateSchema:f,onOpenModalEditCategory:m,onOpenModalEditField:p,onOpenModalEditCustomField:g,onOpenModalEditSchema:M,setFormModalNavigationState:a},children:e})},xd=(0,u.lazy)(()=>s.e(3232).then(s.bind(s,13232))),bd=()=>{const{url:e}=(0,Ze.$B)();return(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(F.dO,{}),children:(0,n.jsx)(Ze.rs,{children:(0,n.jsx)(Ze.AW,{path:`${e}/:componentUid`,children:(0,n.jsx)(xd,{})})})})},Ca=(0,u.lazy)(()=>s.e(3232).then(s.bind(s,13232))),vd=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{formatMessage:e}=(0,Y.Z)(),t=e({id:`${C.p}.plugin.name`,defaultMessage:"Content Types Builder"}),{startSection:a}=(0,F.c1)(),r=(0,u.useRef)(a);return(0,u.useEffect)(()=>{r.current&&r.current("contentTypeBuilder")},[]),(0,n.jsxs)(F.O4,{permissions:C.P.main,children:[(0,n.jsx)(za.q,{title:t}),(0,n.jsx)(yd,{children:(0,n.jsx)(hd,{children:(0,n.jsx)(ka.A,{sideNav:(0,n.jsx)(nl,{}),children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(F.dO,{}),children:(0,n.jsxs)(Ze.rs,{children:[(0,n.jsx)(Ze.AW,{path:`/plugins/${C.p}/content-types/create-content-type`,component:Ca}),(0,n.jsx)(Ze.AW,{path:`/plugins/${C.p}/content-types/:uid`,component:Ca}),(0,n.jsx)(Ze.AW,{path:`/plugins/${C.p}/component-categories/:categoryUid`,component:bd})]})})})})})]})}},Symbol.toStringTag,{value:"Module"}))}}]);
