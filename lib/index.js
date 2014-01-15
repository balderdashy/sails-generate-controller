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

	before: require('./before'),

	targets: {
		'./:filename': { template: './controller.template' }
	}
};

