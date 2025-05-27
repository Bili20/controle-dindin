import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateObjectiveDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  final_date: Date;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
