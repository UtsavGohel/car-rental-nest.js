// src/cars/cars.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Car])], // Ensure Car entity is included here
  providers: [CarsService],
  controllers: [CarsController],
  exports: [CarsService], // Export CarsService if used in other modules
})
export class CarsModule {}
