import { FindValuesDto } from "../../models/dtos/find_values.dto";
import { IValuesRepository } from "../../models/interfaces/values_repository.interface";

export class FindValuesService {
  constructor(private readonly valuerepository: IValuesRepository) {}

  async execute(param: FindValuesDto) {
    const { month, year, user_id } = param;
    try {
      const values = await this.valuerepository.findByMonthAndYear(
        month,
        year,
        user_id
      );
      return values;
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar os valores");
    }
  }
}
