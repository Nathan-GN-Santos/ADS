#Classe Eleitoral 

classe = int(input("Informe sua idade:"))

if classe < 16:
    print("Não eleitor")

elif 18 <= classe <= 65:
    print("Eleitor obrigatório")

else:
    print("Eleitor facultativo")
