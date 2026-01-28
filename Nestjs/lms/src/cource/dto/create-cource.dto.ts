import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourceDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  level: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
