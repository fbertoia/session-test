from django.urls import include, path
from rest_framework_nested import routers
from app import views

router = routers.DefaultRouter()


router.register(r'employee', views.EmployeeViewSet)
router.register(r'project', views.ProjectViewSet)
router.register(r'task', views.TaskViewSet)

domains_router = routers.NestedSimpleRouter(router, r'task', lookup='task')
domains_router.register(r'task', views.TaskEmployeeViewSet, basename='domain-task')


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('', include(domains_router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework')),
]