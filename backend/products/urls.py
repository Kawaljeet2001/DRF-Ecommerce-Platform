from django.urls import path 
from .views import *

urlpatterns = [
    path('' , homeview , name = "home"),
]