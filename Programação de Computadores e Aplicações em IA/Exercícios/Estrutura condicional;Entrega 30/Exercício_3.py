print("MENU DE OPERAÇÕES")
print("1 - Somar dois números")
print("2 - Multiplicar dois números")
print("3 - Subtrair dois números")
print("4 - Dividir dois números")

op = input("Digite a operação desejada: ")

if op == "1":
    N1 = float(input("Digite o primeiro número: "))
    N2 = float(input("Digite o segundo número: "))

    Resultado = (N1 + N2)
    print(f"O resultado da soma é: {Resultado}")

elif op == "2":
    N1 = float(input("Digite o primeiro número: "))
    N2 = float(input("Digite o segundo número: "))

    Resultado = (N1 * N2)
    print(f"O resultado da multiplicação é: {Resultado}")

elif op == "3":
    N1 = float(input("Digite o primeiro número: "))
    N2 = float(input("Digite o segundo número: "))

    Resultado = (N1 - N2)
    print(f"O resultado da subtração é: {Resultado}")

elif op == "4":
    N1 = float(input("Digite o primeiro número: "))
    N2 = float(input("Digite o segundo número: "))

    Resultado = (N1 / N2)
    print(f"O resultado da divisão é: {Resultado}")



