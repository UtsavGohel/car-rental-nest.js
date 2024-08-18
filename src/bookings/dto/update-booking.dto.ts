import { IsOptional, IsNumber, IsString, IsDate } from 'class-validator';

export class UpdateBookingDto {
  @IsOptional()
  @IsNumber()
  carId?: number; // Optional ID of the car being booked

  @IsOptional()
  @IsNumber()
  userId?: number; // Optional ID of the user making the booking

  @IsOptional()
  @IsDate()
  startDate?: Date; // Optional booking start date

  @IsOptional()
  @IsDate()
  endDate?: Date; // Optional booking end date

  @IsOptional()
  @IsString()
  status?: string; // Optional status (e.g., 'confirmed', 'cancelled')

  @IsOptional()
  @IsString()
  notes?: string; // Optional notes or additional information
}
