/*
// A1
// Initialisation: position de la souris
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceDown();
// Réalisation
forward(200);
faceRight();
forward(100);

//A2
//Initialisation
setPos(300, 300);
changeColor(color.yellow);
faceLeft();
setLineWidth(10);
// TODO
// Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);
// TODO

//A3
//Initialisation
setPos(300, 300);
changeColor(color.red);
faceLeft();
setLineWidth(10);

//Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
forward(200);
faceDown();

//A4
//Inisialisation
setPos(200, 500);
faceRight();
changeColor(color.green);
setLineWidth(10);

//Réalisation
forward(200);
arcLeft(100, 180);
forward(100);
arcRight(100, 180);
forward(200);

//A5
//Inisialisation
setPos(300, 100);
faceRight();
setLineWidth(10);
changeColor(color.red);

//Réalisation
arcRight(50, 180);
arcLeft(50, 180);
arcLeft(100, 180);
arcLeft(100, 180);

//A6 
//Inisialisation
setPos(300,300);
changeColor(color.blue);
setLineWidth(10);
faceUp();
//Réalisation
forward(50);
up();
forward(50);
down();
forward(100);

//A7
//Inisialitation
setPos(200, 300);
changeColor(color.green);
setLineWidth(10);
faceDown();
//Réalisation
forward(200);
arcLeft(100, 180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100, 180);
forward(100);

//A8
//Inisialisation
setPos(300, 300);
faceUp();
changeColor(color.red);
setLineWidth(10);
//Réalisation
forward(100);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100);

//B1
//Inisialitation
setPos(100, 100);
faceRight();
changeColor(color.green);
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}

//B1
//Inisialisation
setPos(0, 300);
faceUp();
changeColor(color.red);
setLineWidth(10);
//Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
    faceUp();
}

//B3
//Inisialisation
setPos(200, 200);
faceRight();
changeColor(color.yellow);
setLineWidth(10);
//Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(200);
    right(90);
}

//B4
//Inisialisation
setPos(200,400);
faceRight();
setLineWidth(10);
changeColor(color.blue);

//Réalisation
for( let i = 0 ; i < 3 ; i++) {
    forward(200);
    left(180-60);
}

//B5
//Inisialisation
setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);
faceUp();
//Réalisation
forward(200);
for( let i = 0 ; i < 3 ; i++){
    changeColor("#8b22b5");
    forward(100);
    right(180-60);
}

//B6 
//Inisialitation
setPos(100,400);
faceRight();
setLineWidth(10);
changeColor(color.red);

//Réalisation
for( let i = 0 ; i < 2 ; i++){
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor("#22b542ff");

for( let i = 0 ; i < 3 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}

//B7
//Inisialisation
setPos(300, 300);
setLineWidth(10);
faceRight();
changeColor(color.red);

//Réalisation
for( let i = 0 ; i < 3 ; i++){
    forward(200);
    left(180-60);
}
for( let i = 0 ; i < 4 ; i++){
    forward(200);
    right(90);
}

//B8
//Inisialisation
setPos(100, 300);
setLineWidth(10);
changeColor(color.green);
faceRight();

//Réalisation
for( let i = 0 ; i < 8 ; i++){
    forward(400);
    right(180-45);
}

//B9
//Inisialisation
setPos(100, 300);
changeColor(color.green);
setLineWidth(10);
faceRight();

//Réalisation
forward(100);
up();
forward(100);
down();
for( let i = 0 ; i < 3 ; i++){
    forward(200);
    right(180-60);
}

//B10
//Inisialisation
setPos(10,300);
setLineWidth(5);
changeColor(color.blue);
faceRight();

//Réalisation
for( let i = 0 ; i < 8 ; i++){
    forward(100);
    right(180-45);
}
forward(100);
up();
forward(100);
down();
changeColor("#8b22b5");
for( let i = 0 ; i < 8 ; i++){
    forward(300);
    left(180-45);    
}
right(90);
up();
forward(100);
down();
changeColor("#d6579dff");
for( let i = 0 ; i < 8 ; i++){
    forward(100);
    right(180-45);
}

//B11
//Inisialisation
setPos(200, 200);
faceRight();
changeColor(color.red);
setLineWidth(10);

//Réalisation
for( let i = 0 ; i < 4 ; i++){
    forward(100);
    left(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
}

//B12 
//Initialisation
setPos(400,400);
faceRight();
setLineWidth(10);
changeColor(color.blue);

//Réalisation
for( let i = 0 ; i < 3 ; i++){
    right(90);
    forward(100);
}
up();
forward(100);
down();
changeColor("#22b536ff");
for( let i = 0 ; i < 3 ; i++){
    forward(100);
    right(90);
}

//C1
//Initialisation
setPos(100, 300);
changeColor(color.aqua);
faceRight();
setLineWidth(10);

//Réalisation
for( let i = 0 ; i < 4 ; i++){
    for( let j = 0 ; j < 3 ; j++){
        forward(100);
        right(180-60);
    }
    forward(100);
}
//C2
//Initialisation
setPos(300, 550);
faceUp();
setLineWidth(10);
changeColor(color.green);

//Réalisation
for( let i = 0 ; i < 5 ; i++){
    for( let j = 0 ; j < 4 ; j++){
        forward(100);
        right(90);
    }
    up();
    forward(200);
    down();
}

//C3
//Initialisation
setPos(100, 400);
setLineWidth(5);
faceRight();
shiftColor(0.4); //la valeur de la couleur ou je commence

//Réalisation
for( let i = 0 ; i < 3 ; i++){
    for( let j = 0 ; j < 8 ; j++){//faut changer de lettre i-j
    forward(100);
    left(180-45);
}
    shiftColor(0.1);//la valeur du pourcentage de decalage de changement de couleur 10%
    up();
    forward(200);
    down();
}

//C4
//Initialisation
setPos(100, 300);
setLineWidth(5);
faceRight();


//Réalisation
for( let i = 0 ; i < 5 ; i++) {
    changeColor(color.red);
    for( let j = 0 ; j < 3 ; j++){
        forward(100);
        left(180-60);
    }
    changeColor("#b58e22ff");
    for( let j = 0 ; j < 4 ; j++){
        forward(100);
        right(90);
    }
    up();
    forward(200);
    down();
}

//C5
//Initialisation
setPos(300, 300);
faceRight();
setLineWidth(10);
shiftColor(0.18);

//Réalisation
for( let i = 0 ; i < 8 ; i++){
    for( let j = 0 ; j < 8 ; j++){
        forward(400);
        left(180-45);
    }
    right(90);
    shiftColor(0.25);
}

//C6
//Initialisation
setPos(300, 400);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

//Réalisation
for( let i = 0 ; i < 4 ; i++){
    for( let j = 0 ; j < 4 ; j++){
        forward(200);
        left(180-60);
    }
    forward(200);
}

//C7 
//Initialisation
setPos(300, 500);
faceRight();
setLineWidth(10);
changeColor(color.orange);

//Réalisation
for ( let i = 0 ; i < 8 ; i++){
    for( let j = 0 ; j < 3 ; j++){
        forward(100);
        left(180-300);
    }
    forward(100);
    left(180-135);
}
//C8
//Initialisation
setPos(300, 600);
faceUp();
setLineWidth(10);
changeColor(color.green);

//Réalisation
forward(200);
right(180-135);
for( let i = 0 ; i < 4 ; i++){
    for(let j = 0 ; j < 3 ; j++){
        changeColor("#b52222ff")
        forward(200);
        right(180-60);
    }
    changeColor("#e3e659ff")
    forward(200);
    left(90);
}
//D1
//Initialisation
setPos(200,100);
faceRight();
setLineWidth(10);
changeColor(color.green);

//Réalisation
for( let i = 0 ; i < 8 ; i++){
    forward(200);
    right(180-135);
}

//D9
//Initialisation
setPos(300, 300);
faceRight();
setLineWidth(10);
changeColor(color.blue);

//Réalisation
longuer = 100;
for( let i = 0 ; i < 6 ; i++) {
    forward(longuer);
    right(180-60);
    longuer = longuer + 100;
}

//D6
//Initialisation
setPos(200, 200);
setLineWidth(10);
faceRight();
changeColor(color.blue);

//Réalisation
longueur = 100;
forward(longueur);
faceDown();
longueur = 200;
forward(longueur);
faceRight();
longueur = 300;
forward(longueur);
*/

//D7





























