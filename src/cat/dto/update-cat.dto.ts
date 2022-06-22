import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCatDto {
  @ApiProperty({ required: false })
  @IsNumber()
  public year: number;

  @ApiProperty({ required: false })
  @IsString()
  public chipcode: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  public vaccination: boolean;
}
