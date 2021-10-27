"""Proyecto1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from Proyecto1.Proyecto1.request.views import edad
#from Proyecto1.Proyecto1.views import saluda
#from Proyecto1.Proyecto1.views import pltConCss
from django.contrib import admin
from django.urls import path
#from Proyecto1.Proyecto1.views import saludo
from Proyecto1.views import adios, mensaje, saludo, damefecha, edad, show, pltConCss
#from Proyecto1.Proyecto1.views import mensaje


urlpatterns = [
    path('admin/', admin.site.urls),
    path('saludo/', saludo),
    path('adios/', adios),
    path('mensaje/' ,mensaje),
    path("damefecha/" ,damefecha),
    path("plantilla/",show),
    path("edad/<int:edad1>/<int:year>/" ,edad),
    path("pltConCss",pltConCss),
]
