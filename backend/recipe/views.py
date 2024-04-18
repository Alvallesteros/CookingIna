from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer
from ..backend.permissions import IsOwner, IsAdminUser
from .filters import RecipeFilter
from django_filters import rest_framework as filters

# Consider the appropriate permission levels for each view
class RecipeCreateView(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecipeListView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = RecipeFilter
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