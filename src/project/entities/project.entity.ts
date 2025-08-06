/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('projects')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  role: string;

  @Column()
  provide: string;

  @Column()
  duration: string;

  @Column()
  client: string;

  @Column()
  client_designation: string;

  @Column()
  create_by: string;

  @Column()
  content: string;

  @Column()
  goal: string;

  @Column()
  prod_brand: string;

  @Column()
  statement: string;

  @Column()
  problem: string;

  @Column()
  solution: string;

  @Column()
  image: string;

  @Column({ type: 'text', array: true, default: [] })
  albums: string[];

  @Column()
  feedback: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Timestamp;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_at: string;
}
