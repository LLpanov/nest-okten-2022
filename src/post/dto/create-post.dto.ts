import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  public comment: string;
  @IsString()
  public company: string;
  @IsString()
  public telephone: string;
  @IsNumber()
  public zipcode: number;
  public authorId: number;
}
