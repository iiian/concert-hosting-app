import { Controller, Get, Param, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE, exceptionFactory: (err) => new Error('bruh') })) 
    id: number
  ): number {
    return id + 10;
  }
}
