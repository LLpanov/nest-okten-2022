import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  public username: string;
  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
  public surname: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;
  @IsNumber()
  public age: number;
  @IsString()
  @Length(3, 10)
  public city: string;
  @IsString()
  public profession: string;
}
