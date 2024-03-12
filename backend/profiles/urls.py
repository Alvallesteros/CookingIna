from django.urls import path
from .views import UserProfileDetail

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='profile'),
]