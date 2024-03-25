from django.urls import path
from .views import UserProfileUpdateView, ProfileCreationView, UserProfileView

urlpatterns = [
    path('profile/<int:pk>/', UserProfileView.as_view(), name='profile'),
    path('profile/<int:pk>/update', UserProfileUpdateView.as_view(), name='profile'),
    path('profile/create/', ProfileCreationView.as_view(), name='create-profile')
]