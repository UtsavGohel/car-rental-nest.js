import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsNumber()
  carId: number; // ID of the car being booked

  @IsNotEmpty()
  @IsNumber()
  userId: number; // ID of the user making the booking

  @IsNotEmpty()
  @IsDate()
  startDate: Date; // Booking start date

  @IsNotEmpty()
  @IsDate()
  endDate: Date; // Booking end date

  @IsOptional()
  @IsString()
  status?: string; // Optional status (e.g., 'confirmed', 'cancelled')

  @IsOptional()
  @IsString()
  notes?: string; // Optional notes or additional information
}
