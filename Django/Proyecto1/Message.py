from django.http import HttpResponse

def mensaje(request):

    return HttpResponse("El mensaje que desee desplegar")