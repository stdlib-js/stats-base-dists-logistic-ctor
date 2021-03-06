/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isnan = require( '@stdlib/assert-is-nan' );
var entropy = require( '@stdlib/stats-base-dists-logistic-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-logistic-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-logistic-mean' );
var median = require( '@stdlib/stats-base-dists-logistic-median' );
var mode = require( '@stdlib/stats-base-dists-logistic-mode' );
var skewness = require( '@stdlib/stats-base-dists-logistic-skewness' );
var stdev = require( '@stdlib/stats-base-dists-logistic-stdev' );
var variance = require( '@stdlib/stats-base-dists-logistic-variance' );
var cdf = require( '@stdlib/stats-base-dists-logistic-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-logistic-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-logistic-logpdf' );
var mgf = require( '@stdlib/stats-base-dists-logistic-mgf' );
var pdf = require( '@stdlib/stats-base-dists-logistic-pdf' );
var quantile = require( '@stdlib/stats-base-dists-logistic-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function logisticCDF( x ) {
	return cdf( x, this.mu, this.s );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function logisticLogCDF( x ) {
	return logcdf( x, this.mu, this.s );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function logisticLogPDF( x ) {
	return logpdf( x, this.mu, this.s );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function logisticMGF( t ) {
	return mgf( t, this.mu, this.s );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function logisticPDF( x ) {
	return pdf( x, this.mu, this.s );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function logisticQuantile( p ) {
	return quantile( p, this.mu, this.s );
}


// MAIN //

/**
* Logistic distribution constructor.
*
* @constructor
* @param {number} [mu=0.0] - location parameter
* @param {PositiveNumber} [s=1.0] - scale parameter
* @throws {TypeError} `s` must be a positive number
* @returns {Logistic} distribution instance
*
* @example
* var logistic = new Logistic( 1.0, 1.0 );
*
* var y = logistic.cdf( 1.5 );
* // returns ~0.622
*
* var mu = logistic.mean;
* // returns 1.0
*/
function Logistic() {
	var mu;
	var s;
	if ( !(this instanceof Logistic) ) {
		if ( arguments.length === 0 ) {
			return new Logistic();
		}
		return new Logistic( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		mu = arguments[ 0 ];
		s = arguments[ 1 ];
		if ( !isNumber( mu ) || isnan( mu ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', mu ) );
		}
		if ( !isPositive( s ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', s ) );
		}
	} else {
		mu = 0.0;
		s = 1.0;
	}
	defineProperty( this, 'mu', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return mu;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			mu = value;
		}
	});
	defineProperty( this, 's', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return s;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			s = value;
		}
	});
	return this;
}

/**
* Logistic distribution differential entropy.
*
* @name entropy
* @memberof Logistic.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.entropy;
* // returns ~4.485
*/
setReadOnlyAccessor( Logistic.prototype, 'entropy', function get() {
	return entropy( this.mu, this.s );
});

/**
* Logistic distribution excess kurtosis.
*
* @name kurtosis
* @memberof Logistic.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.kurtosis;
* // returns 1.2
*/
setReadOnlyAccessor( Logistic.prototype, 'kurtosis', function get() {
	return kurtosis( this.mu, this.s );
});

/**
* Logistic distribution expected value.
*
* @name mean
* @memberof Logistic.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.mean;
* // returns 4.0
*/
setReadOnlyAccessor( Logistic.prototype, 'mean', function get() {
	return mean( this.mu, this.s );
});

/**
* Logistic distribution median.
*
* @name median
* @memberof Logistic.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.median;
* // returns 4.0
*/
setReadOnlyAccessor( Logistic.prototype, 'median', function get() {
	return median( this.mu, this.s );
});

/**
* Logistic distribution mode.
*
* @name mode
* @memberof Logistic.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Logistic.prototype, 'mode', function get() {
	return mode( this.mu, this.s );
});

/**
* Logistic distribution skewness.
*
* @name skewness
* @memberof Logistic.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( Logistic.prototype, 'skewness', function get() {
	return skewness( this.mu, this.s );
});

/**
* Logistic distribution standard deviation.
*
* @name stdev
* @memberof Logistic.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.stdev;
* // returns ~21.766
*/
setReadOnlyAccessor( Logistic.prototype, 'stdev', function get() {
	return stdev( this.mu, this.s );
});

/**
* Logistic distribution variance.
*
* @name variance
* @memberof Logistic.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var logistic = new Logistic( 4.0, 12.0 );
*
* var v = logistic.variance;
* // returns ~473.741
*/
setReadOnlyAccessor( Logistic.prototype, 'variance', function get() {
	return variance( this.mu, this.s );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Logistic.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var logistic = new Logistic( 2.0, 4.0 );
*
* var v = logistic.cdf( 0.5 );
* // returns ~0.407
*/
setReadOnly( Logistic.prototype, 'cdf', logisticCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Logistic.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var logistic = new Logistic( 2.0, 4.0 );
*
* var v = logistic.logcdf( 0.5 );
* // returns ~-0.898
*/
setReadOnly( Logistic.prototype, 'logcdf', logisticLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Logistic.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var logistic = new Logistic( 2.0, 4.0 );
*
* var v = logistic.logpdf( 0.8 );
* // returns ~-2.795
*/
setReadOnly( Logistic.prototype, 'logpdf', logisticLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Logistic.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var logistic = new Logistic( 2.0, 4.0 );
*
* var v = logistic.mgf( 0.2 );
* // returns ~6.379
*/
setReadOnly( Logistic.prototype, 'mgf', logisticMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Logistic.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var logistic = new Logistic( 2.0, 4.0 );
*
* var v = logistic.pdf( 0.8 );
* // returns ~0.061
*/
setReadOnly( Logistic.prototype, 'pdf', logisticPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Logistic.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var logistic = new Logistic( 2.0, 4.0 );
*
* var v = logistic.quantile( 0.5 );
* // returns 2.0
*/
setReadOnly( Logistic.prototype, 'quantile', logisticQuantile );


// EXPORTS //

module.exports = Logistic;
