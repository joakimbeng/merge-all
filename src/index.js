'use strict';
var arrify = require('arrify');
var assign = require('object-assign');

module.exports = function mergeAll(arr) {
	return arrify(arr).reduce(function (result, obj) {
		return Object.keys(obj).reduce(function (result, key) {
			result[key] = assign({}, result[key], obj[key]);
			return result;
		}, result);
	}, {});
};
