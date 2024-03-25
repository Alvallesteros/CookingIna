from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

    def create(self, validated_data):
        profile = UserProfile.objects.create(**validated_data)
        return profile
    
    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.birthday = validated_data.get('birthday', instance.birthday)
        instance.profile_picture = validated_data.get('profile_picture', instance.profile_picture)
        instance.viewed_recipes = validated_data.get('viewed_recipes', instance.viewed_recipes)
        instance.user_recipe_ids = validated_data.get('user_recipe_ids', instance.user_recipe_ids)
        instance.ingredient_preferences = validated_data.get('ingredient_preferences', instance.ingredient_preferences)
        instance.ingredient_user_ids = validated_data.get('ingredient_user_ids', instance.ingredient_user_ids)
        instance.created_recipes = validated_data.get('created_recipes', instance.created_recipes)
        instance.role = validated_data.get('role', instance.role)
        instance.save()
        return instance