from rest_framework import serializers
from .models import Movie, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'

class MovieSerializer(serializers.ModelSerializer):
    #reviews=ReviewSerializer(many=True)
    class Meta:
        model=Movie
        fields='__all__'#['id', 'title','year', 'runtime','director','poster']
