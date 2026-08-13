from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import NoteAPI

router = DefaultRouter()

router.register(r"notes", NoteAPI, basename="note")


urlpatterns = [
    path('', include(router.urls)),
]
