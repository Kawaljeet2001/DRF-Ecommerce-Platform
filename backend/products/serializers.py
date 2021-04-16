from rest_framework import serializers
from .models import *

class CastegorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ["id"]  

class ColorVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColorVariants
        exclude = ["id"]  


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
    category = CastegorySerializer()
    color = ColorVariantSerializer()