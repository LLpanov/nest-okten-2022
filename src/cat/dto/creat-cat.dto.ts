import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ example: 'Murzik', description: 'min 2 max 10 letters' })
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  public name: string;

  @ApiProperty({ example: 'Scottish', description: 'min 2 max 10 letters' })
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  public breed: string;
  @ApiProperty({ required: false })
  @IsNumber()
  public year: number;

  @ApiProperty({ required: false })
  @IsString()
  public chipcode: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  public vaccination: boolean;
  public postId: number;
  public CatOwnerId: number;
}
