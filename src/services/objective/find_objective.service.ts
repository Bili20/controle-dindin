import { FindObjectiveDto } from "../../models/dtos/objective/find_objective.dto";
import { IObjectiveRepository } from "../../models/interfaces/objective_repository.interface";

export class FindObjectiveService {
  constructor(private readonly objectiveRepository: IObjectiveRepository) {}

  async execute(params: FindObjectiveDto) {
    return await this.objectiveRepository.find(
      params.user_id,
      params.month,
      params.yaer,
      params.by_end_date
    );
  }
}
