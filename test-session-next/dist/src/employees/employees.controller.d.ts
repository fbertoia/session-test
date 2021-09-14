import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{}>;
    findAll(): Promise<import("./employee.entity").Employee[]>;
    findOne(id: string): Promise<import("./employee.entity").Employee>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("./employee.entity").Employee>;
    updateTasks(idEmployee: number, idTask: number): Promise<void>;
}
