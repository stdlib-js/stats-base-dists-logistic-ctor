// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,N=/\.0$/,g=/\.0*e/,d=/(\..*[^0])0*e/;function w(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,d,"$1e"),e=p.call(e,g,"e"),e=p.call(e,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,y,"$1."),e=p.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function b(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var m=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,a,o,f,c,s,p,l,v,y,h;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(e=r[s],"string"==typeof e)f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,_(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(o)?String(e.arg):m(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,v=e.width,y=e.padRight,h=void 0,(h=v-l.length)<0?l:l=y?l+b(h):b(h)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(k(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){var n,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[I(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return U.apply(null,n)}var x=Object.prototype,F=x.toString,O=x.__defineGetter__,T=x.__defineSetter__,V=x.__lookupGetter__,P=x.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,n,t.get),o&&T&&T.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"";var X=L()?function(r){var n,t,e,i,a;if(null==r)return R.call(r);t=r[q],a=q,n=null!=(i=r)&&M.call(i,a);try{r[q]=void 0}catch(n){return R.call(r)}return e=R.call(r),n?r[q]=t:delete r[q],e}:function(r){return R.call(r)},Y=Number,z=Y.prototype.toString;var B=L();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return H(r)||D(r)}function K(r){return H(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function nr(r){return r!=r}function tr(r){return H(r)&&nr(r)}function er(r){return D(r)&&nr(r.valueOf())}function ir(r){return tr(r)||er(r)}G(J,"isPrimitive",H),G(J,"isObject",D),G(rr,"isPrimitive",K),G(rr,"isObject",Q),G(ir,"isPrimitive",tr),G(ir,"isObject",er);var ar="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var ur,fr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,sr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var lr,vr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr([1,3.14,-3.14,NaN]),t=n,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var yr=lr,hr="function"==typeof Uint8Array;var Nr="function"==typeof Uint8Array?Uint8Array:null;var gr,dr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),t=n,r=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var wr=gr,br="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof mr)return!1;try{n=new mr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:Ar,uint8:wr};(Er=new Ur.uint16(1))[0]=4660;var Sr=52===new Ur.uint8(Er.buffer)[0],kr=!0===Sr?1:0,Ir=new yr(1),jr=new cr(Ir.buffer);function xr(r){return Ir[0]=r,jr[kr]}var Fr=!0===Sr?1:0,Or=new yr(1),Tr=new cr(Or.buffer);function Vr(r,n){return Or[0]=r,Tr[Fr]=n>>>0,Or[0]}var Pr=1023,$r=Y.NEGATIVE_INFINITY;var Gr=.6931471803691238,Cr=1.9082149292705877e-10,Hr=0x40000000000000,Wr=.3333333333333333,Lr=1048575,Rr=2146435072,Mr=1048576,Zr=1072693248;function qr(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?$r:nr(r)||r<0?NaN:(a=0,(t=xr(r))<Mr&&(a-=54,t=xr(r*=Hr)),t>=Rr?r+r:(a+=(t>>20)-Pr|0,a+=(f=(t&=Lr)+614244&1048576|0)>>20|0,u=(r=Vr(r,t|f^Zr))-1,(Lr&2+t)<3?0===u?0===a?0:a*Gr+a*Cr:(o=u*u*(.5-Wr*u),0===a?u-o:a*Gr-(o-a*Cr-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Gr-(n-(s*(n+o)+a*Cr)-u)):0===a?u-s*(u-o):a*Gr-(s*(u-o)-a*Cr-u))))}var Xr=3.141592653589793;var Yr=Math.floor,zr=Math.ceil;function Br(r){return r<0?zr(r):Yr(r)}var Dr=Number.POSITIVE_INFINITY,Jr=1023,Kr=-1023,Qr=-1074;function rn(r){return r===Dr||r===$r}var nn,tn,en=2147483648,an=2147483647;!0===Sr?(nn=1,tn=0):(nn=0,tn=1);var on,un,fn={HIGH:nn,LOW:tn},cn=new yr(1),sn=new cr(cn.buffer),pn=fn.HIGH,ln=fn.LOW;function vn(r,n,t,e){return cn[0]=r,n[e]=sn[pn],n[e+t]=sn[ln],n}function yn(r){return vn(r,[0,0],1,0)}G(yn,"assign",vn),!0===Sr?(on=1,un=0):(on=0,un=1);var hn={HIGH:on,LOW:un},Nn=new yr(1),gn=new cr(Nn.buffer),dn=hn.HIGH,wn=hn.LOW;function bn(r,n){return gn[dn]=r,gn[wn]=n,Nn[0]}var mn=[0,0];function An(r,n){var t,e;return yn.assign(r,mn,1,0),t=mn[0],t&=an,e=xr(n),bn(t|=e&=en,mn[1])}var _n=22250738585072014e-324;function En(r){return Math.abs(r)}var Un=4503599627370496;function Sn(r,n,t,e){return nr(r)||rn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&En(r)<_n?(n[e]=r*Un,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}G((function(r){return Sn(r,[0,0],1,0)}),"assign",Sn);var kn=2146435072;var In=2220446049250313e-31,jn=2148532223,xn=[0,0],Fn=[0,0];function On(r,n){var t,e;return 0===n||0===r||nr(r)||rn(r)?r:(Sn(r,xn,1,0),r=xn[0],n+=xn[1],n+=function(r){var n=xr(r);return(n=(n&kn)>>>20)-Pr|0}(r),n<Qr?An(0,r):n>Jr?r<0?$r:Dr:(n<=Kr?(n+=52,e=In):e=1,yn.assign(r,Fn,1,0),t=Fn[0],t&=jn,e*bn(t|=n+Pr<<20,Fn[1])))}var Tn=.6931471803691238,Vn=1.9082149292705877e-10,Pn=1.4426950408889634,$n=709.782712893384,Gn=-745.1332191019411,Cn=1/(1<<28),Hn=-Cn;function Wn(r){var n;return nr(r)||r===Dr?r:r===$r?0:r>$n?Dr:r<Gn?0:r>Hn&&r<Cn?1+r:function(r,n,t){var e,i,a,o;return On(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(n=Br(r<0?Pn*r-.5:Pn*r+.5))*Tn,n*Vn,n)}function Ln(r,n,t){return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r<n?0:1:1/(1+Wn(-((r-n)/t)))}function Rn(r){return function(){return r}}function Mn(r){return nr(r)?Rn(NaN):function(n){if(nr(n))return NaN;return n<r?0:1}}G((function(r,n){return nr(r)||nr(n)?NaN:r<n?0:1}),"factory",Mn),G(Ln,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?Mn(r):function(t){if(nr(t))return NaN;return 1/(1+Wn(-((t-r)/n)))}}));var Zn=.6931471803691238,qn=1.9082149292705877e-10,Xn=.41421356237309503,Yn=-.2928932188134525,zn=1.862645149230957e-9,Bn=5551115123125783e-32,Dn=9007199254740992,Jn=.6666666666666666;function Kn(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||nr(r))return NaN;if(-1===r)return $r;if(r===Dr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Xn){if(e<zn)return e<Bn?r:r-r*r*.5;r>Yn&&(s=0,i=r,t=1)}return 0!==s&&(e<Dn?(a=(s=((t=xr(c=1+r))>>20)-Pr)>0?1-(c-r):r-(c-1),a/=c):(s=((t=xr(c=r))>>20)-Pr,a=0),(t&=1048575)<434334?c=Vr(c,1072693248|t):(s+=1,c=Vr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Zn+(a+=s*qn):s*Zn-((f=n*(1-Jn*i))-(s*qn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*Zn-(n-(o*(n+f)+(s*qn+a))-i))}function Qn(r){return r<=18?Kn(Wn(r)):r>33.3?r:r+Wn(-r)}function rt(r,n,t){return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r<n?$r:0:-Qn(-((r-n)/t))}function nt(r){return nr(r)?Rn(NaN):function(n){if(nr(n))return NaN;return n<r?$r:0}}function tt(r,n,t){var e;return nr(r)||nr(n)||nr(t)||t<0?NaN:r===$r?$r:0===t?r===n?Dr:$r:(e=-En((r-n)/t))-2*Kn(Wn(e))-qr(t)}function et(r){return nr(r)?Rn(NaN):function(n){if(nr(n))return NaN;return n===r?Dr:$r}}function it(r,n){var t,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*e-r*n))}G((function(r,n){return nr(r)||nr(n)?NaN:r<n?$r:0}),"factory",nt),G(rt,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?nt(r):function(t){if(nr(t))return NaN;return-Qn(-((t-r)/n))}})),G((function(r,n){return nr(r)||nr(n)?NaN:r===n?Dr:$r}),"factory",et),G(tt,"factory",(function(r,n){var t;return nr(r)||nr(n)||n<0?Rn(NaN):0===n?et(r):(t=qr(n),function(e){var i;if(nr(e))return NaN;if(e===$r)return $r;return(i=-En((e-r)/n))-2*Kn(Wn(i))-t})}));var at=-.16666666666666632,ot=.00833333333332249,ut=-.0001984126982985795,ft=27557313707070068e-22,ct=-2.5050760253406863e-8,st=1.58969099521155e-10;function pt(r,n){var t,e,i;return t=ot+(i=r*r)*(ut+i*ft)+i*(i*i)*(ct+i*st),e=i*r,0===n?r+e*(at+i*t):r-(i*(.5*n-e*t)-n-e*at)}var lt=1048575,vt=!0===Sr?0:1,yt=new yr(1),ht=new cr(yt.buffer);function Nt(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],dt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wt=16777216,bt=5.960464477539063e-8,mt=Nt(20),At=Nt(20),_t=Nt(20),Et=Nt(20);function Ut(r,n,t,e,i,a,o,u,f){var c,s,p,l,v,y,h,N,g;for(l=a,g=e[t],N=t,v=0;N>0;v++)s=bt*g|0,Et[v]=g-wt*s|0,g=e[N-1]+s,N-=1;if(g=On(g,i),g-=8*Yr(.125*g),g-=h=0|g,p=0,i>0?(h+=v=Et[t-1]>>24-i,Et[t-1]-=v<<24-i,p=Et[t-1]>>23-i):0===i?p=Et[t-1]>>23:g>=.5&&(p=2),p>0){for(h+=1,c=0,v=0;v<t;v++)N=Et[v],0===c?0!==N&&(c=1,Et[v]=16777216-N):Et[v]=16777215-N;if(i>0)switch(i){case 1:Et[t-1]&=8388607;break;case 2:Et[t-1]&=4194303}2===p&&(g=1-g,0!==c&&(g-=On(1,i)))}if(0===g){for(N=0,v=t-1;v>=a;v--)N|=Et[v];if(0===N){for(y=1;0===Et[a-y];y++);for(v=t+1;v<=t+y;v++){for(f[u+v]=gt[o+v],s=0,N=0;N<=u;N++)s+=r[N]*f[u+(v-N)];e[v]=s}return Ut(r,n,t+=y,e,i,a,o,u,f)}}if(0===g)for(t-=1,i-=24;0===Et[t];)t-=1,i-=24;else(g=On(g,-i))>=wt?(s=bt*g|0,Et[t]=g-wt*s|0,i+=24,Et[t+=1]=s):Et[t]=0|g;for(s=On(1,i),v=t;v>=0;v--)e[v]=s*Et[v],s*=bt;for(v=t;v>=0;v--){for(s=0,y=0;y<=l&&y<=t-v;y++)s+=dt[y]*e[v+y];_t[t-v]=s}for(s=0,v=t;v>=0;v--)s+=_t[v];for(n[0]=0===p?s:-s,s=_t[0]-s,v=1;v<=t;v++)s+=_t[v];return n[1]=0===p?s:-s,7&h}function St(r,n,t,e){var i,a,o,u,f,c,s;for(4,(a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),c=a-(o=e-1),s=o+4,f=0;f<=s;f++)mt[f]=c<0?0:gt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*mt[o+(f-c)];At[f]=i}return 4,Ut(r,n,4,At,u,4,a,o,mt)}var kt=Math.round,It=.6366197723675814,jt=1.5707963267341256,xt=6077100506506192e-26,Ft=6077100506303966e-26,Ot=20222662487959506e-37,Tt=20222662487111665e-37,Vt=84784276603689e-45,Pt=2047;function $t(r,n,t){var e,i,a,o,u;return a=r-(e=kt(r*It))*jt,o=e*xt,u=n>>20|0,t[0]=a-o,u-(xr(t[0])>>20&Pt)>16&&(o=e*Ot-((i=a)-(a=i-(o=e*Ft))-o),t[0]=a-o,u-(xr(t[0])>>20&Pt)>49&&(o=e*Vt-((i=a)-(a=i-(o=e*Tt))-o),t[0]=a-o)),t[1]=a-t[0]-o,e}var Gt=0,Ct=16777216,Ht=1.5707963267341256,Wt=6077100506506192e-26,Lt=2*Wt,Rt=3*Wt,Mt=4*Wt,Zt=598523,qt=1072243195,Xt=1073928572,Yt=1074752122,zt=1074977148,Bt=1075183036,Dt=1075388923,Jt=1075594811,Kt=1094263291,Qt=[0,0,0],re=[0,0];function ne(r,n){var t,e,i,a,o,u,f;if((i=xr(r)&an|0)<=qt)return n[0]=r,n[1]=0,0;if(i<=Yt)return(i&lt)===Zt?$t(r,i,n):i<=Xt?r>0?(f=r-Ht,n[0]=f-Wt,n[1]=f-n[0]-Wt,1):(f=r+Ht,n[0]=f+Wt,n[1]=f-n[0]+Wt,-1):r>0?(f=r-2*Ht,n[0]=f-Lt,n[1]=f-n[0]-Lt,2):(f=r+2*Ht,n[0]=f+Lt,n[1]=f-n[0]+Lt,-2);if(i<=Jt)return i<=Bt?i===zt?$t(r,i,n):r>0?(f=r-3*Ht,n[0]=f-Rt,n[1]=f-n[0]-Rt,3):(f=r+3*Ht,n[0]=f+Rt,n[1]=f-n[0]+Rt,-3):i===Dt?$t(r,i,n):r>0?(f=r-4*Ht,n[0]=f-Mt,n[1]=f-n[0]-Mt,4):(f=r+4*Ht,n[0]=f+Mt,n[1]=f-n[0]+Mt,-4);if(i<Kt)return $t(r,i,n);if(i>=kn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return yt[0]=r,ht[vt]}(r),f=bn(i-((e=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Qt[o]=0|f,f=(f-Qt[o])*Ct;for(Qt[2]=f,a=3;Qt[a-1]===Gt;)a-=1;return u=St(Qt,re,e,a),r<0?(n[0]=-re[0],n[1]=-re[1],-u):(n[0]=re[0],n[1]=re[1],u)}var te=[0,0],ee=2147483647,ie=1072243195,ae=1044381696,oe=2146435072;function ue(r){var n;if(n=xr(r),(n&=ee)<=ie)return n<ae?1:it(r,0);if(n>=oe)return NaN;switch(3&ne(r,te)){case 0:return it(te[0],te[1]);case 1:return-pt(te[0],te[1]);case 2:return-it(te[0],te[1]);default:return pt(te[0],te[1])}}var fe=1072243195,ce=1045430272,se=[0,0];function pe(r){var n;if(n=xr(r),(n&=an)<=fe)return n<ce?r:pt(r,0);if(n>=kn)return NaN;switch(3&ne(r,se)){case 0:return pt(se[0],se[1]);case 1:return it(se[0],se[1]);case 2:return-pt(se[0],se[1]);default:return-it(se[0],se[1])}}function le(r){return nr(r)?NaN:rn(r)?0:0===r?1:function(r){var n,t;return nr(r)||rn(r)?NaN:0===(n=En(t=r%2))||1===n?An(0,t):n<.25?pe(Xr*t):n<.75?An(ue(Xr*(n=.5-n)),t):n<1.25?(t=An(1,t)-t,pe(Xr*t)):n<1.75?-An(ue(Xr*(n-=1.5)),t):(t-=An(2,t),pe(Xr*t))}(r)/(Xr*r)}function ve(r,n,t){var e;return nr(e=t*r)||nr(n)||t<0||En(e)>1?NaN:Wn(n*r)/le(e)}function ye(r){return nr(r)?Rn(NaN):function(n){if(nr(n))return NaN;return Wn(r*n)}}function he(r){return Yr(r)===r}function Ne(r){return he(r/2)}function ge(r){return Ne(r>0?r-1:r+1)}G((function(r,n){return nr(r)||nr(n)?NaN:Wn(n*r)}),"factory",ye),G(ve,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?ye(r):function(t){var e=n*t;if(En(e)>1)return NaN;return Wn(r*t)/le(e)}}));var de=Math.sqrt,we=!0===Sr?0:1,be=new yr(1),me=new cr(be.buffer);function Ae(r,n){return be[0]=r,me[we]=n>>>0,be[0]}function _e(r){return 0|r}var Ee=1072693247,Ue=1e300,Se=1e-300;var ke=1048575,Ie=1048576,je=1072693248,xe=536870912,Fe=524288,Oe=20,Te=9007199254740992,Ve=.9617966939259756,Pe=.9617967009544373,$e=-7.028461650952758e-9,Ge=[1,1.5],Ce=[0,.5849624872207642],He=[0,1.350039202129749e-8];var We=1.4426950408889634,Le=1.4426950216293335,Re=1.9259629911266175e-8;var Me=.6931471805599453;var Ze=1048576,qe=1071644672,Xe=20,Ye=.6931471824645996,ze=-1.904654299957768e-9;var Be=1072693247,De=1105199104,Je=1139802112,Ke=1083179008,Qe=1072693248,ri=1083231232,ni=3230714880,ti=31,ei=1e300,ii=1e-300,ai=8008566259537294e-32,oi=[0,0],ui=[0,0];function fi(r,n){var t,e,i,a,o,u,f,c,s,p,l,v,y,h;if(nr(r)||nr(n))return NaN;if(yn.assign(n,oi,1,0),o=oi[0],0===oi[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return de(r);if(-.5===n)return 1/de(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(rn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:En(r)<1==(n===Dr)?0:Dr}(r,n)}if(yn.assign(r,oi,1,0),a=oi[0],0===oi[1]){if(0===a)return function(r,n){return n===$r?Dr:n===Dr?0:n>0?ge(n)?r:0:ge(n)?An(Dr,r):Dr}(r,n);if(1===r)return 1;if(-1===r&&ge(n))return-1;if(rn(r))return r===$r?fi(-0,-n):n<0?0:Dr}if(r<0&&!1===he(n))return(r-r)/(r-r);if(i=En(r),t=a&an|0,e=o&an|0,f=o>>>ti|0,u=(u=a>>>ti|0)&&ge(n)?-1:1,e>De){if(e>Je)return function(r,n){return(xr(r)&an)<=Ee?n<0?Ue*Ue:Se*Se:n>0?Ue*Ue:Se*Se}(r,n);if(t<Be)return 1===f?u*ei*ei:u*ii*ii;if(t>Qe)return 0===f?u*ei*ei:u*ii*ii;l=function(r,n){var t,e,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Re-a*We)-((e=Ae(e=(o=Le*i)+u,0))-o),r[0]=e,r[1]=t,r}(ui,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,v,y,h,N,g,d,w,b,m,A,_;return b=0,t<Ie&&(b-=53,t=xr(n*=Te)),b+=(t>>Oe)-Pr|0,t=(m=t&ke|0)|je|0,m<=235662?A=0:m<767610?A=1:(A=0,b+=1,t-=Ie),o=Ae(i=(d=(n=Vr(n,t))-(c=Ge[A]))*(w=1/(n+c)),0),e=(t>>1|xe)+Fe,f=Vr(0,e+=A<<18),g=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Ae(f=3+(a=o*o)+(g+=(u=w*(d-o*f-o*(n-(f-c))))*(o+i)),0),p=Ae(p=(d=o*f)+(w=u*f+(g-(f-3-a))*i),0),l=Pe*p,h=(v=$e*p+(w-(p-d))*Ve+He[A])-((y=Ae(y=l+v+(s=Ce[A])+(N=b),0))-N-s-l),r[0]=y,r[1]=h,r}(ui,i,t);if(v=(p=(n-(c=Ae(n,0)))*l[0]+n*l[1])+(s=c*l[0]),yn.assign(v,oi,1,0),y=_e(oi[0]),h=_e(oi[1]),y>=Ke){if(0!=(y-Ke|h))return u*ei*ei;if(p+ai>v-s)return u*ei*ei}else if((y&an)>=ri){if(0!=(y-ni|h))return u*ii*ii;if(p<=v-s)return u*ii*ii}return v=function(r,n,t){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&an|0)>>Xe)-Pr|0,c=0,s>qe&&(i=Vr(0,((c=r+(Ze>>p+1)>>>0)&~(lt>>(p=((c&an)>>Xe)-Pr|0)))>>>0),c=(c&lt|Ze)>>Xe-p>>>0,r<0&&(c=-c),n-=i),r=_e(r=xr(f=1-((f=(a=(i=Ae(i=t+n,0))*Ye)+(o=(t-(i-n))*Me+i*ze))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Xe>>>0)>>Xe<=0?On(f,c):Vr(f,r)}(y,s,p),u*v}function ci(r,n,t){var e;return nr(r)||nr(n)||nr(t)||t<0?NaN:r===$r?0:0===t?r===n?Dr:0:(e=Wn(-En((r-n)/t)))/(t*fi(1+e,2))}function si(r){return nr(r)?Rn(NaN):function(n){if(nr(n))return NaN;return n===r?Dr:0}}function pi(r,n,t){return nr(n)||nr(t)||nr(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*qr(r/(1-r))}function li(r){return nr(r)?Rn(NaN):function(n){if(nr(n)||n<0||n>1)return NaN;return r}}function vi(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}function yi(){var r,n;if(!(this instanceof yi))return 0===arguments.length?new yi:new yi(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!H(r=arguments[0])||ir(r))throw new TypeError(vi("14d8p",r));if(!K(n))throw new TypeError(vi("14d7c",n))}else r=0,n=1;return $(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!H(n)||ir(n))throw new TypeError(vi("14d8d",n));r=n}}),$(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!K(r))throw new TypeError(vi("14d8k",r));n=r}}),this}G((function(r,n){return nr(r)||nr(n)?NaN:r===n?Dr:0}),"factory",si),G(ci,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?si(r):function(t){var e,i;if(nr(t))return NaN;if(t===$r)return 0;return i=En((t-r)/n),(e=Wn(-i))/(n*fi(1+e,2))}})),G((function(r,n){return nr(r)||r<0||r>1?NaN:n}),"factory",li),G(pi,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Rn(NaN):0===n?li(r):function(t){if(nr(t)||t<0||t>1)return NaN;return r+n*qr(t/(1-t))}})),C(yi.prototype,"entropy",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:qr(n)+2;var r,n})),C(yi.prototype,"kurtosis",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:1.2;var r,n})),C(yi.prototype,"mean",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),C(yi.prototype,"median",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),C(yi.prototype,"mode",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),C(yi.prototype,"skewness",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:0;var r,n})),C(yi.prototype,"stdev",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:n*Xr/1.7320508075688772;var r,n})),C(yi.prototype,"variance",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:n*n*9.869604401089358/3;var r,n})),G(yi.prototype,"cdf",(function(r){return Ln(r,this.mu,this.s)})),G(yi.prototype,"logcdf",(function(r){return rt(r,this.mu,this.s)})),G(yi.prototype,"logpdf",(function(r){return tt(r,this.mu,this.s)})),G(yi.prototype,"mgf",(function(r){return ve(r,this.mu,this.s)})),G(yi.prototype,"pdf",(function(r){return ci(r,this.mu,this.s)})),G(yi.prototype,"quantile",(function(r){return pi(r,this.mu,this.s)}));export{yi as default};
//# sourceMappingURL=mod.js.map
