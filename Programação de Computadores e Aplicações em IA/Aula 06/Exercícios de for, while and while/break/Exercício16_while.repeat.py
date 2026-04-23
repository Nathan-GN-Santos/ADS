total = 0 
i = 1 



while True:
    altura = float(input(f"Qual sua altura da {i}° pessoa: "))

    total = total + altura 
    i = i + 1

    if i >= 6:
        break

media = total/5

print(f"Está é a média aritmética: {media}")