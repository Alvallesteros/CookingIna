from django.urls import path
from .views import UserLoginView, UserRegistrationView, SearchUserIdByUsername

urlpatterns = [
    path('login/', UserLoginView.as_view(), name='login'),
    path('registration/', UserRegistrationView.as_view(), name='registration'),
    path('search-user/<str:username>/', SearchUserIdByUsername.as_view(), name='search_user_by_username'),
]