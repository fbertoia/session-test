from django.db import models

class Employee(models.Model):
	id = models.AutoField(primary_key=True)
	first_name = models.CharField(max_length=256, default="")
	last_name = models.CharField(max_length=256, default="")
	phone = models.CharField(max_length=256, default="")
	email = models.EmailField(default="")


class Project(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=256)
	beginning_date = models.DateField(blank=True)
	end_date = models.DateField(blank=True)
	employee_list = models.ManyToManyField(
		'Employee',
		related_name='employee_of',
		blank=True,
		help_text='employees on a project'
	)

class Task(models.Model):
	id = models.AutoField(primary_key=True)
	title = models.CharField(max_length=256)
	description = models.CharField(max_length=256)
	status = models.CharField(
		max_length=256,
		choices=(
			('TODO', 'todo'),
			('DONE', 'done')
		),
		default='TODO'
	)
	employee = models.ForeignKey(
		'Employee',
		related_name='task_of',
		blank=True,
		null=True,
		help_text='employee on a task',
		on_delete=models.SET_NULL
	)
	project = models.ForeignKey(
		'Task',
		related_name='task_of',
		blank=True,
		null=True,
		help_text='project bound to a task',
		on_delete=models.CASCADE
	)

