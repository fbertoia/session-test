import { Task } from "src/tasks/task.entity";
import { Project } from "src/projects/project.entity";
export declare class CreateEmployeeDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    tasks: Task[];
    projects: Project[];
}
