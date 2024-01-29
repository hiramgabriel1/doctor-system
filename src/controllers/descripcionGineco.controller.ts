import {Request, Response, Express} from 'express'
import descripcionGinecoModel from '../models/descripcionGineco.model'

export class descripcionGineco{
    async getDescipcionGinecobyExpediente(req:Request, res:Response){
        try{
            const {expedienteId} = req.body
            
            const descripcionGineco = await descripcionGinecoModel.findAll({
                where:{
                    expediente_id:expedienteId
                }
            })

            descripcionGineco
            ? res.status(200).json({message:descripcionGineco, details:true})
            : res.status(400).json({message:"El usuario con expediente"+ expedienteId +"no tiene descripciones ginecológicas"})

        }catch(error){
            console.log(error)
        }
    }


    async createDescripcionGineco(req:Request,res:Response){
        const {expediente_id,us,motivo,padecimientos}= req.body
        
        const data={
            expediente_id,
            us,
            motivo,
            padecimientos
        }
        
        const created = await descripcionGinecoModel.create({data});

        created
        ? res.status(200).json({message:created, details:true})
        :res.status(400).json({message:"error al crear el recurso", details:false})
    }
}
