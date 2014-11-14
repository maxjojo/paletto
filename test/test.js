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
    game.play("jaune");
    assertTrue(game.tray[5][0]==="vide");
    console.log(game.joueur1[couleur]);
    assertTrue(game.joueur1[couleur]===1);

};

PalettoTestCase.prototype.testC = function () {
    var game = new paletto();
    game.init();
    game.play("jaune");
    assertTrue(game.comptepiece()===35);

};

PalettoTestCase.prototype.testD = function () {
    var game = new paletto();
    game.init();
    game.play("jaune");
    asserttrue(game.comptevoisin(0,0)==2);
    game.play("noir");
    assertTrue(game.joueur2['noir']===2);


};

PalettoTestCase.prototype.testE = function () {
    var game = new paletto();
    game.init();
    game.play("noir");
    game.play("vert");
    game.play("jaune");
    game.play("bleu");
    game.play("blanc");
    game.play("rouge");
    game.play("bleu");
    game.play("jaune");
    game.play("noir");
    asserttrue(game.win()==1);


};