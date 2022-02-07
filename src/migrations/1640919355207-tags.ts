import { MigrationInterface, QueryRunner } from 'typeorm';

export class tags1640919355207 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS  "quotes" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "author_id" uuid,
        "content" text,
        "views" int,
        "cover_img" varchar(255),
        "created_at" timestamp DEFAULT (now()),
        "updated_at" timestamp DEFAULT (now()),
        "deleted" boolean DEFAULT false
      );`
    );

    await queryRunner.query(
      `ALTER TABLE "quotes" ADD FOREIGN KEY ("author_id") REFERENCES "authors" ("id");`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "quotes"`);
  }
}
