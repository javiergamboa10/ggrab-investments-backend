import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('identity_types')
export class IdentityType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  description: string;

  @Column({ type: 'int', nullable: false, unique: true })
  code: number;
}
