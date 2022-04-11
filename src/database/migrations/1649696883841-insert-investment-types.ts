import {MigrationInterface, QueryRunner} from "typeorm";

export class insertInvestmentTypes1649696883841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO investment_types (description, code) VALUES ('Apartamento', 1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM investment_types WHERE code = 1`);
    }

}
