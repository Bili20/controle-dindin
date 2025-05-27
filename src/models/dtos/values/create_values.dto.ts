import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createValueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  objective_month_id: number;

  @IsString()
  @IsOptional()
  created_at: Date;
}
