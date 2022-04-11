import {MigrationInterface, QueryRunner} from "typeorm";

export class createInvestment1649696480517 implements MigrationInterface {
    name = 'createInvestment1649696480517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "investment_types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(255) NOT NULL, "code" integer NOT NULL, CONSTRAINT "UQ_a3dfaa8b868d9b101cabce9db78" UNIQUE ("description"), CONSTRAINT "UQ_76b4459bd2eb8b66cfc3c30c780" UNIQUE ("code"), CONSTRAINT "PK_6e7bfeb814ae5843335784287bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "investments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(255) NOT NULL, "location" character varying(255) NOT NULL, "invesment_type_id" uuid NOT NULL, CONSTRAINT "UQ_ea538e85f75986dff05393f549e" UNIQUE ("description"), CONSTRAINT "UQ_95fbfceb9cae303835b60ca2eee" UNIQUE ("location"), CONSTRAINT "PK_a1263853f1a4fb8b849c1c9aff4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "investments" ADD CONSTRAINT "FK_0289cff6eadd1bd53a885410873" FOREIGN KEY ("invesment_type_id") REFERENCES "investment_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investments" DROP CONSTRAINT "FK_0289cff6eadd1bd53a885410873"`);
        await queryRunner.query(`DROP TABLE "investments"`);
        await queryRunner.query(`DROP TABLE "investment_types"`);
    }

}
