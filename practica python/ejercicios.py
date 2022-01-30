#primer punto
#def hola() :
#    print("Hola amiga")
#hola()

#segundo punto
#print("Indique su nombre")
#nom = input()
#def holanom(nombre):
#    print("Hola " + nombre)
#holanom(nom)

#tercer punto
#print("Por favor indique el numero para factorial")
#fac = int(input())
#def calcularfactorial(numero):
#    tpm = 1
#    for i in range(fac):
#        tpm *= i+1
#    return tpm
#print(calcularfactorial(fac))

#cuarto punto
print("Indique el valor de producto")
valor = int(input())
print("Indique el iva")
iva = input()
def calculariva(valor,iva=21):
    ivan = int(iva)
    ivan = ivan / 100
    resultado = (ivan * valor)+ valor
    return resultado
print(calculariva(valor,iva))
    
