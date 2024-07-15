from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, GrievanceViewSet

router = DefaultRouter()
router.register(r'users', UserProfileViewSet)
router.register(r'grievances', GrievanceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
