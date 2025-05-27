import { IObjectiveMonth } from "../objective_month";

export interface IObjectiveMonthRepository {
  create(param: IObjectiveMonth): Promise<void>;
  findByMonthAndYear(
    month: number,
    year: number,
    objective_id: number,
    user_id: number
  ): Promise<IObjectiveMonth[]>;
  findOne(id: number): Promise<IObjectiveMonth>;
  updateValue(value: number, id: number): Promise<void>;
}
