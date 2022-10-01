// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,N,s,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((N="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),s="get"in a,y="set"in a,N&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function s(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var b=v()?function(r){var n,t,e,u,i;if(null==r)return l.call(r);t=r[h],i=h,n=null!=(u=r)&&p.call(u,i);try{r[h]=void 0}catch(n){return l.call(r)}return e=l.call(r),n?r[h]=t:delete r[h],e}:function(r){return l.call(r)},m=Number,w=m.prototype.toString;var d=v();function g(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function A(r){return s(r)||g(r)}function _(r){return s(r)&&r>0}function U(r){return g(r)&&r.valueOf()>0}function j(r){return _(r)||U(r)}function O(r){return r!=r}function E(r){return s(r)&&O(r)}function I(r){return g(r)&&O(r.valueOf())}function S(r){return E(r)||I(r)}c(A,"isPrimitive",s),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U),c(S,"isPrimitive",E),c(S,"isObject",I);var T="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null;var P,H="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(T&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G=P,M="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null;var k,L="function"==typeof Float64Array?Float64Array:void 0;k=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(M&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var W=k,x="function"==typeof Uint8Array;var q="function"==typeof Uint8Array?Uint8Array:null;var C,Y="function"==typeof Uint8Array?Uint8Array:void 0;C=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var D=C,R="function"==typeof Uint16Array;var X="function"==typeof Uint16Array?Uint16Array:null;var z,B="function"==typeof Uint16Array?Uint16Array:void 0;z=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,65536,65537]),t=n,r=(R&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var J,K={uint16:z,uint8:D};(J=new K.uint16(1))[0]=4660;var Q=52===new K.uint8(J.buffer)[0],Z=!0===Q?1:0,$=new W(1),rr=new G($.buffer);function nr(r){return $[0]=r,rr[Z]}var tr=!0===Q?1:0,er=new W(1),ur=new G(er.buffer);function ir(r,n){return er[0]=r,ur[tr]=n>>>0,er[0]}var or=m.NEGATIVE_INFINITY;var fr=.6931471803691238,ar=1.9082149292705877e-10;function cr(r){var n,t,e,u,i,o,f,a,c,N,s,y;return 0===r?or:O(r)||r<0?NaN:(i=0,(t=nr(r))<1048576&&(i-=54,t=nr(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=ir(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===i?0:i*fr+i*ar:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*fr-(o-i*ar-f)):(a=t-398458|0,c=440401-t|0,u=(s=(y=(N=f/(2+f))*N)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-N*(n+o)):i*fr-(n-(N*(n+o)+i*ar)-f)):0===i?f-N*(f-o):i*fr-(N*(f-o)-i*ar-f))))}var Nr=3.141592653589793;var sr=Math.floor,yr=Math.ceil;function vr(r){return r<0?yr(r):sr(r)}var lr,pr,hr=Number.POSITIVE_INFINITY;function br(r){return r===hr||r===or}!0===Q?(lr=1,pr=0):(lr=0,pr=1);var mr,wr,dr={HIGH:lr,LOW:pr},gr=new W(1),Ar=new G(gr.buffer),_r=dr.HIGH,Ur=dr.LOW;function jr(r,n){return gr[0]=n,r[0]=Ar[_r],r[1]=Ar[Ur],r}function Or(r,n){return 1===arguments.length?jr([0,0],r):jr(r,n)}!0===Q?(mr=1,wr=0):(mr=0,wr=1);var Er={HIGH:mr,LOW:wr},Ir=new W(1),Sr=new G(Ir.buffer),Tr=Er.HIGH,Fr=Er.LOW;function Pr(r,n){return Sr[Tr]=r,Sr[Fr]=n,Ir[0]}var Hr=[0,0];function Gr(r,n){var t,e;return Or(Hr,r),t=Hr[0],t&=2147483647,e=nr(n),Pr(t|=e&=2147483648,Hr[1])}function Mr(r){return Math.abs(r)}function Vr(r,n){return O(n)||br(n)?(r[0]=n,r[1]=0,r):0!==n&&Mr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var kr=[0,0],Lr=[0,0];function Wr(r,n){var t,e;return 0===n||0===r||O(r)||br(r)?r:(function(r,n){1===arguments.length?Vr([0,0],r):Vr(r,n)}(kr,r),n+=kr[1],n+=function(r){var n=nr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=kr[0]),n<-1074?Gr(0,r):n>1023?r<0?or:hr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Or(Lr,r),t=Lr[0],t&=2148532223,e*Pr(t|=n+1023<<20,Lr[1])))}function xr(r){var n;return O(r)||r===hr?r:r===or?0:r>709.782712893384?hr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,o;return Wr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=vr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function qr(r,n,t){return O(r)||O(n)||O(t)||t<0?NaN:0===t?r<n?0:1:1/(1+xr(-((r-n)/t)))}function Cr(r){return function(){return r}}function Yr(r){return O(r)?Cr(NaN):function(n){if(O(n))return NaN;return n<r?0:1}}c((function(r,n){return O(r)||O(n)?NaN:r<n?0:1}),"factory",Yr),c(qr,"factory",(function(r,n){return O(r)||O(n)||n<0?Cr(NaN):0===n?Yr(r):function(t){if(O(t))return NaN;return 1/(1+xr(-((t-r)/n)))}}));var Dr=.6931471803691238,Rr=1.9082149292705877e-10;function Xr(r){var n,t,e,u,i,o,f,a,c,N;if(r<-1||O(r))return NaN;if(-1===r)return or;if(r===hr)return r;if(0===r)return r;if(N=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(N=0,u=r,t=1)}return 0!==N&&(e<9007199254740992?(i=(N=((t=nr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(N=((t=nr(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=ir(c,1072693248|t):(N+=1,c=ir(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?N*Dr+(i+=N*Rr):N*Dr-((a=n*(1-.6666666666666666*u))-(N*Rr+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===N?u-(n-o*(n+a)):N*Dr-(n-(o*(n+a)+(N*Rr+i))-u))}function zr(r){return r<=18?Xr(xr(r)):r>33.3?r:r+xr(-r)}function Br(r,n,t){return O(r)||O(n)||O(t)||t<0?NaN:0===t?r<n?or:0:-zr(-((r-n)/t))}function Jr(r){return O(r)?Cr(NaN):function(n){if(O(n))return NaN;return n<r?or:0}}function Kr(r,n,t){var e;return O(r)||O(n)||O(t)||t<0?NaN:r===or?or:0===t?r===n?hr:or:(e=-Mr((r-n)/t))-2*Xr(xr(e))-cr(t)}function Qr(r){return O(r)?Cr(NaN):function(n){if(O(n))return NaN;return n===r?hr:or}}function Zr(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}c((function(r,n){return O(r)||O(n)?NaN:r<n?or:0}),"factory",Jr),c(Br,"factory",(function(r,n){return O(r)||O(n)||n<0?Cr(NaN):0===n?Jr(r):function(t){if(O(t))return NaN;return-zr(-((t-r)/n))}})),c((function(r,n){return O(r)||O(n)?NaN:r===n?hr:or}),"factory",Qr),c(Kr,"factory",(function(r,n){var t;return O(r)||O(n)||n<0?Cr(NaN):0===n?Qr(r):(t=cr(n),function(e){var u;if(O(e))return NaN;if(e===or)return or;return(u=-Mr((e-r)/n))-2*Xr(xr(u))-t})}));var $r=-.16666666666666632;function rn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*($r+u*t):r-(u*(.5*n-e*t)-n-e*$r)}var nn=!0===Q?0:1,tn=new W(1),en=new G(tn.buffer);function un(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var on=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],an=5.960464477539063e-8,cn=un(20),Nn=un(20),sn=un(20),yn=un(20);function vn(r,n,t,e,u,i,o,f,a){var c,N,s,y,v,l,p,h,b;for(y=i,b=e[t],h=t,v=0;h>0;v++)N=an*b|0,yn[v]=b-16777216*N|0,b=e[h-1]+N,h-=1;if(b=Wr(b,u),b-=8*sr(.125*b),b-=p=0|b,s=0,u>0?(p+=v=yn[t-1]>>24-u,yn[t-1]-=v<<24-u,s=yn[t-1]>>23-u):0===u?s=yn[t-1]>>23:b>=.5&&(s=2),s>0){for(p+=1,c=0,v=0;v<t;v++)h=yn[v],0===c?0!==h&&(c=1,yn[v]=16777216-h):yn[v]=16777215-h;if(u>0)switch(u){case 1:yn[t-1]&=8388607;break;case 2:yn[t-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=Wr(1,u)))}if(0===b){for(h=0,v=t-1;v>=i;v--)h|=yn[v];if(0===h){for(l=1;0===yn[i-l];l++);for(v=t+1;v<=t+l;v++){for(a[f+v]=on[o+v],N=0,h=0;h<=f;h++)N+=r[h]*a[f+(v-h)];e[v]=N}return vn(r,n,t+=l,e,u,i,o,f,a)}}if(0===b)for(t-=1,u-=24;0===yn[t];)t-=1,u-=24;else(b=Wr(b,-u))>=16777216?(N=an*b|0,yn[t]=b-16777216*N|0,u+=24,yn[t+=1]=N):yn[t]=0|b;for(N=Wr(1,u),v=t;v>=0;v--)e[v]=N*yn[v],N*=an;for(v=t;v>=0;v--){for(N=0,l=0;l<=y&&l<=t-v;l++)N+=fn[l]*e[v+l];sn[t-v]=N}for(N=0,v=t;v>=0;v--)N+=sn[v];for(n[0]=0===s?N:-N,N=sn[0]-N,v=1;v<=t;v++)N+=sn[v];return n[1]=0===s?N:-N,7&p}function ln(r,n,t,e){var u,i,o,f,a,c,N;for(4,(i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(o=e-1),N=o+4,a=0;a<=N;a++)cn[a]=c<0?0:on[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=o;c++)u+=r[c]*cn[o+(a-c)];Nn[a]=u}return 4,vn(r,n,4,Nn,f,4,i,o,cn)}var pn=Math.round;function hn(r,n,t){var e,u,i,o,f;return i=r-1.5707963267341256*(e=pn(.6366197723675814*r)),o=6077100506506192e-26*e,f=n>>20|0,t[0]=i-o,f-(nr(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=i)-(i=u-(o=6077100506303966e-26*e))-o),t[0]=i-o,f-(nr(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=i)-(i=u-(o=20222662487111665e-37*e))-o),t[0]=i-o)),t[1]=i-t[0]-o,e}var bn=1.5707963267341256,mn=6077100506506192e-26,wn=2*mn,dn=4*mn,gn=[0,0,0],An=[0,0];function _n(r,n){var t,e,u,i,o,f,a;if((u=2147483647&nr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?hn(r,u,n):u<=1073928572?r>0?(a=r-bn,n[0]=a-mn,n[1]=a-n[0]-mn,1):(a=r+bn,n[0]=a+mn,n[1]=a-n[0]+mn,-1):r>0?(a=r-2*bn,n[0]=a-wn,n[1]=a-n[0]-wn,2):(a=r+2*bn,n[0]=a+wn,n[1]=a-n[0]+wn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?hn(r,u,n):r>0?(a=r-3*bn,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*bn,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?hn(r,u,n):r>0?(a=r-4*bn,n[0]=a-dn,n[1]=a-n[0]-dn,4):(a=r+4*bn,n[0]=a+dn,n[1]=a-n[0]+dn,-4);if(u<1094263291)return hn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return tn[0]=r,en[nn]}(r),a=Pr(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)gn[o]=0|a,a=16777216*(a-gn[o]);for(gn[2]=a,i=3;0===gn[i-1];)i-=1;return f=ln(gn,An,e,i),r<0?(n[0]=-An[0],n[1]=-An[1],-f):(n[0]=An[0],n[1]=An[1],f)}var Un=[0,0];function jn(r){var n;if(n=nr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Zr(r,0);if(n>=2146435072)return NaN;switch(3&_n(r,Un)){case 0:return Zr(Un[0],Un[1]);case 1:return-rn(Un[0],Un[1]);case 2:return-Zr(Un[0],Un[1]);default:return rn(Un[0],Un[1])}}var On=[0,0];function En(r){var n;if(n=nr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:rn(r,0);if(n>=2146435072)return NaN;switch(3&_n(r,On)){case 0:return rn(On[0],On[1]);case 1:return Zr(On[0],On[1]);case 2:return-rn(On[0],On[1]);default:return-Zr(On[0],On[1])}}function In(r){return O(r)?NaN:br(r)?0:0===r?1:function(r){var n,t;return O(r)||br(r)?NaN:0===(n=Mr(t=r%2))||1===n?Gr(0,t):n<.25?En(Nr*t):n<.75?Gr(jn(Nr*(n=.5-n)),t):n<1.25?(t=Gr(1,t)-t,En(Nr*t)):n<1.75?-Gr(jn(Nr*(n-=1.5)),t):(t-=Gr(2,t),En(Nr*t))}(r)/(Nr*r)}function Sn(r,n,t){var e;return O(e=t*r)||O(n)||t<0||Mr(e)>1?NaN:xr(n*r)/In(e)}function Tn(r){return O(r)?Cr(NaN):function(n){if(O(n))return NaN;return xr(r*n)}}function Fn(r){return sr(r)===r}function Pn(r){return Fn(r/2)}function Hn(r){return Pn(r>0?r-1:r+1)}c((function(r,n){return O(r)||O(n)?NaN:xr(n*r)}),"factory",Tn),c(Sn,"factory",(function(r,n){return O(r)||O(n)||n<0?Cr(NaN):0===n?Tn(r):function(t){var e=n*t;if(Mr(e)>1)return NaN;return xr(r*t)/In(e)}}));var Gn=Math.sqrt,Mn=!0===Q?0:1,Vn=new W(1),kn=new G(Vn.buffer);function Ln(r,n){return Vn[0]=r,kn[Mn]=n>>>0,Vn[0]}function Wn(r){return 0|r}var xn=[1,1.5],qn=[0,.5849624872207642],Cn=[0,1.350039202129749e-8];var Yn=1e300,Dn=1e-300,Rn=[0,0],Xn=[0,0];function zn(r,n){var t,e,u,i,o,f,a,c,N,s,y,v,l,p;if(O(r)||O(n))return NaN;if(Or(Rn,n),o=Rn[0],0===Rn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Gn(r);if(-.5===n)return 1/Gn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(br(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Mr(r)<1==(n===hr)?0:hr}(r,n)}if(Or(Rn,r),i=Rn[0],0===Rn[1]){if(0===i)return function(r,n){return n===or?hr:n===hr?0:n>0?Hn(n)?r:0:Hn(n)?Gr(hr,r):hr}(r,n);if(1===r)return 1;if(-1===r&&Hn(n))return-1;if(br(r))return r===or?zn(-0,-n):n<0?0:hr}if(r<0&&!1===Fn(n))return(r-r)/(r-r);if(u=Mr(r),t=2147483647&i|0,e=2147483647&o|0,a=o>>>31|0,f=(f=i>>>31|0)&&Hn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&nr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Yn*Yn:f*Dn*Dn;if(t>1072693248)return 0===a?f*Yn*Yn:f*Dn*Dn;y=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Ln(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Xn,u)}else y=function(r,n,t){var e,u,i,o,f,a,c,N,s,y,v,l,p,h,b,m,w,d,g,A,_;return d=0,t<1048576&&(d-=53,t=nr(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,t-=1048576),o=Ln(u=(m=(n=ir(n,t))-(c=xn[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),a=ir(0,e+=A<<18),b=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Ln(a=3+(i=o*o)+(b+=(f=w*(m-o*a-o*(n-(a-c))))*(o+u)),0),p=(v=-7.028461650952758e-9*(s=Ln(s=(m=o*a)+(w=f*a+(b-(a-3-i))*u),0))+.9617966939259756*(w-(s-m))+Cn[A])-((l=Ln(l=(y=.9617967009544373*s)+v+(N=qn[A])+(h=d),0))-h-N-y),r[0]=l,r[1]=p,r}(Xn,u,t);if(s=(n-(c=Ln(n,0)))*y[0]+n*y[1],N=c*y[0],Or(Rn,v=s+N),l=Wn(Rn[0]),p=Wn(Rn[1]),l>=1083179008){if(0!=(l-1083179008|p))return f*Yn*Yn;if(s+8008566259537294e-32>v-N)return f*Yn*Yn}else if((2147483647&l)>=1083231232){if(0!=(l-3230714880|p))return f*Dn*Dn;if(s<=v-N)return f*Dn*Dn}return v=function(r,n,t){var e,u,i,o,f,a,c,N,s,y,v;return y=((s=2147483647&r|0)>>20)-1023|0,N=0,s>1071644672&&(e=((N=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&N)>>20)-1023|0)))>>>0,N=(1048575&N|1048576)>>20-y>>>0,r<0&&(N=-N),n-=i=ir(0,e)),r=Wn(r=nr(c=1-((c=(o=.6931471824645996*(i=Ln(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=N<<20>>>0)>>20<=0?Wr(c,N):ir(c,r)}(l,N,s),f*v}function Bn(r,n,t){var e;return O(r)||O(n)||O(t)||t<0?NaN:r===or?0:0===t?r===n?hr:0:(e=xr(-Mr((r-n)/t)))/(t*zn(1+e,2))}function Jn(r){return O(r)?Cr(NaN):function(n){if(O(n))return NaN;return n===r?hr:0}}function Kn(r,n,t){return O(n)||O(t)||O(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*cr(r/(1-r))}function Qn(r){return O(r)?Cr(NaN):function(n){if(O(n)||n<0||n>1)return NaN;return r}}function Zn(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function $n(){var r,n;if(!(this instanceof $n))return 0===arguments.length?new $n:new $n(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!s(r=arguments[0])||S(r))throw new TypeError(Zn("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!_(n))throw new TypeError(Zn("0XD7u",n))}else r=0,n=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!s(n)||S(n))throw new TypeError(Zn("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),a(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(Zn("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}c((function(r,n){return O(r)||O(n)?NaN:r===n?hr:0}),"factory",Jn),c(Bn,"factory",(function(r,n){return O(r)||O(n)||n<0?Cr(NaN):0===n?Jn(r):function(t){var e,u;if(O(t))return NaN;if(t===or)return 0;return u=Mr((t-r)/n),(e=xr(-u))/(n*zn(1+e,2))}})),c((function(r,n){return O(r)||r<0||r>1?NaN:n}),"factory",Qn),c(Kn,"factory",(function(r,n){return O(r)||O(n)||n<0?Cr(NaN):0===n?Qn(r):function(t){if(O(t)||t<0||t>1)return NaN;return r+n*cr(t/(1-t))}})),N($n.prototype,"entropy",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:cr(n)+2;var r,n})),N($n.prototype,"kurtosis",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:1.2;var r,n})),N($n.prototype,"mean",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),N($n.prototype,"median",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),N($n.prototype,"mode",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),N($n.prototype,"skewness",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:0;var r,n})),N($n.prototype,"stdev",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:n*Nr/1.7320508075688772;var r,n})),N($n.prototype,"variance",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:n*n*9.869604401089358/3;var r,n})),c($n.prototype,"cdf",(function(r){return qr(r,this.mu,this.s)})),c($n.prototype,"logcdf",(function(r){return Br(r,this.mu,this.s)})),c($n.prototype,"logpdf",(function(r){return Kr(r,this.mu,this.s)})),c($n.prototype,"mgf",(function(r){return Sn(r,this.mu,this.s)})),c($n.prototype,"pdf",(function(r){return Bn(r,this.mu,this.s)})),c($n.prototype,"quantile",(function(r){return Kn(r,this.mu,this.s)}));export{$n as default};
//# sourceMappingURL=mod.js.map
