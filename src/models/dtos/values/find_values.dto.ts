import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class FindValuesDto {
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  month: number;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  year: number;

  @Type(() => Number)
  @IsNumber()
  user_id: number;
}
