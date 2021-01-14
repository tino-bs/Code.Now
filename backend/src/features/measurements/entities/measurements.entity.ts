import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Measurement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  parameter: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  unit: string;

  @Column()
  value: number;
}
