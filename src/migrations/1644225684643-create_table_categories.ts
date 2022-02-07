import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableCategories1644225684643 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` CREATE TABLE IF NOT EXISTS "categories" (
            "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            "name" varchar
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP  TABLE "categories"`);
  }
}
