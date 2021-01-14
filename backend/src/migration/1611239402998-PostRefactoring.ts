import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1611239402998 implements MigrationInterface {
  name = 'PostRefactoring1611239402998';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME COLUMN "country" TO "land"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME COLUMN "land" TO "country"`,
    );
  }
}
