/**
 * sails-generate-controller
 *
 * Usage:
 * `sails generate controller`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	bootstrap: require('./bootstrap'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-controller) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

