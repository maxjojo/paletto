'use strict';

var paletto = function () {

// private attributes and methods
    this.couleurs1 = ['noir', 'vert', 'blanc', 'bleu', 'rouge', 'blanc'];
    this.couleurs2 = ['jaune', 'blanc', 'vert', 'rouge', 'jaune', 'bleu'];
    this.couleurs3 = ['bleu', 'jaune', 'bleu', 'blanc', 'noir', 'rouge'];
    this.couleurs4 = ['rouge', 'noir', 'rouge', 'vert', 'bleu', 'blanc'];
    this.couleurs5 = ['blanc', 'vert', 'jaune', 'noir', 'jaune', 'vert'];
    this.couleurs6 = ['jaune', 'bleu', 'noir', 'rouge', 'vert', 'noir'];
    this.tour=0;
    this.joueur1={'noir':0,'vert':0,'blanc':0,'bleu':0,'rouge':0,'jaune':0};
    this.joueur2={'noir':0,'vert':0,'blanc':0,'bleu':0,'rouge':0,'jaune':0};


    this.tray = new Array(6);
    for (var row = 0; row < 6; row++) {
        this.tray[row] = new Array(6);
    }

    this.init = function () {
        for (var column = 0; column < 6; column++) {
            this.tray[0][column] = this.couleurs1[column];
            this.tray[1][column] = this.couleurs2[column];
            this.tray[2][column] = this.couleurs3[column];
            this.tray[3][column] = this.couleurs4[column];
            this.tray[4][column] = this.couleurs5[column];
            this.tray[5][column] = this.couleurs6[column];
        }
    };

    this.juxtaposition = function () {
        var bool = true;
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < 6; column++) {
                if (column == 5) {
                    if (row < 5) {
                        if ((this.tray[row][column] == this.tray[row + 1][column])) {
                            bool = false;
                        }
                    }
                } else {
                    if (row == 5) {
                        if ((this.tray[row][column] == this.tray[row][column + 1])) {
                            bool = false;
                        }
                    } else {
                        if ((this.tray[row][column] == this.tray[row + 1][column]) || (this.tray[row][column] == this.tray[row][column + 1])) {
                            bool = false;
                        }

                    }
                }

            }
        }
        return bool;
    };

    this.changetour = function(){
        if(this.tour == 0)
            this.tour = 1;
        else
            this.tour = 0;
    }

    this.play = function ( ligne, colonne) {
        var couleur = this.tray[ligne][colonne];
        this.tray[ligne][colonne] = "vide";
        if(this.tour==0)
        {
            this.joueur1[couleur] = this.joueur1[couleur]+1;
        }
        else
        {
            this.joueur2[couleur] = this.joueur2[couleur]+1;
        }

        this.changetour();
    }

    this.comptepiece = function () {
        var compteur=0;
        for(var row=0;row<6;row++){
            for(var column=0;column<6;column++){
                if(this.tray[row][column]=='vide'){
                    compteur++;
                }
            }
        }
        return(36-compteur);
    }
// public methods
};
