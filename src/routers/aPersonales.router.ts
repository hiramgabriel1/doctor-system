import { Request, Response, Router } from "express";
import { aPersonales } from "../controllers/aPersonales.controller";


const controllerAPersonales = new aPersonales();
const routerAPersonales = Router();
const path = "/antecedentespersonales";

// todo: get by username
routerAPersonales.get(
  `${path}/:expedienteId`,
  (req: Request, res: Response) => {
    controllerAPersonales.getbyExpediente(req, res);
  }
);

// todo: create a new patient
routerAPersonales.post(
  `${path}/new`,
  (req: Request, res: Response) => {
    controllerAPersonales.createAPersonales(req, res);
  }
);

export default routerAPersonales;
