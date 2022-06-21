import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: '33', description: ' min 1  max 120 value' })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Min(1)
  @Max(120)
  public age: number;
  @IsOptional()
  @ApiProperty({ example: 'driver', description: 'profession' })
  @IsString()
  public profession: string;
  @IsOptional()
  @ApiProperty({ example: 'London', description: ' min 3  max 10 letters' })
  @IsString()
  @Length(3, 10)
  public city: string;
  @IsOptional()
  @ApiProperty({ example: 'blablabla.jpg', description: 'the user image' })
  @IsString()
  @IsOptional()
  public avatar: string;
}
