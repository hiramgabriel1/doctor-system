import { Router, Request, Response } from "express";
import { aGineObstController } from "../controllers/aGineObst.controller";

const controllerAGineObst = new aGineObstController()
const routerAGineObst = Router();
const path = '/agineobst'

routerAGineObst.get(`${path}/antecedentes/:expedienteId`, (req: Request, res: Response) => {
    controllerAGineObst.getAGineObstByExpediente(req, res)
})

routerAGineObst.post(`${path}/antecedentesgineobst/new`, (req: Request, res: Response) => {
    controllerAGineObst.createAGineObst(req, res);
})

routerAGineObst.put(`${path}/antecedentesgineobst/edit/:expedienteId`, (req: Request, res: Response) => {
    controllerAGineObst.modifyAGineObst(req, res)
})

export default routerAGineObst