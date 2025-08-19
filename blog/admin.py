from django.contrib import admin
from .models import Autor, Categoria, SubCategoria, Post, BreakingNews


@admin.register(Autor)
class AutorAdmin(admin.ModelAdmin):
    list_display = ('nome',)
    search_fields = ('nome',)
    list_per_page = 20


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'data_criacao')
    search_fields = ('nome',)
    list_per_page = 20


@admin.register(SubCategoria)
class SubCategoriaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'categoria')
    list_filter = ('categoria',)
    search_fields = ('nome',)
    list_per_page = 20


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'categoria', 'subcategoria', 'autor', 'data_publicacao', 'destaque', 'visualizacoes')
    list_filter = ('categoria', 'subcategoria', 'autor', 'destaque')
    search_fields = ('titulo', 'subtitulo', 'descricao')
    list_editable = ('destaque',)
    date_hierarchy = 'data_publicacao'
    readonly_fields = ('data_publicacao',)
    list_per_page = 20
    autocomplete_fields = ['autor', 'categoria', 'subcategoria']
    fieldsets = (
        ("Informações Principais", {
            'fields': ('titulo', 'subtitulo', 'descricao', 'imagem')
        }),
        ("Relacionamentos", {
            'fields': ('autor', 'categoria', 'subcategoria')
        }),
        ("Publicação", {
            'fields': ('data_publicacao', 'destaque')
        }),
    )


@admin.register(BreakingNews)
class BreakingNewsAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'post')
    search_fields = ('titulo', 'post__titulo')
    autocomplete_fields = ['post']
    list_per_page = 20
