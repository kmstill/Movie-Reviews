from django.db import models

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=200)
    year = models.CharField(max_length=4)
    runtime = models.CharField(max_length=20, null=True)
    director = models.CharField(max_length=50)
    poster = models.CharField(max_length=1000)

class Review(models.Model):
    text=models.TextField()
    movie=models.ForeignKey('Movie', related_name='reviews', on_delete=models.CASCADE)
    def __str__(self):
        return self.text