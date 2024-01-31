import { Request, Response } from "express";
import tratamientoObstetro from "../models/tratamientoObstetro.model";


export class tratamientoObstetroController{
    async getTratamientosByExpediente(req:Request, res:Response){
        try {
            const {expedienteId} = req.params;

            const tratamientos= await tratamientoObstetro.findAll({where :{expediente_id:expedienteId}})

            tratamientos
            ?res.status(200).json({messaje:tratamientos,details:true})
            :res.status(400).json({messaje:"no posee tratamientos",details:false})
        } catch (error) {
            res.status(500).json({ errorResponse: error })        
        }
    }

    
  async modifyTratamientosObstetro(req:Request, res:Response){
    try{
      const {expedienteId} = req.params
      const data= req.body
      //revisar datos vacios
      const ConsultUpdate= await tratamientoObstetro.update(data,{
        where:{
          expediente_id :expedienteId
        },
        returning:true
      });

      ConsultUpdate
      ?res.send(200).json({message:ConsultUpdate, details:true})
      :res.send(400).json({message:'internal error', details:false})


    }catch(error){
      res.json(500).json({errorResponse:error})
    }
  }
}