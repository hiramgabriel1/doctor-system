import { Request, Response, Router } from "express";
import { fichaIdentificacion } from "../controllers/fichaIdentificacion.controllers";

const controllerFichaIdentificacion = new fichaIdentificacion();
const routerFichaIdentificacion = Router();
const path = "/fichasidentificacion";

// todo: get all patients
routerFichaIdentificacion.get(`${path}/all`, (req: Request, res: Response) => {
  controllerFichaIdentificacion.getPatients(req, res);
});

// todo: get by username
//routerFichaIdentificacion.get(
//`${path}/filterName`,
//(req: Request, res: Response) => {
//controllerFichaIdentificacion.getPatientsByName(req, res);
//}
//);

// todo: show by filter
//routerFichaIdentificacion.get(
//  `${path}/filtered/:filter`,
//  (req: Request, res: Response) => {
//    controllerFichaIdentificacion.getPatientsFiltred(req, res);
//  }
//);

// todo: create a new patient
routerFichaIdentificacion.post(
  `${path}/create-patient`,
  (req: Request, res: Response) => {
    controllerFichaIdentificacion.createFichaIdentificacion(req, res);
  }
);

routerFichaIdentificacion.put(
  `${path}/edit/:expedienteId`,
  (req: Request, res: Response) => {
    controllerFichaIdentificacion.modifyFichaIdentificacion(req, res);
  }
);
export default routerFichaIdentificacion;
