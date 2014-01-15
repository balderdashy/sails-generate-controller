/**
 * Module dependencies
 */

var util = require('util')
	, _ = require('lodash');

// Make _.defaults recursive
_.defaults = require('merge-defaults');




/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function before (scope, cb) {

	// validate custom scope variables which
	// are required by this generator, e.g.
	// _.defaults(options, {
	// 		dirPath: sails.config.paths.controllers,
	// 		globalID: _.str.capitalize(options.id) + 'Controller',
	// 		actions: []
	// 	});


	// 	_.defaults(options, {
	// 		filename: options.globalID + '.' + options.ext
	// 	});

	// 	// Validate optional action arguments
	// 	var actions = options.actions;
	// 	var invalidActions = [];
	// 	actions = _.map(actions, function (action, i) {

	// 		// TODO: validate action names
	// 		var invalid = false;

	// 		// Handle errors
	// 		if (invalid) {
	// 			return invalidActions.push(
	// 				'Invalid action notation:   "' + action + '"');
	// 		}
	// 		return action;
	// 	});


	// mixin default scope variables, e.g.
	_.defaults(scope, {

	});

	cb();
};
