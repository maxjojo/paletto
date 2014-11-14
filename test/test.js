'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testA = function () {
    var game = new paletto();
    game.init();
  assertTrue(game.juxtaposition()===true);
};

PalettoTestCase.prototype.testB = function () {
    var game = new paletto();
    game.init();
    var couleur=game.tray[5][0];
    game.play(5,0);
    assertTrue(game.tray[5][0]==="vide");
    console.log(game.joueur1[couleur]);
    assertTrue(game.joueur1[couleur]===1);

};

PalettoTestCase.prototype.testC = function () {
    var game = new paletto();
    game.init();
    var couleur=game.tray[5][0];
    game.play(5,0);
    assertTrue(game.comptepiece()===35);

};