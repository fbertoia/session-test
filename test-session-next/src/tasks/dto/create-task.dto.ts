import { IsEnum, IsNumber, IsString} from "class-validator"
import { Status } from "../task.interface"

export class CreateTaskDto {
	@IsNumber()
	id: number;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@IsEnum(Status)
	status: Status;

	@IsNumber()
	employeeId: number;

	@IsNumber()
	projectId: number;
}
