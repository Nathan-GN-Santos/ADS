altura = float(input("Altura:"))
sexo = input("Sexo Homem ou Mulher (H/M):").upper()

peso_homem = (72.7 * altura) - 58
peso_mulher = (62.1 * altura) - 44.7

if sexo == "HOMEM" or sexo == "H":
    print(f"Peso ideal: {peso_homem:.2f} kg")

elif sexo == "MULHER" or sexo == "M":
    print(f"Peso ideal: {peso_mulher:.2f} kg")