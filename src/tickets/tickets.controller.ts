import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.find(id);
  }

  @Get('user/:userid')
  findAllByUser(@Param('userid') userId: string) {
    return this.ticketsService.findAllByUser(userId);
  }
}
