import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Car } from '../cars/car.entity';
import { User } from '../users/user.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => Car, (car) => car.id)
  car: Car;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;
}
