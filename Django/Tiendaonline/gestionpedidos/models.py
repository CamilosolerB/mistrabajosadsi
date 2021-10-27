from django.db import models

# Create your models here.

class Clientes(models.Model):
    nombre = models.CharField(max_length=30)
    dereccion = models.CharField(max_length=30)
    email = models.EmailField()
    tfno= models.CharField(max_length=7)

class Articulo(models.Model):
    nombre = models.CharField(max_length=30)
    seccion = models.CharField(max_length=30)
    precio = models.IntegerField()

class Pedidos(models.Model):
    numero = models.IntegerField()
    fecha = models.DateField()
    entregado = models.BooleanField