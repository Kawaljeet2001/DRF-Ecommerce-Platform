from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class CartView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self , request):
        user = request.user
        print(user)
        return Response("yo")
    
    def post(self , request):
        pass

    def update(self , request):
        pass

    def delete(self , request):
        pass
