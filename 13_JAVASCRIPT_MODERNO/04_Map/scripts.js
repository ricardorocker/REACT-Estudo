// MAP -----------------------------------
const products = [
    { name: "Teclado", price: 119.90, category: "Periféricos" },
    { name: "Pc Gamer", price: 4790.90, category: "Desktop" },
    { name: "Processador I5", price: 719.90, category: "Hardware" },
    { name: "Mouse", price: 59.90, category: "Periféricos" },
]

console.log("Objeto Produto original", products);

products.map((product) => {
    if (product.category === "Periféricos"){
        product.onSale = true;
    }
});

console.log("Objeto Produto modificado", products);