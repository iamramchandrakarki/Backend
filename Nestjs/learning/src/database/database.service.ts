import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class DatabaseService
  implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy
{
  constructor() {
    console.log('[Service] Constructor called');
  }

  onModuleInit() {
    console.log('[Service] onModuleInit - Module initialized');
  }

  onApplicationBootstrap() {
    console.log('[Service] onApplicationBootstrap - App ready');
  }

  onModuleDestroy() {
    console.log('[Service] onModuleDestroy - Cleanup');
  }

  getData() {
    return {
      message: 'Hello from lifecycle demo!',
      timestamp: new Date().toISOString(),
    };
  }
}
