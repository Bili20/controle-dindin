import { knexInstance } from "../../config/db/configDb";
import { IObjectiveRepository } from "../../models/interfaces/objective_repository.interface";
import { IObjective } from "../../models/objective";

export class ObjectiveRepository implements IObjectiveRepository {
  async create(param: IObjective): Promise<void> {
    await knexInstance.table<IObjective>("objective").insert({
      name: param.name,
      value: param.value,
      final_date: param.final_date,
      user_id: param.user_id,
      create_at: new Date(),
    });
  }

  async find(user_id: number): Promise<IObjective[]> {
    return await knexInstance("objective")
      .select("*")
      .where("user_id", user_id);
  }
}
