from django_filters import rest_framework as filters
from .models import Recipe

class RecipeFilter(filters.FilterSet):
    ingredients = filters.CharFilter(
        name='ingredients__name',
        lookup_type='contains',
    )

    cuisines = filters.CharFilter(
        name='cuisines__name',
        lookup_type='contains',
    )

    class Meta:
        model = Recipe
        fields = ('name', 'ingredients', 'cuisines', 'category__iexact')