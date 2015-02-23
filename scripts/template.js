/*jshint expr:true eqnull:true */
/**
 *
 * Backbone.DeepModel v{{version}}
 *
 * Copyright (c) 2013 Charles Davison, Pow Media Ltd
 *
 * https://github.com/powmedia/backbone-deep-model
 * Licensed under the MIT License
 */

;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['underscore', 'backbone'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('underscore'), require('backbone'));
    } else {
        // globals
        factory(_, Backbone);
    }
}(function(_, Backbone) {

    // clone the original object, and rebind it to the local variable '_',
    // in order to localize mix-in effects
    _ = _.clone(_);

{{body}}

    return Backbone;

}));
