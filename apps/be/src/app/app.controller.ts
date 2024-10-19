import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Search, TV } from '@shared/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  ping() {
    return this.appService.ping();
  }
}
