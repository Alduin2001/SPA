from django.db import models

# Create your models here.
class Post(models.Model):
    header = models.CharField(max_length=100)
    post = models.TextField()