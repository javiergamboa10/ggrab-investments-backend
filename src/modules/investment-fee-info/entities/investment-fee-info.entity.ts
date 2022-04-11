import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Investment } from '../../investments/entities/investment.entity';

@Entity('investment_fee_info')
export class InvestmentFeeInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Investment, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'investment_id', referencedColumnName: 'id' })
  invesment: Investment;

  @Column({ type: 'uuid', nullable: false, name: 'investment_id' })
  investmentId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'date', nullable: false, name: 'due_date' })
  dueDate: number;

  @Column({ type: 'float', nullable: false, name: 'fee_value' })
  feeValue: number;
}
