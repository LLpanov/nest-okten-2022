import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan', description: 'min 2  max 10 letters' })
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  public username: string;
  @ApiProperty({ example: 'Johnson', description: 'min 3  max 10 letters' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
  public surname: string;
  @ApiProperty({ example: 'google@gmail.com', description: 'user email' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;
  @ApiProperty({ example: '33', description: ' min 1  max 120 value' })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(120)
  public age: number;
  @ApiProperty({
    example: 'London',
    description: ' min 3  max 10 letters',
    required: false,
  })
  @IsString()
  @Length(3, 10)
  public city: string;
  @ApiProperty({ required: false })
  @IsString()
  public profession: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: '8 symbol at least one letter and one number',
  })
  readonly password: string;
  @IsOptional()
  @ApiProperty({ example: 'blablabla.jpg', description: 'the user image' })
  @IsString()
  @IsOptional()
  public avatar: string;
}
