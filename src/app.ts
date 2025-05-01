import "reflect-metadata";
import express from "express";
import cors from "cors";
import { knexInstance } from "./config/db/configDb";
import { routes } from "./Routes/index.routes";

export const app = express();
app.use(cors());
routes(app);
knexInstance;

app.listen(3000, () => console.log("API rodando na porta 3000"));
