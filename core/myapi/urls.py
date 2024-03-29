from rest_framework import routers
from django.urls import include,path
from .views import *

router = routers.DefaultRouter()
router.register(r'myapi',PostViewSet)

urlpatterns = [
    path('',include(router.urls)),
    
    
]