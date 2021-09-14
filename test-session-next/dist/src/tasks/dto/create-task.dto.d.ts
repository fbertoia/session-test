import { Status } from "../task.interface";
export declare class CreateTaskDto {
    id: number;
    title: string;
    description: string;
    status: Status;
    employeeId: number;
    projectId: number;
}
