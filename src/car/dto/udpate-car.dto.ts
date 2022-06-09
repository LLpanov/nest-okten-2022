import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateCarDto {
  @IsNumber()
  public price: number;
  @IsBoolean()
  public insurance: boolean;
}
