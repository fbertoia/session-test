import { IEmployee } from "./employee.interface";
import { Task } from 'src/tasks/task.entity';
import { Project } from 'src/projects/project.entity';
export declare class Employee implements IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    tasks: Task[];
    projects: Project[];
}
