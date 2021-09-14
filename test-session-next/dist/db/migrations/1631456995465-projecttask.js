"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projecttask1631456995465 = void 0;
class projecttask1631456995465 {
    constructor() {
        this.name = 'projecttask1631456995465';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "task_status_enum" AS ENUM('todo', 'done')`);
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "status" "task_status_enum" NOT NULL DEFAULT 'todo', "employeeId" integer, "projectId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_07278e1532a8daa462123fb7bc1" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_07278e1532a8daa462123fb7bc1"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TYPE "task_status_enum"`);
    }
}
exports.projecttask1631456995465 = projecttask1631456995465;
//# sourceMappingURL=1631456995465-projecttask.js.map