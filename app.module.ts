import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { EventsModule } from '@app/events/events.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/prisma/prisma.module';
import { PrismaService } from '@app/prisma/prisma.service';
import { UsersModule } from '@app/users/users.module';

@Module({
  imports: [UsersModule, EventsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
