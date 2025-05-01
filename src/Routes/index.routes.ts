import express from "express";
import { valuesRoutes } from "./values.routes";

const routes = (app: any) => {
  app.use(express.json(), valuesRoutes);
};
export { routes };
