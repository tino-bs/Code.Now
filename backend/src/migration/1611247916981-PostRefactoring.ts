import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1611247916981 implements MigrationInterface {
  name = 'PostRefactoring1611247916981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME COLUMN "land" TO "country"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME COLUMN "country" TO "land"`,
    );
  }
}
