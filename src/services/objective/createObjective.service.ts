import { CreateObjectiveDto } from "../../models/dtos/objective/create_objective.dto";
import { IObjectiveRepository } from "../../models/interfaces/objective_repository.interface";
import { IObjective } from "../../models/objective";

export class CreateObjectiveService {
  constructor(private readonly objectiveRepository: IObjectiveRepository) {}

  async execute(param: CreateObjectiveDto) {
    const objective = {
      name: param.name,
      value: param.value,
      final_date: param.final_date,
      user_id: param.user_id,
      create_at: new Date(),
    } as IObjective;
    try {
      return await this.objectiveRepository.create(objective);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao criar objetivo.");
    }
  }
}
