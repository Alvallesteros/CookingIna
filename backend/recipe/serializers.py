from rest_framework import serializers
from .models import Ingredient, Recipe

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'  

from .models import Recipe, Ingredient
from profiles.models import UserProfile

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)  # Nested Read-Only
    #author = serializers.SlugRelatedField(slug_field='username', queryset=UserProfile.objects.all()) 

    class Meta:
        model = Recipe
        fields = '__all__'