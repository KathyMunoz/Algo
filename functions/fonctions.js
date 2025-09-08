// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);// ça ecrit pas parcequ'on l'a pas appelé
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();//la console ecrit 17

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;//ecrit rien
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
// f2(); //ecrit rien parceque return avant 
console.log( f2() );// console.log(17)

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
let variable_1 = f1();// affiche un message
let variable_2 = f2();// retourne un résultat

console.log("Resultat variable 1 =", variable_1 )
console.log("Resultat variable 2 =", variable_2) 

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n) {
    console.log(2*n);
}//il ecrit

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);//il ecrit

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n) {
    return 2*n;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log( f4(99) );//pour ecrire
f4(99)//pour l'appeler

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);//je cree une variable "a" aillant comme contenu le résultat de f4(99)
console.log(a);//pour vérifier le contenu de la variable a

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(x,y) {
    console.log(x+y);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);// on ecrit virgule et PAS +

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(c,d){
    return c+d;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(  f6(42,77)  );// quand cest return il faut ecrire console.log pour quil affiche un resultat

// Utiliser la fonction f6 pour incrémenter//aditionner la variable a de la somme de 42 et 77.
a = f4(99) // pas besoin de let devant a car la variable "a" a déjà été crée plus haut 
let b = f6(42,77)
f6(a,b);



// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(e,f) {//example e=1 f=2//e=2 f=1
    if ( e > f ) {
        return e
    } else { // else=f > e
        return f
    }
}

console.log(f7(50,50))//pour vérifier

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
function f8(n1,n2,n3) {
    if (n1>n2 && n1>n3) {
        return n1
    } else if (n2>n1 && n2>n3) {
        return n2
    } else {
        return n3
    }
}
console.log(f8(4,1,3))

// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(x,y,z) {
    while(x<z && y<z) {
        return z
    } 
    
}

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(number,word) {
    for( let i=0 ; i < number ; i++) {
        console.log(word);
    }
}