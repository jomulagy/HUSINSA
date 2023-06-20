from django.db import models

class Category(models.Model):
    name = models.CharField(max_length = 100)

    def __str__(self):
        return self.name

class Clothe(models.Model):
    name = models.CharField(max_length = 100,null= False)
    brand = models.CharField(max_length = 100,null= False)
    price = models.IntegerField(null = False)
    image = models.ImageField(upload_to = "product")
    category = models.ForeignKey(Category,on_delete = models.CASCADE)

class Cart(models.Model):
    user = models.ForeignKey("account.user",on_delete=models.CASCADE)
    clothe = models.ForeignKey(Clothe,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)
    ordered = models.BooleanField(default = False)
