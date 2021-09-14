import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ForbiddenException } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import e from 'express';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    let employee = {}
    try {
      employee = await this.employeesService.create(createEmployeeDto);
      console.log(employee)
    } catch (e) {
      console.log(e)
      if (e.code == "23505") {
        throw new ForbiddenException("An employee with this email already exists.")
      } else if (e.code == "23502") {
        throw new ForbiddenException("Wrong input.")
      }
    }
    return employee;
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const employee = this.employeesService.findOne(+id);
    if (!employee)
      throw new NotFoundException("Employee not found")
    return employee
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }

  @Patch(':idEmployee/tasks/:idTask')
  updateTasks(@Param('idEmployee') idEmployee: number,
    @Param('idTask') idTask: number ) {
    return this.employeesService.updateTasks(idEmployee, idTask);
  }
}
