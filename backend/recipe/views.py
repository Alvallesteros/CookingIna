from rest_framework import generics, permissions, status
from .models import Recipe
from .serializers import RecipeSerializer
from ..backend.permissions import IsOwner, IsAdminUser

# Consider the appropriate permission levels for each view
class RecipeListView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]  

    pass

class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


    def get_object(self):
        recipe_id = self.kwargs.get('recipe_id')
        recipe = Recipe.objects.get(recipe_id=recipe_id)
        return Recipe.objects.get(recipe=recipe)

    pass

class RecipeUpdateView(generics.UpdateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner, IsAdminUser]  

    def get_object(self):
        recipe_id = self.kwargs.get('recipe_id')
        recipe = Recipe.objects.get(recipe_id=recipe_id)
        return Recipe.objects.get(recipe=recipe)
    
    pass

class RecipeDeleteView(generics.DestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner, IsAdminUser] 

    def get_object(self):
        recipe_id = self.kwargs.get('recipe_id')
        recipe = Recipe.objects.get(recipe_id=recipe_id)
        return Recipe.objects.get(recipe=recipe)
    pass
