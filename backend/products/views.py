from django.shortcuts import render
from django.http import HttpResponse
from .serializers import *
from .models import *
from rest_framework.generics import ListAPIView
# Create your views here.

def homeview(request):
    return HttpResponse("Hi"); 

class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    