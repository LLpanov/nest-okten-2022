import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public comment: string;
  @ApiProperty()
  @IsString()
  public company: string;
  @ApiProperty({ required: false })
  @IsString()
  public telephone: string;
  @ApiProperty({ example: 79012, description: 'min 4 max 16 value' })
  @IsNumber()
  @Min(4)
  @Max(16)
  public zipcode: number;
  public authorId: number;
}
