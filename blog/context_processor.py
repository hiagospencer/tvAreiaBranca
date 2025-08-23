from .models import Categoria,BreakingNews, Patrocinadore,InstagramPost

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

def instagram_posts_context(request):
    return {
        'instagram_posts': InstagramPost.objects.filter(ativo=True).order_by('-data_publicacao')[:6]
    }
