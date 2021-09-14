"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueEmail1631378347666 = void 0;
class uniqueEmail1631378347666 {
    constructor() {
        this.name = 'uniqueEmail1631378347666';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."employee" ADD CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."employee" DROP CONSTRAINT "UQ_817d1d427138772d47eca048855"`);
    }
}
exports.uniqueEmail1631378347666 = uniqueEmail1631378347666;
//# sourceMappingURL=1631378347666-unique%20email.js.map