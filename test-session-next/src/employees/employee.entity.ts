import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { IsEmail } from "class-validator";
import { IEmployee } from "./employee.interface";
import { Task } from 'src/tasks/task.entity';
import { Project } from 'src/projects/project.entity';

@Entity('employee')
export class Employee implements IEmployee {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  firstName: string;
  
  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column({unique : true})
  @IsEmail()
  email: string;

  @OneToMany(type => Task, task => task.employee)
  tasks: Task[]

  @ManyToMany(type => Project, project => project.employees)
  projects: Project[]
}