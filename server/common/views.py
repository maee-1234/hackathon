from .models import User
from .serializers import UserSerializer
from rest_framework import generics


class SnippetList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
