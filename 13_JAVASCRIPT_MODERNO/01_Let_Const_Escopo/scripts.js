// 1 - var, let e const
console.log("---  --- VAR --- ---");
var x = 10;
var y = 12;

console.log("X antes do IF", x);

if (y > 10) {
    var x = 5;
    console.log("X criado dentro do IF", x);
}

console.log("X depois do IF", x);
// Problema: Manchando o Escopo

// LET
console.log("---  --- LET --- ---");
console.log("IF: ");
let a = 10;
let b = 15;

console.log("A antes do IF", a);

if (b > 10) {
    let a = 5;
    console.log("A criado dentro do IF", a);
}

console.log("A depois do IF", a);

console.log("FOR: ");
let i = 100;
console.log("I antes do IF", i)

for (let i = 0; i < 5; i++){
    console.log("I criado dentro do IF", i);
}

console.log("I depois do IF", i);

// CONST
console.log("---  --- CONST --- ---");

function logName() {
    const name = "Ricardo";
    console.log("Const name criado dentro da função: ", name);
}

const name = "Petrucia";

logName();

console.log("Const name criado fora da função: ", name);