from rest_framework import serializers
from profiles.models import UserProfile
from .models import Cuisine, Recipe, Ingredient, Cookbook, RecipeIngredient
from profiles.serializers import UserProfileSerializer

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'  

class RecipeIngredientSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(read_only=True)  # Nested Read-Only
    class Meta:
        model = RecipeIngredient
        fields = '__all__'
    
    def create(self, validated_data):
        ingredient_data = validated_data.pop('ingredient')
        recipe_ingredient = RecipeIngredient.objects.create(**validated_data)
        ingredient, _ = Ingredient.objects.get_or_create(**ingredient_data)
        recipe_ingredient.ingredient = ingredient
        return recipe_ingredient

class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    riserializer = RecipeIngredientSerializer(many=True)
    author = UserProfileSerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = '__all__'

    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        recipe = Recipe.objects.create(**validated_data)  
        for ingredient_data in ingredients_data:
            ingredient = riserializer.create(ingredient_data) 
            recipe.ingredients.add(ingredient)
        return recipe

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr != 'ingredients':  
                setattr(instance, attr, value)

        ingredients_data = validated_data.pop('ingredients')
        instance.ingredients.clear()  
        for ingredient_data in ingredients_data:
            ingredient = riserializer.update(ingredient_data)
            instance.ingredients.add(ingredient)

        instance.save()
        return instance
    
class CookbookSerializer(serializers.ModelSerializer):
    author = UserProfileSerializer(read_only=True)
    recipes = RecipeSerializer(many=True, read_only=True)

    class Meta:
        model = Cookbook
        fields = '__all__'

    def create(self, validated_data):
        recipes_data = validated_data.pop('recipes')
        cookbook = Cookbook.objects.create(**validated_data)
        self._handle_recipes(recipes_data, cookbook) 
        return cookbook

    def update(self, instance, validated_data):
        recipes_data = validated_data.pop('recipes')
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        self._handle_recipes(recipes_data, instance)  
        instance.save()
        return instance