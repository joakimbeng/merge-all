'use strict';
var test = require('ava');
var mergeAll = require('../src');

test('array of objects', function (assert) {
	assert.plan(1);
	var actual = mergeAll([{a: {b: 1}, c: {d: 1}}, {a: {b: 2}, c: {e: 2}}, {c: {e: 1}}]);
	var expected = {a: {b: 2}, c: {d: 1, e: 1}};
	assert.same(actual, expected);
});

test('non array', function (assert) {
	assert.plan(1);
	var actual = mergeAll({a: {b: 2}});
	var expected = {a: {b: 2}};
	assert.same(actual, expected);
});
