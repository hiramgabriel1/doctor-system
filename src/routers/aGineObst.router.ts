import { Router, Request, Response } from "express";
import { aGineObstController } from "../controllers/aGineObst.controller";

const controllerAGineObst = new aGineObstController()
const routerAGineObst = Router();
const path = '/antecedentesagineobst'

routerAGineObst.get(`${path}/:expedienteId`, (req: Request, res: Response) => {
    controllerAGineObst.getAGineObstByExpediente(req, res)
})

routerAGineObst.post(`${path}/new`, (req: Request, res: Response) => {
    controllerAGineObst.createAGineObst(req, res);
})

routerAGineObst.put(`${path}/edit/:expedienteId`, (req: Request, res: Response) => {
    controllerAGineObst.modifyAGineObst(req, res)
})

export default routerAGineObst