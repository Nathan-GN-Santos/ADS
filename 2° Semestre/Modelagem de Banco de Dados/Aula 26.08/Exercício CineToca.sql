/* Cliente quer um sistema simples para gerenciar locadora de vídeos

Palavras chaves: Clientes, Aluguel e Filmes

Dentro de um entidade cliente podemos
cliente[
    id PK
    CPF
    Nome
]

filme[
    id PK
    nome
]

aluguel[
    id PK
    cliente id FK
    filme id FK
    data 
    data pra devolução
]
*/
-- Tabela em SQL

Tabela Alugue

CREATE TABLE Aluguel (
    id_aluguel INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_filme INT NOT NULL,
    data_aluguel DATE NOT NULL,
    data_devolucao DATE NOT NULL
)

CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(100) NOT NULL
)

CREATE TABLE Filme (
    id_filme INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
)


/* Learning 

AUTO_INCREMENT é um recuros usado para gerar automáticamente um número sequencial único sem que uma nva linha é inserida. Ex: 1° Cliente fica com o código 1, 2° Cliente fica com o código 2, etc..
INT é um tipo de dado que representa números inteiros. Ex: 1, 2, 3, 4, 5, etc..
Há duas forma de declarar foreign keys, uma delas é colocando-a na mesma linha do atributo, Ex: id_cliente INT NOT NULL REFERENCES Cliente(id_cliente),
 e a outra é declarando-a depois de todos os atributos, Ex: FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente). Ambas são válidas, mas a segunda forma é mais comum.
 VARCHAR significa "Variable Character" e é um tipo de dado que representa uma sequência de caracteres de tamanho variável. Ex: VARCHAR(100) significa que o campo pode ter até 100 caracteres.

No SQL nativo, existe sim uma sequência correta e obrigatória para a ordem dos termos. A regra de sintaxe do SQL exige a seguinte ordem por coluna:

Nome da coluna (ex: cpf)

Tipo de dado (ex: VARCHAR(11), INT, DATE, BOOLEAN)

Restrições de coluna (ex: NOT NULL, UNIQUE, PRIMARY KEY, DEFAULT ...)

Portanto, não são intercambiáveis. O tipo de dado deve vir sempre antes das restrições.

Exemplos Corretos vs. Incorretos

Correto (Ordem válida):
cpf VARCHAR(11) NOT NULL
(Nome + Tipo de dado + Restrição)

Incorreto (Sintaxe quebrada):
cpf NOT NULL VARCHAR(11) ❌
(O banco de dados retornará erro de sintaxe, pois ele tenta ler o tipo de dado logo após o nome da coluna).

 */