'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testA = function () {
    var game = new paletto();
  assertTrue(game.juxtapositon()===true);
};