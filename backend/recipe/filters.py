from django_filters import rest_framework as filters
from .models import Recipe

class RecipeFilter(filters.FilterSet):
    ingredients = filters.CharFilter(
        name='ingredients__name',
        lookup_expr='icontains',
    )

    cuisines = filters.CharFilter(
        name='cuisines__name',
        lookup_expr='icontains',
    )

    title = filters.CharFilter(name='title', lookup_expr='icontains')
    category = filters.CharFilter(name='category', lookup_expr='icontains')

    class Meta:
        model = Recipe
        fields = ('title', 'ingredients', 'cuisines', 'category')