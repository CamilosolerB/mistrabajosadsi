#listas
list = ['Camilo','Andres','Soler','Bucuru']
print("Hola mi nombre es: "+list[0]+" "+list[1]+" "+list[2]+" "+list[3])
#importa el ultimo elemento
print(list[-1])
#cambiar datos en una lista
list[1]= "Andre"
#añadir datos en la lista
list.append("cualquiera")
#insertar en posicion especifica
list.insert(-2, "Mi nombre")
print(list)


#Tuplas: arreglos no modificables

mytupla = ('Camilo','Andres','Soler','Bucuru')
print(mytupla)



#diccionarios
dicc = {"nombre" : "Camilo", "apellido": "Soler", "edad": 17 }

#añadir datos al diccionario

dicc['ciudad'] = "Facatativa"

print(f'Mi nombre es {dicc["nombre"]} {dicc["apellido"]} tengo {dicc["edad"]} años')
print(dicc)