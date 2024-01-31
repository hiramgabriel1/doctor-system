import { Request, Response, Router } from "express";
import { fisicaGinecoController } from "../controllers/fisicaGineco.controller";



const fisicagineco = new fisicaGinecoController();
const routerGineco = Router();
const path = '/fisicagineco'

// todo --> save consults & treatments
routerGineco.post(`${path}/new`, (req: Request, res: Response) => {
    fisicagineco.createFisicaGineco(req,res)
})

routerGineco.put(`${path}/:expedienteId`, (req: Request, res: Response) => {
    // llamar al controller
    fisicagineco.getFisicaGienoByExpedient(req, res)
})