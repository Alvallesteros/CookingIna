from django.contrib import admin
from .models import Recipe, Ingredient, Cuisine

# Register your models here.
class RecipeAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'category', 'difficulty', 'date_added']

class IngredientAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

class CuisineAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Ingredient, IngredientAdmin)
admin.site.register(Cuisine, CuisineAdmin)