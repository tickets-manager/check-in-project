import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  create(createTicketDto: CreateTicketDto) {
    const event = this.prisma.event.findUnique({
      where: {
        id: createTicketDto.eventId,
      },
    });

    const user = this.prisma.user.findUnique({
      where: {
        id: createTicketDto.userId,
      },
    });

    if (!event || !user) {
      return null;
    }

    return this.prisma.ticket.create({
      data: {
        event: {
          connect: {
            id: createTicketDto.eventId,
          },
        },
        user: {
          connect: {
            id: createTicketDto.userId,
          },
        },
      },
    });
  }

  findAllByUser(userId: string) {
    return this.prisma.ticket.findMany({
      where: {
        userId: userId,
      },
    });
  }

  find(id: string) {
    return this.prisma.ticket.findUnique({
      where: {
        id: id,
      },
    });
  }
}
