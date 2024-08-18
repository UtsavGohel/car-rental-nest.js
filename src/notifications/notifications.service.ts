import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class NotificationsService {
  constructor(private httpService: HttpService) {}

  async notifyUser(email: string, message: string) {
    // Implement notification logic, e.g., using an external email service
    await this.httpService
      .post('https://notification-api.example.com/send', {
        email,
        message,
      })
      .toPromise();
  }
}
