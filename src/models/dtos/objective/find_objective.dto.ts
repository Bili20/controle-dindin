import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class FindObjectiveDto {
  @IsNumberString()
  @IsNotEmpty()
  user_id: number;
}
