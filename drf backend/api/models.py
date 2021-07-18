from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=200)
    year = models.CharField(max_length=4)
    runtime = models.CharField(max_length=20, null=True)
    director = models.CharField(max_length=50)
    poster = models.CharField(max_length=1000)
    plot = models.TextField(max_length=10000)
    total_reviews = models.IntegerField(default=0)
    total_rating_points = models.IntegerField(default=5)

class Review(models.Model):
    text = models.TextField()
    rating = models.IntegerField(default=5)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    movie = models.ForeignKey('Movie', related_name='reviews', on_delete=models.CASCADE)
    