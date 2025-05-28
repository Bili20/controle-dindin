import { Transform } from "class-transformer";
import {
  IsBoolean,
  IsBooleanString,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
} from "class-validator";

export class FindObjectiveDto {
  @IsNumberString()
  @IsNotEmpty()
  user_id: number;

  @IsNumberString()
  @IsOptional()
  month: number;

  @IsNumberString()
  @IsOptional()
  yaer: number;

  @IsBoolean()
  @Transform(({ value }) => {
    return [true, "enabled", "true", 1, "1"].indexOf(value) > -1;
  })
  @IsOptional()
  by_end_date?: boolean = true;
}
