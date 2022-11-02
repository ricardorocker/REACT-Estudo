// Classes -----------------------------------
class Product {
    constructor(name, price) {
        this.nome = name;
        this.valor = price;
    }

    productWithDiscount(discount){
        return this.valor * ((100 - discount) / 100);
    }
}

const discount = 10;

const shirt = new Product("Camisa Social", 90);

console.log(shirt);

console.log(shirt.productWithDiscount(discount));

const pants = new Product("Calça Social", 150);

console.log(pants);

console.log(
    `Parabens, voce adquiriu desconto de ${discount}% na ${pants.nome}, de R$${pants.valor}, por apenas R$${pants.productWithDiscount(discount)}.`
    )
//Parabens, voce adquiriu desconto de 10% na Calça Social, de R$150, por apenas R$135.


