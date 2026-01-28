import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { LoginDto, RegisterDto } from '../auth/dto/registerUserDto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(registerUserDto: RegisterDto) {
    try {
      return await this.userModel.create({
        fname: registerUserDto.fname,
        lname: registerUserDto.lname,
        email: registerUserDto.email,
        password: registerUserDto.password,
      });
    } catch (err: unknown) {
      console.log(err);
      const e = err as { code?: number };

      const DUPLICATE_KEY_CODE = 11000;
      if (e.code === DUPLICATE_KEY_CODE) {
        throw new ConflictException('Email is already taken.');
      }
      throw err;
    }
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async checkUser(loginUserDto: LoginDto) {
    try {
      const user = await this.findByEmail(loginUserDto.email);
      if (!user) {
        return null;
      }

      const isPasswordValid = await bcrypt.compare(
        loginUserDto.password,
        user.password,
      );
      if (!isPasswordValid) {
        return null;
      }

      return user;
    } catch (e: unknown) {
      console.log(e);
      throw e;
    }
  }

  async getUserById(id: string) {
    return await this.userModel.findOne({ _id: id });
  }
}
