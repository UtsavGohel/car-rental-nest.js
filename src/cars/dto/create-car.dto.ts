import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  make: string; // e.g., Toyota, Ford

  @IsNotEmpty()
  @IsString()
  model: string; // e.g., Corolla, Mustang

  @IsNotEmpty()
  @IsString()
  licensePlate: string; // e.g., ABC1234

  @IsNotEmpty()
  @IsNumber()
  year: number; // e.g., 2022

  @IsNotEmpty()
  @IsNumber()
  pricePerDay: number; // Daily rental price

  @IsOptional()
  @IsString()
  color?: string; // e.g., Red, Blue

  @IsOptional()
  @IsString()
  description?: string; // Optional description of the car
}
