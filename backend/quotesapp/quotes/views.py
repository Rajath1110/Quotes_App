from django.shortcuts import render
from .models import Quote
from .serializers import QuoteSerializers
from rest_framework import viewsets
# Create your views here.

class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializers
