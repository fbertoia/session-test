import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from '../employees/employee.entity'
import { Project } from '../projects/project.entity'
import { Status } from './task.interface'

@Entity()
export class Task {

	@PrimaryGeneratedColumn('increment')
	id: number;
	
	@Column()
	title: string;
	
	@Column()
	description: string;
	
	@Column({
		type: "enum",
		enum: Status,
		default: Status.TODO
	})
	status: Status;

	@ManyToOne(type => Employee, employee => employee.tasks)
	employee: Employee

	@ManyToOne(type => Project, projects => projects.tasks)
	project: Project[]
}