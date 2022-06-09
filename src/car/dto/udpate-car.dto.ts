import { IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarDto {
  @ApiProperty({ required: false })
  @IsNumber()
  public price: number;
  @ApiProperty({ required: false })
  @IsBoolean()
  public insurance: boolean;
}
