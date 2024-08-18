import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
  ) {}

  create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = this.bookingsRepository.create(createBookingDto);
    return this.bookingsRepository.save(booking);
  }

  findAll(): Promise<Booking[]> {
    return this.bookingsRepository.find();
  }
  // Find a booking by ID
  async findOne(id: number): Promise<Booking> {
    const booking = await this.bookingsRepository.findOne({
      where: { id },
    });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  // Update a booking
  async update(
    id: number,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    // Check if the booking exists
    const booking = await this.findOne(id);

    if (booking) {
      // Perform the update
      await this.bookingsRepository.update(id, updateBookingDto);
    }

    // Fetch and return the updated booking
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bookingsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }
}
