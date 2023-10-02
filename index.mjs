// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-entropy@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-kurtosis@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-mean@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-median@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-mode@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-skewness@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-stdev@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-variance@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-cdf@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-logcdf@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-logpdf@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-mgf@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-pdf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-quantile@v0.1.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function x(){var t,i;if(!(this instanceof x))return 0===arguments.length?new x:new x(arguments[0],arguments[1]);if(arguments.length){if(i=arguments[1],!n(t=arguments[0])||r(t))throw new TypeError(y("14d8p,HM",t));if(!e(i))throw new TypeError(y("14d7c,HN",i))}else t=0,i=1;return s(this,"mu",{configurable:!1,enumerable:!0,get:function(){return t},set:function(s){if(!n(s)||r(s))throw new TypeError(y("14d8d,H8",s));t=s}}),s(this,"s",{configurable:!1,enumerable:!0,get:function(){return i},set:function(s){if(!e(s))throw new TypeError(y("14d8k,HE",s));i=s}}),this}i(x.prototype,"entropy",(function(){return o(this.mu,this.s)})),i(x.prototype,"kurtosis",(function(){return d(this.mu,this.s)})),i(x.prototype,"mean",(function(){return m(this.mu,this.s)})),i(x.prototype,"median",(function(){return p(this.mu,this.s)})),i(x.prototype,"mode",(function(){return h(this.mu,this.s)})),i(x.prototype,"skewness",(function(){return l(this.mu,this.s)})),i(x.prototype,"stdev",(function(){return u(this.mu,this.s)})),i(x.prototype,"variance",(function(){return c(this.mu,this.s)})),t(x.prototype,"cdf",(function(s){return f(s,this.mu,this.s)})),t(x.prototype,"logcdf",(function(s){return j(s,this.mu,this.s)})),t(x.prototype,"logpdf",(function(s){return a(s,this.mu,this.s)})),t(x.prototype,"mgf",(function(s){return g(s,this.mu,this.s)})),t(x.prototype,"pdf",(function(s){return v(s,this.mu,this.s)})),t(x.prototype,"quantile",(function(s){return b(s,this.mu,this.s)}));export{x as default};
//# sourceMappingURL=index.mjs.map
