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
    // Implementation for finding objectives by user_id
    // This should return a list of objectives associated with the user_id
    return [];
  }
}
