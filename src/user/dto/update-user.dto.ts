import { IsNumber, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  public age: number;
  @IsString()
  public profession: string;
  @IsString()
  @Length(3, 10)
  public city: string;
}
