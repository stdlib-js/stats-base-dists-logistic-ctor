// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var n,e,a;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!t(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==n)&&(a=4294967295+a+1),a<0?(e=(-a).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(n),a||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,N=/\.0*e/,d=/(\..*[^0])0*e/;function w(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,d,"$1e"),e=p.call(e,N,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function b(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var m=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,o,u,f,c,s,p,l,y,h,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,_(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):m(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,h=e.padRight,v=void 0,(v=y-l.length)<0?l:l=h?l+b(v):b(v)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function k(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(j(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function I(r){var n,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[k(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return U.apply(null,n)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,P=x.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,n,t.get),u&&O&&O.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function H(r){return"number"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return L&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=W()?function(r){var n,t,e,i,o;if(null==r)return R.call(r);t=r[q],o=q,n=null!=(i=r)&&M.call(i,o);try{r[q]=void 0}catch(n){return R.call(r)}return e=R.call(r),n?r[q]=t:delete r[q],e}:function(r){return R.call(r)},Y=Number,z=Y.prototype.toString,B=W();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return H(r)||D(r)}function K(r){return H(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function nr(r){return r!=r}function tr(r){return H(r)&&nr(r)}function er(r){return D(r)&&nr(r.valueOf())}function ir(r){return tr(r)||er(r)}G(J,"isPrimitive",H),G(J,"isObject",D),G(rr,"isPrimitive",K),G(rr,"isObject",Q),G(ir,"isPrimitive",tr),G(ir,"isObject",er);var or,ur="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=or,pr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,n,t;if("function"!=typeof lr)return!1;try{n=new lr([1,3.14,-3.14,NaN]),t=n,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var hr,vr=cr,gr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,dr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),t=n,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var wr,br=hr,mr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(mr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:wr,uint8:br};(Er=new Ur.uint16(1))[0]=4660;var Sr=52===new Ur.uint8(Er.buffer)[0],jr=!0===Sr?1:0,kr=new vr(1),Ir=new sr(kr.buffer);function xr(r){return kr[0]=r,Ir[jr]}var Tr=!0===Sr?1:0,Fr=new vr(1),Or=new sr(Fr.buffer);function Vr(r,n){return Fr[0]=r,Or[Tr]=n>>>0,Fr[0]}var Pr=1023,$r=Y.NEGATIVE_INFINITY,Gr=.6931471803691238,Cr=1.9082149292705877e-10,Hr=0x40000000000000,Lr=.3333333333333333,Wr=1048575,Rr=2146435072,Mr=1048576,Zr=1072693248;function qr(r){var n,t,e,i,o,u,a,f,c,s,p,l;return 0===r?$r:nr(r)||r<0?NaN:(o=0,(t=xr(r))<Mr&&(o-=54,t=xr(r*=Hr)),t>=Rr?r+r:(o+=(t>>20)-Pr|0,o+=(f=614244+(t&=Wr)&1048576|0)>>20|0,a=(r=Vr(r,t|f^Zr))-1,(Wr&2+t)<3?0===a?0===o?0:o*Gr+o*Cr:(u=a*a*(.5-Lr*a),0===o?a-u:o*Gr-(u-o*Cr-a)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=a/(2+a))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-s*(n+u)):o*Gr-(n-(s*(n+u)+o*Cr)-a)):0===o?a-s*(a-u):o*Gr-(s*(a-u)-o*Cr-a))))}var Xr=3.141592653589793,Yr=Math.floor,zr=Math.ceil;function Br(r){return r<0?zr(r):Yr(r)}var Dr=Number.POSITIVE_INFINITY,Jr=1023,Kr=-1023,Qr=-1074;function rn(r){return r===Dr||r===$r}var nn,tn,en=2147483648,on=2147483647;!0===Sr?(nn=1,tn=0):(nn=0,tn=1);var un,an,fn={HIGH:nn,LOW:tn},cn=new vr(1),sn=new sr(cn.buffer),pn=fn.HIGH,ln=fn.LOW;function yn(r,n,t,e){return cn[0]=r,n[e]=sn[pn],n[e+t]=sn[ln],n}function hn(r){return yn(r,[0,0],1,0)}G(hn,"assign",yn),!0===Sr?(un=1,an=0):(un=0,an=1);var vn={HIGH:un,LOW:an},gn=new vr(1),Nn=new sr(gn.buffer),dn=vn.HIGH,wn=vn.LOW;function bn(r,n){return Nn[dn]=r,Nn[wn]=n,gn[0]}var mn=[0,0];function An(r,n){var t,e;return hn.assign(r,mn,1,0),t=mn[0],t&=on,e=xr(n),bn(t|=e&=en,mn[1])}var _n=22250738585072014e-324;function En(r){return Math.abs(r)}var Un=4503599627370496;function Sn(r,n,t,e){return nr(r)||rn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&En(r)<_n?(n[e]=r*Un,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}G((function(r){return Sn(r,[0,0],1,0)}),"assign",Sn);var jn=2146435072,kn=2220446049250313e-31,In=2148532223,xn=[0,0],Tn=[0,0];function Fn(r,n){var t,e;return 0===n||0===r||nr(r)||rn(r)?r:(Sn(r,xn,1,0),r=xn[0],n+=xn[1],n+=function(r){var n=xr(r);return(n=(n&jn)>>>20)-Pr|0}(r),n<Qr?An(0,r):n>Jr?r<0?$r:Dr:(n<=Kr?(n+=52,e=kn):e=1,hn.assign(r,Tn,1,0),t=Tn[0],t&=In,e*bn(t|=n+Pr<<20,Tn[1])))}var On=.6931471803691238,Vn=1.9082149292705877e-10,Pn=1.4426950408889634,$n=709.782712893384,Gn=-745.1332191019411,Cn=1/(1<<28),Hn=-Cn;function Ln(r){var n;return nr(r)||r===Dr?r:r===$r?0:r>$n?Dr:r<Gn?0:r>Hn&&r<Cn?1+r:function(r,n,t){var e,i,o,u;return Fn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(n=Br(r<0?Pn*r-.5:Pn*r+.5))*On,n*Vn,n)}function Wn(r,n,t){return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r<n?0:1:1/(1+Ln(-(r-n)/t))}function Rn(r){return function(){return r}}function Mn(r){return nr(r)?Rn(NaN):function(n){return nr(n)?NaN:n<r?0:1}}G((function(r,n){return nr(r)||nr(n)?NaN:r<n?0:1}),"factory",Mn),G(Wn,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?Mn(r):function(t){return nr(t)?NaN:1/(1+Ln(-(t-r)/n))}}));var Zn=.6931471803691238,qn=1.9082149292705877e-10,Xn=.41421356237309503,Yn=-.2928932188134525,zn=1.862645149230957e-9,Bn=5551115123125783e-32,Dn=9007199254740992,Jn=.6666666666666666;function Kn(r){var n,t,e,i,o,u,a,f,c,s;if(r<-1||nr(r))return NaN;if(-1===r)return $r;if(r===Dr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Xn){if(e<zn)return e<Bn?r:r-r*r*.5;r>Yn&&(s=0,i=r,t=1)}return 0!==s&&(e<Dn?(o=(s=((t=xr(c=1+r))>>20)-Pr)>0?1-(c-r):r-(c-1),o/=c):(s=((t=xr(c=r))>>20)-Pr,o=0),(t&=1048575)<434334?c=Vr(c,1072693248|t):(s+=1,c=Vr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Zn+(o+=s*qn):s*Zn-((f=n*(1-Jn*i))-(s*qn+o)-i):(f=(a=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===s?i-(n-u*(n+f)):s*Zn-(n-(u*(n+f)+(s*qn+o))-i))}function Qn(r){return r<=18?Kn(Ln(r)):r>33.3?r:r+Ln(-r)}function rt(r,n,t){return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r<n?$r:0:-Qn(-(r-n)/t)}function nt(r){return nr(r)?Rn(NaN):function(n){return nr(n)?NaN:n<r?$r:0}}function tt(r,n,t){var e;return nr(r)||nr(n)||nr(t)||t<0?NaN:r===$r?$r:0===t?r===n?Dr:$r:(e=-En((r-n)/t))-2*Kn(Ln(e))-qr(t)}function et(r){return nr(r)?Rn(NaN):function(n){return nr(n)?NaN:n===r?Dr:$r}}function it(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}G((function(r,n){return nr(r)||nr(n)?NaN:r<n?$r:0}),"factory",nt),G(rt,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?nt(r):function(t){return nr(t)?NaN:-Qn(-(t-r)/n)}})),G((function(r,n){return nr(r)||nr(n)?NaN:r===n?Dr:$r}),"factory",et),G(tt,"factory",(function(r,n){var t;return nr(r)||nr(n)||n<0?Rn(NaN):0===n?et(r):(t=qr(n),function(e){var i;return nr(e)?NaN:e===$r?$r:(i=-En((e-r)/n))-2*Kn(Ln(i))-t})}));var ot=-.16666666666666632,ut=.00833333333332249,at=-.0001984126982985795,ft=27557313707070068e-22,ct=-2.5050760253406863e-8,st=1.58969099521155e-10;function pt(r,n){var t,e,i;return t=ut+(i=r*r)*(at+i*ft)+i*(i*i)*(ct+i*st),e=i*r,0===n?r+e*(ot+i*t):r-(i*(.5*n-e*t)-n-e*ot)}var lt=1048575,yt=!0===Sr?0:1,ht=new vr(1),vt=new sr(ht.buffer);function gt(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Nt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],dt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wt=16777216,bt=5.960464477539063e-8,mt=gt(20),At=gt(20),_t=gt(20),Et=gt(20);function Ut(r,n,t,e,i,o,u,a,f){var c,s,p,l,y,h,v,g,N;for(l=o,N=e[t],g=t,y=0;g>0;y++)s=bt*N|0,Et[y]=N-wt*s|0,N=e[g-1]+s,g-=1;if(N=Fn(N,i),N-=8*Yr(.125*N),N-=v=0|N,p=0,i>0?(v+=y=Et[t-1]>>24-i,Et[t-1]-=y<<24-i,p=Et[t-1]>>23-i):0===i?p=Et[t-1]>>23:N>=.5&&(p=2),p>0){for(v+=1,c=0,y=0;y<t;y++)g=Et[y],0===c?0!==g&&(c=1,Et[y]=16777216-g):Et[y]=16777215-g;if(i>0)switch(i){case 1:Et[t-1]&=8388607;break;case 2:Et[t-1]&=4194303}2===p&&(N=1-N,0!==c&&(N-=Fn(1,i)))}if(0===N){for(g=0,y=t-1;y>=o;y--)g|=Et[y];if(0===g){for(h=1;0===Et[o-h];h++);for(y=t+1;y<=t+h;y++){for(f[a+y]=Nt[u+y],s=0,g=0;g<=a;g++)s+=r[g]*f[a+(y-g)];e[y]=s}return Ut(r,n,t+=h,e,i,o,u,a,f)}}if(0===N)for(t-=1,i-=24;0===Et[t];)t-=1,i-=24;else(N=Fn(N,-i))>=wt?(s=bt*N|0,Et[t]=N-wt*s|0,i+=24,Et[t+=1]=s):Et[t]=0|N;for(s=Fn(1,i),y=t;y>=0;y--)e[y]=s*Et[y],s*=bt;for(y=t;y>=0;y--){for(s=0,h=0;h<=l&&h<=t-y;h++)s+=dt[h]*e[y+h];_t[t-y]=s}for(s=0,y=t;y>=0;y--)s+=_t[y];for(n[0]=0===p?s:-s,s=_t[0]-s,y=1;y<=t;y++)s+=_t[y];return n[1]=0===p?s:-s,7&v}function St(r,n,t,e){var i,o,u,a,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),a=t-24*(o+1),c=o-(u=e-1),s=u+4,f=0;f<=s;f++)mt[f]=c<0?0:Nt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*mt[u+(f-c)];At[f]=i}return Ut(r,n,4,At,a,4,o,u,mt)}var jt=Math.round,kt=.6366197723675814,It=1.5707963267341256,xt=6077100506506192e-26,Tt=6077100506303966e-26,Ft=20222662487959506e-37,Ot=20222662487111665e-37,Vt=84784276603689e-45,Pt=2047;function $t(r,n,t){var e,i,o,u,a;return o=r-(e=jt(r*kt))*It,u=e*xt,a=n>>20|0,t[0]=o-u,a-(xr(t[0])>>20&Pt)>16&&(u=e*Ft-((i=o)-(o=i-(u=e*Tt))-u),t[0]=o-u,a-(xr(t[0])>>20&Pt)>49&&(u=e*Vt-((i=o)-(o=i-(u=e*Ot))-u),t[0]=o-u)),t[1]=o-t[0]-u,e}var Gt=0,Ct=16777216,Ht=1.5707963267341256,Lt=6077100506506192e-26,Wt=2*Lt,Rt=3*Lt,Mt=4*Lt,Zt=598523,qt=1072243195,Xt=1073928572,Yt=1074752122,zt=1074977148,Bt=1075183036,Dt=1075388923,Jt=1075594811,Kt=1094263291,Qt=[0,0,0],re=[0,0];function ne(r,n){var t,e,i,o,u,a,f;if((i=xr(r)&on|0)<=qt)return n[0]=r,n[1]=0,0;if(i<=Yt)return(i&lt)===Zt?$t(r,i,n):i<=Xt?r>0?(f=r-Ht,n[0]=f-Lt,n[1]=f-n[0]-Lt,1):(f=r+Ht,n[0]=f+Lt,n[1]=f-n[0]+Lt,-1):r>0?(f=r-2*Ht,n[0]=f-Wt,n[1]=f-n[0]-Wt,2):(f=r+2*Ht,n[0]=f+Wt,n[1]=f-n[0]+Wt,-2);if(i<=Jt)return i<=Bt?i===zt?$t(r,i,n):r>0?(f=r-3*Ht,n[0]=f-Rt,n[1]=f-n[0]-Rt,3):(f=r+3*Ht,n[0]=f+Rt,n[1]=f-n[0]+Rt,-3):i===Dt?$t(r,i,n):r>0?(f=r-4*Ht,n[0]=f-Mt,n[1]=f-n[0]-Mt,4):(f=r+4*Ht,n[0]=f+Mt,n[1]=f-n[0]+Mt,-4);if(i<Kt)return $t(r,i,n);if(i>=jn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ht[0]=r,vt[yt]}(r),f=bn(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)Qt[u]=0|f,f=(f-Qt[u])*Ct;for(Qt[2]=f,o=3;Qt[o-1]===Gt;)o-=1;return a=St(Qt,re,e,o),r<0?(n[0]=-re[0],n[1]=-re[1],-a):(n[0]=re[0],n[1]=re[1],a)}var te=[0,0],ee=2147483647,ie=1072243195,oe=1044381696,ue=2146435072;function ae(r){var n;if(n=xr(r),(n&=ee)<=ie)return n<oe?1:it(r,0);if(n>=ue)return NaN;switch(3&ne(r,te)){case 0:return it(te[0],te[1]);case 1:return-pt(te[0],te[1]);case 2:return-it(te[0],te[1]);default:return pt(te[0],te[1])}}var fe=1072243195,ce=1045430272,se=[0,0];function pe(r){var n;if(n=xr(r),(n&=on)<=fe)return n<ce?r:pt(r,0);if(n>=jn)return NaN;switch(3&ne(r,se)){case 0:return pt(se[0],se[1]);case 1:return it(se[0],se[1]);case 2:return-pt(se[0],se[1]);default:return-it(se[0],se[1])}}function le(r){return nr(r)?NaN:rn(r)?0:0===r?1:function(r){var n,t;return nr(r)||rn(r)?NaN:0===(n=En(t=r%2))||1===n?An(0,t):n<.25?pe(Xr*t):n<.75?An(ae(Xr*(n=.5-n)),t):n<1.25?(t=An(1,t)-t,pe(Xr*t)):n<1.75?-An(ae(Xr*(n-=1.5)),t):(t-=An(2,t),pe(Xr*t))}(r)/(Xr*r)}function ye(r,n,t){var e;return nr(e=t*r)||nr(n)||t<0||En(e)>1?NaN:Ln(n*r)/le(e)}function he(r){return nr(r)?Rn(NaN):function(n){return nr(n)?NaN:Ln(r*n)}}function ve(r){return Yr(r)===r}function ge(r){return ve(r/2)}function Ne(r){return ge(r>0?r-1:r+1)}G((function(r,n){return nr(r)||nr(n)?NaN:Ln(n*r)}),"factory",he),G(ye,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?he(r):function(t){var e=n*t;return En(e)>1?NaN:Ln(r*t)/le(e)}}));var de=Math.sqrt,we=!0===Sr?0:1,be=new vr(1),me=new sr(be.buffer);function Ae(r,n){return be[0]=r,me[we]=n>>>0,be[0]}function _e(r){return 0|r}var Ee=1072693247,Ue=1e300,Se=1e-300,je=1048575,ke=1048576,Ie=1072693248,xe=536870912,Te=524288,Fe=20,Oe=9007199254740992,Ve=.9617966939259756,Pe=.9617967009544373,$e=-7.028461650952758e-9,Ge=[1,1.5],Ce=[0,.5849624872207642],He=[0,1.350039202129749e-8],Le=1.4426950408889634,We=1.4426950216293335,Re=1.9259629911266175e-8,Me=.6931471805599453,Ze=1048576,qe=1071644672,Xe=20,Ye=.6931471824645996,ze=-1.904654299957768e-9,Be=1072693247,De=1105199104,Je=1139802112,Ke=1083179008,Qe=1072693248,ri=1083231232,ni=3230714880,ti=31,ei=1e300,ii=1e-300,oi=8008566259537294e-32,ui=[0,0],ai=[0,0];function fi(r,n){var t,e,i,o,u,a,f,c,s,p,l,y,h,v;if(nr(r)||nr(n))return NaN;if(hn.assign(n,ui,1,0),u=ui[0],0===ui[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return de(r);if(-.5===n)return 1/de(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(rn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:En(r)<1==(n===Dr)?0:Dr}(r,n)}if(hn.assign(r,ui,1,0),o=ui[0],0===ui[1]){if(0===o)return function(r,n){return n===$r?Dr:n===Dr?0:n>0?Ne(n)?r:0:Ne(n)?An(Dr,r):Dr}(r,n);if(1===r)return 1;if(-1===r&&Ne(n))return-1;if(rn(r))return r===$r?fi(-0,-n):n<0?0:Dr}if(r<0&&!1===ve(n))return(r-r)/(r-r);if(i=En(r),t=o&on|0,e=u&on|0,f=u>>>ti|0,a=(a=o>>>ti|0)&&Ne(n)?-1:1,e>De){if(e>Je)return function(r,n){return(xr(r)&on)<=Ee?n<0?Ue*Ue:Se*Se:n>0?Ue*Ue:Se*Se}(r,n);if(t<Be)return 1===f?a*ei*ei:a*ii*ii;if(t>Qe)return 0===f?a*ei*ei:a*ii*ii;l=function(r,n){var t,e,i,o,u,a,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(a=i*Re-o*Le)-((e=Ae(e=(u=We*i)+a,0))-u),r[0]=e,r[1]=t,r}(ai,i)}else l=function(r,n,t){var e,i,o,u,a,f,c,s,p,l,y,h,v,g,N,d,w,b,m,A,_;return b=0,t<ke&&(b-=53,t=xr(n*=Oe)),b+=(t>>Fe)-Pr|0,t=(m=t&je|0)|Ie|0,m<=235662?A=0:m<767610?A=1:(A=0,b+=1,t-=ke),u=Ae(i=(d=(n=Vr(n,t))-(c=Ge[A]))*(w=1/(n+c)),0),e=(t>>1|xe)+Te,f=Vr(0,e+=A<<18),N=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Ae(f=3+(o=u*u)+(N+=(a=w*(d-u*f-u*(n-(f-c))))*(u+i)),0),p=Ae(p=(d=u*f)+(w=a*f+(N-(f-3-o))*i),0),l=Pe*p,v=(y=$e*p+(w-(p-d))*Ve+He[A])-((h=Ae(h=l+y+(s=Ce[A])+(g=b),0))-g-s-l),r[0]=h,r[1]=v,r}(ai,i,t);if(y=(p=(n-(c=Ae(n,0)))*l[0]+n*l[1])+(s=c*l[0]),hn.assign(y,ui,1,0),h=_e(ui[0]),v=_e(ui[1]),h>=Ke){if(0!=(h-Ke|v))return a*ei*ei;if(p+oi>y-s)return a*ei*ei}else if((h&on)>=ri){if(0!=(h-ni|v))return a*ii*ii;if(p<=y-s)return a*ii*ii}return y=function(r,n,t){var e,i,o,u,a,f,c,s,p,l;return p=((s=r&on|0)>>Xe)-Pr|0,c=0,s>qe&&(i=Vr(0,((c=r+(Ze>>p+1)>>>0)&~(lt>>(p=((c&on)>>Xe)-Pr|0)))>>>0),c=(c&lt|Ze)>>Xe-p>>>0,r<0&&(c=-c),n-=i),r=_e(r=xr(f=1-((f=(o=(i=Ae(i=t+n,0))*Ye)+(u=(t-(i-n))*Me+i*ze))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<Xe>>>0)>>Xe<=0?Fn(f,c):Vr(f,r)}(h,s,p),a*y}function ci(r,n,t){var e;return nr(r)||nr(n)||nr(t)||t<0?NaN:r===$r?0:0===t?r===n?Dr:0:(e=Ln(-En((r-n)/t)))/(t*fi(1+e,2))}function si(r){return nr(r)?Rn(NaN):function(n){return nr(n)?NaN:n===r?Dr:0}}function pi(r,n,t){return nr(n)||nr(t)||nr(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*qr(r/(1-r))}function li(r){return nr(r)?Rn(NaN):function(n){return nr(n)||n<0||n>1?NaN:r}}function yi(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}function hi(){var r,n;if(!(this instanceof hi))return 0===arguments.length?new hi:new hi(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!H(r=arguments[0])||ir(r))throw new TypeError(yi("14d8p",r));if(!K(n))throw new TypeError(yi("14d7c",n))}else r=0,n=1;return $(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!H(n)||ir(n))throw new TypeError(yi("14d8d",n));r=n}}),$(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!K(r))throw new TypeError(yi("14d8k",r));n=r}}),this}return G((function(r,n){return nr(r)||nr(n)?NaN:r===n?Dr:0}),"factory",si),G(ci,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?si(r):function(t){var e,i;return nr(t)?NaN:t===$r?0:(i=En((t-r)/n),(e=Ln(-i))/(n*fi(1+e,2)))}})),G((function(r,n){return nr(r)||r<0||r>1?NaN:n}),"factory",li),G(pi,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?li(r):function(t){return nr(t)||t<0||t>1?NaN:r+n*qr(t/(1-t))}})),C(hi.prototype,"entropy",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:qr(n)+2;var r,n})),C(hi.prototype,"kurtosis",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:1.2;var r,n})),C(hi.prototype,"mean",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),C(hi.prototype,"median",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),C(hi.prototype,"mode",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),C(hi.prototype,"skewness",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:0;var r,n})),C(hi.prototype,"stdev",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:n*Xr/1.7320508075688772;var r,n})),C(hi.prototype,"variance",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:n*n*9.869604401089358/3;var r,n})),G(hi.prototype,"cdf",(function(r){return Wn(r,this.mu,this.s)})),G(hi.prototype,"logcdf",(function(r){return rt(r,this.mu,this.s)})),G(hi.prototype,"logpdf",(function(r){return tt(r,this.mu,this.s)})),G(hi.prototype,"mgf",(function(r){return ye(r,this.mu,this.s)})),G(hi.prototype,"pdf",(function(r){return ci(r,this.mu,this.s)})),G(hi.prototype,"quantile",(function(r){return pi(r,this.mu,this.s)})),hi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Logistic=n();
//# sourceMappingURL=browser.js.map
