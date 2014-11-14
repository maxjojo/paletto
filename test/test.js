'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testA = function () {
    var game = new paletto();
    game.init();
  assertTrue(game.juxtaposition()===true);
};