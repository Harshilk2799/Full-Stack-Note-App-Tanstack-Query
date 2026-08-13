from rest_framework.viewsets import ModelViewSet
from core.models import Note
from core.serializers import NoteSerializer

class NoteAPI(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    