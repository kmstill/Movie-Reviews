from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer, ReviewSerializer
from .models import Movie
from .movieData import getMovieData

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

@api_view(['POST'])
def movieCreate(request):
    movie = request.data['movie']
    movieData = getMovieData(movie)
    serializer = MovieSerializer(data=movieData)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def movieList(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
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

@api_view(['POST'])
def reviewCreate(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def reviewList(request, pk):
    movie = Movie.objects.get(id=pk)
    reviews = movie.reviews.all()
    serializer=ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

# @api_view(['POST'])
# def reviewUpdate(request, pk):
#     movie = Movie.objects.get(id=pk)
#     reviews = movie.reviews.all()

