/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class updateUserDto {
  @IsString()
  name: string;
  
  @IsString()
  secondName: string;
  
  @IsString()
  username: string;
  
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  password: string;
  
  isActive: boolean;
}
