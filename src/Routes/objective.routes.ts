import express from "express";
import { ObjectiveRepository } from "../repository/objective/objective_repository";
import { CreateObjectiveService } from "../services/objective/createObjective.service";
import { CreateObjectiveController } from "../controllers/objective/create_objective.controller";
const objectiveroutes = express.Router();
const objectiveRepository = new ObjectiveRepository();
const createObjectiveService = new CreateObjectiveService(objectiveRepository);
const objectiveController = new CreateObjectiveController(
  createObjectiveService
);

objectiveroutes.post("/objective", (req, res) =>
  objectiveController.create(req, res)
);

export { objectiveroutes };
