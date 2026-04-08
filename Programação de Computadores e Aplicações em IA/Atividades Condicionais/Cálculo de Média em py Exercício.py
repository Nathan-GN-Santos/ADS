#1

N1 = int(input("Digite N1:")) 
N2 = int(input("Digite N2:")) 

#2

M = (N1 + N2)/2

if M >= 6:
    print(f"Sua nota foi: {M}")
    print("Aprovado")
elif M < 3:
    print(f"Sua nota foi: {M}")
    print("Reprovado")
else:
    print(f"Sua nota foi: {M}")
    print("Exame Final")

