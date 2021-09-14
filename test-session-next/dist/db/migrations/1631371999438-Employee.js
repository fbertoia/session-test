"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee1631371999438 = void 0;
class Employee1631371999438 {
    constructor() {
        this.name = 'Employee1631371999438';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "employee"`);
    }
}
exports.Employee1631371999438 = Employee1631371999438;
//# sourceMappingURL=1631371999438-Employee.js.map