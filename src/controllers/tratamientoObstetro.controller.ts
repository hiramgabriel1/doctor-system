import { Request, Response } from "express";
import tratamientoObstetro from "../models/tratamientoObstetro.model";


export class tratamientoObstetroController{
    async getTratamientosByExpediente(req:Request, res:Response){
        try {
            const {expedienteID} = req.params;

            const tratamientos= await tratamientoObstetro.findAll({where :{expediente_id:expedienteID}})

            tratamientos
            ?res.send(200).json({messaje:tratamientos,details:true})
            :res.send(400).json({messaje:"no posee tratamientos",details:false})
        } catch (error) {
            console.log(error)
        }
    }
}