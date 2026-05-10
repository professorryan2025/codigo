// 1. Simulação da API (Onde ocorreu a mudança perigosa)
const userResponse = {
    id: 1,
    fullName: "João Silva" // A API agora usa 'fullName'
};

console.log("--- Sistema Corrigido ---");
console.log(`Bem-vindo, ${userResponse.fullName}. Seu ID é: ${userResponse.id}`);
// Saída: Bem-vindo, João Silva. Seu ID é: 1
