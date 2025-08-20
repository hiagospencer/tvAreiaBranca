from .models import Categoria

def menu_context(request):
    return {
        'categorias': Categoria.objects.all()
    }
