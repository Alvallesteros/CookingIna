from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
    
    def update(self, instance, validated_data):

        return instance