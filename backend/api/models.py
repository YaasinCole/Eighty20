from django.db import models
from django.contrib.auth.models import User


class Pokemon(models.Model):
    title = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="pokemon")

    def __str__(self):
        return self.title


# Create your models here.
