import { Request, Response } from "express";
import { CreateObjectiveDto } from "../../models/dtos/objective/create_objective.dto";
import { CreateObjectiveService } from "../../services/objective/createObjective.service";
export class CreateObjectiveController {
  constructor(
    private readonly createObjectiveService: CreateObjectiveService
  ) {}

  async create(req: Request, res: Response) {
    try {
      const body: CreateObjectiveDto = req.body;
      await this.createObjectiveService.execute(body);
      res.status(201).json();
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  }
}
