class Usuario {
    constructor(id, nome) {
        this.id = id;
        this.fullName = nome;
    }
}

// Para usar a classe, você precisa dar um "new"
const userResponse = new Usuario(1, "João Silva");

console.log("--- Sistema com Classe ---");
console.log("Bem-vindo, " + userResponse.fullName);