from django.urls import path
from .views import homepage, detail, category, tv_ao_vivo

urlpatterns = [
    path('', homepage, name='homepage'),
    path('detalhes/<int:post_id>/', detail, name='detail'),
    path('categoria/<slug:slug>/', category, name='category'),
    path('categoria/<slug:slug>/<slug:subcategoria_slug>/', category, name='subcategoria'),
    path('tv-ao-vivo/', tv_ao_vivo, name='tv_ao_vivo'),
]
