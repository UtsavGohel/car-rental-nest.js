// src/notifications/notifications.module.ts

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule from @nestjs/axios
import { NotificationsService } from './notifications.service';
// import { NotificationsController } from './notifications.controller';

@Module({
  imports: [HttpModule], // Ensure HttpModule is imported here
  providers: [NotificationsService],
  // controllers: [NotificationsController],
  exports: [NotificationsService], // Export NotificationsService if used in other modules
})
export class NotificationsModule {}
