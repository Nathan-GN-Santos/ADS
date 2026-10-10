#define CAPACIDADE 50 // Capacidade máxima da lista de produtos

// Tal Estrutura Estoque
typedef struct { //estrutura que cria um grupo de variáveis. typedef = Type Definition. 
    int codigo;
    char nome[50];
    char prateleira;
    float preco;
    int quantidade;
    int disponivel; // 1 = Sim, 0 = Não
} Produto;
