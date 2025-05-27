import { IsNotEmpty, IsNumber } from "class-validator";

export class AddValueObjectiveMonthDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  id: number;
}
