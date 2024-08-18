// src/bookings/bookings.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])], // Ensure Booking entity is included here
  providers: [BookingsService],
  controllers: [BookingsController],
  exports: [BookingsService], // Export BookingsService if used in other modules
})
export class BookingsModule {}
