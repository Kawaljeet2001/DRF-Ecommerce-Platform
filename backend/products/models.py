from django.db import models

# Create your models here.

class Category(models.Model):
    category_name  = models.CharField(max_length=100)
    def __str__(self):
        return self.category_name

class ColorVariants(models.Model):
    color_code = models.CharField(max_length = 50 , null = True , blank = True)
    color_name = models.CharField(max_length = 50 , null = True , blank = True )

    def __str__(self):
        return self.color_name

class Product(models.Model):
    name = models.CharField(max_length = 200 , null = False , blank = False)
    brand = models.CharField(max_length = 100 , null = True , blank = True)
    description = models.TextField(null = False , blank = False)
    price = models.FloatField(null = False , blank = False)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    thumbnail = models.ImageField(upload_to = "products/" , default = "products/default.jpg")
    color = models.ForeignKey(ColorVariants, on_delete=models.PROTECT)
    stock = models.IntegerField(null = True , blank = True)

    
    def __str__(self):
        return self.name


class ProductDisplayImage(models.Model):
    image = models.ImageField(null = True , blank = True)
    image_description = models.TextField(null = True , blank = True)
    product_name = models.ForeignKey(Product , on_delete = models.CASCADE)

