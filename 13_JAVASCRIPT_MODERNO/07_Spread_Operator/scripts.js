// Spread Operator -----------------------------------
//Array
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

//Objetos
const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 25740, price: 47940.99 };

const carAll = { ...carName, ... carBrand, ...otherInfos};

console.log(carAll);