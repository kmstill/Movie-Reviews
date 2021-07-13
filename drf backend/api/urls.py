from django.urls import path
from . import views

urlpatterns = [
     path('', views.apiOverview, name="api-overview"),
     path('movie-create/', views.movieCreate, name="movie-create"),
     path('movie-list/', views.movieList, name="movie-list"),
     path('movie-update/<str:pk>', views.movieUpdate, name="movie-update"),
     path('movie-delete/<str:pk>', views.movieDelete, name="movie-delete"),
     path('review-create/', views.reviewCreate, name="review-create"),
     path('review-list/<str:pk>', views.reviewList, name="review-list"),
    ]



