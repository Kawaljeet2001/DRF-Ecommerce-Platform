from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


# Create your views here.

class RegisterView(APIView):
    def post(self , request , format = None):
        username = request.data['username']
        password = request.data['password']

        user = User(username = username)
        user.set_password(password)
        user.save()
        token = RefreshToken.for_user(user)
        
        return Response({
            "status" : "success",
            'userid' : user.id,
            'refresh': str(token),
            'access': str(token.access_token),
        })


