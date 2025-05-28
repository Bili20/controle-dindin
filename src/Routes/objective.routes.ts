import express from "express";
import { ObjectiveRepository } from "../repository/objective/objective_repository";
import { CreateObjectiveService } from "../services/objective/create_objective.service";
import { CreateObjectiveController } from "../controllers/objective/create_objective.controller";
import { FindObjectiveService } from "../services/objective/find_objective.service";
import { FindObjectiveController } from "../controllers/objective/find_objective.controller";
import { validationMiddleware } from "../middleware/validation.middleware";
import { CreateObjectiveDto } from "../models/dtos/objective/create_objective.dto";
import { FindObjectiveDto } from "../models/dtos/objective/find_objective.dto";
const objectiveroutes = express.Router();
const objectiveRepository = new ObjectiveRepository();
const createObjectiveService = new CreateObjectiveService(objectiveRepository);
const objectiveController = new CreateObjectiveController(
  createObjectiveService
);

const findObjectiveService = new FindObjectiveService(objectiveRepository);
const findObjectiveController = new FindObjectiveController(
  findObjectiveService
);

objectiveroutes.post(
  "/objective",
  validationMiddleware(CreateObjectiveDto),
  (req, res) => objectiveController.create(req, res)
);

objectiveroutes.get(
  "/objective/user",
  validationMiddleware(FindObjectiveDto, "query"),
  (req, res) => {
    findObjectiveController.find(req, res);
  }
);

export { objectiveroutes };
