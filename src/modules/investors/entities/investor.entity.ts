import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IdentityType } from '../../identity-types/entities/identity-type.entity';

@Entity('investors')
export class Investor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  identity: string;

  @ManyToOne(() => IdentityType, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'identity_type_id', referencedColumnName: 'id' })
  identityType: IdentityType;

  @Column({ type: 'uuid', nullable: false, name: 'identity_type_id' })
  identityTypeId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  address: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  phones: string;
}
