from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_perfil, name='add_perfil'),
]
