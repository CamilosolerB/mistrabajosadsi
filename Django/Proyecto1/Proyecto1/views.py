from django.http import HttpResponse
import datetime
from datetime import date
from django.template import Template, Context

def show(request):
    programa = "Adsi-SENA "
    today = date.today()
    doc_externo = open("C:/Users/Camilo Soler/Desktop/Adsi/Django/Proyecto1/Miplantilla/miplantilla.html","r")
    plt =Template(doc_externo.read())
    doc_externo.close()
    ctx= Context({"nombre_programa":programa, "fecha":today})
    documento = plt.render(ctx)
    return HttpResponse(documento)

#def hello(request):
#    programa = "Adsi-SENA "
#    today = date.today()
#    doc_externo = open("C:\Users\Camilo Soler\Desktop\Adsi\Django\Proyecto1\Miplantilla\Holaccs.html","r")
#    plt =Template(doc_externo.read())
#    doc_externo.close()
#    ctx= Context({"nombre_programa":programa, "fecha":today})
#    documento = plt.render(ctx)
#    return HttpResponse(documento)


def saludo(request):

    return HttpResponse("Hola esta es mi primera página con el framework Django")

def adios(request):

    return HttpResponse("Esto es todo")

def mensaje(request):

    return HttpResponse("El mensaje que desee desplegar")

def damefecha(request):

    fecha_actual = datetime.datetime.now()


    documento = """<html>
    <body>
    <h1>
    fecha y horas actuales %s
    </h1>
    </body>
    </html>""" % fecha_actual

    return HttpResponse(documento)

def edad(request,edad1,year):


    edadfutura = edad1 + (year - int(date.today().strftime("%Y")))
    respuesta= "<html><body> <h1> Ingrese su edad y un año en el futuro</h1> <h2> En el año %s  tendras %s años </h2> </body></html>" % (year, edadfutura)
    return HttpResponse(respuesta)

def pltConCss(request):
    doc_externo = open("C:/Users/Camilo Soler/Desktop/Adsi/Django/Proyecto1/Proyecto1/template/Miplantillaconcss.html")
    plt =Template(doc_externo.read())
    doc_externo.close()
    ctx= Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)