from rest_framework.viewsets import ModelViewSet
from core.models import Note
from core.serializers import NoteSerializer
from rest_framework import filters

class NoteAPI(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']