import {MigrationInterface, QueryRunner} from "typeorm";

export class insertIdentityTypes1650665472241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO identity_types (description, code) VALUES ('Nit', 1)`);
        await queryRunner.query(`INSERT INTO identity_types (description, code) VALUES ('Cédula de ciudadanía', 2)`);
        await queryRunner.query(`INSERT INTO identity_types (description, code) VALUES ('Cédula de extranjería', 3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM identity_types WHERE code = 1`);
        await queryRunner.query(`DELETE FROM identity_types WHERE code = 2`);
        await queryRunner.query(`DELETE FROM identity_types WHERE code = 3`);
    }

}
