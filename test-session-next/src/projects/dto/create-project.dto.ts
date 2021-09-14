import { Employee } from '../../employees/employee.entity'
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	beginning_date: string;

	@ApiProperty()
	end_date: string;
	
	@ApiProperty()
	employees: Employee[];
}
