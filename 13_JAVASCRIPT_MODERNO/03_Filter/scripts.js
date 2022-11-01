// FILTER DE ARRAY -----------------------------------
const arr = [1, 2, 3, 4, 5];
console.log("Array original: ", arr);

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log("Array com filtro highNumbers: ", highNumbers)

// FILTER DE OBJETO -----------------------------------
const users = [
    { name: "Petrucia", available: true},
    { name: "Ricardo", available: false},
    { name: "Amanda", available: false},
    { name: "Patricia", available: true},
    { name: "Poliana", available: true},
]

console.log("Objeto original: ", users);

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log("Objeto filtrado por usuario ativo: ", availableUsers);
console.log("Objeto filtrado por usuario inativo: ", notAvailableUsers);