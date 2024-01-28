import { Request, Response } from "express";
import aPersonalesModel from "../models/aPersonales.model";

export class aPersonales {
  async getbyExpediente(req:Request, res:Response){
    try{
        const{expedienteId} = req.query
        
        const aPersonalesPatient = await aPersonalesModel.findAll({
            where:{
              expediente_id:expedienteId
            }
        });

        aPersonalesPatient
        ?res.send(200).json({messaje: aPersonalesPatient, details:true})
        : res.send(400).json({messaje: 'el paciente  no tiene antecedentes personales', details:false});

    }catch(error){
        console.log(error)
    }
  }

  async createAPersonales(req: Request, res: Response) {
    try{
        const {
            expediente_id,
            hipertension,
            tx_hipertension,
            endocrinos,
            tx_endocrinos,
            alergias,
            tx_alergias,
            transfuciones,
            tx_tranfuciones,
            otros,
            tx_otros,
          }= req.body;

          const dataAPersonales={
            expediente_id,
            hipertension,
            tx_hipertension,
            endocrinos,
            tx_endocrinos,
            alergias,
            tx_alergias,
            transfuciones,
            tx_tranfuciones,
            otros,
            tx_otros,
          }

          const created= await aPersonalesModel.create({dataAPersonales})

          created
          ? res.status(200).json({message:'antecedentes personales creados' +dataAPersonales , details:true})
          : res.status(400).json({message:'internal server error', details:false})
    }catch(error){
        console.log(error)
    }
  }
}
