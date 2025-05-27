import express from "express";
import { valuesRoutes } from "./values.routes";
import { objectiveMonthRoutes } from "./objective_month.routes";
import { objectiveroutes } from "./objective.routes";

const routes = (app: any) => {
  app.use(express.json(), valuesRoutes, objectiveMonthRoutes, objectiveroutes);
};
export { routes };
