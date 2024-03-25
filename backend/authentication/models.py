from django.db import models
from django.contrib.auth.models import AbstractUser
# from profiles.models import UserProfile
from django.db.models.signals import post_save

class CustomUser(AbstractUser):
    # Your custom fields here
    pass

# alternative method: using signals to create new profile for each created user
# def create_profile(sender, instance, created):
#     if created:
#         profile = UserProfile.objects.create(user=instance)
#         profile.save()

# post_save.connect(create_profile, CustomUser)