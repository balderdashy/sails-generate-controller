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
		'./': { template: './controller.template' }
	}
};

