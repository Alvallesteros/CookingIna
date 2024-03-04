from rest_framework import serializers
from .models import CustomUser

class authSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = {'username', 'email', 'password'}
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user
