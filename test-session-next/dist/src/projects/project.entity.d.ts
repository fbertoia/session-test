import { Employee } from '../employees/employee.entity';
import { Task } from '../tasks/task.entity';
export declare class Project {
    id: number;
    name: string;
    beginning_date: string;
    end_date: string;
    employees: Employee[];
    tasks: Task[];
}
