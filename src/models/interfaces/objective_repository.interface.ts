import { IObjective } from "../objective";

export interface IObjectiveRepository {
  create(param: IObjective): Promise<void>;
  find(
    user_id: number,
    month: number,
    year: number,
    by_end_date?: boolean
  ): Promise<IObjective[]>;
}
