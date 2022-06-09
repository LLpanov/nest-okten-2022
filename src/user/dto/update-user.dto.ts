import { IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 'London',
    description: ' min 3  max 10 letters',
    required: false,
  })
  @IsNumber()
  public age: number;
  @ApiProperty({ example: 'driver', description: 'profession' })
  @IsString()
  public profession: string;
  @ApiProperty({ example: 'London', description: ' min 3  max 10 letters' })
  @IsString()
  @Length(3, 10)
  public city: string;
}
