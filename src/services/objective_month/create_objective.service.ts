import { CreateObjectiveMonthDto } from "../../models/dtos/objective_month/create_objective_month.dto";
import { IObjectiveMonthRepository } from "../../models/interfaces/objective_month.interface";
import { IObjectiveMonth } from "../../models/objective_month";

export class CreateObjectiveMonthService {
  constructor(
    private readonly objectiveMonthRepository: IObjectiveMonthRepository
  ) {}

  async execute(param: CreateObjectiveMonthDto) {
    const dataObjectiveMonth = {
      savings_value: param.savings_value,
      total_value_month: param.total_value_month,
      user_id: param.user_id,
      objective_id: param.objective_id,
      created_at: new Date(),
    } as IObjectiveMonth;

    try {
      return await this.objectiveMonthRepository.create(dataObjectiveMonth);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao criar objetivo do mês.");
    }
  }
}
