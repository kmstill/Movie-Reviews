from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer, ReviewSerializer
from .models import Movie
from .movieInfo import getMovieInfo

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List of Movies':'/movie-list/',
        'Detail View':'/movie-detail/<str:pk>/',
        'Create Movie':'/movie-create/',
        'Update Movie':'/movie-update/<str:pk>/',
        'Delete Movie':'/movie-update/<str:pk>',
        'Delete All Movies': '/delete-all-movies/',
        'Create Review':'/review-create/'
    }
    return Response(api_urls)

@api_view(['POST'])
def movieCreate(request):
    movie = request.data['movie']
    movieInfo = getMovieInfo(movie)
    serializer = MovieSerializer(data=movieInfo)
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
    print("data: "+str(request.data))
    serializer = MovieSerializer(instance=movie, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def movieDelete(request, pk):
    movie = Movie.objects.get(id=pk)
    movie.delete()
    return Response("Movie deleted")

@api_view(['DELETE'])
def deleteAllMovies(request):
    Movie.objects.all().delete()
    return Response("All movies deleted")

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

