import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Investment } from '../../investments/entities/investment.entity';

@Entity('investment_general_info')
export class InvestmentGeneralInfo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Investment, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'investment_id', referencedColumnName: 'id' })
  invesment: Investment;

  @Column({ type: 'uuid', nullable: false, name: 'investment_id' })
  investmentId: string;

  @Column({ type: 'float', nullable: false, name: 'total_value' })
  totalValue: number;

  @Column({ type: 'float', nullable: false, name: 'initial_fee' })
  initialFee: number;
}
