from rest_framework import serializers
from .models import Task, Movie

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields='__all__'


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movie
        fields='__all__'