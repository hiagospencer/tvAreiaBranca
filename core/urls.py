from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required
from ckeditor_uploader import views
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('ckeditor/upload/', login_required(views.upload), name='ckeditor_upload'),
    path('ckeditor/browse/', login_required(views.browse), name='ckeditor_browse'),


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
