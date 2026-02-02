import {
  Controller,
  Get,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController
  implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy
{
  constructor(private readonly databaseService: DatabaseService) {
    console.log('[Controller] Constructor called');
  }

  onModuleInit() {
    console.log('[Controller] onModuleInit - Controller initialized');
  }

  onApplicationBootstrap() {
    console.log('[Controller] onApplicationBootstrap - Ready to serve');
  }

  onModuleDestroy() {
    console.log('[Controller] onModuleDestroy - Cleanup');
  }

  @Get()
  getData() {
    return this.databaseService.getData();
  }
}
