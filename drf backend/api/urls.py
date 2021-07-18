from django.urls import path
from . import views

urlpatterns = [
     path('', views.apiOverview, name="api-overview"),
     path('movie-create/', views.movieCreate, name="movie-create"),
     path('movie-list/', views.movieList, name="movie-list"),
     path('movie-delete/<str:pk>', views.movieDelete, name="movie-delete"),
     path('delete-all-movies/', views.deleteAllMovies, name="delete-all-movies"),
     path('review-create/', views.reviewCreate, name="review-create"),
     path('review-list/<str:pk>', views.reviewList, name="review-list"),
     path('review-update/<str:pk>', views.reviewUpdate, name="review-update")
    ]



