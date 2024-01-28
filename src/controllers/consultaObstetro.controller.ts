import { Request, Response } from "express";
import consultaObstetroModel from "../models/consultaObstetro.models";

export class consultaObstetro {
  async getConsultasObstetro(req: Request, res: Response) {
    try {
      const consultasObstero = await consultaObstetroModel.findAll();

      return consultasObstero.length > 0
        ? res.status(200).json({ messaje: consultasObstero, details: true })
        : res
            .status(400)
            .json({ messaje: "No existen consultas", details: false });
    } catch (error) {
      console.log(error);
    }
  }

  async getAntecedentesPatients(req: Request, res: Response) {
    try {
      const { patients } = req.params;
      const antecedentes= await consultaObstetroModel.findAll(); //acomodar                                                                                     

        antecedentes
        ? res.status(200).json({message:antecedentes, details:true})
        :res.status(400).json({message:"the user has no background", details:false})

      
    } catch (error) {
      console.log(error);
    }
  }


  async createConsultaObstetro(req: Request, res: Response) {
    try {
      const {expediente,no,fecha,mareos,nauseas,vomito,flujo,sxUrin,mFetale,otros}= req.body

      const data = {
        expediente,
        no,
        fecha,
        mareos,
        nauseas,
        vomito,
        flujo,
        sxUrin,
        mFetale,
        otros,
      };

      const created= await consultaObstetroModel.create(data)

      created
      ? res.status(200).json({message:'consult created' +data, details:true})
      :res.status(400).json({message:'query could not be created', datails:false});
    } catch (error) {
      console.log(error);
    }
  }
}

