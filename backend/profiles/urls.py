from django.urls import path
from .views import UserProfileUpdateView, UserProfileCreateView, UserProfileDetailView

urlpatterns = [
    path('profile/<int:pk>/', UserProfileDetailView.as_view(), name='profile'),
    path('profile/<int:pk>/update', UserProfileUpdateView.as_view(), name='profile'),
    path('profile/create/', UserProfileCreateView.as_view(), name='create-profile')
]