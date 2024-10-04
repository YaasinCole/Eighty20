from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Pokemon


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user


class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ["id", "title", "type", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
