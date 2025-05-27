import express from "express";
import { CreateObjectiveMonthController } from "../controllers/objective_month/objective_month.controller";
import { validationMiddleware } from "../middleware/validation.middleware";
import { CreateObjectiveMonthDto } from "../models/dtos/objective_month/create_objective_month.dto";
import { ObjectiveMonthRepository } from "../repository/objective_month/objective_month_repository";
import { CreateObjectiveMonthService } from "../services/objective_month/create_objective.service";

const objectiveMonthRoutes = express.Router();
const objectiveMonthRepository = new ObjectiveMonthRepository();

const createObjectiveService = new CreateObjectiveMonthService(
  objectiveMonthRepository
);
const createObjectiveController = new CreateObjectiveMonthController(
  createObjectiveService
);

objectiveMonthRoutes.post(
  "/objective-month",
  validationMiddleware(CreateObjectiveMonthDto),
  (req, res) => {
    createObjectiveController.create(req, res);
  }
);

export { objectiveMonthRepository, objectiveMonthRoutes };
