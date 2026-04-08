nome = input("Nome de hóspede:")
apartamento = input("Qaul o seu tipo de apartamento, A, B, C ou D:").upper()
num_diarias = int(input("Quantas diárias:"))
consumo_interno = float(input("Valor do consumo interno:"))


if apartamento == "A":
    valor_diaria = 200
elif apartamento == "B":
    valor_diaria = 150
elif apartamento == "C":
    valor_diaria = 125
elif apartamento == "D":
    valor_diaria = 100
else:
    print("Tipo de apartamento inválido.")
    valor_diaria = 0


total_diarias = valor_diaria * num_diarias
subtotal = total_diarias + consumo_interno
taxa_de_servico = subtotal * 0.1
total_geral = subtotal + taxa_de_servico

print("CONTA FINAl")
print(f"Hóspede: {nome}")
print(f"Tipo de apartamento: {apartamento}")
print(f"Subtotal: R${subtotal:.2f}")
print(f"Taxa de serviço: R${taxa_de_servico:.2f}")
print(f"Total geral: R${total_geral:.2f}")