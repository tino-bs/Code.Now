import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1611239161140 implements MigrationInterface {
  name = 'PostRefactoring1611239161140';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME COLUMN "schland" TO "country"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME COLUMN "country" TO "schland"`,
    );
  }
}
