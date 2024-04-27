from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from authentication.models import CustomUser
from .models import UserProfile
from .serializers import UserProfileSerializer
from backend.permissions import IsOwner, IsAdminUser
from django.http import Http404

class UserProfileCreateView(generics.CreateAPIView):
    queryset = UserProfile.objects
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileDetailView(generics.RetrieveAPIView):
    queryset = UserProfile.objects
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_object(self):
        username = self.kwargs.get('username')
        user = CustomUser.objects.get(username=username)
        return UserProfile.objects.get(user=user)

    pass

class UserProfileUpdateView(generics.UpdateAPIView):
    # to update
    # permission_classes = [IsAuthenticated, IsOwner]
    queryset = UserProfile.objects
    permission_classes = [permissions.AllowAny]
    serializer_class = UserProfileSerializer
    
    def get_object(self):
        username = self.kwargs.get('username')
        user = CustomUser.objects.get(username=username)
        return UserProfile.objects.get(user=user)

    pass

class UserProfileDeleteView(generics.DestroyAPIView):
    queryset = UserProfile.objects
    permission_classes = [permissions.AllowAny]
    serializer_class = UserProfileSerializer

    def get_object(self):
        username = self.kwargs.get('username')
        try:
            user = CustomUser.objects.get(username=username)
            return UserProfile.objects.get(user=user)
        except CustomUser.DoesNotExist:
            raise Http404("User does not exist")
        except UserProfile.DoesNotExist:
            raise Http404("UserProfile does not exist")
    
    pass