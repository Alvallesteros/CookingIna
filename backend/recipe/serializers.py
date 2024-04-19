from rest_framework import serializers
from profiles.models import UserProfile
from .models import Cuisine
from .models import Recipe, Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'  

class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)  # Nested Read-Only
    #author = serializers.SlugRelatedField(slug_field='username', queryset=UserProfile.objects.all()) 

    class Meta:
        model = Recipe
        fields = '__all__'


    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        recipe = Recipe.objects.create(**validated_data)  
        for ingredient_data in ingredients_data:
            ingredient, _ = Ingredient.objects.get_or_create(**ingredient_data)
            recipe.ingredients.add(ingredient)
        return recipe

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr != 'ingredients':  
                setattr(instance, attr, value)

        ingredients_data = validated_data.pop('ingredients')
        instance.ingredients.clear()  
        for ingredient_data in ingredients_data:
            ingredient, _ = Ingredient.objects.get_or_create(**ingredient_data)
            instance.ingredients.add(ingredient)

        instance.save()
        return instance