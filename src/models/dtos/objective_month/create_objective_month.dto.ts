import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateObjectiveMonthDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  savings_value: number;

  @IsNumber()
  @IsNotEmpty()
  objective_id: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
