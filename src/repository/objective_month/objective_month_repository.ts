import { knexInstance } from "../../config/db/configDb";
import { IObjectiveMonthRepository } from "../../models/interfaces/objective_month.interface";
import { IObjectiveMonth } from "../../models/objective_month";

export class ObjectiveMonthRepository implements IObjectiveMonthRepository {
  async create(param: IObjectiveMonth): Promise<void> {
    await knexInstance<IObjectiveMonth>("objective_month").insert({
      objective_id: param.objective_id,
      phrase_id: param.phrase_id,
      savings_value: param.savings_value,
      total_value_month: param.total_value_month,
      user_id: param.user_id,
      created_at: new Date(),
    });
  }

  async findByMonthAndYear(
    month: number,
    year: number,
    objective_id: number,
    user_id: number
  ): Promise<IObjectiveMonth> {
    return await knexInstance("objective_month")
      .select("*")
      .where("user_id", user_id)
      .andWhere("objective_id", objective_id)
      .andWhereRaw("EXTRACT(MONTH FROM created_at) = ?", [month])
      .andWhereRaw("EXTRACT(YEAR FROM created_at) = ?", [year]);
  }
}
