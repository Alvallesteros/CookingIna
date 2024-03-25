from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from .serializers import UserProfileSerializer
from .permissions import IsOwner

class UserProfileUpdateView(generics.UpdateAPIView):
    # to update
    permission_classes = [IsAuthenticated, IsOwner]
    serializer_class = UserProfileSerializer
    pass

class UserProfileView(generics.RetrieveAPIView):
    queryset = UserProfile.objects
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]
    pass

class ProfileCreationView(generics.CreateAPIView):
    
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)