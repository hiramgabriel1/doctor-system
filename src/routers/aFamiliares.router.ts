import { Request, Response, Router } from "express";
import { aFamiliares } from "../controllers/aFamiliares.controller";

const controllerAFamiliares = new aFamiliares();
const routerAFamiliares = Router();
const path = "/antecedentesfamiliares";

routerAFamiliares.get(`${path}/:expedienteId`, (req: Request, res: Response) => {
    controllerAFamiliares.getbyExpendiente(req, res);
});


routerAFamiliares.post(`${path}/new`, (req: Request, res: Response) => {
    controllerAFamiliares.createAFamiliares(req, res)
})

routerAFamiliares.put(`${path}/antecedentesfamiliares/edit/:expedienteId`, (req: Request, res: Response) => {
    controllerAFamiliares.modifyAFamiliares(req, res)
})


export default routerAFamiliares