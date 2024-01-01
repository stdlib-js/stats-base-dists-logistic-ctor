// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,h=/^(\d+)$/,N=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,d,"e"),e=l.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,v,"e-0$1"),r.alternate&&(e=l.call(e,h,"$1."),e=l.call(e,N,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+m(e):m(e)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function U(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function j(r){var n,t,e,o,a,c,s,p,l;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,t,e,i;for(t=[],i=0,e=k.exec(r);e;)(n=r.slice(i,k.lastIndex-e[0].length)).length&&t.push(n),t.push(I(e)),i=k.lastIndex,e=k.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){return"string"==typeof r}function F(r){var n,t,e;if(!T(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=x(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return j.apply(null,t)}var O=Object.prototype,V=O.toString,P=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,L=O.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=O,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,n,t.get),a&&$&&$.call(r,n,t.set),r};function M(r,n,t){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r,n,t){H(r,n,{configurable:!1,enumerable:!1,get:t})}function C(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z()?function(r){var n,t,e,i,o;if(null==r)return q.call(r);t=r[z],o=z,n=null!=(i=r)&&X.call(i,o);try{r[z]=void 0}catch(n){return q.call(r)}return e=q.call(r),n?r[z]=t:delete r[z],e}:function(r){return q.call(r)},D=Number,J=D.prototype.toString,K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return C(r)||Q(r)}function nr(r){return C(r)&&r>0}function tr(r){return Q(r)&&r.valueOf()>0}function er(r){return nr(r)||tr(r)}function ir(r){return r!=r}function or(r){return C(r)&&ir(r)}function ar(r){return Q(r)&&ir(r.valueOf())}function ur(r){return or(r)||ar(r)}M(rr,"isPrimitive",C),M(rr,"isObject",Q),M(er,"isPrimitive",nr),M(er,"isObject",tr),M(ur,"isPrimitive",or),M(ur,"isObject",ar);var fr,cr="function"==typeof Uint32Array,sr="function"==typeof Uint32Array?Uint32Array:null,pr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(cr&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,yr=fr,vr="function"==typeof Float64Array,hr="function"==typeof Float64Array?Float64Array:null,Nr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,n,t;if("function"!=typeof hr)return!1;try{n=new hr([1,3.14,-3.14,NaN]),t=n,r=(vr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var gr,dr=lr,br="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,256,257]),t=n,r=(br&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Ar,_r=gr,Er="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof Sr)return!1;try{n=new Sr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Er&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var jr,kr={uint16:Ar,uint8:_r};(jr=new kr.uint16(1))[0]=4660;var Ir=52===new kr.uint8(jr.buffer)[0],xr=!0===Ir?1:0,Tr=new dr(1),Fr=new yr(Tr.buffer);function Or(r){return Tr[0]=r,Fr[xr]}var Vr=!0===Ir?1:0,Pr=new dr(1),$r=new yr(Pr.buffer);function Gr(r,n){return Pr[0]=r,$r[Vr]=n>>>0,Pr[0]}var Lr=1023,Hr=D.NEGATIVE_INFINITY,Mr=.6931471803691238,Wr=1.9082149292705877e-10,Cr=1048575;function Rr(r){var n,t,e,i,o,a,u,f,c,s,p,l;return 0===r?Hr:ir(r)||r<0?NaN:(o=0,(t=Or(r))<1048576&&(o-=54,t=Or(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-Lr|0,o+=(f=614244+(t&=Cr)&1048576|0)>>20|0,u=(r=Gr(r,t|1072693248^f))-1,(Cr&2+t)<3?0===u?0===o?0:o*Mr+o*Wr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Mr-(a-o*Wr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Mr-(n-(s*(n+a)+o*Wr)-u)):0===o?u-s*(u-a):o*Mr-(s*(u-a)-o*Wr-u))))}var Zr=3.141592653589793,qr=Math.floor,Xr=Math.ceil;function Yr(r){return r<0?Xr(r):qr(r)}var zr=Number.POSITIVE_INFINITY;function Br(r){return r===zr||r===Hr}var Dr,Jr,Kr=2147483647;!0===Ir?(Dr=1,Jr=0):(Dr=0,Jr=1);var Qr,rn,nn={HIGH:Dr,LOW:Jr},tn=new dr(1),en=new yr(tn.buffer),on=nn.HIGH,an=nn.LOW;function un(r,n,t,e){return tn[0]=r,n[e]=en[on],n[e+t]=en[an],n}function fn(r){return un(r,[0,0],1,0)}M(fn,"assign",un),!0===Ir?(Qr=1,rn=0):(Qr=0,rn=1);var cn={HIGH:Qr,LOW:rn},sn=new dr(1),pn=new yr(sn.buffer),ln=cn.HIGH,yn=cn.LOW;function vn(r,n){return pn[ln]=r,pn[yn]=n,sn[0]}var hn=[0,0];function Nn(r,n){var t,e;return fn.assign(r,hn,1,0),t=hn[0],t&=Kr,e=Or(n),vn(t|=e&=2147483648,hn[1])}function gn(r){return Math.abs(r)}function dn(r,n,t,e){return ir(r)||Br(r)?(n[e]=r,n[e+t]=0,n):0!==r&&gn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}M((function(r){return dn(r,[0,0],1,0)}),"assign",dn);var bn=2146435072,wn=[0,0],mn=[0,0];function An(r,n){var t,e;return 0===n||0===r||ir(r)||Br(r)?r:(dn(r,wn,1,0),n+=wn[1],n+=function(r){var n=Or(r);return(n=(n&bn)>>>20)-Lr|0}(r=wn[0]),n<-1074?Nn(0,r):n>1023?r<0?Hr:zr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,fn.assign(r,mn,1,0),t=mn[0],t&=2148532223,e*vn(t|=n+Lr<<20,mn[1])))}var _n=1.4426950408889634,En=1/(1<<28);function Sn(r){var n;return ir(r)||r===zr?r:r===Hr?0:r>709.782712893384?zr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<En?1+r:function(r,n,t){var e,i,o,a;return An(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=Yr(r<0?_n*r-.5:_n*r+.5)),1.9082149292705877e-10*n,n)}function Un(r,n,t){return ir(r)||ir(n)||ir(t)||t<0?NaN:0===t?r<n?0:1:1/(1+Sn(-(r-n)/t))}function jn(r){return function(){return r}}function kn(r){return ir(r)?jn(NaN):function(n){return ir(n)?NaN:n<r?0:1}}M((function(r,n){return ir(r)||ir(n)?NaN:r<n?0:1}),"factory",kn),M(Un,"factory",(function(r,n){return ir(r)||ir(n)||n<0?jn(NaN):0===n?kn(r):function(t){return ir(t)?NaN:1/(1+Sn(-(t-r)/n))}}));var In=.6931471803691238,xn=1.9082149292705877e-10;function Tn(r){var n,t,e,i,o,a,u,f,c,s;if(r<-1||ir(r))return NaN;if(-1===r)return Hr;if(r===zr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(o=(s=((t=Or(c=1+r))>>20)-Lr)>0?1-(c-r):r-(c-1),o/=c):(s=((t=Or(c=r))>>20)-Lr,o=0),(t&=1048575)<434334?c=Gr(c,1072693248|t):(s+=1,c=Gr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*In+(o+=s*xn):s*In-((f=n*(1-.6666666666666666*i))-(s*xn+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-a*(n+f)):s*In-(n-(a*(n+f)+(s*xn+o))-i))}function Fn(r){return r<=18?Tn(Sn(r)):r>33.3?r:r+Sn(-r)}function On(r,n,t){return ir(r)||ir(n)||ir(t)||t<0?NaN:0===t?r<n?Hr:0:-Fn(-(r-n)/t)}function Vn(r){return ir(r)?jn(NaN):function(n){return ir(n)?NaN:n<r?Hr:0}}function Pn(r,n,t){var e;return ir(r)||ir(n)||ir(t)||t<0?NaN:r===Hr?Hr:0===t?r===n?zr:Hr:(e=-gn((r-n)/t))-2*Tn(Sn(e))-Rr(t)}function $n(r){return ir(r)?jn(NaN):function(n){return ir(n)?NaN:n===r?zr:Hr}}function Gn(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}M((function(r,n){return ir(r)||ir(n)?NaN:r<n?Hr:0}),"factory",Vn),M(On,"factory",(function(r,n){return ir(r)||ir(n)||n<0?jn(NaN):0===n?Vn(r):function(t){return ir(t)?NaN:-Fn(-(t-r)/n)}})),M((function(r,n){return ir(r)||ir(n)?NaN:r===n?zr:Hr}),"factory",$n),M(Pn,"factory",(function(r,n){var t;return ir(r)||ir(n)||n<0?jn(NaN):0===n?$n(r):(t=Rr(n),function(e){var i;return ir(e)?NaN:e===Hr?Hr:(i=-gn((e-r)/n))-2*Tn(Sn(i))-t})}));var Ln=-.16666666666666632;function Hn(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(Ln+i*t):r-(i*(.5*n-e*t)-n-e*Ln)}var Mn=1048575,Wn=!0===Ir?0:1,Cn=new dr(1),Rn=new yr(Cn.buffer);function Zn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var qn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Xn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Yn=16777216,zn=5.960464477539063e-8,Bn=Zn(20),Dn=Zn(20),Jn=Zn(20),Kn=Zn(20);function Qn(r,n,t,e,i,o,a,u,f){var c,s,p,l,y,v,h,N,g;for(l=o,g=e[t],N=t,y=0;N>0;y++)s=zn*g|0,Kn[y]=g-Yn*s|0,g=e[N-1]+s,N-=1;if(g=An(g,i),g-=8*qr(.125*g),g-=h=0|g,p=0,i>0?(h+=y=Kn[t-1]>>24-i,Kn[t-1]-=y<<24-i,p=Kn[t-1]>>23-i):0===i?p=Kn[t-1]>>23:g>=.5&&(p=2),p>0){for(h+=1,c=0,y=0;y<t;y++)N=Kn[y],0===c?0!==N&&(c=1,Kn[y]=16777216-N):Kn[y]=16777215-N;if(i>0)switch(i){case 1:Kn[t-1]&=8388607;break;case 2:Kn[t-1]&=4194303}2===p&&(g=1-g,0!==c&&(g-=An(1,i)))}if(0===g){for(N=0,y=t-1;y>=o;y--)N|=Kn[y];if(0===N){for(v=1;0===Kn[o-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=qn[a+y],s=0,N=0;N<=u;N++)s+=r[N]*f[u+(y-N)];e[y]=s}return Qn(r,n,t+=v,e,i,o,a,u,f)}}if(0===g)for(t-=1,i-=24;0===Kn[t];)t-=1,i-=24;else(g=An(g,-i))>=Yn?(s=zn*g|0,Kn[t]=g-Yn*s|0,i+=24,Kn[t+=1]=s):Kn[t]=0|g;for(s=An(1,i),y=t;y>=0;y--)e[y]=s*Kn[y],s*=zn;for(y=t;y>=0;y--){for(s=0,v=0;v<=l&&v<=t-y;v++)s+=Xn[v]*e[y+v];Jn[t-y]=s}for(s=0,y=t;y>=0;y--)s+=Jn[y];for(n[0]=0===p?s:-s,s=Jn[0]-s,y=1;y<=t;y++)s+=Jn[y];return n[1]=0===p?s:-s,7&h}function rt(r,n,t,e){var i,o,a,u,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=e-1),s=a+4,f=0;f<=s;f++)Bn[f]=c<0?0:qn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Bn[a+(f-c)];Dn[f]=i}return Qn(r,n,4,Dn,u,4,o,a,Bn)}var nt=Math.round;function tt(r,n,t){var e,i,o,a,u;return o=r-1.5707963267341256*(e=nt(.6366197723675814*r)),a=6077100506506192e-26*e,u=n>>20|0,t[0]=o-a,u-(Or(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((i=o)-(o=i-(a=6077100506303966e-26*e))-a),t[0]=o-a,u-(Or(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((i=o)-(o=i-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var et=1.5707963267341256,it=6077100506506192e-26,ot=2*it,at=3*it,ut=4*it,ft=[0,0,0],ct=[0,0];function st(r,n){var t,e,i,o,a,u,f;if((i=Or(r)&Kr|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&Mn)?tt(r,i,n):i<=1073928572?r>0?(f=r-et,n[0]=f-it,n[1]=f-n[0]-it,1):(f=r+et,n[0]=f+it,n[1]=f-n[0]+it,-1):r>0?(f=r-2*et,n[0]=f-ot,n[1]=f-n[0]-ot,2):(f=r+2*et,n[0]=f+ot,n[1]=f-n[0]+ot,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?tt(r,i,n):r>0?(f=r-3*et,n[0]=f-at,n[1]=f-n[0]-at,3):(f=r+3*et,n[0]=f+at,n[1]=f-n[0]+at,-3):1075388923===i?tt(r,i,n):r>0?(f=r-4*et,n[0]=f-ut,n[1]=f-n[0]-ut,4):(f=r+4*et,n[0]=f+ut,n[1]=f-n[0]+ut,-4);if(i<1094263291)return tt(r,i,n);if(i>=bn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Cn[0]=r,Rn[Wn]}(r),f=vn(i-((e=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)ft[a]=0|f,f=16777216*(f-ft[a]);for(ft[2]=f,o=3;0===ft[o-1];)o-=1;return u=rt(ft,ct,e,o),r<0?(n[0]=-ct[0],n[1]=-ct[1],-u):(n[0]=ct[0],n[1]=ct[1],u)}var pt=[0,0];function lt(r){var n;if(n=Or(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Gn(r,0);if(n>=2146435072)return NaN;switch(3&st(r,pt)){case 0:return Gn(pt[0],pt[1]);case 1:return-Hn(pt[0],pt[1]);case 2:return-Gn(pt[0],pt[1]);default:return Hn(pt[0],pt[1])}}var yt=[0,0];function vt(r){var n;if(n=Or(r),(n&=Kr)<=1072243195)return n<1045430272?r:Hn(r,0);if(n>=bn)return NaN;switch(3&st(r,yt)){case 0:return Hn(yt[0],yt[1]);case 1:return Gn(yt[0],yt[1]);case 2:return-Hn(yt[0],yt[1]);default:return-Gn(yt[0],yt[1])}}function ht(r){return ir(r)?NaN:Br(r)?0:0===r?1:function(r){var n,t;return ir(r)||Br(r)?NaN:0===(n=gn(t=r%2))||1===n?Nn(0,t):n<.25?vt(Zr*t):n<.75?Nn(lt(Zr*(n=.5-n)),t):n<1.25?(t=Nn(1,t)-t,vt(Zr*t)):n<1.75?-Nn(lt(Zr*(n-=1.5)),t):(t-=Nn(2,t),vt(Zr*t))}(r)/(Zr*r)}function Nt(r,n,t){var e;return ir(e=t*r)||ir(n)||t<0||gn(e)>1?NaN:Sn(n*r)/ht(e)}function gt(r){return ir(r)?jn(NaN):function(n){return ir(n)?NaN:Sn(r*n)}}function dt(r){return qr(r)===r}function bt(r){return dt(r/2)}function wt(r){return bt(r>0?r-1:r+1)}M((function(r,n){return ir(r)||ir(n)?NaN:Sn(n*r)}),"factory",gt),M(Nt,"factory",(function(r,n){return ir(r)||ir(n)||n<0?jn(NaN):0===n?gt(r):function(t){var e=n*t;return gn(e)>1?NaN:Sn(r*t)/ht(e)}}));var mt=Math.sqrt,At=!0===Ir?0:1,_t=new dr(1),Et=new yr(_t.buffer);function St(r,n){return _t[0]=r,Et[At]=n>>>0,_t[0]}function Ut(r){return 0|r}var jt=1048576,kt=[1,1.5],It=[0,.5849624872207642],xt=[0,1.350039202129749e-8],Tt=1048576,Ft=1083179008,Ot=1e300,Vt=1e-300,Pt=[0,0],$t=[0,0];function Gt(r,n){var t,e,i,o,a,u,f,c,s,p,l,y,v,h;if(ir(r)||ir(n))return NaN;if(fn.assign(n,Pt,1,0),a=Pt[0],0===Pt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return mt(r);if(-.5===n)return 1/mt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Br(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:gn(r)<1==(n===zr)?0:zr}(r,n)}if(fn.assign(r,Pt,1,0),o=Pt[0],0===Pt[1]){if(0===o)return function(r,n){return n===Hr?zr:n===zr?0:n>0?wt(n)?r:0:wt(n)?Nn(zr,r):zr}(r,n);if(1===r)return 1;if(-1===r&&wt(n))return-1;if(Br(r))return r===Hr?Gt(-0,-n):n<0?0:zr}if(r<0&&!1===dt(n))return(r-r)/(r-r);if(i=gn(r),t=o&Kr|0,e=a&Kr|0,f=a>>>31|0,u=(u=o>>>31|0)&&wt(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Or(r)&Kr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Ot*Ot:u*Vt*Vt;if(t>1072693248)return 0===f?u*Ot*Ot:u*Vt*Vt;l=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=St(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}($t,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,y,v,h,N,g,d,b,w,m,A,_;return w=0,t<jt&&(w-=53,t=Or(n*=9007199254740992)),w+=(t>>20)-Lr|0,t=1072693248|(m=1048575&t|0),m<=235662?A=0:m<767610?A=1:(A=0,w+=1,t-=jt),a=St(i=(d=(n=Gr(n,t))-(c=kt[A]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Gr(0,e+=A<<18),g=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=St(f=3+(o=a*a)+(g+=(u=b*(d-a*f-a*(n-(f-c))))*(a+i)),0),h=(y=-7.028461650952758e-9*(p=St(p=(d=a*f)+(b=u*f+(g-(f-3-o))*i),0))+.9617966939259756*(b-(p-d))+xt[A])-((v=St(v=(l=.9617967009544373*p)+y+(s=It[A])+(N=w),0))-N-s-l),r[0]=v,r[1]=h,r}($t,i,t);if(y=(p=(n-(c=St(n,0)))*l[0]+n*l[1])+(s=c*l[0]),fn.assign(y,Pt,1,0),v=Ut(Pt[0]),h=Ut(Pt[1]),v>=Ft){if(0!=(v-Ft|h))return u*Ot*Ot;if(p+8008566259537294e-32>y-s)return u*Ot*Ot}else if((v&Kr)>=1083231232){if(0!=(v-3230714880|h))return u*Vt*Vt;if(p<=y-s)return u*Vt*Vt}return y=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&Kr|0)>>20)-Lr|0,c=0,s>1071644672&&(i=Gr(0,((c=r+(Tt>>p+1)>>>0)&~(Mn>>(p=((c&Kr)>>20)-Lr|0)))>>>0),c=(c&Mn|Tt)>>20-p>>>0,r<0&&(c=-c),n-=i),r=Ut(r=Or(f=1-((f=(o=.6931471824645996*(i=St(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?An(f,c):Gr(f,r)}(v,s,p),u*y}function Lt(r,n,t){var e;return ir(r)||ir(n)||ir(t)||t<0?NaN:r===Hr?0:0===t?r===n?zr:0:(e=Sn(-gn((r-n)/t)))/(t*Gt(1+e,2))}function Ht(r){return ir(r)?jn(NaN):function(n){return ir(n)?NaN:n===r?zr:0}}function Mt(r,n,t){return ir(n)||ir(t)||ir(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*Rr(r/(1-r))}function Wt(r){return ir(r)?jn(NaN):function(n){return ir(n)||n<0||n>1?NaN:r}}function Ct(){var r,n;if(!(this instanceof Ct))return 0===arguments.length?new Ct:new Ct(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!C(r=arguments[0])||ur(r))throw new TypeError(F("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!nr(n))throw new TypeError(F("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return H(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!C(n)||ur(n))throw new TypeError(F("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),H(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!nr(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}return M((function(r,n){return ir(r)||ir(n)?NaN:r===n?zr:0}),"factory",Ht),M(Lt,"factory",(function(r,n){return ir(r)||ir(n)||n<0?jn(NaN):0===n?Ht(r):function(t){var e,i;return ir(t)?NaN:t===Hr?0:(i=gn((t-r)/n),(e=Sn(-i))/(n*Gt(1+e,2)))}})),M((function(r,n){return ir(r)||r<0||r>1?NaN:n}),"factory",Wt),M(Mt,"factory",(function(r,n){return ir(r)||ir(n)||n<0?jn(NaN):0===n?Wt(r):function(t){return ir(t)||t<0||t>1?NaN:r+n*Rr(t/(1-t))}})),W(Ct.prototype,"entropy",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:Rr(n)+2;var r,n})),W(Ct.prototype,"kurtosis",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:1.2;var r,n})),W(Ct.prototype,"mean",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:r;var r,n})),W(Ct.prototype,"median",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:r;var r,n})),W(Ct.prototype,"mode",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:r;var r,n})),W(Ct.prototype,"skewness",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:0;var r,n})),W(Ct.prototype,"stdev",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:n*Zr/1.7320508075688772;var r,n})),W(Ct.prototype,"variance",(function(){return r=this.mu,n=this.s,ir(r)||ir(n)||n<=0?NaN:n*n*9.869604401089358/3;var r,n})),M(Ct.prototype,"cdf",(function(r){return Un(r,this.mu,this.s)})),M(Ct.prototype,"logcdf",(function(r){return On(r,this.mu,this.s)})),M(Ct.prototype,"logpdf",(function(r){return Pn(r,this.mu,this.s)})),M(Ct.prototype,"mgf",(function(r){return Nt(r,this.mu,this.s)})),M(Ct.prototype,"pdf",(function(r){return Lt(r,this.mu,this.s)})),M(Ct.prototype,"quantile",(function(r){return Mt(r,this.mu,this.s)})),Ct},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Logistic=n();
//# sourceMappingURL=browser.js.map
