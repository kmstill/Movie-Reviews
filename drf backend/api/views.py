from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializer, MovieSerializer
from .models import Task, Movie
from .movieData import getMovieData
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/movie-list/',
        'Detail View':'/movie-detail/<str:pk>/',
        'Create':'/movie-create/',
        'Update':'/movie-update/<str:pk>/',
        'Delete':'/movie-update/<str:pk>',
    }
    return Response(api_urls)

@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(tasks, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        request.data.get()
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def taskDelete(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response("Item Deleted")

@api_view(['POST'])
def movieCreate(request):
    movie = request.data['movie']
    movieData = getMovieData(movie)
    print("moviedata views: "+movieData['runtime'])
    serializer = MovieSerializer(data=movieData)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def movieList(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def movieDetail(request, pk):
    movies = Movie.objects.get(id=pk)
    serializer = MovieSerializer(movies, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def movieUpdate(request, pk):
    movie = Movie.objects.get(id=pk)
    serializer = MovieSerializer(instance=movie, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def movieDelete(request, pk):
    movie = Movie.objects.get(id=pk)
    movie.delete()
    return Response("Movie Deleted")