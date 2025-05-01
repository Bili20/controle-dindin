import { plainToInstance } from "class-transformer";
import { FindValuesDto } from "../models/dtos/find_values.dto";
import { FindValuesService } from "../services/values/find_values.service";
import { Request, Response } from "express";
export class FindValuesController {
  constructor(private readonly findValuesService: FindValuesService) {}

  async find(req: Request, res: Response) {
    try {
      const params = plainToInstance(FindValuesDto, req.query);
      const values = await this.findValuesService.execute(params);
      res.status(200).json(values);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  }
}
