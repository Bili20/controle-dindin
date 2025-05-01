import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class FindValuesDto {
  @Type(() => Number)
  @IsNumber()
  month: number;

  @Type(() => Number)
  @IsNumber()
  year: number;

  @Type(() => Number)
  @IsNumber()
  user_id: number;
}
