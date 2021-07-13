from rest_framework import serializers
from .models import Movie, Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movie
        fields='__all__'
