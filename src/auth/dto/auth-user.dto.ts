import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class AuthUserDto {
  @ApiProperty({ example: 'google@gmail.com', description: 'user email' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;
  @ApiProperty({
    example: '23xxx351abc',
    description: 'user password min 4 max 15 symbol',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: '8 symbol at least one letter and one number',
  })
  public password: string;
}
