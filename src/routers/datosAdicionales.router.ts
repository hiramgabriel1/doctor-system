import { Request, Response, Router } from "express";
import { datosAdicionales } from "../controllers/datosAdicionales.controller";


const controllerDatosAdicionales = new datosAdicionales();
const routerDatosAdicionales = Router();
const path = "/datosadicionales";

routerDatosAdicionales.get(`${path}/:expedienteId`, (req: Request, res: Response) => {
    controllerDatosAdicionales.getDatosAdicionales(req, res)
})

routerDatosAdicionales.post(`${path}/new`, (req: Request, res: Response) => {
    controllerDatosAdicionales.createDatosAdicionales(req, res)
})

routerDatosAdicionales.put(`${path}/edit/:expedienteId`,(req:Request, res:Response )=>{
    controllerDatosAdicionales.modifyDatosAdicionales(req,res)
})