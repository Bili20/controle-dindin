import { IValues } from "../values";

export interface IValuesRepository {
  create(values: IValues): Promise<IValues>;
  findByMonthAndYear(
    month: number,
    year: number,
    user_id: number
  ): Promise<IValues[]>;
}
