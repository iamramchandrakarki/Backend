import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourceController } from './cource.controller';
import { CourceService } from './cource.service';
import { Course, CourseSchema } from './schemas/cource.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  controllers: [CourceController],
  providers: [CourceService],
})
export class CourceModule {}
