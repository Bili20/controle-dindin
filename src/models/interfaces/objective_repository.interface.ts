import { IObjective } from "../objective";

export interface IObjectiveRepository {
  create(param: IObjective): Promise<void>;
  find(user_id: number): Promise<IObjective[]>;
}
