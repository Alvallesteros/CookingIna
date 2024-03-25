from django.db import models
from authentication.models import CustomUser
from phonenumber_field.modelfields import PhoneNumberField

class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    first_name = models.TextField(blank=True)
    last_name = models.TextField(blank=True)
    birthday = models.DateField(blank=True)
    mobile_number = PhoneNumberField()
    biography = models.TextField(blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', default='default_profile_picture.jpg')
    viewed_recipes = models.JSONField(default=list, blank=True)
    user_recipe_ids = models.JSONField(default=list)
    ingredient_preferences = models.JSONField(default=list)
    ingredient_user_ids = models.JSONField(default=list)
    created_recipes = models.JSONField(default=list)
    role = models.CharField(max_length=50, choices=[('User', 'User'), ('Admin', 'Admin'), ('Moderator', 'Moderator')], default='User')

    def __str__(self):
        return self.user.username