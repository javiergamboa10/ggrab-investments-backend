import {MigrationInterface, QueryRunner} from "typeorm";

export class createInvestor1650665344442 implements MigrationInterface {
    name = 'createInvestor1650665344442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "identity_types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(255) NOT NULL, "code" integer NOT NULL, CONSTRAINT "UQ_1ad471020b80e4bf354a39235b2" UNIQUE ("description"), CONSTRAINT "UQ_23fadbb2c37603b54b9bb0cf4d9" UNIQUE ("code"), CONSTRAINT "PK_31aaa225433b9b5a86da90147ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "investors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "identity" character varying(255) NOT NULL, "identity_type_id" uuid NOT NULL, "address" character varying(255) NOT NULL, "phones" character varying(255) NOT NULL, CONSTRAINT "UQ_e99d6a7ec8a67e1e6e3352e5918" UNIQUE ("identity"), CONSTRAINT "PK_7ab129212e4ce89e68d6a27ea4e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "investors" ADD CONSTRAINT "FK_326bf6cb65b744924bc40d8ff3d" FOREIGN KEY ("identity_type_id") REFERENCES "identity_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investors" DROP CONSTRAINT "FK_326bf6cb65b744924bc40d8ff3d"`);
        await queryRunner.query(`DROP TABLE "investors"`);
        await queryRunner.query(`DROP TABLE "identity_types"`);
    }

}
