// Destructuring -----------------------------------
//Array
const fruits = ["Maça", "Banana", "Laranja"];

console.log(fruits);

const [f1, f2, f3] = fruits;

console.log(f1);

//Objeto
const productDetails = {
    name: "Cadeira Gamer",
    price: 1100.99,
    category: "Setup",
    color: "Azul",
};

console.log(productDetails);

const {name: produto, price, category: categoria, color} = productDetails;

//Sem Destructuring
console.log(
    `O produto é ${productDetails.name}, valor R$${productDetails.price}, dentro da categoria ${productDetails.category} e da cor ${productDetails.color}.`
);

//Com Destructuring
console.log(
    `O produto é ${produto}, valor R$${price}, dentro da categoria ${categoria} e da cor ${color}.`
);