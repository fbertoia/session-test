import { MigrationInterface, QueryRunner } from "typeorm";
export declare class uniqueEmail1631375235039 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
