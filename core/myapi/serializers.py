from .models import Post
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'   


class UserRegisterSerializer(serializers.ModelSerializer):
    pass