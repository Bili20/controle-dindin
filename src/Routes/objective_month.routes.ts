import express from "express";
import { ObjectiveMonthRepository } from "../repository/objective_month/objective_month_repository";
import { CreateObjectiveMonthService } from "../services/objective_month/create_objective.service";
import { CreateObjectiveMonthController } from "../controllers/objective_month/objective_month.controller";

const objectiveMonthRoutes = express.Router();
const objectiveMonthRepository = new ObjectiveMonthRepository();
const createObjectiveService = new CreateObjectiveMonthService(
  objectiveMonthRepository
);
const createObjectiveController = new CreateObjectiveMonthController(
  createObjectiveService
);

objectiveMonthRoutes.post("/objective-month", (req, res) =>
  createObjectiveController.create(req, res)
);

export { objectiveMonthRoutes };
