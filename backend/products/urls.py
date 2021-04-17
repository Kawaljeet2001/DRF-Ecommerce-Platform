from django.urls import path 
from .views import *

urlpatterns = [
    path('' , homeview , name = "home"),
    path('products' , ProductList.as_view()),
    path('product/<int:pk>' , ProductDetailView.as_view() , name = "product-detail"),
]