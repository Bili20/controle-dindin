import { Request, Response } from "express";
import { FindObjectiveService } from "../../services/objective/find_objective.service";
import { plainToInstance } from "class-transformer";
import { FindObjectiveDto } from "../../models/dtos/objective/find_objective.dto";
export class FindObjectiveController {
  constructor(private readonly findObjectiveService: FindObjectiveService) {}

  async find(req: Request, res: Response) {
    try {
      const params = plainToInstance(FindObjectiveDto, req.query);

      const objective = await this.findObjectiveService.execute(params);
      return res.json(objective);
    } catch (e: any) {
      console.error(e.message);
      res.status(400).json({ message: "Erro ao buscar os objetivos." });
    }
  }
}
