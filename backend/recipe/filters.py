from django_filters import rest_framework as filters
from .models import Recipe

class RecipeFilter(filters.FilterSet):
    ingredients = filters.CharFilter(
        field_name='ingredients__name',
        lookup_expr='icontains'
    )

    cuisines = filters.CharFilter(
        field_name='cuisine__name',
        lookup_expr='icontains'
    )

    title = filters.CharFilter(field_name='title', lookup_expr='icontains')
    category = filters.CharFilter(field_name='category', lookup_expr='icontains')

    class Meta:
        model = Recipe
        fields = ('title', 'ingredients', 'cuisine', 'category')