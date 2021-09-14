import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Employee } from './employee.entity'
import { Task } from '../tasks/task.entity'
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ){}

  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto)
    return this.employeeRepository.save(employee)
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id: number) {
    const ret = await this.employeeRepository.findOne(id);
    return ret
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeeRepository.update(id, updateEmployeeDto)
  }

  async remove(id: number) {
    const employee = await this.employeeRepository.findOne(id)
    return await this.employeeRepository.remove(employee)
  }

  async updateTasks(idEmployee, idTask) {
    const employee = await this.employeeRepository.findOne(idEmployee)
    const task = await this.taskRepository

  }
}
