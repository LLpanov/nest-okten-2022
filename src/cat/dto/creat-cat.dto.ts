import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateCatDto {
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  public name: string;
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  public breed: string;
  @IsNumber()
  public year: number;
  @IsString()
  public chipcode: string;
  @IsBoolean()
  public vaccination: boolean;
  public postId: number;
  public CatOwnerId: number;
}
