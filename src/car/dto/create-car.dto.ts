import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty({ example: 'BMW', description: 'min 2 max 10 letters' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 10)
  public brand: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public model: string;
  @ApiProperty({ required: false })
  @IsNumber()
  @Min(1930)
  @Max(2022)
  public year: number;
  @ApiProperty({
    required: false,
    description: 'min 1930 max 2022 years',
    example: 2002,
  })
  @IsNumber()
  public price: number;
  @ApiProperty({ required: false })
  @IsBoolean()
  public insurance: boolean;
  public ownerId: number;
  public catId: number;
}
