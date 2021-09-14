import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Employee } from '../employees/employee.entity'
import { Task } from '../tasks/task.entity'

@Entity()
export class Project {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	name: string;

	@Column()
	beginning_date: string;

	@Column()
	end_date: string;

	@ManyToMany(() => Employee)
	@JoinTable()
	employees: Employee[];

	@OneToMany(type => Task, task => task.project)
	tasks: Task[]
}
