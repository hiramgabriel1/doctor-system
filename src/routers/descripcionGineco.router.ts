import { Request, Response, Router } from "express";
import { descripcionGineco } from "../controllers/descripcionGineco.controller";
const controllerDescipcionGineco = new descripcionGineco();

const routerDescipcionGineco = Router();


// todo: get by username
routerDescipcionGineco.get(
  `descripciongineco/:expedienteId`,
  (req: Request, res: Response) => {
    controllerDescipcionGineco.getDescipcionGinecobyExpediente(req, res);
  }
);

// todo: create a new patient
routerDescipcionGineco.post(
  `descripciongineco/new`,
  (req: Request, res: Response) => {
    controllerDescipcionGineco.createDescripcionGineco(req, res);
  }
);


routerDescipcionGineco.put(`descripciongineco/edit/:expedienteId`,(req:Request, res:Response )=>{
  controllerDescipcionGineco.modifyDescripcionGineco(req,res)
})



export default routerDescipcionGineco;
