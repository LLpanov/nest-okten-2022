import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 10)
  public brand: string;
  @IsString()
  @IsNotEmpty()
  public model: string;
  @IsNumber()
  public year: number;
  @IsNumber()
  public price: number;
  @IsBoolean()
  public insurance: boolean;
  public ownerId: number;
  public catId: number;
}
