import { MigrationInterface, QueryRunner } from 'typeorm';

export class authors1640919242909 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE  IF NOT EXISTS "authors"  (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "full_name" varchar,
        "description" text
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "authors"`);
  }
}
