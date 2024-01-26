import { Request , Response, Router } from "express";
import { fichaIdentificacion } from "../controllers/fichaIdentificacion.Controllers";


const controllerFichaIdentificacion= new fichaIdentificacion()
const routerFichaIdentificacion=  Router();


routerFichaIdentificacion.get('/fichasIdentificacion',(req:Request,res:Response)=>{
    controllerFichaIdentificacion.getPatients(req,res);
})


routerFichaIdentificacion.get('/fichasIdentificacion/filtedName',(req:Request,res:Response)=>{
    controllerFichaIdentificacion.getPatientsByName(req,res);
})


routerFichaIdentificacion.get('/fichasIdentificacion/filtred/:filter',(req:Request,res:Response)=>{
    controllerFichaIdentificacion.getPatientsFiltred(req,res);
})

routerFichaIdentificacion.post('/fichaIdentificacion/new',(req:Request, res:Response)=>{
    controllerFichaIdentificacion.createFichaIdentificacion(req,res)
})


export default routerFichaIdentificacion;