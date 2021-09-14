import {MigrationInterface, QueryRunner} from "typeorm";

export class nonuniqueEmail1631377033441 implements MigrationInterface {
    name = 'nonuniqueEmail1631377033441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."employee" DROP CONSTRAINT "UQ_817d1d427138772d47eca048855"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."employee" ADD CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email")`);
    }

}
