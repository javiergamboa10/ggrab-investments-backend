import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvestmentType } from '../../investment-types/entities/investment-type.entity';

@Entity('investments')
export class Investment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  location: string;

  @ManyToOne(() => InvestmentType, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'investment_type_id', referencedColumnName: 'id' })
  investmentType: InvestmentType;

  @Column({ type: 'uuid', nullable: false, name: 'investment_type_id' })
  investmentTypeId: string;
}
