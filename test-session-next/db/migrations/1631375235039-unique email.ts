import {MigrationInterface, QueryRunner} from "typeorm";

export class uniqueEmail1631375235039 implements MigrationInterface {
    name = 'uniqueEmail1631375235039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."employee" ADD CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."employee" DROP CONSTRAINT "UQ_817d1d427138772d47eca048855"`);
    }

}
