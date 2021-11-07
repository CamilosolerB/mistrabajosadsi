from django.http import HttpResponse

def holamundo(request):
    #primera vista
    return HttpResponse("Hola mundo")