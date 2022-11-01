// FUNÇÃO SIMPLES -----------------------------------
const functionSum = function functionSum(a, b){
    return a + b;
}

// ARROW FUNCTION -----------------------------------
// const arrowFunctionSum = (a, b) => {
//     return a + b;
// }

// ARROW FUNCTION COM SÓ 1 LINHA DE RETORNO ---------
const arrowFunctionSum = (a, b) =>  a + b;

console.log(functionSum(8, 2));
console.log(arrowFunctionSum(8, 2));

// ARROW FUNCTION COM CORPO -------------------------
const greeting = (name) => {
    if (name) {
        return "Olá " + name + "!";
    } else {
        return "Olá!"
    }
}

console.log(greeting("Ricardo"));
console.log(greeting());

// ARROW FUNCTION SEM ARGUMENTOS ---------------------
const testeArrow = () => console.log("Testado!");

testeArrow();

// ARROW FUNCTION COM THIS vs FUNCTION COM BIND ------
const user = {
    name: "John Snow",
    functionSayUserName() { 
        var self = this;
        setTimeout(function () { //FUNCTION COM BIND
            console.log("Função bindada!", self);
            console.log(self.name);
        }, 500);
    },
    arrowFunctionSayUserName() { 
        setTimeout(() => { //ARROW FUNCTION COM THIS
            console.log("Arrow Function com this!", this);
            console.log(this.name);
        } , 700);
    }
}

user.functionSayUserName();
user.arrowFunctionSayUserName();