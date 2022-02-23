import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  search(@Query('name') name: string) {
    return `${name}님, 안녕하세요`;
  }
}
