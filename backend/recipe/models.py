from django.db import models
from profiles.models import UserProfile

class Recipe(models.Model):
    recipe_id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='recipe_images/', null=True, blank=True)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    ingredients = models.ManyToManyField('Ingredient', related_name='ingredients')
    cooking_time = models.IntegerField()
    servings = models.PositiveIntegerField()

    categories = [
        ('B', 'Breakfast'), 
        ('L', 'Lunch'), 
        ('DI', 'Dinner'), 
        ('S', 'Snack'), 
        ('DE', 'Dessert')
    ]
    category = models.CharField(choices = categories, max_length=255, default='B')
    cuisine = models.ManyToManyField('Cuisine', related_name='cuisines')

    difficulty_choices = (
        (0, 'Learning'),
        (1, 'Home Cook'),
        (2, 'Culinary Chef'),
        (3, 'Gourmet Chef'),
        (4, 'Master Chef'),
    )
    difficulty = models.IntegerField(choices=difficulty_choices)
    author = models.ForeignKey('profiles.UserProfile', on_delete=models.SET_NULL, null=True, blank=True)
    steps = models.TextField()
    average_rating = models.FloatField(default=0)
    date_added = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)

    def __str__(self):
        return self.title

class Cuisine(models.Model):
    cuisine_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    ingredient_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
    

class Cookbook(models.Model):
    cookbook_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, default="Untitled Cookbook")
    image = models.ImageField(upload_to='cookbook_images/', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    author = models.ForeignKey('profiles.UserProfile', on_delete=models.CASCADE)
    recipes = models.ManyToManyField('Recipe', related_name='cookbooks')

    def __str__(self):
        return self.name