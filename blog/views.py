from django.shortcuts import render
from .models import Post, Categoria, SubCategoria
from django.shortcuts import get_object_or_404

def homepage(request):
    return render(request, 'index.html')

def detail(request):
    return render(request, 'detail/details.html')

def category(request, slug):
    categoria = get_object_or_404(Categoria, slug=slug)
    posts = Post.objects.filter(categoria=categoria)
    subcategorias = SubCategoria.objects.filter(categoria=categoria)

    context = {
        'categoria': categoria,
        'posts': posts,
        'subcategorias': subcategorias,
    }
    return render(request, 'category/category.html', context)

# def category(request):
#     return render(request, 'category/category.html')
