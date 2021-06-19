from django.db import models
from .newStr import new_str


# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False, blank=True, null=True)
    def __str__(self):
        return self.title

class Movie(models.Model):
    title = models.CharField(max_length=200)
    year = models.CharField(max_length=5)
    runtime = models.CharField(max_length=20, null=True)
    director = models.CharField(max_length=50)
    poster = models.CharField(max_length=1000)
    def __str__(self):
        return self.title+' '+self.year
