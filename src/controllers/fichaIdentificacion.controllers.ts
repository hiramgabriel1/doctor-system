import { Request, Response } from "express";
import fichaIdentificacionModel from "../models/fichaIdentificacion.model";
import { validarEstadoGineco, validarEstadoObstetro } from "../validator/validateEstado";

export class fichaIdentificacion {
  async getPatients(req: Request, res: Response) {
    try {
      const patients = await fichaIdentificacionModel.findAll();

      patients.forEach((patient)=>{
        validarEstadoGineco(patient)
        validarEstadoObstetro(patient)
      })
        
      

      return patients.length > 0
        ? res.status(200).json({ messaje: patients, details: true })
        : res
            .status(400)
            .json({ messaje: "No existen pacientes", details: false });
    } catch (error) {
      res.status(500).json({ errorResponse: error })        
    }
  }

  
  async getPatientsByExpedient(req: Request, res: Response) {
    try {
      const {expedienteId} = req.body
            
            const fichaIdentificacion = await fichaIdentificacionModel.findAll({
                where:{
                    expediente_id:expedienteId
                }
            })

            fichaIdentificacion
            ? res.status(200).json({message:fichaIdentificacion, details:true})
            : res.status(400).json({message:"error internal", details:true})
      
    } catch (error) {
      res.status(500).json({ errorResponse: error })        
    }
  }

  async createFichaIdentificacion(req: Request, res: Response) {
    try {
      const {
        expediente,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        edad,
        fechaIngreso,
        estadoCivil,
        calle,
        colonia,
        municipio,
        telefono,
        celular,
        tipo,
        informacionAdicional,
      } = req.body;

      const dataUser = {
        expediente,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        edad,
        fechaIngreso,
        estadoCivil,
        calle,
        colonia,
        municipio,
        telefono,
        celular,
        tipo,
        informacionAdicional,
        estadoConsultaObstetro:false,
        estadoConsultaGineco:false
    
      };

      const createFicha = await fichaIdentificacionModel.create({ dataUser });

      return createFicha
        ? res
            .send(200)
            .json({ messaje: "user created" + dataUser, details: true })
        : res.status(400).json({ message: "Error al crear el user" });
    } catch (error) {
      res.status(500).json({ errorResponse: error })        
    }
  }


  
  async modifyFichaIdentificacion(req:Request, res:Response){
    try{
      const {expedienteId} = req.params
      const data= req.body
      //revisar datos vacios
      const ConsultUpdate= await fichaIdentificacionModel.update(data,{
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


