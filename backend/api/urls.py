from django.urls import path
from . import views

urlpatterns = [
    path("pokemon/", views.PokemonListCreate.as_view(), name="pokemon-list"),
    path("pokemon/delete/<int:pk>/",
         views.PokemonDelete.as_view(), name="delete-pokemon"),
]
