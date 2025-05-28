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

  async find(
    user_id: number,
    month: number,
    year: number,
    by_end_date?: boolean
  ): Promise<IObjective[]> {
    let fieldDate = { final_date: "final_date", create_at: "create_at" };
    const query = knexInstance("objective")
      .select("*")
      .where("user_id", user_id);

    if (month && year) {
      query.andWhereRaw(
        `EXTRACT(MONTH FROM ${
          by_end_date ? fieldDate.final_date : fieldDate.create_at
        }) = ?`,
        [month]
      );
      query.andWhereRaw(
        `EXTRACT(YEAR FROM ${
          by_end_date ? fieldDate.final_date : fieldDate.create_at
        }) = ?`,
        [year]
      );
    }

    return await query;
  }
}
