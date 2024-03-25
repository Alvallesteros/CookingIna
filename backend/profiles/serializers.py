from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'mobile_number', 'birthday', 'profile_picture', 'biography']
        read_only_fields = ['id', 'role']

    def create(self, validated_data):
        profile = UserProfile.objects.create(**validated_data)
        return profile
    
    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.mobile_number = validated_data.get('mobile_number', instance.mobile_number)
        instance.birthday = validated_data.get('birthday', instance.birthday)
        instance.profile_picture = validated_data.get('profile_picture', instance.profile_picture)
        instance.biography = validated_data.get('biography', instance.biography)
        instance.save()
        return instance