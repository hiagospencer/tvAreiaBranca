from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import get_object_or_404
from .models import Post, Categoria, SubCategoria, YoutubeVideo

def homepage(request):
    destaque_dia = Post.objects.filter(destaque=True).order_by('-data_publicacao')[:12]
    # ultimas_noticias = Post.objects.filter(ultimas_noticias=True).order_by('-data_publicacao')[:12]
    mais_lidas = Post.objects.all().order_by('-visualizacoes')[:6]
    banner = Post.objects.filter(banner=True).order_by('-data_publicacao').first()
    video_youtube = YoutubeVideo.objects.all().order_by('-data_publicacao').first()
    ultimas_noticias = Post.objects.filter(ultimas_noticias=True).order_by('-data_publicacao')

    paginator = Paginator(ultimas_noticias, 12)  # 10 itens por página
    page = request.GET.get('page')

    try:
        noticias_paginadas = paginator.page(page)
    except PageNotAnInteger:
        # Se página não for inteiro, mostrar primeira página
        noticias_paginadas = paginator.page(1)
    except EmptyPage:
        # Se página estiver fora do range, mostrar última página
        noticias_paginadas = paginator.page(paginator.num_pages)

    context = {
        'destaque_dia':destaque_dia,
        'ultimas_noticias':ultimas_noticias,
        'banner':banner,
        'mais_lidas':mais_lidas,
        'video_youtube':video_youtube,
        'noticias': noticias_paginadas,
    }
    return render(request, 'index.html', context)

def detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    noticias_relacionadas = Post.objects.filter(categoria=post.categoria).order_by('-data_publicacao').exclude(id=post.id)[:5]
    post.visualizacoes += 1
    post.save(update_fields=['visualizacoes'])
    context = {
        'post':post,
        'noticias_relacionadas':noticias_relacionadas
    }
    return render(request, 'detail/details.html', context)

def category(request, slug):
    categoria = get_object_or_404(Categoria, slug=slug)
    posts = Post.objects.filter(categoria=categoria).order_by('-data_publicacao')
    subcategorias = SubCategoria.objects.filter(categoria=categoria)

    paginator = Paginator(posts, 1)  # 10 itens por página
    page = request.GET.get('page')

    try:
        posts_paginadas = paginator.page(page)
    except PageNotAnInteger:
        # Se página não for inteiro, mostrar primeira página
        posts_paginadas = paginator.page(1)
    except EmptyPage:
        # Se página estiver fora do range, mostrar última página
        posts_paginadas = paginator.page(paginator.num_pages)

    context = {
        'categoria': categoria,
        'noticias': posts_paginadas,
        'subcategorias': subcategorias,
    }
    return render(request, 'category/category.html', context)
