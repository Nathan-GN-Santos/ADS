print("CAdastrando o nome e telefonummer das pessoas:")

i = 1

while True:
    nome = input("Digite o nome:")
    telefone = input("Digite o telefonummer:")
    print(f"Pessoa{i}: {nome} - {telefone}")
    i += 1
    if i > 2:
        break
