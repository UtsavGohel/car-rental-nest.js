import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { BookingsModule } from './bookings/bookings.module';
import { NotificationsModule } from './notifications/notifications.module';
import { User } from './users/user.entity';
import { Car } from './cars/car.entity';
import { Booking } from './bookings/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'car_rental',
      entities: [User, Car, Booking],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CarsModule,
    BookingsModule,
    NotificationsModule,
  ],
})
export class AppModule {}
