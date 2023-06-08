import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

type User = {
  id: number;
  email: string;
  name: string | null;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<User[]> {
    return await this.appService.getHello();
  }
}
