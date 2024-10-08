from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .authenticators import UserSerializer, PokemonSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Pokemon


class PokemonListCreate (generics.ListCreateAPIView):
    serializer_class = PokemonSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Pokemon.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class PokemonDelete(generics.DestroyAPIView):
    serializer_class = PokemonSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Pokemon.objects.filter(author=user)


class createUserView (generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# Create your views here.
