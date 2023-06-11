from django.db import models

from django.core import validators
from django.utils import timezone



class ReviewData(models.Model):
    product = models.ForeignKey("Product", null=True, on_delete=models.SET_NULL)
    customer_ID = models.CharField(max_length=255)
    star_score = models.FloatField()
    review_content = models.TextField()
    help_count = models.CharField(max_length=255)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    site = models.ForeignKey("Site", null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=255)
    price = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    


class Site(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

