import express from "express";
import { CreateValueController } from "../controllers/values/create_value.controller";
import { FindValuesController } from "../controllers/values/find_values.controller";
import { ValuesRepository } from "../repository/values/values_repository";
import { CreateValuesService } from "../services/values/create_value.service";
import { FindValuesService } from "../services/values/find_values.service";
import { validationMiddleware } from "../middleware/validation.middleware";
import { createValueDto } from "../models/dtos/values/create_values.dto";
import { FindValuesDto } from "../models/dtos/values/find_values.dto";
import {
  objectiveMonthRepository,
  objectiveMonthRoutes,
} from "./objective_month.routes";
import { UpdateValueMonthService } from "../services/objective_month/update_value.service";
import { ObjectiveMonthRepository } from "../repository/objective_month/objective_month_repository";

const valuesRoutes = express.Router();

const valueRepository = new ValuesRepository();

const updateObjectiveService = new UpdateValueMonthService(
  objectiveMonthRepository
);

const createValuesService = new CreateValuesService(
  valueRepository,
  updateObjectiveService
);
const createValueController = new CreateValueController(createValuesService);

const findValuesService = new FindValuesService(valueRepository);
const findValuesController = new FindValuesController(findValuesService);

valuesRoutes.post(
  "/values",
  validationMiddleware(createValueDto),
  (req, res) => {
    createValueController.create(req, res);
  }
);
valuesRoutes.get(
  "/values",
  validationMiddleware(FindValuesDto, "query"),
  (req, res) => {
    findValuesController.find(req, res);
  }
);

export { valuesRoutes };
