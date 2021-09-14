"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("./employee.entity");
const task_entity_1 = require("../tasks/task.entity");
let EmployeesService = class EmployeesService {
    constructor(employeeRepository, taskRepository) {
        this.employeeRepository = employeeRepository;
        this.taskRepository = taskRepository;
    }
    create(createEmployeeDto) {
        const employee = this.employeeRepository.create(createEmployeeDto);
        return this.employeeRepository.save(employee);
    }
    async findAll() {
        return await this.employeeRepository.find();
    }
    async findOne(id) {
        const ret = await this.employeeRepository.findOne(id);
        return ret;
    }
    async update(id, updateEmployeeDto) {
        return await this.employeeRepository.update(id, updateEmployeeDto);
    }
    async remove(id) {
        const employee = await this.employeeRepository.findOne(id);
        return await this.employeeRepository.remove(employee);
    }
    async updateTasks(idEmployee, idTask) {
        const employee = await this.employeeRepository.findOne(idEmployee);
        const task = await this.taskRepository;
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map