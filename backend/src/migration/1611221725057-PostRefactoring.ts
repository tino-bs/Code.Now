import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1611221725057 implements MigrationInterface {
  name = 'PostRefactoring1611221725057';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME "fland" TO "schland"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "measurement" RENAME "schland" TO "fland"`,
    );
  }
}
