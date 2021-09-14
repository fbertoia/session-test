import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Employee1631371999438 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
