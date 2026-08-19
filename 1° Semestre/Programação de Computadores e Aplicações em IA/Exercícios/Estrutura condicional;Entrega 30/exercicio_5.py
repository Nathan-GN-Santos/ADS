peso_do_peixe = float(input("Digite o peso do peixe: "))

if peso_do_peixe > 50:
    E = peso_do_peixe - 50
    M = E * 4

else :
    E = 0
    M = 0

print(f"Excesso: {E:.2f} kg")
print(f"Multa: R${M:.2f}")