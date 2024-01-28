import { Request, Response, Router } from "express";
import { descripcionGineco } from "../controllers/descripcionGineco.controller";
const controllerDescipcionGineco = new descripcionGineco();

const routerDescipcionGineco = Router();


// todo: get by username
routerDescipcionGineco.get(
  `descipcionGineco/:patient`,
  (req: Request, res: Response) => {
    controllerDescipcionGineco.getDescipcionGinecobyExpediente(req, res);
  }
);

// todo: create a new patient
routerDescipcionGineco.post(
  `descipcionGineco/new`,
  (req: Request, res: Response) => {
    controllerDescipcionGineco.createDescripcionGineco(req, res);
  }
);



export default routerDescipcionGineco;
