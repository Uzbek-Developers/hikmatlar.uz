import { MigrationInterface, QueryRunner } from 'typeorm';

export class quoteTag1640919576453 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS  "quote_tag" (
        "tag_id" uuid,
        "quote_id" uuid
      );`
    );

    await queryRunner.query(
      `ALTER TABLE "quote_tag" ADD FOREIGN KEY ("tag_id") REFERENCES "tags" ("id");`
    );
    await queryRunner.query(
      `ALTER TABLE "quote_tag" ADD FOREIGN KEY ("quote_id") REFERENCES "quotes" ("id");`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "quote_tag" DROP CONSTRAINT "tag_id"`);
    await queryRunner.query(
      `ALTER TABLE "quote_tag" DROP CONSTRAINT "quote_id"`
    );

    await queryRunner.query(`DROP TABLE "quote_tag"`);
  }
}
