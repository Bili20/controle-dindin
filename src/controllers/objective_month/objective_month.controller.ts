import { CreateObjectiveMonthDto } from "../../models/dtos/objective_month/create_objective_month.dto";
import { CreateObjectiveMonthService } from "../../services/objective_month/create_objective.service";
import { Request, Response } from "express";
export class CreateObjectiveMonthController {
  constructor(
    private readonly CreateObjectiveService: CreateObjectiveMonthService
  ) {}

  async create(req: Request, res: Response) {
    try {
      const body: CreateObjectiveMonthDto = req.body;
      await this.CreateObjectiveService.execute(body);
      res.status(201).json();
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  }
}
