import { Employee } from '../../employees/employee.entity';
export declare class CreateProjectDto {
    name: string;
    beginning_date: string;
    end_date: string;
    employees: Employee[];
}
