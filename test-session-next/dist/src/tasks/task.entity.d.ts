import { Employee } from '../employees/employee.entity';
import { Project } from '../projects/project.entity';
import { Status } from './task.interface';
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: Status;
    employee: Employee;
    project: Project[];
}
