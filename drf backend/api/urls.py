from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('task-list/', views.taskList, name="task-list"),
    path('task-detail/<str:pk>', views.taskDetail, name="task-detail"),
    path('task-create/', views.taskCreate, name="task-create"),
    path('task-update/<str:pk>', views.taskUpdate, name="task-update"),
     path('task-delete/<str:pk>', views.taskDelete, name="task-delete"),
     path('movie-create/', views.movieCreate, name="movie-create"),
     path('movie-list/', views.movieList, name="movie-list"),
     path('movie-detail/<str:pk>', views.movieDetail, name="movie-detail"),
     path('movie-update/<str:pk>', views.movieUpdate, name="movie-update"),
     path('movie-delete/<str:pk>', views.movieDelete, name="movie-delete"),
    ]



