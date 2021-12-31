import { MigrationInterface, QueryRunner } from 'typeorm';

export class adminUser1640847986176 implements MigrationInterface {
  name = 'adminUser1640847986176';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "admin_users" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "username" character varying NOT NULL,
          "password" character varying NOT NULL,
          CONSTRAINT "PK_ADMIN_USER_PK" PRIMARY KEY ("id")
        )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "admin_users"`);
  }
}
