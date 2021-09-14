"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonuniqueEmail1631377033441 = void 0;
class nonuniqueEmail1631377033441 {
    constructor() {
        this.name = 'nonuniqueEmail1631377033441';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."employee" DROP CONSTRAINT "UQ_817d1d427138772d47eca048855"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."employee" ADD CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email")`);
    }
}
exports.nonuniqueEmail1631377033441 = nonuniqueEmail1631377033441;
//# sourceMappingURL=1631377033441-nonunique%20email.js.map