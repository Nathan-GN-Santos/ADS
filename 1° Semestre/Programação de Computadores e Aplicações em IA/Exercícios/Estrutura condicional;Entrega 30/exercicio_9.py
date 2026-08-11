nome = input("Digite seu nome: ")
CPF = input("Digite seu CPF: ")
renda_anual = float(input("Digite sua renda anual: "))
numb_dependentes = int(input("Digite o número de dependentes: "))

desconto = 189.59 * numb_dependentes
renda_mensal = renda_anual / 12
renda_liquida = renda_mensal - desconto

if renda_liquida <= 2428.80 :
    aliquota = 0
    print("Isento")
elif renda_liquida <= 2826.65:
    aliquota = 0.075
    print("Alíquota de 7,5%")
elif renda_liquida <= 3751.05:
    aliquota = 0.15
    print("Alíquota de 15%")
elif renda_liquida <= 4664.68:
    aliquota = 0.225
    print("Alíquota de 22,5%")
else:
    print("Alíquota de 27,5%")


imposto =  renda_liquida * aliquota


print(f"Renda mensal: R${renda_mensal:.2f}")
print(f"imposto: R${imposto:.2f}")