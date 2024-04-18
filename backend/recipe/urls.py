from django.urls import path
from .views import RecipeListView, RecipeDetailView, RecipeUpdateView, RecipeDeleteView, RecipeCreateView, IngredientListView, CuisineListView

urlpatterns = [
    path('recipes/', RecipeListView.as_view(), name='recipe'),
    path('recipes/create', RecipeCreateView.as_view(), name='recipe'),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),
    path('recipes/<int:pk>/update/', RecipeUpdateView.as_view(), name='update-recipe'),
    path('recipes/<int:pk>/delete/', RecipeDeleteView.as_view(), name='delete-recipe'),
    path('ingredients/', IngredientListView.as_view(), name='ingredients'),
    path('cuisines/', CuisineListView.as_view(), name='cuisines'),
]