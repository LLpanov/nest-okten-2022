import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateCatDto {
  @IsNumber()
  public year: number;
  @IsString()
  public chipcode: string;
  @IsBoolean()
  public vaccination: boolean;
}
