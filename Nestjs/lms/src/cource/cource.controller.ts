import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorators';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/user/user.types';
import { CourceService } from './cource.service';
import { CreateCourceDto } from './dto/create-cource.dto';
import { UpdateCourceDto } from './dto/update-cource.dto';

@Controller('courses')
export class CourceController {
  constructor(private readonly courceService: CourceService) {}

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  create(@Body() createCourceDto: CreateCourceDto) {
    return this.courceService.create(createCourceDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.courceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourceDto: UpdateCourceDto) {
    return this.courceService.update(+id, updateCourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courceService.remove(+id);
  }
}
