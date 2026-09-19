//EXECUTAT
//.\main.exe

//Dicionário
//Funções Nativas do C:
// scanf = scan formatted, função que lê dados do teclado e  salva em uma variável.
// fgets = file get string ,função que lê uma linha de texto do teclado e salva em uma variável do tipo string.

//Especificadores:
// %d = inteiro decimal

//CÓDIGO
#include <stdio.h>
#include <string.h>
#include <ctype.h>
//#include <windows.h> // <--- Biblioteca necessária para controlar a codificação do console

// Estrutura Estoque
typedef struct { //estrutura que cria um grupo de variáveis. typedef = Type Definition. 
    int codigo;
    char nome[50];
    char prateleira;
    float preco;
    int quantidade;
    int disponivel; // 1 = Sim, 0 = Não
} Produto;

// Função de Limpeza 
void limparBuffer() {
    int c;
    while ((c = getchar()) != '\n' && c != EOF);
}

int main() {
    // Configura a saída e entrada do console do Windows para a página de código UTF-8 (65001)
    //SetConsoleOutputCP(CPAGE_UTF8);
   // SetConsoleCP(CPAGE_UTF8);

    int opcao = 0;
    Produto prod; // Guarda os dados do produto cadastrado

    do {
        // Exibição do Menu Principal
        printf("\n====================================\n");
        printf("       SISTEMA DE ESTOQUE - MENU    \n");
        printf("====================================\n");
        printf("1 - Cadastrar Produto\n");
        printf("2 - Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);
        limparBuffer();

        switch (opcao) {
            case 1:
                printf("\n--- CADASTRO DE PRODUTO ---\n");

                //Validação do Código
                do {
                    printf("Digite o Codigo do produto (inteiro positivo): ");
                    scanf("%d", &prod.codigo);
                    limparBuffer();
                    if (prod.codigo <= 0) {
                        printf("[ERRO] Codigo invalido! Deve ser um numero maior que zero.\n");
                    }
                } while (prod.codigo <= 0);

                //Validação do Nome 
                do {
                    printf("Digite o Nome do produto: ");
                    fgets(prod.nome, sizeof(prod.nome), stdin);
                    // Remove a quebra de linha '\n' capturada pelo fgets
                    prod.nome[strcspn(prod.nome, "\n")] = '\0';

                    if (strlen(prod.nome) == 0) {
                        printf("[ERRO] O nome nao pode ficar em branco!\n");
                    }
                } while (strlen(prod.nome) == 0);

                //Validação da Prateleira ('A', 'B', 'C' ou 'D')
                do {
                    printf("Digite a Prateleira ('A', 'B', 'C' ou 'D'): ");
                    scanf(" %c", &prod.prateleira);
                    prod.prateleira = toupper(prod.prateleira); // Converte para maiúscula
                    limparBuffer();

                    if (prod.prateleira != 'A' && prod.prateleira != 'B' && 
                        prod.prateleira != 'C' && prod.prateleira != 'D') {
                        printf("[ERRO] Prateleira invalida! Escolha apenas A, B, C ou D.\n");
                    }
                } while (prod.prateleira != 'A' && prod.prateleira != 'B' && 
                         prod.prateleira != 'C' && prod.prateleira != 'D');

                //Validação do Preço Unitário
                do {
                    printf("Digite o Preco Unitario (R$)(use . em vez de , se centavos): ");
                    scanf("%f", &prod.preco);
                    limparBuffer();

                    if (prod.preco <= 0.0f) {
                        printf("[ERRO] Preco deve ser maior que zero!\n");
                    }
                } while (prod.preco <= 0.0f);

                //Validação da Quantidade em Estoque 
                do {
                    printf("Digite a Quantidade em Estoque: ");
                    scanf("%d", &prod.quantidade);
                    limparBuffer();

                    if (prod.quantidade < 0) {
                        printf("[ERRO] Quantidade nao pode ser negativa!\n");
                    }
                } while (prod.quantidade < 0);

                // --- Regra de Negócio: Cálculo automático de disponibilidade ---
                if (prod.quantidade > 0) {
                    prod.disponivel = 1;
                } else {
                    prod.disponivel = 0;
                }

                // --- Resumo do Cadastro ---
                printf("\n====================================\n");
                printf("    PRODUTO CADASTRADO COM SUCESSO! \n");
                printf("====================================\n");
                printf("Codigo:              %d\n", prod.codigo);
                printf("Nome:                %s\n", prod.nome);
                printf("Prateleira:          %c\n", prod.prateleira);
                printf("Preco Unitario:      R$ %.2f\n", prod.preco);
                printf("Qtd em Estoque:      %d\n", prod.quantidade);
                printf("Disponivel P/ Venda: %s (%d)\n", 
                        prod.disponivel == 1 ? "SIM" : "NAO", prod.disponivel);
                printf("====================================\n");
                break;

            case 2:
                printf("\nSaindo do sistema... \n");
                break;

            default:
                printf("\n[ERRO] Opcao invalida! Escolha 1 ou 2.\n");
                break;
        }

    } while (opcao != 2);

    return 0;
}