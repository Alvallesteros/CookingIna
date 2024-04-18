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

    categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert']
    category = models.CharField(choices = categories)

    # cuisines if cuisine is not another model (only 1 cuisine for a recipe)
    # cuisines = ['Filipino', 'Korean', 'Chinese', 'Japanese', 'American', 'Italian']
    # cuisine = models.CharField(choices = cuisines)

    # cuisines if cuisine is another model (many to many)
    cuisine = models.ManyToManyField('Cuisine', related_name='cuisines')

    difficulty_choices = (
        (0, 'Learning'),
        (1, 'Home Cook'),
        (2, 'Culinary Chef'),
        (3, 'Gourmet Chef'),
        (4, 'Master Chef'),
    )
    difficulty = models.IntegerField(choices=difficulty_choices)
    #tags = models.ManyToManyField('Tag', related_name='recipes', blank=True)
    author = models.ForeignKey('UserProfile', on_delete=models.SET_NULL, null=True, blank=True)
    #spoonacular_api = models.CharField(max_length=255, null=True, blank=True)
    steps = models.TextField()
    average_rating = models.FloatField(default=0)
    date_added = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)

    def __str__(self):
        return self.title

class Cuisine(models.Model):
    cuisine_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

class Ingredient(models.Model):
    ingredient_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name