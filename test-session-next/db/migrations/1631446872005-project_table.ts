import {MigrationInterface, QueryRunner} from "typeorm";

export class projectTable1631446872005 implements MigrationInterface {
    name = 'projectTable1631446872005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "beginning_date" character varying NOT NULL, "end_date" character varying NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_employees_employee" ("projectId" integer NOT NULL, "employeeId" integer NOT NULL, CONSTRAINT "PK_c899c11afd52f30002dc8ccc0cc" PRIMARY KEY ("projectId", "employeeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8f60a620feca36927331cc2f12" ON "project_employees_employee" ("projectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_615f6cc16e65ad2d177bb099cb" ON "project_employees_employee" ("employeeId") `);
        await queryRunner.query(`ALTER TABLE "project_employees_employee" ADD CONSTRAINT "FK_8f60a620feca36927331cc2f12a" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project_employees_employee" ADD CONSTRAINT "FK_615f6cc16e65ad2d177bb099cbc" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_employees_employee" DROP CONSTRAINT "FK_615f6cc16e65ad2d177bb099cbc"`);
        await queryRunner.query(`ALTER TABLE "project_employees_employee" DROP CONSTRAINT "FK_8f60a620feca36927331cc2f12a"`);
        await queryRunner.query(`DROP INDEX "IDX_615f6cc16e65ad2d177bb099cb"`);
        await queryRunner.query(`DROP INDEX "IDX_8f60a620feca36927331cc2f12"`);
        await queryRunner.query(`DROP TABLE "project_employees_employee"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
