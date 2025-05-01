import express from "express";
import { CreateValueController } from "../controllers/create_value.controller";
import { CreateValuesService } from "../services/values/create_value.service";
import { ValuesRepository } from "../repository/values/values_repository";
import { FindValuesService } from "../services/values/find_values.service";
import { FindValuesController } from "../controllers/find_values.controller";

const valuesRoutes = express.Router();
const valueRepository = new ValuesRepository();
const createValuesService = new CreateValuesService(valueRepository);
const createValueController = new CreateValueController(createValuesService);
const findValuesService = new FindValuesService(valueRepository);
const findValuesController = new FindValuesController(findValuesService);

valuesRoutes.post("/values", (req, res) =>
  createValueController.create(req, res)
);
valuesRoutes.get("/values", (req, res) => {
  findValuesController.find(req, res);
});

export { valuesRoutes };
