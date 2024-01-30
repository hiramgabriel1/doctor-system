import { Request, Response } from "express";
import fichaIdentificacionModel from "../models/fichaIdentificacion.model";

export class fichaIdentificacion {
  async getPatients(req: Request, res: Response) {
    try {
      const patients = await fichaIdentificacionModel.findAll();

      return patients.length > 0
        ? res.status(200).json({ messaje: patients, details: true })
        : res
            .status(400)
            .json({ messaje: "No existen pacientes", details: false });
    } catch (error) {
      console.log(error);
    }
  }

  async getPatientsByName(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const patients = await fichaIdentificacionModel.findOne(name);

      return patients === null
        ? res.status(404).json("usuario no encontrado")
        :  res.status(200).json({ response: "encontrado", details: patients });

        //@ts-ignore
       const patientsFiltered = patients.filter(patients.name.toLowerCase().includes(name.toLowerCase()));
       patientsFiltered
         ? res.status(200).json({ messaje: patientsFiltered, details: true })
         : res.status(400).json({
             messaje: "No existen pacientes con ese nombre o apellido",
             details: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getPatientsFiltred(req: Request, res: Response) {
    try {
      const { filter } = req.params;
      const patients = await fichaIdentificacionModel.findOne({
        where: { filter: filter },
      });

      patients
        ? res.status(200).json({ messaje: patients, details: true })
        : res.status(400).json({
            messaje: "No existen pacientes para este tipo de consilta",
            details: false,
          });
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


