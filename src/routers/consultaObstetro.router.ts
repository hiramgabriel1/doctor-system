import { Request, Response, Router } from "express";
import { consultaObstetro } from "../controllers/consultaObstetro.controller";

const controllerFichaIdentificacion = new consultaObstetro();
const routerConsultaObstetro = Router();
const path = "/consultaObstetro";

// todo: get all patients
routerConsultaObstetro.get(`${path}/all`, (req: Request, res: Response) => {
  controllerFichaIdentificacion.getConsultasObstetro(req, res);
});

// todo: get by username
routerConsultaObstetro.get(
  `${path}/antecedentes/:expedienteId`,
  (req: Request, res: Response) => {
    controllerFichaIdentificacion.getAntecedentesPatients(req, res);
  }
);

// todo: create a new patient
routerConsultaObstetro.post(
  `${path}/new`,
  (req: Request, res: Response) => {
    controllerFichaIdentificacion.createConsultaObstetro(req, res);
  }
);

export default routerConsultaObstetro;
