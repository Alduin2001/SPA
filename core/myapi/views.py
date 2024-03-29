from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework import response
from rest_framework import viewsets, views
from .serializers import *
from .models import Post
from rest_framework import permissions, status
# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer