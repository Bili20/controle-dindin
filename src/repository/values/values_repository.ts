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
    const values = await knexInstance("values")
      .select("*")
      .where("user_id", user_id)
      .andWhereRaw("EXTRACT(MONTH FROM created_at) = ?", [month])
      .andWhereRaw("EXTRACT(YEAR FROM created_at) = ?", [year])
      .orderBy("values.id", "desc");

    return values;
  }
}
