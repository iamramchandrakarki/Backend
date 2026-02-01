import { IsString, IsNumber } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    name: string;
    
    @IsNumber()
    age: number;
}