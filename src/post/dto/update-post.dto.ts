import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePostDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  public comment: string;
  @ApiProperty({ required: false })
  @IsString()
  public company: string;
}
