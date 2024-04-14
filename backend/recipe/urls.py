from django.urls import path
from .views import RecipeListView, RecipeDetailView, RecipeUpdateView, RecipeDeleteView

urlpatterns = [
    path('recipes/', RecipeListView.as_view(), name='recipe'),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),
    path('recipes/<int:pk>/update/', RecipeUpdateView.as_view(), name='update-recipe'),
    path('recipes/<int:pk>/delete/', RecipeDeleteView.as_view(), name='delete-recipe'),
]