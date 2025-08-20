from .models import Categoria,BreakingNews, Patrocinadore

def menu_context(request):
    return {
        'categorias': Categoria.objects.all()
    }

def breaking_news_context(request):
    return {
        'breaking_news': BreakingNews.objects.all().order_by('-data_publicacao')[:5]
    }

def patrocinadores_context(request):
    return {
        'patrocinadores': Patrocinadore.objects.filter(ativo=True)
    }
