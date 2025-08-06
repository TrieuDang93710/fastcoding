/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('blogs')
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  time: string;

  @Column()
  time_read: string;

  @Column()
  view: string;

  @Column()
  image: string;

  @Column({ type: 'jsonb' })
  content: object;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Timestamp;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_at: string;
}
