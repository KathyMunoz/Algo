// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let tab = [1,2,3,5];//pour tester

function last (tableau) {
    console.log(tableau[tableau.length-1]); 
}
last(tab);//pour tester
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function retourner (tableau) {
    return tableau[tableau.length-1];
}
console.log(retourner(tab));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minimum (tab) {
    let plusPetit = tab [0];
    for ( let i = 1 ; i < tab.length; i++){
        if (tab[i]<plusPetit) {
            plusPetit = tab [i];
        }    
    }
    return plusPetit;
}
console.log(minimum (tab));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
console.log("Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau");
let plusGrand = tab [0];
function maximum (tab) {
    
    for ( let i = 1 ; i < tab.length; i++){
        if (tab[i]>plusGrand) {
            plusGrand = tab [i];
        }    
    }
    return plusGrand;
}
console.log(maximum (tab));


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
// je cherche combien de fois un numero se repete
//valeurACompter cest le numero que je vais chercher combien de fois se repete


function repetition (tableau,valeurACompter) {           //TOUTE LA FONCTION CEST LES POINT DE VU INTERNE. function repetition (tableau,valeurACompter) tableau != (contraire)tab1
    
    let nombreDeFoisRepete = 0;// Je initialise une variable pour compter combien de fois je trouves la valeur recherchée. Elle commence à 0.
    for (let i = 0 ; i< tableau.length ; i++) {
        if (tableau[i]== valeurACompter) {
            nombreDeFoisRepete += 1;
        }
        
    }
    return nombreDeFoisRepete;
}                                                        //TOUTE LA FONCTION CEST LES POINT DE VU INTERNE 

let tab1 = [1,3,1,4,5,1,8,1,10,2,1];                     //POINT DE VU EXTERNE TAB1 != tableau
console.log(repetition (tab1,1));
console.log(repetition (tab1,2));
console.log(repetition (tab1,6));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function exist (tableau,nombre) {
    for ( let i=0 ; i<tableau.length ; i++) {
        if (tableau[i]=== nombre) {
            return true;
        } 
    }
    return false
}

console.log(exist(tab1,8));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

let tableau = [];


for ( let i=1 ; i<7778 ; i++) {
    tableau.push(i);
}
console.log(tableau);


// Créer un tableau qui contient [10,20,30,...,77770].

let tableau1 = [];

for ( let i=10 ; i<77780 ; i+=10) {
    tableau1.push(i);
}
console.log(tableau1);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tableau2 = [];

for ( let i=5 ; i<38890 ; i+=5) {
    tableau2.push(i);
}
console.log(tableau2);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.


function sup(tableau) {
    
    while(tableau[tableau.length-1]<50) {
        tableau.pop();
    }
    return tableau;
}
let exemple = [1,45,88,54,23,-100,12];
console.log(sup(exemple));


// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]