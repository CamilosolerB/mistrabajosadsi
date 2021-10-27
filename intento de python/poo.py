class coche:
    marca=""
    color= "Blanco"

    def __init__(self, marca, color) -> None:
        self.marca = marca
        self.color = color
coche1 = coche("mazda","amarillo")
cohcedelujo = coche("Chevrolet","plata")

print(coche1.color)
print(coche1.marca)