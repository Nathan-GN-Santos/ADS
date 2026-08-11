print("Exibição de Números ↓")


i = 1

while i <= 10:
    resto = i % 2 #na programção, % se chama módulo, não porcetagem. 
                    # Ele server pra retornar o resto de um divisão inteira.

    if resto == 0:  # porque dois = aq e n um? 
                    # =(Atribuição) serve para guardar algo dentro de uma VARIAVEL
                    # == (Comparação) serve para PERGUNTAR se uma coisa é IGUAL a outra. Se xx for igual a xy e blah blah.
        print(i)

    i = i + 1

print("Fim")

