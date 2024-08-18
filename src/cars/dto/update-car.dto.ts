import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  make?: string; // e.g., Toyota, Ford

  @IsOptional()
  @IsString()
  model?: string; // e.g., Corolla, Mustang

  @IsOptional()
  @IsString()
  licensePlate?: string; // e.g., ABC1234

  @IsOptional()
  @IsNumber()
  year?: number; // e.g., 2022

  @IsOptional()
  @IsNumber()
  pricePerDay?: number; // Daily rental price

  @IsOptional()
  @IsString()
  color?: string; // e.g., Red, Blue

  @IsOptional()
  @IsString()
  description?: string; // Optional description of the car
}
