import { knexInstance } from "../../config/db/configDb";
import { IValuesRepository } from "../../models/interfaces/values_repository.interface";
import { IValues } from "../../models/values";

export class ValuesRepository implements IValuesRepository {
  async create(values: IValues): Promise<IValues> {
    const [value] = await knexInstance<IValues>("values")
      .insert(values)
      .returning("*");

    return value;
  }

  async findByMonthAndYear(
    month: number,
    year: number,
    user_id: number
  ): Promise<IValues[]> {
    let query = knexInstance<IValues>("values")
      .select("*")
      .innerJoin(
        "objective_month",
        "objective_month.id",
        "values.objective_month_id"
      )
      .where("values.user_id", user_id)
      .orderBy("values.id", "desc");
    if (month && year) {
      query.andWhereRaw("EXTRACT(MONTH FROM values.created_at) = ?", [month]);
      query.andWhereRaw("EXTRACT(YEAR FROM values.created_at) = ?", [year]);
    }

    return await query;
  }
}
