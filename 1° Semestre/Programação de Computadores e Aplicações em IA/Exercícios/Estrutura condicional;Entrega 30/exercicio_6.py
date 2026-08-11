N1 = int(input("Digite o primeiro valor:"))
N2 = int(input("Digite o segundo valor:"))
N3 = int(input("Digite o terceiro valor:"))

maior = N1
if N2 > maior:
    maior = N2
if N3 > maior:
    maior = N3

menor = N1 
if N2 < menor:
    menor = N2
if N3 < menor:
    menor = N3



M = (N1 + N2 + N3)/3


print(f"O maior valor é: {maior}")
print(f"O menor valor é: {menor}")
print(f"A média é: {M}")