# merge-all

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Merge all Objects in an Array

## Installation

Install `merge-all` using [npm](https://www.npmjs.com/):

```bash
npm install --save merge-all
```

## Usage

### Module usage

```javascript
var mergeAll = require('merge-all');

mergeAll([{a: {b: 1}, c: {d: 1}}, {a: {b: 2}, c: {e: 2}}, {c: {e: 1}}]);
// {a: {b: 2}, c: {d: 1, e: 1}}
```

## API

### `mergeAll(arr)`

| Name | Type | Description |
|------|------|-------------|
| arr | `Array` | A collection of objects to merge |

Returns: `Object`, the merged object.

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/merge-all
[npm-image]: https://badge.fury.io/js/merge-all.svg
[travis-url]: https://travis-ci.org/joakimbeng/merge-all
[travis-image]: https://travis-ci.org/joakimbeng/merge-all.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
