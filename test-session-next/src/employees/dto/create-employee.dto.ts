import { IsString } from 'class-validator'
import { Task } from "src/tasks/task.entity"
import { Project } from "src/projects/project.entity"
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
	@ApiProperty()
	@IsString()
	firstName: string;
	
	@ApiProperty()
	@IsString()
	lastName: string;
	
	@ApiProperty()
	@IsString()
	email: string;
	
	@ApiProperty()
	@IsString()
	phone: string;
	
	@ApiProperty()
	tasks: Task[]
	
	@ApiProperty()
	projects: Project[]
}
