'use strict'

var path = require('path')

module.exports = function (from) {
	from = from || process.cwd()
	var fp = path.join(from, 'package.json')
	var result = {}
	try {
		var pkg = require(fp)
		result.pkg = pkg
	} catch (error) {
		result.error = error
	}
	return result
}
