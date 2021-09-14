import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { Task } from '../tasks/task.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesService {
    private employeeRepository;
    private taskRepository;
    constructor(employeeRepository: Repository<Employee>, taskRepository: Repository<Task>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<Employee>;
    updateTasks(idEmployee: any, idTask: any): Promise<void>;
}
