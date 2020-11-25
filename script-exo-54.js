let x = 1;
let y = 4;
let z = -1;

let cond01 = document.getElementById("petit");

if(x < 2) {
    cond01.innerHTML = "x est plus petit que 2";
}

let cond02 = document.getElementById("grand");

if(y > 3) {
    cond02.innerHTML = "y est plus grand que 3";
}

let cond03 = document.getElementById("inf");

if(z <= -1) {
    cond03.innerHTML = "z est inférieur ou égal à -1";
}

let cond04 = document.getElementById("total");

if(x < 2 || y > 3 || z <= -1) {
    cond04.innerText = "au moins une des trois conditions est vrai";
}

let cond05 = document.getElementById("choix");

if((x < 2 && y > 3) || (z === -1)){
    cond05.innerText = "ou x est plus petit que 2 et y est plus grand que 3 ou z est égal à -1";
}