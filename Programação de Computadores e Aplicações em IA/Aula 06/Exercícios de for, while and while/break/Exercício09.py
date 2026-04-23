#se vc quer que o python conte de 1 até 5, vc tem que por 1 até 6, pois python exluci o último número

for i in range (1,  6):

    n = float(input(f"Digita o {i}° nummer: "))

    quadrado = n * n

    print(f"O quadrado de {n} é {quadrado}")

    
print("Fim")