import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async getHello(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();
    return users;
  }
}
