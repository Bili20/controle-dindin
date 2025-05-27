import { AddValueObjectiveMonthDto } from "../../models/dtos/objective_month/add_value.dto";
import { IObjectiveMonthRepository } from "../../models/interfaces/objective_month.interface";

export class UpdateValueMonthService {
  constructor(
    private readonly objectiveMonthRepository: IObjectiveMonthRepository
  ) {}

  async execute(param: AddValueObjectiveMonthDto) {
    return await this.objectiveMonthRepository.updateValue(
      param.value,
      param.id
    );
  }
}
