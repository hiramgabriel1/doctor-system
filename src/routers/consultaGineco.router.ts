import { Request, Response, Router } from "express";
import { consultaGineco } from "../controllers/consultaGineco.controller";


const consultGineco = new consultaGineco();
const routerGineco = Router();

// todo --> save consults & treatments
routerGineco.post("/consultagineco/new", (req: Request, res: Response) => {
    consultGineco.updateConsult(req, res)
})