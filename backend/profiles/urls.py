from django.urls import path
from .views import UserProfileUpdateView, UserProfileCreateView, UserProfileDetailView, UserProfileDeleteView

urlpatterns = [
    path('profile/create/', UserProfileCreateView.as_view(), name='create-profile'),
    path('profile/<str:username>/', UserProfileDetailView.as_view(), name='profile'),
    path('profile/<str:username>/update', UserProfileUpdateView.as_view(), name='update-profile'),
    path('profile/<str:username>/delete', UserProfileDeleteView.as_view(), name='delete-profile')
]