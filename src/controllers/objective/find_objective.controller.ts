import { Request, Response } from "express";
import { FindObjectiveService } from "../../services/objective/find_objective.service";
export class FindObjectiveController {
  constructor(private readonly findObjectiveService: FindObjectiveService) {}

  async find(req: Request, res: Response) {
    try {
      const user_id = req.params.user_id;

      const objective = await this.findObjectiveService.execute(
        Number(user_id)
      );
      return res.json(objective);
    } catch (e: any) {
      console.error(e.message);
      res.status(400).json({ message: "Erro ao buscar os objetivos." });
    }
  }
}
