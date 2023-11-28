import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { EventsModule } from '@app/events/events.module';
import { PrismaModule } from '@app/prisma/prisma.module';
import { PrismaService } from '@app/prisma/prisma.service';
import { TicketsModule } from '@app/tickets/tickets.module';
import { UsersModule } from '@app/users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule, EventsModule, TicketsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
