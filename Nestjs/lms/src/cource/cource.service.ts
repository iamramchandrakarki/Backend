import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourceDto } from './dto/create-cource.dto';
import { UpdateCourceDto } from './dto/update-cource.dto';
import { Course } from './schemas/cource.schema';

@Injectable()
export class CourceService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourceDto: CreateCourceDto) {
    return await this.courseModel.create({
      name: createCourceDto.name,
      description: createCourceDto.description,
      level: createCourceDto.level,
      price: createCourceDto.price,
    });
  }

  findAll() {
    return `This action returns all cource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cource`;
  }

  update(id: number, updateCourceDto: UpdateCourceDto) {
    return `This action updates a #${id} cource`;
  }

  remove(id: number) {
    return `This action removes a #${id} cource`;
  }
}
