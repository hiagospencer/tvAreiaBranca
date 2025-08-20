from django.shortcuts import render
from .models import BreakingNews, Post, Categoria, SubCategoria, YoutubeVideo
from django.shortcuts import get_object_or_404

def homepage(request):
    destaque_dia = Post.objects.filter(destaque=True).order_by('-data_publicacao')[:10]
    ultimas_noticias = Post.objects.filter(ultimas_noticias=True).order_by('-data_publicacao')[:10]
    mais_lidas = Post.objects.all().order_by('-visualizacoes')[:6]
    banner = Post.objects.filter(banner=True).order_by('-data_publicacao').first()
    video_youtube = YoutubeVideo.objects.all().order_by('-data_publicacao').first()
    context = {
        'destaque_dia':destaque_dia,
        'ultimas_noticias':ultimas_noticias,
        'banner':banner,
        'mais_lidas':mais_lidas,
        'video_youtube':video_youtube,
    }
    return render(request, 'index.html', context)

def detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    post.visualizacoes += 1
    post.save(update_fields=['visualizacoes'])
    context = {
        'post':post
    }
    return render(request, 'detail/details.html', context)

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
