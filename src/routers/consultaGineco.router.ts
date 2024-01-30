import { Request, Response, Router } from "express";
import { consultaGineco } from "../controllers/consultaGineco.controller";


const consultGineco = new consultaGineco();
const routerGineco = Router();
const path = '/consultagineco'

// todo --> save consults & treatments
routerGineco.post(`${path}/new`, (req: Request, res: Response) => {
    consultGineco.updateConsult(req, res)
})

routerGineco.put(`${path}/edit/:expedienteId`, (req: Request, res: Response) => {
    // llamar al controller
})