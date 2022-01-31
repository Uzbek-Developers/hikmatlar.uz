import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeQuoteView1643570005100 implements MigrationInterface {
  name = 'changeQuoteView1643570005100';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quotes" ALTER COLUMN "views" SET NOT NULL`
    );

    await queryRunner.query(
      `ALTER TABLE "quotes" ALTER COLUMN "views" SET DEFAULT '0'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quotes" ALTER COLUMN "views" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "quotes" ALTER COLUMN "views" DROP NOT NULL`
    );
  }
}
