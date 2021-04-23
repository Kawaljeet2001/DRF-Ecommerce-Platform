from django.db import models
from django.contrib.auth.models import User
from products.models import Product
from django.db.models.signals import post_save , pre_save
from django.dispatch import receiver
# Create your models here.



class Cart(models.Model):
    user = models.ForeignKey(User , on_delete = models.CASCADE)
    total_price = models.FloatField(default = 0.0 , blank = True , null = True)
    total_items = models.IntegerField(default = 0 , blank = True , null = True)

    def __str__(self):
        return self.user.username + "-Cart"


class CartItem(models.Model):
    item = models.ForeignKey(Cart , on_delete = models.PROTECT , blank = True , null = True)
    product = models.ForeignKey(Product , on_delete = models.CASCADE)
    user = models.ForeignKey(User , on_delete = models.CASCADE)
    quantity = models.IntegerField(default = 1 , null = True , blank = True)
    price_of_one = models.FloatField(default = 0.0 , null = True , blank = True)
    Total_price = models.FloatField(default = 0.0 , null = True , blank = True)

    def __str__(self):
        return self.product.name + "  X " + str(self.quantity)


@receiver(pre_save , sender = CartItem)
def update_cart_item(sender , **kwargs):
    cart_item = kwargs['instance']
    price_of_single_product = Product.objects.get(id = cart_item.product.id)
    cart_item.price_of_one = float(price_of_single_product.price)
    quantity_of_product = cart_item.quantity
    total_price_of_item = quantity_of_product * float(price_of_single_product.price)
    cart_item.Total_price = total_price_of_item


@receiver(post_save , sender = CartItem)
def update_cart(sender , **kwargs):
    cart_item = kwargs['instance']
    total_price_of_item = cart_item.Total_price
    Cart_object = Cart.objects.get(user = cart_item.user)

    Cart_object.total_price += total_price_of_item
    Cart_object.total_items += 1
    Cart_object.save() 
    ## after saVed hence values should be there now
