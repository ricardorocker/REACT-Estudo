// Classe -----------------------------------
class Product {
    constructor(name, price) {
        this.nome = name;
        this.valor = price;
    }

    productWithDiscount(discount){
        return this.valor * ((100 - discount) / 100);
    }
}

// Herança -----------------------------------
class ProductWithAttributes extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    showSizes(){
        console.log("Os tamanhos são: ");
        this.size.forEach(tamanho => {
            console.log(tamanho);
        });
    }
}

const hat = new ProductWithAttributes("Boné", 55, ["P", "M", "G"]);

const pants = new ProductWithAttributes("Calça", 90, ["M", "G"]);

const produtos = [hat, pants];

console.log(produtos);

produtos.map((x) => {
    x.descricaoProduto = x.nome;
    delete x.nome ;
    return x;
})

console.log("depois", produtos);

console.log(hat);

hat.showSizes();

console.log(
    `Valor do ${hat.nome} é de R$${hat.valor} e com desconto de 10% fica R$${hat.productWithDiscount(10)}.`
    );