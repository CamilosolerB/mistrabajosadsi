from django.db.models import query
from django.shortcuts import render
from django.http import HttpResponse
from gestionpedidos import models
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

def BuscarProductos(request):
    return render(request, 'BuscarProductos.html')

def hola(request):
    return HttpResponse("Hola")

def buscar(request):
    if request.GET["prd"]:
        #mensaje = "Articulo buscado: %r" %request.GET["prd"]
        producto = request.GET["prd"]
        if len(producto) > 20:
            mensaje = "Texto de busqueda demasiado largo"
        else:
            articulos = models.Articulo.objects.filter(nombre__icontains = producto)
            return render(request, "resultado_buscar.html", {"articulos":articulos, "query":producto})
    else:
        mensaje = "No ha escrito, por favor digite el nombre de algún artículo"
    return HttpResponse(mensaje)

def contacto(request):
    if request.method == "POST":
        subject = request.POST["asunto"]
        message = request.POST["mensaje"] + " " + request.POST["email"]
        email_from =  settings.EMAIL_HOST_USER
        #recipient_list = ["ngdiazh@gmail.com"]
        recipient_list = [request.POST["email"]]
        send_mail(subject, message, email_from, recipient_list)
        return render(request, "gracias.html")
    return render(request, "contacto.html")