numeroSecreto= 777

print("Bienvenido a mi juego, muggle! Introduce un numero entero y adivina que numero he elegido para ti.")
num = int(input("Entonces ¿Cual es el numero secreto?\t"))

while numeroSecreto != num:
    print("¡Ja, ja! ¡Estás atrapado en mi ciclo!")
    num = int(input("Adivina mi numero\t"))

print("¡Bien hecho, muggle! Eres libre ahora")