from django.contrib.auth.models import User, Group
from django.db.models import query
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework import pagination
from .models import Employee, Project, Task
from .serializers import EmployeeSerializer, ProjectSerializer, TaskSerializer


class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 5

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = StandardResultsSetPagination

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = Task.objects.all()
        status = self.request.query_params.get('status')
        if status is not None:
            queryset = queryset.filter(status__icontains=status)
        project_id = self.request.query_params.get('project')
        if project_id is not None:
            queryset = queryset.filter(project_id=project_id)
        employee_id = self.request.query_params.get('employee')
        if employee_id is not None:
            queryset = queryset.filter(employee=employee_id)
        return queryset

class TaskEmployeeViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return Task.objects.filter(employee=self.kwargs['employee_pk'])