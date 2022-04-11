import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investment_types')
export class InvestmentType extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  description: string;

  @Column({ type: 'int', nullable: false, unique: true })
  code: number;
}
