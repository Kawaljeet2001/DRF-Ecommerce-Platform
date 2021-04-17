from django.shortcuts import render
from django.http import HttpResponse
from .serializers import *
from .models import *
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

def homeview(request):
    return HttpResponse("Hi"); 

class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(APIView):
    def get(self ,request , pk = None , format = None):
        product = Product.objects.get(id = pk)
        images = ProductDisplayImage.objects.filter(product_name = pk)

        ##serializing products and images
        serialized_product = ProductSerializer(product)
        serialized_images = DisplayImageSerializer(images , many = True)

        return Response({
            "Product-Info" : serialized_product.data,
            "Display-Images" : serialized_images.data 
        })

        