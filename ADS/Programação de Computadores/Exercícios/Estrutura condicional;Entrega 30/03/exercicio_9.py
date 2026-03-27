nome = input("Digite seu nome: ")
CPF = input("Digite seu CPF: ")
renda_anual = float(input("Digite sua renda anual: "))
numb_dependentes = int(input("Digite o número de dependentes: "))

renda_mensal = renda_anual / 12
renda_liquida = renda_mensal - (189.59 * numb_dependentes)

if renda_liquida <= 2428.80 :
    print("Isento")
elif renda_liquida <= 2826.65:
    print("Alíquota de 7,5%")
elif renda_liquida <= 3751.05:
    print("Alíquota de 15%")
elif renda_liquida <= 4664.68:
    print("Alíquota de 22,5%")
else:
    print("Alíquota de 27,5%")


imposto = 

print(f"desconto: R${desconto:.2f}")