from django.urls import path
from .views import RecipeListView, RecipeDetailView, RecipeUpdateView, RecipeDeleteView, RecipeCreateView, IngredientListView, CuisineListView, CookbookCreateView, CookbookListView, CookbookDetailView, CookbookUpdateView, CookbookDeleteView

urlpatterns = [
    path('recipes/', RecipeListView.as_view(), name='recipe'),
    path('recipes/create', RecipeCreateView.as_view(), name='recipe'),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),
    path('recipes/<int:pk>/update/', RecipeUpdateView.as_view(), name='update-recipe'),
    path('recipes/<int:pk>/delete/', RecipeDeleteView.as_view(), name='delete-recipe'),
    path('ingredients/', IngredientListView.as_view(), name='ingredients'),
    path('cuisines/', CuisineListView.as_view(), name='cuisines'),
    path('cookbooks/', CookbookListView.as_view(), name='cookbook-list'),
    path('cookbooks/create', CookbookCreateView.as_view(), name='cookbook'),
    path('cookbooks/<int:pk>/', CookbookDetailView.as_view(), name='cookbook-detail'),
    path('cookbooks/<int:pk>/update/', CookbookUpdateView.as_view(), name='update-cookbook'),
    path('cookbooks/<int:pk>/delete/', CookbookDeleteView.as_view(), name='delete-cookbook'),
]