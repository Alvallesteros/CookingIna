from django.urls import path
from .views import UserProfileUpdateView, UserProfileCreateView, UserProfileDetailView

urlpatterns = [
    path('profile/<str:username>/', UserProfileDetailView.as_view(), name='profile'),
    path('profile/<str:username>/update', UserProfileUpdateView.as_view(), name='profile'),
    path('profile/create/', UserProfileCreateView.as_view(), name='create-profile')
]