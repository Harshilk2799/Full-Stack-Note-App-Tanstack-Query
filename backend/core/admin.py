from django.contrib import admin
from core.models import Note

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "description", "created_at", "updated_at"]