/**
 * Capture the Flag
 * A friendly game of Capture the Flag
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@testdouble.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GameClient);
  }
}(this, function(expect, GameClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GameClient.GameApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GameApi', function() {
    describe('getPlayer', function() {
      it('should call getPlayer successfully', function(done) {
        //uncomment below and update the code to test getPlayer
        //instance.getPlayer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postMoves', function() {
      it('should call postMoves successfully', function(done) {
        //uncomment below and update the code to test postMoves
        //instance.postMoves(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
