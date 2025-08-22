from django.db import models
from django.utils.text import slugify

from ckeditor.fields import RichTextField

# Autor do post
class Autor(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField(blank=True)
    imagem = models.ImageField(upload_to='autores/', blank=True, null=True)

    def __str__(self):
        return self.nome


# Categoria principal do post
class Categoria(models.Model):
    nome = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True, blank=True)
    data_criacao = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nome)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nome


# Subcategoria relacionada à Categoria
class SubCategoria(models.Model):
    nome = models.CharField(max_length=100)
    slug = models.SlugField(blank=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='subcategorias')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nome)
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.nome} ({self.categoria.nome})"


# Postagem principal
class Post(models.Model):
    titulo = models.CharField(max_length=200)
    subtitulo = models.CharField(max_length=300, blank=True)
    descricao = RichTextField()
    imagem = models.ImageField(upload_to='posts/')
    autor = models.ForeignKey(Autor, on_delete=models.SET_NULL, null=True, blank=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.PROTECT)
    subcategoria = models.ForeignKey(SubCategoria, on_delete=models.SET_NULL, null=True, blank=True)
    data_publicacao = models.DateTimeField(auto_now_add=True)
    destaque = models.BooleanField(default=False)
    banner = models.BooleanField(default=False)
    ultimas_noticias = models.BooleanField(default=False)
    visualizacoes = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['-data_publicacao']

    def __str__(self):
        return self.titulo

# Notícias de destaque (exibidas em carrossel, por exemplo)
class BreakingNews(models.Model):
    titulo = models.CharField(max_length=200)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='breaking_news')
    data_publicacao = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    class Meta:
        ordering = ['-data_publicacao']

    def __str__(self):
        return f"Breaking: {self.titulo}"


class YoutubeVideo(models.Model):
    link_video = models.CharField(max_length=200)
    id_video = models.CharField(max_length=20)
    data_publicacao = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        ordering = ['-data_publicacao']

    def __str__(self):
        return f'Video: {self.id_video}'


class Patrocinadore(models.Model):
    nome = models.CharField(max_length=100)
    imagem = models.ImageField(upload_to='patrocinadores/')
    site = models.CharField(max_length=100, blank=True)
    rede_social = models.CharField(max_length=100, blank=True)
    ativo = models.BooleanField(default=True)
    data_publicacao = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['-data_publicacao']

    def __str__(self):
        return f'Patrocinador: {self.nome} - Ativo: {self.ativo}'
