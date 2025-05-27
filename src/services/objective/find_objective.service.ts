import { IObjectiveRepository } from "../../models/interfaces/objective_repository.interface";

export class FindObjectiveService {
  constructor(private readonly objectiveRepository: IObjectiveRepository) {}

  async execute(user_id: number) {
    return await this.objectiveRepository.find(user_id);
  }
}
