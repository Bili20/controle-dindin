import { createValueDto } from "../../models/dtos/values/create_values.dto";
import { CreateValuesService } from "../../services/values/create_value.service";
import { Request, Response } from "express";
export class CreateValueController {
  constructor(private readonly createValueService: CreateValuesService) {}

  async create(req: Request, res: Response) {
    try {
      const values: createValueDto = req.body;

      const value = await this.createValueService.execute(values);
      res.status(201).json(value);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  }
}
