import {MigrationInterface, QueryRunner} from "typeorm";

export class investmentDetailInfo1649866204171 implements MigrationInterface {
    name = 'investmentDetailInfo1649866204171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investments" DROP CONSTRAINT "FK_0289cff6eadd1bd53a885410873"`);
        await queryRunner.query(`ALTER TABLE "investments" RENAME COLUMN "invesment_type_id" TO "investment_type_id"`);
        await queryRunner.query(`CREATE TABLE "investment_fee_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "investment_id" uuid NOT NULL, "description" character varying(255) NOT NULL, "due_date" date NOT NULL, "fee_value" double precision NOT NULL, CONSTRAINT "PK_e34688618dc18ec25f5eb241061" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "investment_general_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "investment_id" uuid NOT NULL, "total_value" double precision NOT NULL, "initial_fee" double precision NOT NULL, CONSTRAINT "REL_9d1b9785811eb18a357a880106" UNIQUE ("investment_id"), CONSTRAINT "PK_6f1abd7c9cc6ec58570e9cb2869" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "investments" ADD CONSTRAINT "FK_3bb24da922c6c8b978c44b23855" FOREIGN KEY ("investment_type_id") REFERENCES "investment_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "investment_fee_info" ADD CONSTRAINT "FK_409ec538e78d65b4ec5d8f7df8e" FOREIGN KEY ("investment_id") REFERENCES "investments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "investment_general_info" ADD CONSTRAINT "FK_9d1b9785811eb18a357a8801066" FOREIGN KEY ("investment_id") REFERENCES "investments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment_general_info" DROP CONSTRAINT "FK_9d1b9785811eb18a357a8801066"`);
        await queryRunner.query(`ALTER TABLE "investment_fee_info" DROP CONSTRAINT "FK_409ec538e78d65b4ec5d8f7df8e"`);
        await queryRunner.query(`ALTER TABLE "investments" DROP CONSTRAINT "FK_3bb24da922c6c8b978c44b23855"`);
        await queryRunner.query(`DROP TABLE "investment_general_info"`);
        await queryRunner.query(`DROP TABLE "investment_fee_info"`);
        await queryRunner.query(`ALTER TABLE "investments" RENAME COLUMN "investment_type_id" TO "invesment_type_id"`);
        await queryRunner.query(`ALTER TABLE "investments" ADD CONSTRAINT "FK_0289cff6eadd1bd53a885410873" FOREIGN KEY ("invesment_type_id") REFERENCES "investment_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
