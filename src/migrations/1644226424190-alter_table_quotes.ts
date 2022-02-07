import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterTableQuotes1644226424190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quotes" ADD COLUMN "category_id" uuid references categories(id)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "quotes" DROP COLUMN "category_id"`);
  }
}
