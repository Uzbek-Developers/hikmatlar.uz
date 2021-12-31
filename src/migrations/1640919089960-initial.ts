import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1640919089960 implements MigrationInterface {
  name = '1640919089960initial';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "admin_users"`);
  }
}
